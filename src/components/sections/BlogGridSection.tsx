"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export interface BlogPost {
    id: string;
    image: string;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    author?: string;
    href?: string;
}

interface BlogGridSectionProps {
    posts?: BlogPost[];
    searchPlaceholder?: string;
    sortOptions?: string[];

    onSearch?: (query: string) => void;

    onSortChange?: (value: string) => void;
    backgroundColor?: string;
    className?: string;

    loading?: boolean;
    error?: string;
    emptyMessage?: string;
}

const DEFAULT_POST: Omit<BlogPost, "id"> = {
    image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80",
    category: "Market Trends",
    date: "June 2, 2026",
    title: "Redefining the Final Mile: Speed Meets Precision",
    excerpt:
        "The last mile is often the most complex part of the journey. We explore how integrated technology and local expertise ensure your goods...",
};

const DEFAULT_POSTS: BlogPost[] = Array.from({ length: 6 }, (_, i) => ({
    id: `post_${i}`,
    ...DEFAULT_POST,
}));

const initials = (name: string) =>
    name
        .split(" ")
        .filter(Boolean)
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();

const DEFAULT_SORT_OPTIONS = ["Newest", "Oldest"];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const BlogGridSection: React.FC<BlogGridSectionProps> = ({
    posts = DEFAULT_POSTS,
    searchPlaceholder = "Type Here",
    sortOptions = DEFAULT_SORT_OPTIONS,
    onSearch,
    onSortChange,
    backgroundColor = "",
    className = "",
    loading = false,
    error = "",
    emptyMessage = "No posts found.",
}) => {
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState(sortOptions[0]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch?.(query);
    };

    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSort(e.target.value);
        onSortChange?.(e.target.value);
    };

    return (
        <section
            className={`w-full py-12 sm:py-16 md:py-20 px-6 sm:px-10 md:px-12 lg:px-16 font-sans ${className}`}
            style={{ backgroundColor }}
        >
            <div className="max-w-[1240px] mx-auto">
                {/* ---- controls ---- */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10 md:mb-14">
                    <form
                        onSubmit={handleSubmit}
                        className="flex w-full md:max-w-[480px] rounded-md border border-gray-300 bg-[#f0f0eb] overflow-hidden"
                    >
                        <span className="flex items-center pl-4 text-blue-600">
                            <Search size={18} strokeWidth={2} />
                        </span>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder={searchPlaceholder}
                            className="flex-1 min-w-0 px-3 py-2.5 text-[14px] text-gray-700 placeholder:text-gray-500 outline-none bg-transparent"
                        />
                        <button
                            type="submit"
                            className="shrink-0 px-8 py-2.5 bg-[#0052cc] hover:bg-blue-700 text-white text-[14px] font-medium transition-colors rounded-r-md"
                        >
                            Search
                        </button>
                    </form>

                    <div className="relative w-full md:w-auto">
                        <select
                            value={sort}
                            onChange={handleSortChange}
                            className="w-full md:w-[160px] appearance-none rounded-md border border-gray-300 bg-[#f0f0eb] px-4 py-2.5 pr-8 text-[14px] text-gray-800 outline-none cursor-pointer"
                        >
                            {sortOptions.map((opt) => (
                                <option key={opt} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 text-xs">
                            ▼
                        </span>
                    </div>
                </div>

                {/* ---- states + grid ---- */}
                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="w-full aspect-[16/10] rounded-sm bg-gray-200" />
                                <div className="mt-4 h-3 w-24 rounded bg-gray-200" />
                                <div className="mt-2 h-5 w-4/5 rounded bg-gray-200" />
                                <div className="mt-2 h-4 w-full rounded bg-gray-200" />
                            </div>
                        ))}
                    </div>
                ) : error ? (
                    <p className="py-16 text-center text-[14px] text-gray-600">{error}</p>
                ) : posts.length === 0 ? (
                    <p className="py-16 text-center text-[14px] text-gray-500">{emptyMessage}</p>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        {posts.map((post) => (
                            <motion.article key={post.id} variants={cardVariants} className="group">
                                <Link href={post.href ?? "#"} className="block">
                                    <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden bg-gray-200">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />

                                        <span className="absolute top-3 left-3 px-2 py-1 bg-black/30 backdrop-blur-xs text-white text-[10px] tracking-wider uppercase font-medium rounded-xs">
                                            {post.category}
                                        </span>

                                        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white shadow-xs" />
                                    </div>

                                    <p className="mt-4 text-[11px] tracking-wider uppercase text-gray-500 font-medium">
                                        {post.date}
                                    </p>
                                    <h3 className="mt-1.5 text-[17px] sm:text-[18px] font-bold text-gray-800 leading-snug">
                                        {post.title}
                                    </h3>
                                    <p className="mt-1.5 text-[13px] sm:text-[14px] text-gray-600 leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {post.author && (
                                        <div className="mt-4 flex items-center gap-2.5">
                                            <span className="w-7 h-7 rounded-full bg-[#015EFF] text-white flex items-center justify-center text-[10px] font-semibold shrink-0">
                                                {initials(post.author)}
                                            </span>
                                            <span className="text-[13px] font-medium text-gray-800">{post.author}</span>
                                        </div>
                                    )}
                                </Link>
                            </motion.article>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default BlogGridSection;