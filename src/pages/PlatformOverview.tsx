
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ScenarioGrid from "@/components/sections/ScenarioGrid";
import Image from "next/image";

export default function PlatformOverview() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Not five tools. One operating system."
                description="Everything on this site — vetting, fraud detection, documents, tracking, payment — runs on one event bus, one shared memory, and one review queue. This page is the architecture, in plain English."
                backgroundImageSrc="/images/platform-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                
            />

            <ProcessSteps
                sectionTitle="Event bus in, review queue out."
                sectionDescription={`Every email, document, position ping, and typed command becomes an event. Agents subscribe, work in parallel on shared memory, and everything consequential converges on one queue where humans decide.`}
                steps={[
                    { title: "One event bus", description: "Inbound email, ELD pings, document arrivals, user commands — a single ordered stream. Nothing happens off the record, so nothing is invisible to audit.", icon: "/images/po-1.svg" },
                    { title: "One shared memory", description: "Carrier records, load timelines, document facts, and rate memory live in one store. Vault's extraction is instantly Sentinel's evidence and Tracker's trigger.", icon: "/images/po-2.svg" },
                    { title: "One review queue", description: "Exactly one drafting-and-approval pipeline exists. Every outbound message, payment release, and dispute action passes through it — and through a person.", icon: "/images/po-3.svg" },
                ]}
            />

            <FeatureSection
                title="Rules the software physically cannot break."
                description="Guardrails are edges in the orchestration graph — structural, not persuasive. An agent can't be talked out of them because they aren't instructions; they're topology."
                imagePosition="right"
                features={[
                    
                    {
                        text: "R1 — Human approval Any send, payment, or dispute action halts the graph at an approval node until a person acts. The flagship rule — and the reason \"AI\" here never means \"unsupervised.\"",
                    },
                    {
                        text:"R2–R3 — Lanes & refusals Agents act only inside their mandate. Out-of-lane or rule-violating requests are refused with an explanation — and the refusal is logged like any other event.",
                    },
                    { text: "R4–R6 — Access, evidence, audit Answers are RBAC-filtered to the asking user's role. Claims carry sources. Sessions are checkpointed and replayable end to end — the evidence trail auditors ask for." },
                ]}
                ctas={[
                    { label: "Meet the agents", href: "/ai-agents", variant: "secondary" },
                    { label: "Security&Trust", href: "/company/security-trust", variant: "primary" },
                ]}
                visual={
                    
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/home/graphic-1.png"
                            alt="AI-powered task generator connected to your favorite integrations"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />
                    </div>
                }
            />

            <ScenarioGrid
                sectionTitle="Why this couldn't be built on rented parts."
                scenarios={[
                    {
                    title: "Data layer:",
                    description:
                        "a 22.7M-row FMCSA warehouse we host — enabling census diffs, provenance on screen, and queries no rate-limited API allows",
                    },
                    {
                    title: "Document layer:",
                    description:
                        "350,000+ insurance records plus every rate con, BOL, and POD your inbox receives — extracted once, reused everywhere",
                    },
                    {
                    title: "Payment layer:",
                    description:
                        "DT Pay on Stripe rails — the release button that turns all that verification into enforcement",
                    },
                ]}
            />  
 
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Bring your architect to the demo."
                description="We'll walk the graph, the guardrails, and the audit trail — engineer to engineer."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                ]}
            />   

        </main>
    );
}