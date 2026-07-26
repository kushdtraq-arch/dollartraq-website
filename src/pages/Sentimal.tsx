
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import WorkflowDiagram from "@/components/common/WorkflowDiagram";
import AgentShowcase from "@/components/common/AgentsShowcase";
import Image from "next/image";

export default function Sentinel() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Sentinel"
                description="Sentinel owns the trust question end to end. It renders a vet card inline the moment a carrier email arrives, runs fraud detection on every message, watches the whole network for authority and insurance changes, and makes per-load coverage judgments on the facts Vault extracted."
                backgroundImageSrc="/images/sentinal-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"                                
                ctas={[
                    { label: "Meet the 4+1", href: "/ai-agents", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}
            />


        <WorkflowDiagram
            title="One job, owned end to end."
            description={`Sentinel is the skeptic on your desk that never gets tired. Every carrier that touches a load is checked against a 22.7-million-row FMCSA warehouse Dollar Traq hosts itself — authority history, inspections, out-of-service orders, and insurance filings — and re-checked as the network changes underneath you.`}
            centerLabel="Sentinal Work flow"
            leftItems={[
                {
                title: "Inbound-sender vet card",
                description:
                    "Email arrives → identity resolved → Trust Score, authority, and insurance rendered inline before you reply.",
                },
                {
                title: "Fraud scan on every email",
                description:
                    " Domain age, lookalike domains, phone-vs-FMCSA mismatch, and signature-vs-MC conflicts flagged on every message.",
                },
            ]}
            rightItems={[
                {
                title: "Chameleon detection ",
                description:
                    "Monthly authority census diffs surface reincarnation signals — shared officers, addresses, and phones with revoked MCs.",
                },
                {
                title: "Batch CSV vetting",
                description:
                    "Upload a carrier list, get back a scored sheet with flags and evidence lines you can defend.",
                },
            ]}
            bottomItems={[
                {
                title: "Threshold alerts",
                description: " A score falls through your floor and you know before dispatch does.",
                },
            ]}
        />

        <AgentShowcase
            title="Meet the other agents"
            columns={4}
            items={[
                {
                image: "/images/rate-1.png",
                href: "/ai-agents/rate",
                title: "Rate",
                subtitle: "Price the load",
                },
                {
                image: "/images/tracker-1.png",
                href: "/ai-agents/tracker",
                title: "Tracker",
                subtitle: "Follow the load",
                },
                {
                image: "/images/vault-1.png",
                href: "/ai-agents/vault",
                title: "Vault",
                subtitle: "File the paper",
                },
                {
                image: "/images/fleetra-1.png",
                href: "/ai-agents/fleetra",
                title: "Fleetra",
                subtitle: "The orchestrator",
                },
            ]}
        />
      
            <FaqAccordion
                sectionTitle="Sentinel, plainly."
                faqs={[
                    {
                    question: "What does Sentinel actually check a carrier against?",
                    answer:
                        "Sentinel checks carriers against Dollar Traq's self-hosted FMCSA warehouse of 22.7 million rows — authority history, inspections, out-of-service orders, and insurance filings — plus monthly authority census diffs and the facts Vault extracts from documents.",
                    },
                    { question: "How does Sentinel detect double brokering and chameleon carriers?", answer: "It scans every carrier email for fraud signals like domain age, lookalike domains, and phone-vs-FMCSA mismatches, and diffs the FMCSA authority census monthly to surface reincarnated carriers that share officers, addresses, or phones with revoked MCs." },
                    { question: "Does Sentinel block carriers automatically?", answer: "No. Sentinel flags risk and routes it to a human. Hard stops exist for lapsed insurance or out-of-service orders, but a person reviews flagged carriers — the system never bans a carrier on a guess." },
                ]}
            /> 
        </main>
    );
}