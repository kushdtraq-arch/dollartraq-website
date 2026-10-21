import type { MetadataRoute } from "next";

import { API_BASE_URL, API_ENDPOINTS, API_HEADERS } from "@/config/api";

const baseUrl = "https://www.dollartraq.com";

// Re-generate the sitemap at most once an hour so new blog posts show up
export const revalidate = 3600;

interface ApiBlogSummary {
    slug: string;
    publishAt: string;
    updatedAt: string;
}

async function getBlogEntries(): Promise<MetadataRoute.Sitemap> {
    try {
        const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.blogs}`, {
            headers: API_HEADERS,
            next: { revalidate: 3600 },
        });
        if (!res.ok) throw new Error(`status ${res.status}`);

        const json = await res.json();
        if (json.status !== "success" || !Array.isArray(json.data)) {
            throw new Error("unexpected response shape");
        }

        return (json.data as ApiBlogSummary[])
            .filter((b) => b.slug)
            .map((b) => ({
                url: `${baseUrl}/blogs/${encodeURIComponent(b.slug)}`,
                lastModified: new Date(b.updatedAt || b.publishAt),
                changeFrequency: "weekly",
                priority: 0.7,
            }));
    } catch (err) {
        // Don't take the whole sitemap down if the blog API is unavailable
        console.error("Sitemap blog fetch failed:", err);
        return [];
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
        "/solutions",
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
        "/privacy-policy",
        "/terms-of-service",
        "/privacy-request",
        "/dpa",
        "/subprocessors",
    ];

    const staticEntries: MetadataRoute.Sitemap = pages.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date("2026-09-16"),
        changeFrequency: "monthly",
        priority: path === "" ? 1.0 : 0.8,
    }));

    return [...staticEntries, ...(await getBlogEntries())];
}
