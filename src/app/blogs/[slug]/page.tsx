import { cache } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ChevronDown, Clock } from "lucide-react";
import sanitizeHtml from "sanitize-html";

import FaqAccordion from "@/components/sections/FaqAccordion";
import {
    API_BASE_URL,
    API_ENDPOINTS,
    API_HEADERS,
    ASSET_BASE_URL,
} from "@/config/api";

/* =====================================================================
   Types
   ===================================================================== */

interface FaqItem {
    question: string;
    answer: string;
}

interface TocItem {
    id: string;
    text: string;
    level: 2 | 3;
}

interface ApiBlogPost {
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
    metaTitle?: string | null;
    metaDescription?: string | null;
    bodyHtml: string;
    faq?: FaqItem[];
    internalLinks?: string[];
}

interface BlogPost {
    title: string;
    excerpt: string;
    category: string;
    tags: string[];
    cover: string | null;
    author: { name: string; linkedin: string | null };
    publishAt: string;
    updatedAt: string;
    readingTimeMinutes: number;
    metaTitle: string;
    metaDescription: string;
    bodyHtml: string;
    toc: TocItem[];
    faq: FaqItem[];
    internalLinks: string[];
}

/* =====================================================================
   Helpers
   ===================================================================== */

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });

const initials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

/** "/features/carrier-vetting" -> "Carrier vetting" */
function linkLabel(path: string) {
    const last = path.split("?")[0].split("#")[0].split("/").filter(Boolean).pop() ?? "Home";
    const words = decodeURIComponent(last).replace(/[-_]+/g, " ").trim();
    return words.charAt(0).toUpperCase() + words.slice(1);
}

function resolveImage(src: string | null) {
    if (!src) return null;
    if (/^https?:\/\//i.test(src)) return src;
    return `${ASSET_BASE_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

const decodeEntities = (s: string) =>
    s
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");

const slugify = (s: string) =>
    s
        .toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 80) || "section";

/** Sanitize CMS HTML, add ids to h2/h3, and build the table of contents. */
function prepareBody(raw: string) {
    const clean = sanitizeHtml(raw || "", {
        allowedTags: [
            ...sanitizeHtml.defaults.allowedTags,
            "h2", "img", "u", "s", "mark", "figure", "figcaption", "span",
        ],
        allowedAttributes: {
            a: ["href", "name", "target", "rel"],
            img: ["src", "alt", "title", "width", "height"],
            th: ["colspan", "rowspan"],
            td: ["colspan", "rowspan"],
            h2: ["id"],
            h3: ["id"],
            h4: ["id"],
            pre: ["class"],
            code: ["class"],
        },
        allowedSchemes: ["http", "https", "mailto", "tel"],
        transformTags: {
            h1: "h2", // the post title is already the page H1
            a: (tagName, attribs) => {
                const href = attribs.href ?? "";
                return /^https?:\/\//i.test(href)
                    ? { tagName, attribs: { ...attribs, target: "_blank", rel: "noopener noreferrer" } }
                    : { tagName, attribs };
            },
        },
    });

    const toc: TocItem[] = [];
    const used = new Set<string>();

    const html = clean.replace(
        /<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi,
        (match, level: string, attrs: string, inner: string) => {
            const text = decodeEntities(inner.replace(/<[^>]+>/g, "")).trim();
            if (!text) return match;

            const existing = /\sid="([^"]+)"/.exec(attrs)?.[1];
            const base = existing || slugify(text);
            let id = base;
            let n = 2;
            while (used.has(id)) id = `${base}-${n++}`;
            used.add(id);

            toc.push({ id, text, level: Number(level) as 2 | 3 });
            const rest = attrs.replace(/\sid="[^"]*"/, "");
            return `<h${level} id="${id}"${rest}>${inner}</h${level}>`;
        }
    );

    return { html, toc };
}

/* =====================================================================
   Data (cached so generateMetadata + page share one request)
   ===================================================================== */

const getBlogPost = cache(async (slug: string): Promise<BlogPost | null> => {
    const res = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.blogs}/${encodeURIComponent(slug)}`,
        { headers: API_HEADERS, next: { revalidate: 60 } }
    );

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Failed to load blog "${slug}" (${res.status})`);

    const json = await res.json();
    if (json.status !== "success" || !json.data) return null;

    const p = json.data as ApiBlogPost;
    const { html, toc } = prepareBody(p.bodyHtml);

    return {
        title: p.title,
        excerpt: p.excerpt,
        category: p.category,
        tags: p.tags ?? [],
        cover: resolveImage(p.ogImage),
        author: p.author ?? { name: "Dollar Traq Team", linkedin: null },
        publishAt: p.publishAt,
        updatedAt: p.updatedAt,
        readingTimeMinutes: p.readingTimeMinutes,
        metaTitle: p.metaTitle || `${p.title} | Dollar Traq`,
        metaDescription: p.metaDescription || p.excerpt,
        bodyHtml: html,
        toc,
        faq: p.faq ?? [],
        internalLinks: p.internalLinks ?? [],
    };
});

const PAGE_CSS = `
html { scroll-behavior: smooth; }

.bt-up { opacity: 0; animation: btUp .9s cubic-bezier(.22,1,.36,1) forwards; }
.bt-pop { opacity: 0; animation: btPop 1s cubic-bezier(.22,1,.36,1) .5s forwards; }
@keyframes btUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
@keyframes btPop { from { opacity: 0; transform: translateY(40px) scale(.97); } to { opacity: 1; transform: none; } }
@media (prefers-reduced-motion: reduce) { .bt-up, .bt-pop { animation: none; opacity: 1; } }

details.bt-toc[open] .bt-chevron { transform: rotate(180deg); }
details.bt-toc summary::-webkit-details-marker { display: none; }

.blog-article { font-size: 17px; line-height: 1.8; color: #374151; overflow-wrap: break-word; }
.blog-article > *:first-child { margin-top: 0; }
.blog-article h2, .blog-article h3, .blog-article h4 { color: #111827; font-weight: 600; letter-spacing: -0.02em; scroll-margin-top: 110px; }
.blog-article h2 { font-size: 30px; line-height: 1.2; margin: 2.4em 0 .7em; }
.blog-article h3 { font-size: 22px; line-height: 1.3; margin: 2em 0 .6em; }
.blog-article h4 { font-size: 18px; line-height: 1.4; margin: 1.8em 0 .5em; }
.blog-article p { margin: 0 0 1.35em; }
.blog-article strong { font-weight: 600; color: #111827; }
.blog-article a { color: #0052cc; text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 3px; transition: color .15s; }
.blog-article a:hover { color: #003d99; }
.blog-article ul, .blog-article ol { margin: 0 0 1.4em; padding-left: 1.4em; }
.blog-article ul { list-style: disc; }
.blog-article ol { list-style: decimal; }
.blog-article li { margin-bottom: .5em; padding-left: .25em; }
.blog-article li::marker { color: #015EFF; font-weight: 600; }
.blog-article li > p { margin-bottom: .5em; }
.blog-article li > ul, .blog-article li > ol { margin-top: .5em; margin-bottom: 0; }
.blog-article blockquote { margin: 2em 0; padding: 1.1em 1.5em; background: #fff; border: 1px solid #e5e7eb; border-left: 4px solid #015EFF; border-radius: 0 14px 14px 0; color: #4b5563; font-size: 18px; font-style: italic; }
.blog-article blockquote p:last-child { margin-bottom: 0; }
.blog-article code { background: #e9ebe1; color: #111827; padding: .15em .45em; border-radius: 6px; font-size: .88em; }
.blog-article pre { margin: 2em 0; padding: 20px 22px; background: #0b1220; color: #e5e7eb; border-radius: 14px; font-size: 14px; line-height: 1.7; overflow-x: auto; }
.blog-article pre code { background: none; padding: 0; color: inherit; font-size: inherit; }
.blog-article table { width: 100%; margin: 2em 0; border-collapse: collapse; background: #fff; font-size: 15px; line-height: 1.6; }
.blog-article th, .blog-article td { padding: 12px 16px; border: 1px solid #e5e7eb; text-align: left; vertical-align: top; }
.blog-article th { background: #f0f0eb; color: #111827; font-weight: 600; }
.blog-article td > p, .blog-article th > p { margin: 0; }
.blog-article img { max-width: 100%; height: auto; margin: 2em 0; border-radius: 14px; }
.blog-article hr { margin: 2.5em 0; border: 0; border-top: 1px solid #e5e7eb; }
@media (max-width: 640px) {
  .blog-article { font-size: 16px; }
  .blog-article h2 { font-size: 25px; }
  .blog-article h3 { font-size: 20px; }
  .blog-article table { display: block; overflow-x: auto; }
}
`;

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

/* =====================================================================
   SEO
   ===================================================================== */

type PageProps = { params: Promise<{ slug: string }> };

export const revalidate = 60;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return { title: "Post not found | Dollar Traq" };

    return {
        title: { absolute: post.metaTitle },
        description: post.metaDescription,
        keywords: post.tags,
        openGraph: {
            type: "article",
            title: post.metaTitle,
            description: post.metaDescription,
            publishedTime: post.publishAt,
            modifiedTime: post.updatedAt,
            authors: [post.author.name],
            images: post.cover ? [{ url: post.cover }] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.metaTitle,
            description: post.metaDescription,
            images: post.cover ? [post.cover] : undefined,
        },
    };
}

/* =====================================================================
   Page
   ===================================================================== */

// lucide-react v1+ no longer ships brand icons, so LinkedIn is inlined
function LinkedInIcon({ size = 16 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

function TocList({ items }: { items: TocItem[] }) {
    return (
        <ul className="space-y-1">
            {items.map((item) => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        className={`block border-l-2 border-gray-200 py-1.5 text-[13.5px] leading-snug text-gray-500 transition-colors hover:border-[#015EFF] hover:text-[#015EFF] ${
                            item.level === 3 ? "pl-7" : "pl-4"
                        }`}
                    >
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) notFound();

    const jsonLd: Record<string, unknown>[] = [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: post.cover ?? undefined,
            datePublished: post.publishAt,
            dateModified: post.updatedAt,
            author: { "@type": "Person", name: post.author.name },
            publisher: { "@type": "Organization", name: "Dollar Traq" },
        },
    ];
    if (post.faq.length > 0) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
        });
    }

    return (
        <main className="w-full min-h-screen bg-[#F6F7F0] font-sans">
            <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />

            {/* ---------------- Hero (full-bleed cover, sits under the transparent header) ---------------- */}
            <section className="relative w-full overflow-hidden bg-gray-900 -mt-[72px] min-h-[560px] md:min-h-[660px] flex items-end ">
                <div className="absolute inset-0 select-none pointer-events-none">
                    {post.cover ? (
                        <Image
                            src={post.cover}
                            alt=""
                            fill
                            priority
                            quality={90}
                            sizes="100vw"
                            className="object-cover"
                        />
                    ) : (
                        <div className="absolute -top-40 -right-24 w-[560px] h-[560px] rounded-full bg-[#015EFF]/40 blur-3xl" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/95" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />
                </div>

                <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 pt-[140px] pb-10 md:pb-14">
                    <Link
                        href="/blogs"
                        style={delay(100)}
                        className="bt-up inline-flex items-center gap-1.5 text-[13px] font-medium text-white/75 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={15} />
                        All insights
                    </Link>

                    <span
                        style={delay(250)}
                        className="bt-up mt-6 block w-fit px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-[11px] tracking-wider uppercase font-medium rounded-full"
                    >
                        {post.category}
                    </span>

                    <h1
                        style={delay(400)}
                        className="bt-up mt-5 max-w-[900px] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] font-semibold tracking-tight text-white leading-[1.08]"
                    >
                        {post.title}
                    </h1>

                    <p
                        style={delay(550)}
                        className="bt-up mt-5 max-w-[720px] text-[15px] sm:text-[17px] text-gray-300 leading-relaxed"
                    >
                        {post.excerpt}
                    </p>

                    <div
                        style={delay(700)}
                        className="bt-up mt-10 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-x-8 gap-y-4"
                    >
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-[13px] text-gray-300">
                            <span className="flex items-center gap-2.5">
                                <span className="w-9 h-9 rounded-full bg-white text-gray-900 flex items-center justify-center text-[12px] font-semibold">
                                    {initials(post.author.name)}
                                </span>
                                <span className="font-medium text-white">{post.author.name}</span>
                            </span>
                            <span className="w-1 h-1 rounded-full bg-white/40" />
                            <time dateTime={post.publishAt}>{formatDate(post.publishAt)}</time>
                            <span className="w-1 h-1 rounded-full bg-white/40" />
                            <span className="flex items-center gap-1.5">
                                <Clock size={14} />
                                {post.readingTimeMinutes} min read
                            </span>
                        </div>

                        {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 text-[11px] font-medium text-white/85 border border-white/25 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* ---------------- Article + sidebar ---------------- */}
            <section className="px-6 sm:px-10 md:px-12 lg:px-16 pt-12 md:pt-16 pb-16 md:pb-24">
                <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-16">
                    <div className="min-w-0">
                        {/* mobile contents */}
                        {post.toc.length > 0 && (
                            <details className="bt-toc lg:hidden mb-8 rounded-xl border border-gray-200 bg-white">
                                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-[14px] font-semibold text-gray-900">
                                    On this page
                                    <ChevronDown size={18} className="bt-chevron transition-transform duration-300" />
                                </summary>
                                <div className="px-5 pb-5">
                                    <TocList items={post.toc} />
                                </div>
                            </details>
                        )}

                        <article
                            className="blog-article max-w-[760px]"
                            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
                        />

                        {/* author */}
                        <div className="mt-14 max-w-[760px] rounded-2xl border border-gray-200 bg-white p-6 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <span className="w-12 h-12 rounded-full bg-[#015EFF] text-white flex items-center justify-center text-[14px] font-semibold">
                                    {initials(post.author.name)}
                                </span>
                                <div>
                                    <p className="text-[15px] font-semibold text-gray-900">{post.author.name}</p>
                                    <p className="text-[13px] text-gray-500">Updated {formatDate(post.updatedAt)}</p>
                                </div>
                            </div>
                            {post.author.linkedin && (
                                <a
                                    href={post.author.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${post.author.name} on LinkedIn`}
                                    className="w-9 h-9 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                                >
                                    <LinkedInIcon size={16} />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* desktop sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 space-y-6">
                            {post.toc.length > 0 && (
                                <nav aria-label="Table of contents" className="rounded-2xl border border-gray-200 bg-white p-6">
                                    <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                                        On this page
                                    </p>
                                    <TocList items={post.toc} />
                                </nav>
                            )}

                            <div className="rounded-2xl bg-[#015EFF] p-6 text-white">
                                <p className="text-[18px] font-semibold tracking-tight leading-snug">
                                    Vet every carrier before you book
                                </p>
                                <p className="mt-2 text-[13px] text-white/80 leading-relaxed">
                                    See how Dollar Traq checks authority, insurance, and fraud signals in seconds.
                                </p>
                                <Link
                                    href="/demo"
                                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[14px] font-semibold text-black hover:bg-gray-100 transition-colors"
                                >
                                    Book a Demo <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* ---------------- FAQ ---------------- */}
            {post.faq.length > 0 && (
                <FaqAccordion
                    sectionTitle="Questions about this topic."
                    faqs={post.faq}
                    defaultOpenIndex={0}
                />
            )}

            {/* ---------------- Keep exploring ---------------- */}
            {post.internalLinks.length > 0 && (
                <section className="px-6 sm:px-10 md:px-12 lg:px-16 py-16 md:py-20">
                    <div className="max-w-[1240px] mx-auto">
                        <h2 className="text-2xl md:text-[32px] font-normal text-gray-900 tracking-tight">
                            Keep exploring
                        </h2>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {post.internalLinks.map((href) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="group flex flex-col justify-between gap-8 rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-gray-900"
                                >
                                    <div>
                                        <p className="text-[17px] font-semibold text-gray-900 tracking-tight leading-snug">
                                            {linkLabel(href)}
                                        </p>
                                        <p className="mt-1 text-[12px] text-gray-400 truncate">{href}</p>
                                    </div>
                                    <span className="w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 transition-colors group-hover:bg-gray-900 group-hover:text-white">
                                        <ArrowRight size={16} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ---------------- Closing CTA ---------------- */}
            <section className="px-6 sm:px-10 md:px-12 lg:px-16 pb-16 md:pb-24">
                <div className="max-w-[1240px] mx-auto relative overflow-hidden rounded-3xl bg-gray-900 px-6 py-14 md:px-16 md:py-20 text-center md:text-left">
                    <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-[#015EFF]/40 blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-[640px]">
                        <h2 className="text-[28px] md:text-[40px] font-semibold tracking-tight text-white leading-[1.15]">
                            Ready to move freight with confidence?
                        </h2>
                        <p className="mt-4 text-[15px] md:text-[16px] text-gray-300 leading-relaxed">
                            Book a short demo and see how brokers vet carriers, pay them, and stay protected in one place.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <Link
                                href="/sign-up"
                                className="rounded-lg bg-white px-6 py-3 text-[14px] sm:text-[15px] font-semibold text-black shadow-md hover:bg-gray-100 transition-colors"
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/demo"
                                className="rounded-lg bg-blue-600 px-6 py-3 text-[14px] sm:text-[15px] font-semibold text-white shadow-md hover:bg-blue-700 transition-colors"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}