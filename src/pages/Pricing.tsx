
import React from "react";
import FaqAccordion from "@/components/sections/FaqAccordion";
import PricingSection, { PricingPlan } from "@/components/sections/PricingSection";
import CtaBannerSection from "@/components/common/CtaBanner";
import SectionIntro from "@/components/common/SectionIntro";
import ComparisonTable from "@/components/common/ComparisonTable";

const PRICING_PLANS: PricingPlan[] = [
    {
        id: "individual",
        name: "Individual",
        price: "$249",
        priceSuffix: "/mo",
        description: "One desk, one operator, full platform.",
        features: [
            { label: "100 loads per month", icon: "package" },
            { label: "Driver app", icon: "smartphone" },
            { label: "Single user, no sub-users", icon: "userX" },
            { label: "DT Pay at 1.9%", icon: "creditCard" },
            { label: "Chrome extension", icon: "appWindow" },
        ],
        note: "Extra loads billed at $2.75 each",
        ctaLabel: "Start with Individual",
        href: "https://broker.dollartraq.com/signup",
    },
    {
        id: "team",
        name: "Team",
        price: "$499",
        priceSuffix: "/mo",
        description: "A whole desk on one queue, cheaper per load.",
        features: [
            { label: "250 loads per month", icon: "package" },
            { label: "Driver app", icon: "smartphone" },
            { label: "Up to 10 sub-users", icon: "userPlus" },
            { label: "DT Pay at 1.5%", icon: "creditCard" },
            { label: "Chrome extension", icon: "appWindow" },
        ],
        note: "Extra loads billed at $2.25 each",
        ctaLabel: "Get Team",
        href: "https://broker.dollartraq.com/signup",
        featured: true,
        badge: "Popular",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "Contact for price",
        priceSuffix: "",
        description: "Multi-desk volume, sized to your book.",
        features: [
            { label: "Load volume to fit", icon: "package" },
            { label: "Driver app", icon: "smartphone" },
            { label: "Unlimited users", icon: "infinity" },
            { label: "DT Pay at negotiated rate", icon: "creditCard" },
            { label: "Chrome extension", icon: "appWindow" },
        ],
        note: "No overage, volume set in contract",
        ctaLabel: "Contact sales",
        href: "/contact",
    },
];

const FAQS = [
    {
        question: "Is there a free trial?",
        answer:
            "Better: we run a 30-day paid pilot and credit the fee back when you continue. You start in test mode, vet your own carriers live, and go live once you're ready. Ask about pilot terms on your demo call.",
    },
    {
        question: "Are there per-load or per-user charges?",
        answer:
            "No per-load fees on vetting, tracking, or documents. Plans include team seats appropriate to each tier; DT Pay is the only usage-based fee, at its flat published rate.",
    },
    {
        question: "Do I need my own DAT license for rate benchmarks?",
        answer:
            "Yes — Rate pulls DAT RateView under your existing license (bring-your-own). Your proprietary lane memory builds on top of it and stays tenant-siloed, always.",
    },
    {
        question: "What does implementation cost?",
        answer:
            "Nothing extra. Onboarding is white-glove: inbox connection, carrier-list import, threshold setup, and your first DT Pay test release, guided live.",
    },
];
 
const FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://dollartraq.com/pricing#faq",
    mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
        },
    })),
};

export default function Pricing() {
    return (
        <main className="w-full min-h-screen bg-[#F6F7F0] ">

            <SectionIntro 
                stickToTop
                title="Priced like a tool. Works like a department."
                description="Three plans, one flat payment fee, zero hidden line items. Everything below is the complete price list."
                backgroundColor="#015EFF"
                

            />

            <PricingSection plans={PRICING_PLANS} />

            <p className="max-w-[1200px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 text-center text-[22px] text-gray-800 pt-10 pb-2">
                Competitor pricing reflects publicly listed or publicly reported entry pricing as of July 2026. Verify current pricing with each vendor.
            </p>

            <ComparisonTable
                capabilityHeader="CAPABILITY"
                competitors={[{ name: "Typical Stand-Alone Route" }]}
                featured={{ name: "Dollar Traq" }}
                accentColor="#2f6feb"
                backgroundColor="#faf9f5"
                
                featuredColumnStyle="plain"
                align="left"
                highlightColor="#e8f0e9"
                rows={[
                    {
                        label: "Carrier vetting & monitoring",
                        competitorCells: [{ type: "text", value: "Highway from ~$150–$500/mo · MyCarrierPortal from $515/mo · RMIS ~$340/mo" }],
                        featuredCell: { value: "Included" },
                    },
                    {
                        label: "Fraud detection add-ons",
                        competitorCells: [{ type: "text", value: "Often ~$500/mo extra" }],
                        featuredCell: { value: "Included" },
                    },
                    {
                        label: "Load tracking / visibility",
                        competitorCells: [{ type: "text", value: "Separate product, per-load or seat fees" }],
                        featuredCell: { value: "Included" },
                    },
                    {
                        label: "Document / COI management",
                        competitorCells: [{ type: "text", value: "Manual or bundled into onboarding tools" }],
                        featuredCell: { value: "Included, AI-verified" },
                    },
                    {
                        label: "Fast carrier payment",
                        competitorCells: [{ type: "text", value: "Quick-pay / factoring at 2–5% per invoice" }],
                        featuredCell: { value: "DT Pay at 1.2% flat" },
                    },
                    {
                        label: "One platform, one queue, one audit trail",
                        competitorCells: [{ type: "text", value: "Not available at any price", color: "#dc2626" }],
                        featuredCell: { value: "The point" },
                        highlight: true,
                    },
                ]}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
            />
            <FaqAccordion sectionTitle="Asked and answered" faqs={FAQS} />

            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="The demo is the negotiation."
                description="A 30-day pilot with the fee credited back, and your carriers vetted live — all starting on one 25-minute call."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    
                ]}
            />            
        </main>
    );
}