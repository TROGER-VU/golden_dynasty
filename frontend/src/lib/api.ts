export const API_URL = "http://localhost:3000/api";

export const fetchWithAuth = async (endpoint: string, options: RequestInit = {}) => {
    const token = localStorage.getItem("token");

    const headers = new Headers(options.headers || {});
    if (token) {
        headers.set("Authorization", `Bearer ${token}`);
    }

    // Default to JSON unless it's FormData
    if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
        headers.set("Content-Type", "application/json");
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.text();
        throw new Error(errorData || "An error occurred");
    }

    return response.json();
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
};
