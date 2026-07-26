
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

export default function Rate() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Rate"
                description="Rate turns every quote your desk has ever seen into memory, benchmarks new quotes against it and against DAT under your own license, and flags the numbers that don't belong before your rep hits send."
                backgroundImageSrc="/images/3pl-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Meet the 4+1", href: "/ai-agents", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />


        <WorkflowDiagram
            title="One job, owned end to end."
            description={`Rate is the memory your desk never had. Quotes get extracted from carrier emails into a structured, tenant-siloed rate memory that never trains anyone else's pricing — then every new number is checked against your own history and market benchmarks so nobody negotiates blind.`}
            centerLabel="Rate Work flow"
            leftItems={[
                {
                title: "Quote extraction",
                description:
                    "Carrier quotes pulled from email into structured rate memory automatically — no re-keying.",
                },
                {
                title: "Lane memory",
                description:
                    "Every lane carries its own history, so your rep counters with what carriers actually quoted last time.",
                },
            ]}
            rightItems={[
                {
                title: "DAT benchmarking",
                description:
                    "Quotes checked against DAT RateView under your own license — market context on tap.",
                },
                {
                title: "Anomaly flags",
                description:
                    "A quote 2.1σ above lane memory gets marked before it's accepted.",
                },
            ]}
            bottomItems={[
                {
                title: "Tenant-siloed",
                description: "Your rate memory is yours. It never trains or informs another broker's pricing.",
                },
            ]}
        />
        <AgentShowcase
            title="Meet the other agents"
            columns={4}
            items={[
                {
                image: "/images/tracker-1.png",
                href: "/ai-agents/sentinel",
                title: "Sentinal",
                subtitle: "Trust The Carrier",
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
                sectionTitle="Rate, plainly."
                faqs={[
                    {
                    question: "Where does Rate get its pricing data?",
                    answer:
                        "Rate builds a tenant-siloed rate memory from the quotes your own desk receives, extracted from carrier emails, and benchmarks against DAT RateView under your own license. Nothing is shared with other brokers.",
                    },
                    { question: "Is my rate data shared with other Dollar Traq customers?", answer: "Never. Rate memory is tenant-siloed and does not train or inform anyone else's pricing. Your negotiation history stays yours." },
                    { question: "What is a rate anomaly flag?", answer: "When a quote sits well outside your lane's history — for example 2.1 standard deviations above what carriers usually quote — Rate marks it so your rep can push back before accepting an off-market number." },
                ]}
            /> 
        </main>
    );
}