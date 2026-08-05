"use client";
import React from "react";
import FaqAccordion from "@/components/sections/FaqAccordion";
import PricingSection, { PricingPlan } from "@/components/sections/PricingSection";
import CtaBannerSection from "@/components/common/CtaBanner";
import SectionIntro from "@/components/common/SectionIntro";
import BlogGridSection from "@/components/sections/BlogGridSection";




export default function Blog() {
    return (
        <main className="w-full min-h-screen bg-[#F6F7F0] ">

            <SectionIntro
                stickToTop 
                title="Insight and Updates"
                description="Everything brokers ask before a demo — the product, the data, the payment rail, and the guardrails. If yours isn't here, ask us on the call."
                backgroundColor="#015EFF"
                

            />
            <BlogGridSection
                posts={[
                    {
                        id: "1",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },
                    {
                        id: "2",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },                    
                    {
                        id: "3",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },
                    {
                        id: "4",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },
                    {
                        id: "5",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },
                    {
                        id: "6",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },
                    {
                        id: "7",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },
                    {
                        id: "8",
                        image: "/images/blog.png",
                        category: "Market Trends",
                        date: "June 2, 2026",
                        title: "Redefining the Final Mile: Speed Meets Precision",
                        excerpt: "The last mile is often the most complex part of the journey...",
                        href: "/blog/final-mile",
                    },                                        
                ]}
                onSearch={(q) => console.log("search:", q)}
                onSortChange={(v) => console.log("sort:", v)}
            />        
        </main>
    );
}