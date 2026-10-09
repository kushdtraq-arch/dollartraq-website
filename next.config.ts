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
};

export default nextConfig;