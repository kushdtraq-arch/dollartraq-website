
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import WorkflowDiagram from "@/components/common/WorkflowDiagram";
import Image from "next/image";
const PL_FORWARDERS_FAQS = [
    {
        question: "How does Dollar Traq work for a 3PL with multiple branches?",
        answer:
            "It gives every desk the same Trust Score standard, the same document verification bar, and the same audit trail, with role-based access so each branch only sees its own carriers and data — one consistent compliance picture across the network.",
    },
    {
        question: "Can different desks be kept separate in Dollar Traq?",
        answer:
            "Yes. Role-based access control filters every answer so each branch sees only its own carriers, loads, and documents, while leadership retains a consistent view across all of them.",
    },
    {
        question: "Is carrier vetting consistent across offices?",
        answer:
            "Yes. Every office scores carriers with the same exposure-normalized Trust Score against the same self-hosted FMCSA warehouse, so decisions hold to one standard regardless of desk.",
    },
];

const PL_FORWARDERS_FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://dollartraq.com/solutions/3pls-forwarders#faq",
    mainEntity: PL_FORWARDERS_FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
        },
    })),
};

export default function PlForwards() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="One standard of trust, every branch."
                description="For 3PLs and forwarders running multiple desks, Dollar Traq gives every office the same Trust Score math, the same document standard, and the same audit trail — with role-based access so each branch sees only its own carriers and data."
                backgroundImageSrc="/images/3pl-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                
            />

            <FeatureBentoGrid
                sectionTitle={<>Built around how you<br />actually work.</>}
                sectionDescription="Scaling compliance across desks is a governance problem, not just a tooling one. Dollar Traq standardizes how every branch vets, verifies, and pays — so a carrier decision in one office holds to the same bar as another, and leadership gets one consistent, auditable picture across the network."
                cards={[
                    { title: "Consistent standard", description: "Every desk scores carriers with the same exposure-normalized Trust Score — no branch-by-branch drift.", icon: "/images/Container.svg", background: "bg-[#3B34E0]", textVariant: "light" },
                    { title: "Role-based access", description: "RBAC filters every answer; each branch sees only its own carriers, loads, and documents.", icon: "/images/Circle.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                    { title: "One document bar", description: "Vault applies the same COI and holder-verification standard across every office.", icon: "/images/arrow-scale.svg", background: "bg-[#4CAF50]", textVariant: "light" },
                    { title: "Auditable everywhere", description: "Checkpointed, replayable sessions give leadership one consistent trail across the network.", icon: "/images/multiple-circles.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                ]}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(PL_FORWARDERS_FAQ_SCHEMA) }}
            />
            <FaqAccordion
                sectionTitle="Questions from 3pls & forwarders."
                faqs={PL_FORWARDERS_FAQS}
            />
 
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Standardize trust across every desk."
                description="On the demo we'll show how one Trust Score standard, RBAC, and a shared audit trail work across multiple branches."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />   

        </main>
    );
}