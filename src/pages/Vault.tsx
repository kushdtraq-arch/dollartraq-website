
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

export default function Vault() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Vault"
                description="Vault turns freight paperwork into verified facts: every COI, rate con, BOL, and POD classified, extracted, confidence-scored, and filed to the right carrier — feeding every other agent and never guessing when it isn't sure."
                backgroundImageSrc="/images/vault-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Meet the 4+1", href: "/ai-agents", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />


        <WorkflowDiagram
            title="One job, owned end to end"
            description={`Vault is the reader the rest of the platform depends on. It handles 350,000+ insurance certificates already on file, and every new document that arrives is classified, its fields extracted and confidence-scored, and filed to the carrier record — with anything uncertain routed to a person instead of waved through.`}
            centerLabel="Vault Work flow"
            leftItems={[
                {
                title: "Classification & extraction",
                description:
                    "COIs, rate cons, BOLs, and PODs identified and read on arrival — zero re-keying.",
                },
                {
                title: "Certificate-holder check",
                description:
                    "Is your company actually named as holder? One of the most common silent failures, caught.",
                },
            ]}
            rightItems={[
                {
                title: "Coverage verification",
                description:
                    "Auto liability, cargo, and general liability limits compared against your minimums per equipment type.",
                },
                {
                title: "Confidence scores",
                description:
                    "Every extracted field carries a confidence score; low confidence routes to a human.",
                },
            ]}
            bottomItems={[
                {
                title: "Feeds every agent",
                description: "The facts Vault files are what Sentinel judges and Tracker and DT Pay rely on.",
                },
            ]}
        />
        <AgentShowcase
            title="Meet the other agents"
            columns={4}
            items={[
                {
                video: "/sentinel.mp4",
                poster: "/images/tracker-1.png",
                href: "/ai-agents/sentinel",
                title: "Sentinal",
                subtitle: "Trust The Carrier",
                },
                {
                video: "/rate.mp4",
                poster: "/images/rate-1.png",
                href: "/ai-agents/rate",
                title: "RATE",
                subtitle: "Price the load",
                },
                {
                video: "/tracker.mp4",
                poster: "/images/tracker-1.png",
                href: "/ai-agents/tracker",
                title: "Tracker",
                subtitle: "Follow the load",
                },
                {
                video: "/fleetra.mp4",
                poster: "/images/fleetra-1.png",
                href: "/ai-agents/fleetra",
                title: "Fleetra",
                subtitle: "The orchestrator",
                },
            ]}
        />        
            <FaqAccordion
                sectionTitle="Vault, plainly."
                faqs={[
                    {
                    question: "What documents can Vault process?",
                    answer:
                        "Vault classifies, extracts, and files certificates of insurance (COIs), rate confirmations, bills of lading (BOLs), and proofs of delivery (PODs), with more than 350,000 insurance certificates already on file.",
                    },
                    { question: "How does Vault verify a certificate of insurance?", answer: "Vault reads coverage lines and limits, checks them against your requirements per equipment type, and verifies that your company is actually named as the certificate holder — a common and expensive silent failure." },
                    { question: "What happens when Vault isn't confident about a field?", answer: "Every extracted field carries a confidence score. Low-confidence extractions are routed to a human for review rather than filed automatically — Vault never guesses." },
                ]}
            /> 
 
 

        </main>
    );
}