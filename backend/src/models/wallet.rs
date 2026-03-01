use serde::{Deserialize, Serialize};
use uuid::Uuid;
use chrono::{DateTime, Utc};

#[derive(Debug, Serialize, Deserialize)]
pub struct Wallet {
    pub id: Uuid,
    pub user_id: Uuid,
    pub balance: f64, // Using f64 for simplicity, though Decimal is better for production
    pub updated_at: Option<DateTime<Utc>>,
}
