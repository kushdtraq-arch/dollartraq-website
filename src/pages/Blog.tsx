"use client";
import React, { useEffect, useMemo, useState } from "react";
import SectionIntro from "@/components/common/SectionIntro";
import BlogGridSection, { BlogPost } from "@/components/sections/BlogGridSection";
import {
    API_BASE_URL,
    API_ENDPOINTS,
    API_HEADERS,
    ASSET_BASE_URL,
} from "@/config/api";

/* ---------- API types + mapping ---------- */

interface ApiBlog {
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    tags: string[];
    ogImage: string | null;
    author: { name: string; linkedin: string | null };
    publishAt: string;
    updatedAt: string;
    readingTimeMinutes: number;
}

type ListPost = BlogPost & { tags: string[]; publishAt: string };

const FALLBACK_IMAGE = "/images/blog.png";
const SORT_OPTIONS = ["Newest", "Oldest"];

function resolveImage(src: string | null) {
    if (!src) return FALLBACK_IMAGE;
    if (/^https?:\/\//i.test(src)) return src;
    return `${ASSET_BASE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function toListPost(b: ApiBlog): ListPost {
    return {
        id: b.slug,
        image: resolveImage(b.ogImage),
        category: b.category,
        date: formatDate(b.publishAt),
        title: b.title,
        excerpt: b.excerpt,
        author: b.author?.name,
        href: `/blogs/${b.slug}`,
        tags: b.tags ?? [],
        publishAt: b.publishAt,
    };
}

/* ---------- Page ---------- */

export default function Blog() {
    const [posts, setPosts] = useState<ListPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState(SORT_OPTIONS[0]);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const res = await fetch(`${API_BASE_URL}${API_ENDPOINTS.blogs}`, {
                    headers: API_HEADERS,
                    signal: controller.signal,
                });
                if (!res.ok) throw new Error(`Request failed (${res.status})`);

                const json = await res.json();
                if (json.status !== "success" || !Array.isArray(json.data)) {
                    throw new Error("Unexpected response");
                }
                setPosts((json.data as ApiBlog[]).map(toListPost));
            } catch (err) {
                if ((err as Error).name === "AbortError") return;
                console.error("Blog list fetch failed:", err);
                setError("We couldn't load the blog right now. Please try again in a moment.");
            } finally {
                if (!controller.signal.aborted) setLoading(false);
            }
        }

        load();
        return () => controller.abort();
    }, []);

    const visiblePosts = useMemo(() => {
        const q = query.trim().toLowerCase();

        const filtered = q
            ? posts.filter((p) =>
                  [p.title, p.excerpt, p.category, p.author ?? "", ...p.tags]
                      .join(" ")
                      .toLowerCase()
                      .includes(q)
              )
            : posts;

        return [...filtered].sort((a, b) => {
            const diff = new Date(b.publishAt).getTime() - new Date(a.publishAt).getTime();
            return sort === "Newest" ? diff : -diff;
        });
    }, [posts, query, sort]);

    return (
        <main className="w-full min-h-screen bg-[#F6F7F0] ">
            <SectionIntro
                stickToTop
                title="Insight and Updates"
                description="Everything brokers ask before a demo — the product, the data, the payment rail, and the guardrails. If yours isn't here, ask us on the call."
                backgroundColor="#015EFF"
            />
            <BlogGridSection
                posts={visiblePosts}
                loading={loading}
                error={error}
                sortOptions={SORT_OPTIONS}
                onSearch={setQuery}
                onSortChange={setSort}
            />
        </main>
    );
}