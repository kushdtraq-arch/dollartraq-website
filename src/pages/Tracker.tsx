
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

export default function Tracker() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Tracker"
                description="Tracker fuses live ELD position, geofences, and the status language buried in carrier emails into one load timeline — then acts on it: late risk predicted hours early, check-calls drafted, 214-shaped webhooks pushed to your customer's TMS."
                backgroundImageSrc="/images/tracker-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"  
                ctas={[
                    { label: "Meet the 4+1", href: "/ai-agents", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />


        <WorkflowDiagram
            title="One job, owned end to end"
            description={`Tracker is visibility that does something. The moment Vault files a signed rate confirmation, tracking starts on its own — no setup task, no forgotten load — and the ETA is continuously tested against the appointment so an exception surfaces hours before the missed dock, not after.`}
            centerLabel="Tracker Work flow"
            leftItems={[
                {
                title: "Auto-initiation",
                description:
                    "A signed rate con lands and tracking starts automatically — nothing to configure per load.",
                },
                {
                title: "ELD + email fusion",
                description:
                    "Live position and the status language inside carrier emails merge into one timeline.",
                },
            ]}
            rightItems={[
                {
                title: "Late-risk prediction",
                description:
                    "ETA tested against appointments continuously; a slip is flagged hours before the dock.",
                },
                {
                title: "Drafted check-calls",
                description:
                    "Carrier check-in and customer heads-up written and queued for one-tap send.",
                },
            ]}
            bottomItems={[
                {
                title: "214 webhooks",
                description: "Status pushed to your customer's TMS in a 214-shaped webhook.",
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
                title: "Rate",
                subtitle: "Price the load",
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
                sectionTitle="Tracker, plainly."
                faqs={[
                    {
                    question: "How does Tracker know where a load is?",
                    answer:
                        "Tracker fuses live ELD position and geofence crossings with the status language inside carrier emails into a single load timeline, so visibility doesn't depend on any one source.",
                    },
                    { question: "Does Tracker integrate with my TMS?", answer: "Yes. Tracker pushes load status to your customer's TMS as 214-shaped webhooks, and tracking starts automatically the moment a signed rate confirmation is filed." },
                    { question: "How early can Tracker predict a late delivery?", answer: "Tracker continuously tests the ETA against the delivery appointment and can flag a slip hours before the missed dock — in one real example, 92 minutes of delay was surfaced two hours early." },
                ]}
            /> 
 
 

        </main>
    );
}