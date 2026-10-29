// next.config.ts  (or next.config.js / .mjs, same shape)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/; frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/recaptcha/; connect-src 'self' https://adminapi.dollartraq.com https://staggingapi.dollartraq.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-ancestors 'none'; upgrade-insecure-requests"
                    },
                ],
            },
        ];
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dollartraq.s3.us-east-2.amazonaws.com",
                pathname: "/blog-images/**",
            },
        ],
    },

    // Old URLs that now 404 -> closest current page
    async redirects() {
        return [
            { source: "/about", destination: "/company/about", permanent: true },
            { source: "/careers", destination: "/company/about", permanent: true },
            { source: "/faqs", destination: "/company/faqs", permanent: true },
            { source: "/features", destination: "/product/platform-overview", permanent: true },
            { source: "/all-features", destination: "/product/platform-overview", permanent: true },
            { source: "/dashboard-analytics", destination: "/product/platform-overview", permanent: true },
            { source: "/api-webhooks", destination: "/product/integrations", permanent: true },
            { source: "/learn-more", destination: "/demo", permanent: true },
            { source: "/case-studies", destination: "/blogs", permanent: true },
            { source: "/resources", destination: "/blogs", permanent: true },
            { source: "/videos-webinars", destination: "/blogs", permanent: true },
            { source: "/whitepapers-ebooks", destination: "/blogs", permanent: true },
            { source: "/retail", destination: "/blogs", permanent: true },
            { source: "/consumers", destination: "/", permanent: true },
            { source: '/blog', destination: '/blogs', permanent: true },
            { source: '/blog/:slug', destination: '/blogs/:slug', permanent: true },
        ];
    },
};

export default nextConfig;