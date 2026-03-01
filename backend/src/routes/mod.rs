use axum::{
    routing::{get, post},
    Router,
    middleware,
};
use crate::AppState;
use crate::handlers::{auth, wallet, cashier, admin};
use crate::auth::middleware::auth_middleware;

pub fn create_router(state: AppState) -> Router {
    let auth_routes = Router::new()
        .route("/register", post(auth::register))
        .route("/login", post(auth::login));

    let wallet_routes = Router::new()
        .route("/", get(wallet::get_wallet))
        .route("/add-funds", post(wallet::add_funds))
        .layer(middleware::from_fn(auth_middleware));

    let cashier_routes = Router::new()
        .route("/exchange-chips", post(cashier::exchange_chips))
        .route("/redeem-chips", post(cashier::redeem_chips))
        .layer(middleware::from_fn(auth_middleware));

    let admin_routes = Router::new()
        .route("/users", get(admin::get_all_users))
        .route("/transactions", get(admin::get_all_transactions))
        .layer(middleware::from_fn(auth_middleware));

    Router::new()
        .nest("/api/auth", auth_routes)
        .nest("/api/wallet", wallet_routes)
        .nest("/api/cashier", cashier_routes)
        .nest("/api/admin", admin_routes)
        .with_state(state)
}
