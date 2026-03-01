use axum::{
    extract::State,
    http::StatusCode,
    Json,
};
use bcrypt::{hash, verify, DEFAULT_COST};
use crate::models::user::{User, RegisterRequest, LoginRequest, AuthResponse, UserResponse};
use crate::auth::create_jwt;
use crate::AppState;
use serde_json::json;

pub async fn register(
    State(state): State<AppState>,
    Json(payload): Json<RegisterRequest>,
) -> Result<(StatusCode, Json<AuthResponse>), (StatusCode, String)> {
    let password_hash = hash(payload.password, DEFAULT_COST)
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to hash password".to_string()))?;

    // Prepare JSON body for Supabase REST API
    let new_user = json!({
        "name": payload.name,
        "email": payload.email,
        "mobile": payload.mobile,
        "aadhaar_number": payload.aadhaar_number,
        "password_hash": password_hash,
    });

    let res = state.http_client
        .post(&format!("{}/rest/v1/users", state.supabase_url))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .header("Content-Type", "application/json")
        .header("Prefer", "return=representation")
        .json(&new_user)
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !res.status().is_success() {
        return Err((StatusCode::BAD_REQUEST, "Failed to register user to database".to_string()));
    }

    let mut returned_users = res.json::<Vec<User>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to parse database response".to_string()))?;

    let user = returned_users.pop()
        .ok_or((StatusCode::INTERNAL_SERVER_ERROR, "No user returned from insert".to_string()))?;

    // Create wallet for the user using REST
    let new_wallet = json!({
        "user_id": user.id
    });

    let wallet_res = state.http_client
        .post(&format!("{}/rest/v1/wallets", state.supabase_url))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .header("Content-Type", "application/json")
        .json(&new_wallet)
        .send()
        .await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to create wallet network request".to_string()))?;

    if !wallet_res.status().is_success() {
         return Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to create wallet in database".to_string()));
    }

    let token = create_jwt(user.id, &user.role)
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to create token".to_string()))?;

    Ok((StatusCode::CREATED, Json(AuthResponse {
        token,
        user: UserResponse {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    })))
}

pub async fn login(
    State(state): State<AppState>,
    Json(payload): Json<LoginRequest>,
) -> Result<Json<AuthResponse>, (StatusCode, String)> {
    let res = state.http_client
        .get(&format!("{}/rest/v1/users?email=eq.{}", state.supabase_url, payload.email))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Database request failed".to_string()));
    }

    let mut users = res.json::<Vec<User>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Database response error".to_string()))?;

    let user = match users.pop() {
        Some(u) => u,
        None => return Err((StatusCode::UNAUTHORIZED, "Invalid credentials".to_string())),
    };

    let valid = verify(payload.password, &user.password_hash)
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to verify password".to_string()))?;

    if !valid {
        return Err((StatusCode::UNAUTHORIZED, "Invalid credentials".to_string()));
    }

    let token = create_jwt(user.id, &user.role)
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to create token".to_string()))?;

    Ok(Json(AuthResponse {
        token,
        user: UserResponse {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    }))
}
