
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

export default function Fleetra() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Fleetra"
                description="Fleetra is the supervisor every request passes through. It plans the graph, fans work out to the four specialists in parallel, merges their sourced answers into one recommendation — and hosts the human-approval nodes where the person on your team stays in control."
                backgroundImageSrc="/images/fleetra-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Meet the 4+1", href: "/ai-agents", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />


        <WorkflowDiagram
            title="The orchestrator, in plain English."
            description={`Fleetra is what makes four specialists feel like one system. A broker types one plain request and Fleetra decides which agents to involve, runs them in parallel, reconciles what they return into a single sourced answer, and stops at a human gate before anything leaves the building. The guardrails aren't prompts — they're edges in the graph.`}
            centerLabel="Fleetra Work flow"
            leftItems={[
                {
                title: "Plans the graph",
                description:
                    "One plain-language request is decomposed into the exact agent calls it needs.",
                },
                {
                title: "Fans out in parallel",
                description:
                    "Sentinel, Rate, Vault, and Tracker work the same load at the same time.",
                },
            ]}
            rightItems={[
                {
                title: "Merges to one answer",
                description:
                    "Four agent reports collapse into a single sourced recommendation — not four dashboards.",
                },
                {
                title: "Hosts the human gate",
                description:
                    "Every send, payment, and dispute halts at an approval node a person controls.",
                },
            ]}
            bottomItems={[
                {
                title: "Carries the sources",
                description: "Every claim in the merged answer traces back to the agent and record it came from.",
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
                image: "/images/rate-1.png",
                href: "/ai-agents/rate",
                title: "RATE",
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
            ]}
        />        
            <FaqAccordion
                sectionTitle="Fleetra, plainly."
                faqs={[
                    {
                    question: "What is Fleetra in Dollar Traq?",
                    answer:
                        "Fleetra is the orchestrator — the +1 in the 4+1 agent team. It plans each request, fans work out to Sentinel, Rate, Tracker, and Vault in parallel, merges their sourced answers into one recommendation, and hosts the human-approval gates.",
                    },
                    { question: "Does Fleetra ever take an action on its own?", answer: "No. Fleetra drafts and recommends, but every send, payment release, and dispute halts at a human-approval node built into the orchestration graph. A person always executes the final step." },
                    { question: "How is Fleetra different from the other four agents?", answer: "The four specialists each own a domain — trust, pricing, tracking, documents. Fleetra owns coordination: it decides which agents a request needs, runs them together, reconciles the results, and keeps the human in the loop." },
                ]}
            /> 
 
 

        </main>
    );
}