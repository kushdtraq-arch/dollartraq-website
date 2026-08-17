
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import Image from "next/image";

const SHIPPER_FAQS = [
    {
        question: "How does Dollar Traq help shippers?",
        answer:
            "It replaces a broker's verbal assurance with verified proof: KYC-checked carrier identity, insurance limits and holder verified against your requirements, and a GPS-stamped, AI-verified proof of delivery — all auditable.",
    },
    {
        question: "Can shippers set their own carrier requirements?",
        answer:
            "Yes. Your requirements flow into the vetting profile, and Vault checks each carrier's insurance limits and certificate holder against them per equipment type.",
    },
    {
        question: "How does Dollar Traq verify a load was actually delivered?",
        answer:
            "Delivery is confirmed by a GPS-stamped proof of delivery that is AI-verified against the load — the same POD that releases payment through DT Pay.",
    },
];

const SHIPPER_FAQ_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://dollartraq.com/solutions/shippers#faq",
    mainEntity: SHIPPER_FAQS.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
        },
    })),
};

export default function Shipper() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Proof of who's really hauling your freight."
                description="Shippers care about one thing: is the carrier on my freight who they claim to be, and are they covered? Dollar Traq turns that from a broker's word into verified proof — identity, insurance, and delivery, checked and on the record."
                backgroundImageSrc="/images/shipper-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                
            />

            <ProcessSteps
                columns={2}
                sectionTitle="Built around how you actually work."
                sectionDescription={`For shippers, trust usually stops at a broker's assurance. Dollar Traq lets your requirements flow into the vetting profile and gives you verified evidence instead of vouching — the same identity, insurance, and delivery verification the broker's desk runs, visible as proof rather than a promise.`}
                steps={[
                    { title: "Verified identity", description: "Carriers are KYC-verified with a facial liveness check — a real, resolved entity, not a claim.", icon: "/images/verified-identity.svg" },
                    { title: "Confirmed coverage", description: "Vault reads the COI and checks limits and holder against your requirements per equipment type.", icon: "/images/confirmed-coverage.svg" },
                    { title: "Proven delivery", description: "A GPS-stamped, AI-verified POD confirms the freight was delivered as agreed.", icon: "/images/box.svg" },
                    { title: "On the record", description: "Every check is auditable — proof you can point to, not a phone call you have to trust.", icon: "/images/on-the-record.svg" },
                ]}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(SHIPPER_FAQ_SCHEMA) }}
            />
            <FaqAccordion
                sectionTitle="Questions from shippers."
                faqs={SHIPPER_FAQS}
            />
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Know exactly who's on your freight."
                description="On the demo we'll show the identity, insurance, and delivery proof a shipper can rely on — verified, not vouched."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />   

        </main>
    );
}