// Single place to change the backend URL.
// Set in .env (or .env.local):
//   NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com
//   NEXT_PUBLIC_ASSET_BASE_URL=https://your-cdn-or-api-domain.com   (optional)

const stripTrailingSlash = (url: string) => url.replace(/\/+$/, "");

const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!apiBase) {
    throw new Error(
        "Missing NEXT_PUBLIC_API_BASE_URL. Add it to .env or .env.local and restart the dev server."
    );
}

export const API_BASE_URL = stripTrailingSlash(apiBase);

// Where relative image paths (e.g. "/og/blog/xyz.jpg") are served from.
// Defaults to the API host when NEXT_PUBLIC_ASSET_BASE_URL is not set.
export const ASSET_BASE_URL = stripTrailingSlash(
    process.env.NEXT_PUBLIC_ASSET_BASE_URL || API_BASE_URL
);

export const API_ENDPOINTS = {
    blogs: "/api/blogs",
} as const;

export const API_HEADERS: HeadersInit = {
    Accept: "application/json",
    "ngrok-skip-browser-warning": "true",
};