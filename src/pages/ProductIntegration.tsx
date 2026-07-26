
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import LifecycleTimeline from "@/components/common/LifecycleTimeline";
import IntegrationCategories from "@/components/common/IntegrationCategories";
import Image from "next/image";

export default function ProductIntegration() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Fits your stack. Doesn't replace it."
                description="Dollar Traq connects to the tools your desk already runs — your inbox, your ELDs, your rate data, your TMS, and Stripe — and adds the layer that vets, verifies, tracks, and pays. No rip-and-replace."
                backgroundImageSrc="/images/integration-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "See the platform", href: "/product/platform-overview", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}
            />
            <IntegrationCategories
                columns={3}
                categories={[
                    {
                    title: "ELD & telematics",
                    icon: "/images/icon-1.svg",
                    items: [
                        { name: "Motive", description: "Live position and hours feed Tracker for real-time load visibility." },
                        { name: "Samsara", description: "ELD position and geofence data fused into the load timeline." },
                    ],
                    },
                    {
                    title: "Inbox & messaging",
                    icon: "/images/icon-1.svg",
                    items: [
                        { name: "Gmail", description: "Carrier emails vetted inline; vet cards render where you already work." },
                        { name: "Microsoft Outlook", description: "Same inbound vetting and drafting inside Outlook." },
                        { name: "Microsoft Teams", description: "Alerts and approvals posted where your team lives." },
                    ],
                    },
                    {
                    title: "TMS",
                    icon: "/images/icon-1.svg",
                    items: [
                        { name: "McLeod", description: "Certification in progress; status and documents flow into your TMS." },
                        { name: "Turvo", description: "214-shaped status webhooks push load milestones automatically." },
                        { name: "EDI 214", description: "Standard 214 status messages mapped for customer TMS integration." },
                    ],
                    },                    
                    {
                    title: "Rate & market data",
                    icon: "/images/icon-1.svg",
                    items: [
                        { name: "DAT RateView", description: "Benchmark quotes against the market under your own license (BYO)." },
                       
                    ],
                    },
                    {
                    title: "Payments",
                    icon: "/images/icon-1.svg",
                    items: [
                        { name: "Stripe", description: "DT Pay runs on Stripe's regulated rails; carriers paid via Stripe Express." },
                        
                    ],
                    },
                    {
                    title: "Carrier data",
                    icon: "/images/icon-1.svg",
                    items: [
                        { name: "FMCSA", description: "22.7M rows loaded directly into our own PostgreSQL warehouse — not rented." },
                        
                    ],
                    },                                        
                ]}
            />
            <FaqAccordion
                sectionTitle="Integration questions."
                faqs={[
                    {
                    question: "Does Dollar Traq replace my TMS?",
                    answer:
                        "No. Dollar Traq runs alongside your existing stack and pushes 214-shaped status webhooks into your TMS. McLeod certification is in progress, and an EDI 214 rail is mapped for customer integrations.",
                    },
                    { question: "Which ELD providers does Dollar Traq support?", answer: "Tracker fuses live ELD position and geofence data — including from Motive and Samsara — with carrier email status into one load timeline." },
                    { question: "Does Dollar Traq connect to my email?", answer: "Yes. Dollar Traq connects to Gmail and Microsoft Outlook so carrier vetting and drafting happen inline where your team already works, with alerts available in Microsoft Teams." },
                    { question: "What payment rails does DT Pay use?", answer: "DT Pay runs on Stripe's regulated payment infrastructure, paying carriers through Stripe Express accounts. Dollar Traq is not a bank or factor and does not take custody of funds." },
                    { question: "Where does carrier data come from?", answer: "Directly from FMCSA public data files loaded into Dollar Traq's own PostgreSQL warehouse — 22.7 million rows, refreshed on a rolling snapshot cycle, rather than rented from an aggregator." },                    
                ]}
            /> 
 
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Bring your stack to the demo."
                description="Tell us what you run today — inbox, ELD, TMS — and we'll show exactly how Dollar Traq slots in alongside it."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            /> 

        </main>
    );
}