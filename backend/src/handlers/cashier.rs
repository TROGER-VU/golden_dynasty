use axum::{
    extract::{State, Extension},
    http::StatusCode,
    Json,
};
use serde::Deserialize;
use serde_json::json;
use uuid::Uuid;
use crate::auth::Claims;
use crate::models::wallet::Wallet;
use crate::AppState;

#[derive(Debug, Deserialize)]
pub struct ExchangeRequest {
    pub user_id: Uuid,
    pub amount: f64,
}

pub async fn exchange_chips(
    State(state): State<AppState>,
    Extension(claims): Extension<Claims>,
    Json(payload): Json<ExchangeRequest>,
) -> Result<StatusCode, (StatusCode, String)> {
    if claims.role != "cashier" && claims.role != "admin" {
        return Err((StatusCode::FORBIDDEN, "Only cashiers can perform this action".to_string()));
    }

    // 1. Check wallet balance
    let get_res = state.http_client
        .get(&format!("{}/rest/v1/wallets?user_id=eq.{}&select=*", state.supabase_url, payload.user_id))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !get_res.status().is_success() {
        return Err((StatusCode::BAD_REQUEST, "User wallet not found".to_string()));
    }

    let mut wallets = get_res.json::<Vec<Wallet>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to parse wallet".to_string()))?;

    let current_wallet = wallets.pop()
        .ok_or((StatusCode::BAD_REQUEST, "User wallet not found".to_string()))?;

    if current_wallet.balance < payload.amount {
        return Err((StatusCode::BAD_REQUEST, "Insufficient funds in user wallet".to_string()));
    }

    // 2. Deduct from wallet
    let new_balance = current_wallet.balance - payload.amount;
    let patch_payload = json!({
        "balance": new_balance
    });

    let patch_res = state.http_client
        .patch(&format!("{}/rest/v1/wallets?user_id=eq.{}&select=*", state.supabase_url, payload.user_id))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .header("Content-Type", "application/json")
        .json(&patch_payload)
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !patch_res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to update wallet balance".to_string()));
    }

    // 3. Record transaction
    let new_transaction = json!({
        "user_id": payload.user_id,
        "type": "chip_exchange",
        "amount": payload.amount,
        "status": "completed"
    });

    let _tx_res = state.http_client
        .post(&format!("{}/rest/v1/transactions", state.supabase_url))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .header("Content-Type", "application/json")
        .json(&new_transaction)
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, format!("Failed to record transaction: {}", e)))?;

    Ok(StatusCode::OK)
}

pub async fn redeem_chips(
    State(state): State<AppState>,
    Extension(claims): Extension<Claims>,
    Json(payload): Json<ExchangeRequest>,
) -> Result<StatusCode, (StatusCode, String)> {
    if claims.role != "cashier" && claims.role != "admin" {
        return Err((StatusCode::FORBIDDEN, "Only cashiers can perform this action".to_string()));
    }

    // 1. Get current balance
    let get_res = state.http_client
        .get(&format!("{}/rest/v1/wallets?user_id=eq.{}&select=*", state.supabase_url, payload.user_id))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !get_res.status().is_success() {
        return Err((StatusCode::BAD_REQUEST, "User wallet not found".to_string()));
    }

    let mut wallets = get_res.json::<Vec<Wallet>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to parse wallet".to_string()))?;

    let current_wallet = wallets.pop()
        .ok_or((StatusCode::BAD_REQUEST, "User wallet not found".to_string()))?;

    // 2. Add back to wallet
    let new_balance = current_wallet.balance + payload.amount;
    let patch_payload = json!({
        "balance": new_balance
    });

    let patch_res = state.http_client
        .patch(&format!("{}/rest/v1/wallets?user_id=eq.{}&select=*", state.supabase_url, payload.user_id))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .header("Content-Type", "application/json")
        .json(&patch_payload)
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !patch_res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to update wallet balance".to_string()));
    }

    // 3. Record transaction
    let new_transaction = json!({
        "user_id": payload.user_id,
        "type": "cash_out",
        "amount": payload.amount,
        "status": "completed"
    });

    let _tx_res = state.http_client
        .post(&format!("{}/rest/v1/transactions", state.supabase_url))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .header("Content-Type", "application/json")
        .json(&new_transaction)
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, format!("Failed to record transaction: {}", e)))?;

    Ok(StatusCode::OK)
}
