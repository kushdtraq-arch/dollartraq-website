// pages/HomePage.tsx (or app equivalent)
import React from "react";
import FaqAccordion from "@/components/sections/FaqAccordion";
import PricingSection, { PricingPlan } from "@/components/sections/PricingSection";
import CtaBannerSection from "@/components/common/CtaBanner";
import SectionIntro from "@/components/common/SectionIntro";
import ComparisonTable from "@/components/common/ComparisonTable";

const PRICING_PLANS: PricingPlan[] = [
    {
        id: "start",
        name: "Starter",
        price: "$299",
        priceSuffix: "/mo",
        description: "For small brokerages getting vetting and documents under control.",
        features: [
            { label: "Carrier vetting on the full FMCSA warehouse", icon: "check" },
            { label: "Trust Score with confidence labels", icon: "check" },
            { label: "Inbox vet cards (Gmail + Outlook)", icon: "check" },
            { label: "COI intake & expiry watch", icon: "check" },
            { label: "Batch CSV vetting", icon: "check" },
            { label: "DT Pay access at 1.2% flat", icon: "check" },
            { label: "Email support", icon: "check" },
        ],
        ctaLabel: "Choose Basic",
        href: "/checkout/start",
    },
    {
        id: "growth",
        name: "Growth",
        price: "$599",
        priceSuffix: "/mo",
        description: "For active brokerages that want the full agent team on every load.",
        features: [
            { label: "Everything in Starter", icon: "checkCircle2" },
            { label: "All five AI agents, full workflows", icon: "checkCircle2" },
            { label: "Fraud scans on every carrier email + chameleon alerts", icon: "checkCircle2" },
            { label: "Live ELD tracking (Motive) with late-risk prediction", icon: "checkCircle2" },
            { label: "214-shaped status webhooks to your customer's TMS", icon: "checkCircle2" },
            { label: "Rate memory + DAT RateView (your license)", icon: "checkCircle2" },
            { label: "Teams alerts · priority support", icon: "checkCircle2" },            
        ],
        ctaLabel: "Get Started Pro",
        href: "/checkout/growth",
        featured: true,
        badge: "Most Recommended",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "$999",
        priceSuffix: "/mo",
        description: "For multi-desk operations with compliance and integration requirements.",
        features: [
            { label: "Everything in Growth", icon: "check" },
            { label: "Role-based access across desks", icon: "check" },
            { label: "Replayable audit exports", icon: "check" },
            { label: "TMS & EDI integration support", icon: "check" },
            { label: "Custom vetting thresholds & hard stops", icon: "check" },
            { label: "White-glove onboarding", icon: "check" }, 
             { label: "Dedicated success contact", icon: "check" },               
        ],
        ctaLabel: "Contact Sales",
        href: "/contact-sales",
    },
];



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
            <FaqAccordion
                sectionTitle="Asked and answered"
                faqs={[
                    {
                    question: "Is there a free trial?",
                    answer:
                        "Better: we run a 30-day paid pilot and credit the fee back when you continue. You start in test mode, vet your own carriers live, and go live once you're ready. Ask about pilot terms on your demo call.",
                    },
                    { question: "Are there per-load or per-user charges?", answer: "No per-load fees on vetting, tracking, or documents. Plans include team seats appropriate to each tier; DT Pay is the only usage-based fee, at its flat published rate." },
                    { question: "Do I need my own DAT license for rate benchmarks?", answer: "Yes — Rate pulls DAT RateView under your existing license (bring-your-own). Your proprietary lane memory builds on top of it and stays tenant-siloed, always." },
                    { question: "What does implementation cost?", answer: "Nothing extra. Onboarding is white-glove: inbox connection, carrier-list import, threshold setup, and your first DT Pay test release, guided live." },
                ]}
            /> 

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