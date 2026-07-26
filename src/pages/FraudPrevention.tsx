
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureSplit from "@/components/common/FeatureSplit";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import Image from "next/image";

export default function FraudPrevention() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Freight fraud has a pattern. Sentinel knows it."
                description="Double brokering, identity theft, and chameleon carriers cost the industry hundreds of millions a year — and they almost always announce themselves in small signals first. Sentinel reads every carrier email for those signals and diffs the entire FMCSA authority census every month to catch reincarnated bad actors."
                backgroundImageSrc="/images/fraud-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Carrier vetting", href: "/product/carrier-vetting", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}               
            />


            <FeatureSplit
                title="The $38,000 load that never moved."
                description="Summit Line Logistics emailed about an electronics load, Laredo to Memphis. Everything looked routine — until the scan came back:"
                bullets={["Domain registered nine days before the email", "Listed phone matched an MC revoked in February","Census diff: that MC's officer filed a new authority three weeks ago from the same address", ]}
                ctaLabel=""
                ctaHref=""
                accentColor="#4A6BFC"
                cards={[
                    { title: "Every", description: "carrier email scanned — not just the ones that \"feel off\"", variant: "accent" },
                    { title: "Monthly", description: "full-census authority diffs for reincarnation signals", variant: "muted" },
                    { title: "3+", description: "independent evidence lines behind a fraud flag — never a vibe", variant: "accent2" },
                    { title: "100%", description: "of flags resolved by a human, with the decision logged", variant: "muted" },
                ]}
            /> 

            <ProcessSteps
                sectionTitle="Three fraud patterns. Three counters. Every email, every month."
                sectionDescription={`Most "carrier scores" are black boxes. Ours is math you can inspect — and it's deliberately hard to game.`}
                steps={[
                    { title: "Identity impersonation", description: "A scammer poses as a legitimate carrier — new domain, spoofed signature, a phone number that doesn't match the MC. Counter: every inbound carrier email is scanned for domain age, lookalike domains, phone-vs-FMCSA mismatch, and signature-vs-MC conflicts. Risk chips render on the vet card before anyone replies.", icon: "/images/icon-1.svg" },
                    { title: "Chameleon carriers", description: "An operator with revoked authority re-registers under a fresh MC — clean record, same people. Counter: monthly diffs of the FMCSA authority census surface reincarnation signals: shared officers, addresses, and phones with revoked authorities. Fresh paint doesn't hide old plates.", icon: "/images/transit.svg" },
                    { title: "Double brokering", description: "Your load gets re-tendered to an unknown carrier and the money vanishes in the middle. Counter: identity resolution on every touchpoint, ELD tracking that must match the vetted carrier, and DT Pay releases that require verified delivery by the party you actually booked.", icon: "/images/upload.svg" },
                ]}
            />

            <FaqAccordion
                faqs={[
                    {
                    question: "What exactly is Dollar Traq?",
                    answer:
                        "Dollar Traq is an operating system for freight brokerages — carrier vetting, fraud detection, load tracking, and payment, unified behind one set of AI agents instead of four separate tools.",
                    },
                    { question: "How does carrier vetting work?", answer: "Dollar Traq is an operating system for freight brokerages — carrier vetting, fraud detection, load tracking, and payment, unified behind one set of AI agents instead of four separate tools." },
                    { question: "Is my data secure?", answer: "Dollar Traq is an operating system for freight brokerages — carrier vetting, fraud detection, load tracking, and payment, unified behind one set of AI agents instead of four separate tools." },
                ]}
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