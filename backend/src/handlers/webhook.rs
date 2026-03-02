use axum::{
    extract::{Form, State},
    http::StatusCode,
    response::IntoResponse,
};
use std::collections::HashMap;
use crate::AppState;

pub async fn twilio_whatsapp(
    State(_state): State<AppState>,
    Form(form): Form<HashMap<String, String>>,
) -> impl IntoResponse {
    let from = form.get("From").map(|s| s.as_str()).unwrap_or("Unknown");
    let body = form.get("Body").map(|s| s.as_str()).unwrap_or("No body");
    
    // Log incoming WhatsApp message for debugging
    tracing::info!("Received WhatsApp message from {}: {}", from, body);

    let twiml = r#"<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Message>Welcome! Please register at app.goldendynasty.club to continue.</Message>
</Response>"#;

    (
        StatusCode::OK,
        [(axum::http::header::CONTENT_TYPE, "text/xml")],
        twiml,
    )
}
