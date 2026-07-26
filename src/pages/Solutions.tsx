
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Image from "next/image";

export default function AiAgentsPage() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                backgroundImageSrc="/images/hero-bg.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
            />

            <ProcessSteps
                sectionTitle="An assembly line for trust, not a chatbot with tools"
                sectionDescription="Every inbound event — an email, a document, a position ping, a typed command — lands on one event bus. Fleetra plans which agents the moment needs, runs them in parallel on shared memory, and merges one sourced answer. The division of labor is strict: Vault extracts, Sentinel judges; Rate computes, Fleetra delivers."
                steps={[
                    { title: "Shared memory", description: "One carrier record, one load timeline, one document index. An insight any agent produces is instantly available to all of them — no swivel-chair, no copy-paste.", icon: "/images/icon-1.svg" },
                    { title: "Guardrails as graph edges", description: "One carrier record, one load timeline, one document index. An insight any agent produces is instantly available to all of them — no swivel-chair, no copy-paste.", icon: "/images/icon-1.svg" },
                    { title: "Replayable sessions", description: "One carrier record, one load timeline, one document index. An insight any agent produces is instantly available to all of them — no swivel-chair, no copy-paste.", icon: "/images/icon-1.svg" },
                ]}
            />
            <FeatureSection
                title="Sentinel"
                description="Every carrier that qualifies was profiled, authority current, and fully insured. Funds move only after proof lines up — no exceptions and no manual overrides."
                imagePosition="right"
                features={[
                    { text: "Every carrier verified — authority checked, not assumed." },
                    {
                        text:
                        "Quote-to-book, funded fast — cleared before the paperwork ages.",
                    },
                    {
                        text:
                        "Every release logged — nothing moves against an unverified claim.",
                    },
                ]}
                ctas={[
                    { label: "Get Started", href: "/get-started", variant: "secondary" },
                    { label: "Book a Demo", href: "/demo", variant: "primary" },
                ]}
                visual={
                    /* Controlled height and aspect container to prevent the layout from blowing up */
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/Image-1.png"
                            alt="AI-powered task generator connected to your favorite integrations"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />
                    </div>
                }
            /> 

             <FeatureSection
                title="Rate"
                description="Every carrier that qualifies was profiled, authority current, and fully insured. Funds move only after proof lines up — no exceptions and no manual overrides."
                imagePosition="left"
                features={[
                    { text: "Every carrier verified — authority checked, not assumed." },
                    {
                        text:
                        "Quote-to-book, funded fast — cleared before the paperwork ages.",
                    },
                    {
                        text:
                        "Every release logged — nothing moves against an unverified claim.",
                    },
                ]}
                ctas={[
                    { label: "Get Started", href: "/get-started", variant: "secondary" },
                    { label: "Book a Demo", href: "/demo", variant: "primary" },
                ]}
                visual={
                   
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/Image-1.png"
                            alt="AI-powered task generator connected to your favorite integrations"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />
                    </div>
                }
            />  
            <FeatureSection
                title="Tracker"
                description="Every carrier that qualifies was profiled, authority current, and fully insured. Funds move only after proof lines up — no exceptions and no manual overrides."
                imagePosition="right"
                features={[
                    { text: "Every carrier verified — authority checked, not assumed." },
                    {
                        text:
                        "Quote-to-book, funded fast — cleared before the paperwork ages.",
                    },
                    {
                        text:
                        "Every release logged — nothing moves against an unverified claim.",
                    },
                ]}
                ctas={[
                    { label: "Get Started", href: "/get-started", variant: "secondary" },
                    { label: "Book a Demo", href: "/demo", variant: "primary" },
                ]}
                visual={
                    
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/Image-1.png"
                            alt="AI-powered task generator connected to your favorite integrations"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />
                    </div>
                }
            /> 

             <FeatureSection
                title="Vault"
                description="Every carrier that qualifies was profiled, authority current, and fully insured. Funds move only after proof lines up — no exceptions and no manual overrides."
                imagePosition="left"
                features={[
                    { text: "Every carrier verified — authority checked, not assumed." },
                    {
                        text:
                        "Quote-to-book, funded fast — cleared before the paperwork ages.",
                    },
                    {
                        text:
                        "Every release logged — nothing moves against an unverified claim.",
                    },
                ]}
                ctas={[
                    { label: "Get Started", href: "/get-started", variant: "secondary" },
                    { label: "Book a Demo", href: "/demo", variant: "primary" },
                ]}
                visual={
                    
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/Image-1.png"
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
                title="Bring five MC numbers Leave with the truth"
                description="See exactly how Sentinel scores a real carrier, how Compass coordinates the other agents, and how NorthPay releases funds against verified proof — live, on your data, in 20 minutes."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />   

        </main>
    );
}