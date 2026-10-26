// next.config.ts  (or next.config.js / .mjs, same shape)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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