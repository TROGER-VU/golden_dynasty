use serde::{Deserialize, Serialize};
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, Serialize, Deserialize)]
pub struct Transaction {
    pub id: Uuid,
    pub user_id: Uuid,
    pub r#type: String, // fund_add, chip_exchange, cash_out
    pub amount: f64,
    pub status: String, // pending, completed, failed
    pub created_at: Option<DateTime<Utc>>,
}
