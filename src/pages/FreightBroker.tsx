
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import Image from "next/image";

export default function FreightBroker() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="The whole desk, on one system."
                description="Dollar Traq is built for the brokerage desk first. One rep can vet a carrier, price the lane, book the load, track it to the dock, and release payment on verified delivery — without leaving the queue or stitching four tools together."
                backgroundImageSrc="/images/freight-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                
            />

            <ProcessSteps
                columns={2}
                sectionTitle="Built around how you actually work."
                sectionDescription={`Brokers are the core use case, not an afterthought. Every agent, every guardrail, and the DT Pay rail were designed around the way a booking desk actually works: fast carrier decisions, defensible pricing, real-time visibility, and payment that only moves when delivery is proven.`}
                steps={[
                    { title: "Vet in seconds", description: "A 22.7M-row FMCSA warehouse and a Trust Score you can defend — carrier decisions without the wait.", icon: "/images/vet-in-sec.svg" },
                    { title: "Price with memory", description: "Rate benchmarks every quote against your own lane history and DAT under your license.", icon: "/images/price-with-memory.svg" },
                    { title: "Track without calls", description: "Tracker fuses ELD and email into one timeline and drafts the check-calls for you.", icon: "/images/track-without-calls.svg" },
                    { title: "Pay on delivery", description: "DT Pay releases funds in ~90 seconds on verified POD — flat 1.2%, human-authorized.", icon: "/images/pay-on-delivery.svg" },
                ]}
            />

            <FaqAccordion
                sectionTitle="Questions from freight brokers."
                faqs={[
                    {
                    question: "How does Dollar Traq help a freight brokerage specifically?",
                    answer:
                        "It unifies carrier vetting, fraud detection, insurance verification, load tracking, and DT Pay conditional payment release on one platform — so a broker can vet, book, track, and pay from one queue, with a human approving every consequential action.",
                    },
                    { question: "Do I have to replace my TMS to use Dollar Traq?", answer: "No. Dollar Traq runs alongside your existing stack, connects to Gmail or Outlook, and pushes 214-shaped status webhooks into your TMS." },
                    { question: "How fast can a broker vet a carrier?", answer: "In seconds. Carriers are checked against Dollar Traq's self-hosted 22.7-million-row FMCSA warehouse and scored with a defensible, exposure-normalized Trust Score." },
                ]}
            /> 
 
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Bring five MC numbers. Leave with the truth."
                description="Book a 25-minute demo and we'll vet your own carriers live — authority, insurance, Trust Score, fraud signals. You keep the report either way."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />   

        </main>
    );
}