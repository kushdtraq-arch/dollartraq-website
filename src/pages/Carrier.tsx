
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import Image from "next/image";

export default function Carrier() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Onboard once. Get paid in ~90 seconds."
                description="For carriers, Dollar Traq means one clean onboarding, a portal of your own, and payment in about 90 seconds on verified delivery — not net-30. Identity is verified once, and a Stripe Express account is ready before your first load delivers."
                backgroundImageSrc="/images/carrier-banner-1.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                
            />

            <ProcessSteps
                columns={2}
                sectionTitle="Built around how you actually work."
                sectionDescription={`Carriers get the other side of the trust equation: a single onboarding link instead of a fax-and-wait, a portal to track loads and payments, and DT Pay releasing funds in about 90 seconds once delivery is verified. Get verified once, then focus on driving — not chasing invoices.`}
                steps={[
                    { title: "One-link onboarding", description: "KYC, facial liveness, and CDL capture in minutes — done once, not per broker.", icon: "/images/one-link-onboarding.svg" },
                    { title: "Your own portal", description: "Track loads, manage documents, and watch payment status in one place.", icon: "/images/your-own-portal.svg" },
                    { title: "Stripe Express payouts", description: "A verified payout account created at onboarding, wired straight to DT Pay.", icon: "/images/stripe-express-payout.svg" },
                    { title: "Paid in ~90 seconds", description: "On verified delivery, funds land fast — no net-30, no factoring games.", icon: "/images/paid-in-90.svg" },
                ]}
            />

            <FaqAccordion
                faqs={[
                    {
                    question: "How does a carrier get paid through Dollar Traq?",
                    answer:
                        "Through DT Pay: once delivery is verified and a human authorizes the release, funds land in the carrier's Stripe Express account in about 90 seconds — not net-30.",
                    },
                    { question: "What does carrier onboarding involve?", answer: "A single link that runs KYC, a facial liveness check, and CDL capture in minutes, then creates a Stripe Express payout account — done once rather than repeated for every broker." },
                    { question: "Do carriers get access to track their own loads and payments?", answer: "Yes. Every onboarded carrier gets a portal login to track loads, manage documents, and see payment status, backed by the Stripe Express account created during onboarding." },
                ]}
            /> 
 
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Onboard once. Get paid fast."
                description="On the demo we'll run a full carrier onboarding — KYC, liveness, CDL, Stripe Express — and show the ~90-second payout on verified delivery."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />   

        </main>
    );
}