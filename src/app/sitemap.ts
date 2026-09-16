import type { MetadataRoute } from "next";

const baseUrl = "https://www.dollartraq.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        "",
        "/product",
        "/product/carrier-vetting",
        "/product/carrier-onboarding",
        "/product/fraud-prevention",
        "/product/coi-verification",
        "/product/load-tracking",
        "/product/dt-pay",
        "/product/platform-overview",
        "/product/integrations",
        "/ai-agents",
        "/ai-agents/sentinel",
        "/ai-agents/rate",
        "/ai-agents/tracker",
        "/ai-agents/vault",
        "/ai-agents/fleetra",
        "/solutions/freight-brokers",
        "/solutions/3pls-forwarders",
        "/solutions/shippers",
        "/solutions/carriers",
        "/company/about",
        "/company/security-trust",
        "/company/faqs",
        "/pricing",
        "/compare",
        "/demo",
        "/contact",
        "/blogs",
        "/whitepapers-ebooks",
        "/videos-webinars",
        "/all-features",
        "/api-webhooks",
        "/privacy-policy",
        "/terms-of-service",
        "/blog/final-mile",
    ];

    return pages.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date("2026-09-16"),
        changeFrequency: "monthly",
        priority: path === "" ? 1.0 : 0.8,
    }));
}