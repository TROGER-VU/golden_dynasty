use axum::{
    extract::{State, Extension},
    http::StatusCode,
    Json,
};
use serde::Deserialize;
use serde_json::json;
use crate::auth::Claims;
use crate::models::wallet::Wallet;
use crate::models::transaction::Transaction;
use crate::AppState;

#[derive(Debug, Deserialize)]
pub struct AddFundsRequest {
    pub amount: f64,
}

pub async fn get_wallet(
    State(state): State<AppState>,
    Extension(claims): Extension<Claims>,
) -> Result<Json<Wallet>, (StatusCode, String)> {
    let res = state.http_client
        .get(&format!("{}/rest/v1/wallets?user_id=eq.{}&select=*", state.supabase_url, claims.sub))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Database request failed".to_string()));
    }

    let mut wallets = res.json::<Vec<Wallet>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Database response error".to_string()))?;

    let wallet = wallets.pop()
        .ok_or((StatusCode::NOT_FOUND, "Wallet not found".to_string()))?;

    Ok(Json(wallet))
}

pub async fn add_funds(
    State(state): State<AppState>,
    Extension(claims): Extension<Claims>,
    Json(payload): Json<AddFundsRequest>,
) -> Result<Json<Wallet>, (StatusCode, String)> {
    if payload.amount <= 0.0 {
        return Err((StatusCode::BAD_REQUEST, "Amount must be positive".to_string()));
    }

    // 1. Get current wallet to know the balance
    let get_res = state.http_client
        .get(&format!("{}/rest/v1/wallets?user_id=eq.{}&select=*", state.supabase_url, claims.sub))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !get_res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to fetch wallet".to_string()));
    }

    let mut wallets = get_res.json::<Vec<Wallet>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to parse wallet".to_string()))?;

    let current_wallet = wallets.pop()
        .ok_or((StatusCode::NOT_FOUND, "Wallet not found".to_string()))?;

    let new_balance = current_wallet.balance + payload.amount;

    // 2. Update wallet balance
    let patch_payload = json!({
        "balance": new_balance
    });

    let patch_res = state.http_client
        .patch(&format!("{}/rest/v1/wallets?user_id=eq.{}&select=*", state.supabase_url, claims.sub))
        .header("apikey", &state.supabase_anon_key)
        .header("Authorization", format!("Bearer {}", state.supabase_anon_key))
        .header("Content-Type", "application/json")
        .header("Prefer", "return=representation")
        .json(&patch_payload)
        .send()
        .await
        .map_err(|e| (StatusCode::INTERNAL_SERVER_ERROR, e.to_string()))?;

    if !patch_res.status().is_success() {
        return Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to update wallet balance".to_string()));
    }

    let mut updated_wallets = patch_res.json::<Vec<Wallet>>().await
        .map_err(|_| (StatusCode::INTERNAL_SERVER_ERROR, "Failed to parse updated wallet".to_string()))?;

    let updated_wallet = updated_wallets.pop()
        .ok_or((StatusCode::INTERNAL_SERVER_ERROR, "No returned wallet representation".to_string()))?;

    // 3. Record transaction
    let new_transaction = json!({
        "user_id": claims.sub,
        "type": "fund_add",
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

    Ok(Json(updated_wallet))
}
