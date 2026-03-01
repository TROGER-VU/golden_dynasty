use axum::{
    extract::Request,
    http::{header, StatusCode},
    middleware::Next,
    response::Response,
};
use crate::auth::decode_jwt;

pub async fn auth_middleware(
    request: Request,
    next: Next,
) -> Result<Response, StatusCode> {
    let auth_header = request.headers()
        .get(header::AUTHORIZATION)
        .and_then(|h| h.to_str().ok())
        .and_then(|h| h.strip_prefix("Bearer "))
        .ok_or(StatusCode::UNAUTHORIZED)?;

    let claims = decode_jwt(auth_header).map_err(|_| StatusCode::UNAUTHORIZED)?;

    // Store claims in request extensions for handlers to use
    let mut request = request;
    request.extensions_mut().insert(claims);

    Ok(next.run(request).await)
}
