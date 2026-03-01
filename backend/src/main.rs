mod auth;
mod handlers;
mod models;
mod routes;

use axum::routing::get;
use dotenvy::dotenv;
use routes::create_router;
use reqwest::Client;
use std::net::SocketAddr;
use tower_http::cors::CorsLayer;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[derive(Clone)]
pub struct AppState {
    pub supabase_url: String,
    pub supabase_anon_key: String,
    pub http_client: Client,
}

#[tokio::main]
async fn main() {
    dotenv().ok();

    // Initialize tracing
    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::new(
            std::env::var("RUST_LOG").unwrap_or_else(|_| "backend=debug".into()),
        ))
        .with(tracing_subscriber::fmt::layer())
        .init();

    let supabase_url = std::env::var("SUPABASE_URL").expect("SUPABASE_URL must be set");
    let supabase_anon_key = std::env::var("SUPABASE_ANON_KEY").expect("SUPABASE_ANON_KEY must be set");

    let state = AppState {
        supabase_url,
        supabase_anon_key,
        http_client: Client::new(),
    };

    // Build our application with routes
    let app = create_router(state)
        .layer(CorsLayer::permissive())
        .route("/health", get(health_check));

    // Run it with hyper
    let port = std::env::var("PORT").unwrap_or_else(|_| "3000".to_string());
    let addr = format!("0.0.0.0:{}", port).parse::<SocketAddr>().unwrap();
    
    tracing::debug!("listening on {}", addr);
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn health_check() -> &'static str {
    "Golden Dynasty Backend is healthy!"
}
