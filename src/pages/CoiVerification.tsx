
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import FeatureSplit from "@/components/common/FeatureSplit";
import IconFeatureGrid from "@/components/common/IconFeatureGrid";
import Image from "next/image";

export default function CoiVerification() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Certificates that read themselves — and never lapse quietly."
                description="Vault turns insurance paperwork into verified facts: every certificate of insurance entering a connected inbox is classified, extracted, checked against your requirements, filed to the right carrier — and watched until renewal. 350,000+ carrier insurance records already on file."
                backgroundImageSrc="/images/coi-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Meet Vault", href: "/ai-agents/vault", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />

            <FeatureBentoGrid
                sectionTitle={<>Parsed is not the same<br />as verified.</>}
                sectionDescription="Plenty of tools can OCR a certificate. Verification means checking the facts against your requirements — and refusing to guess."
                cards={[
                    { title: "Coverage lines", description: "Auto liability, cargo, general liability — limits extracted and compared against your minimums per equipment type.", icon: "/images/Container.svg", background: "bg-[#3B34E0]", textVariant: "light" },
                    { title: "Certificate holder", description: "Is your company actually named? Holder mismatches are one of the most common — and most expensive — silent failures.", icon: "/images/Circle.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                    { title: "Dates & carriers of record", description: "Effective and expiry dates, producing agent, underwriting insurer — cross-checked against FMCSA insurance filings.", icon: "/images/arrow-scale.svg", background: "bg-[#4CAF50]", textVariant: "light" },
                    { title: "Confidence scores", description: "Every extracted field carries a confidence score. Low confidence routes to a human for review — the system never guesses on coverage.", icon: "/images/multiple-circles.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                ]}
            />

            <FeatureSplit
                title="The lapsed policy that used to slip through."
                description="A carrier's policy expires Friday. Vault has watched the date since the certificate was filed:"
                bullets={["T-15:renewal request drafted for the carrier — your rep clicked send", "T-7:no certificate yet — escalation raised, dispatch warned","Thursday:new certificate arrives — parsed, holder verified, filed, watch re-armed", ]}
                ctaLabel=""
                ctaHref=""
                accentColor="#4A6BFC"
                cards={[
                    { title: "350K+", description: "carrier insurance records on file and AI-verified", variant: "accent" },
                    { title: "T-15", description: "days before expiry: renewal draft prepared automatically", variant: "muted" },
                    { title: "T-7", description: "days: escalation raised and dispatch put on notice", variant: "accent2" },
                    { title: "0", description: "loads dispatched against knowingly lapsed coverage — hard stop, not a warning", variant: "muted" },
                ]}
            /> 

 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="How many of your COIs would fail the holder check?"
                description="Most brokerages find out the hard way. Send a sample batch and we'll show you — verified, flagged, and filed — on your demo."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />   

        </main>
    );
}