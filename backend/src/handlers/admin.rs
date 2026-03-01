use axum::{
    extract::{State, Extension},
    http::StatusCode,
    Json,
};
use crate::auth::Claims;
use crate::models::user::User;
use crate::models::transaction::Transaction;
use crate::AppState;

pub async fn get_all_users(
    State(state): State<AppState>,
    Extension(claims): Extension<Claims>,
) -> Result<Json<Vec<User>>, (StatusCode, String)> {
    if claims.role != "admin" {
        return Err((StatusCode::FORBIDDEN, "Admin access required".to_string()));
    }

    let res = state.http_client
        .get(&format!("{}/rest/v1/users?select=*", state.supabase_url))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Database request failed".to_string()));
    }

    let users = res.json::<Vec<User>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Database response error".to_string()))?;

    Ok(Json(users))
}

pub async fn get_all_transactions(
    State(state): State<AppState>,
    Extension(claims): Extension<Claims>,
) -> Result<Json<Vec<Transaction>>, (StatusCode, String)> {
    if claims.role != "admin" {
        return Err((StatusCode::FORBIDDEN, "Admin access required".to_string()));
    }

    let res = state.http_client
        .get(&format!("{}/rest/v1/transactions?select=*&order=created_at.desc", state.supabase_url))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Database request failed".to_string()));
    }

    let transactions = res.json::<Vec<Transaction>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Database response error".to_string()))?;

    Ok(Json(transactions))
}
