
import React from "react";
import FaqAccordion from "@/components/sections/FaqAccordion";
import PricingSection, { PricingPlan } from "@/components/sections/PricingSection";
import CtaBannerSection from "@/components/common/CtaBanner";
import SectionIntro from "@/components/common/SectionIntro";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FeatureSection from "@/components/sections/FeatureSection";
import Image from "next/image";
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
        price: "$1,299",
        priceSuffix: "/mo",
        description: "For mid-to-large enterprises seeking absolute automated intelligence.",
        features: [
            { label: "Unlimited Assets", icon: "checkCircle2" },
            { label: "Predictive AI Tools", icon: "checkCircle2" },
            { label: "24/7 Priority Access", icon: "checkCircle2" },
            { label: "Custom API Hooks", icon: "checkCircle2" },
        ],
        ctaLabel: "Get Started Pro",
        href: "/checkout/growth",
        featured: true,
        badge: "Most Recommended",
    },
    {
        id: "global",
        name: "Global",
        price: "Custom",
        priceSuffix: "/enterprise",
        description: "Full ecosystem integration and dedicated global infrastructure.",
        features: [
            { label: "Dedicated Server Nodes", icon: "server" },
            { label: "On-site Training", icon: "users" },
            { label: "Custom Security SLAs", icon: "shieldCheck" },
        ],
        ctaLabel: "Contact Sales",
        href: "/contact-sales",
    },
];



export default function SecurityAndTrust() {
    return (
        <main className="w-full min-h-screen bg-[#F6F7F0] ">

            <SectionIntro 
                stickToTop
                title="The safest AI is the kind that can't act alone."
                description="Dollar Traq's guarantee isn't a promise to be careful — it's an architecture where the careless action is impossible. Every consequential step halts for a human, every answer is scoped to a role, and every session can be replayed end to end."
                backgroundColor="#015EFF"
                

            />

            <ProcessSteps
                columns={2}
                sectionTitle="Built around how you actually work."
                sectionDescription={`Carriers get the other side of the trust equation: a single onboarding link instead of a fax-and-wait, a portal to track loads and payments, and DT Pay releasing funds in about 90 seconds once delivery is verified. Get verified once, then focus on driving — not chasing invoices.`}
                steps={[
                    { title: "Human approval is a graph node, not a setting", description: "Every send, payment release, and dispute action halts at an approval node built into the orchestration graph. It isn't a toggle an admin can switch off or a prompt an agent can be talked past — the workflow physically cannot route around it.", icon: "/images/security-1.svg" },
                    { title: "Role-based access on every answer", description: "Fleetra returns exactly what the asking user's role permits — and nothing more. A dispatcher, a compliance manager, and an owner asking the same question get answers scoped to what each is allowed to see.", icon: "/images/security-2.svg" },
                    { title: "Checkpointed, replayable sessions", description: "Every run is checkpointed step by step. When a customer, an insurer, or an auditor asks \"why did the system do that?\", you can replay the exact evidence chain — months later, in order.", icon: "/images/security-3.svg" },
                    { title: "Guardrails as topology", description: "Rules R1–R6 are edges in the graph. Agents act only in their lane; out-of-lane requests are refused with an explanation and logged. Constraints you can't argue an AI out of, because they aren't instructions.", icon: "/images/security-4.svg" },
                ]}
            />
            <FeatureSection
                title="Every claim traces to a record you can see."
                description="The carrier data behind a Trust Score comes from FMCSA public files loaded into our own PostgreSQL warehouse — 22.7 million rows, refreshed on a rolling snapshot cycle. On a demo, we can click from any score back to the government records that produced it."
                imagePosition="right"
                features={[
                    { text: "Sourced answers — claims carry their evidence" },
                    {
                        text:
                        "Tenant-siloed rate memory — your lane history never trains anyone else's pricing",
                    },
                    {
                        text:
                        "Document facts traceable to the source file they were extracted from",
                    },
                ]}

                visual={
                    
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/security.png"
                            alt="AI-powered task generator connected to your favorite integrations"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />
                    </div>
                }
            />
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="The demo is the negotiation."
                description="The demo is the negotiation. A 30-day pilot with the fee credited back, and your carriers vetted live — all starting on one 25-minute call."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />            
        </main>
    );
}