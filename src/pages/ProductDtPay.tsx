
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import LifecycleTimeline from "@/components/common/LifecycleTimeline";
import FeatureSplit from "@/components/common/FeatureSplit";
import Image from "next/image";

export default function ProductDtPay() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Payment that releases on proof, not on promises."
                description="DT Pay is the cash end of a quote-to-cash program — conditional payment release for freight, built on Stripe rails. Every carrier is KYC-verified at onboarding; the load is funded before pickup; the AI verifies the proof of delivery; a human authorizes — and the carrier is paid in about 90 seconds. Flat 1.2% for subscribers. No factoring games, no 30–90 day waits."
                backgroundImageSrc="/images/dt-pay-banner.png"
                mediaSrc="/dt-pay.webm"
                mediaWidth={1280}
                mediaHeight={678} 
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Pricing", href: "/pricing", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}
            />


            <LifecycleTimeline
                title="DT Pay is the last mile of a verified lifecycle."
                description="Payment isn't a bolt-on. It's the payoff of everything the platform already verified — the carrier's identity, the coverage, the delivery. Here's the full path a dollar travels."
                steps={[
                    { label: "Carrier vetted", description: "Change history + Trust Score clear the carrier before you book." },
                    { label: "KYC onboarded", description: "Identity, liveness, and CDL verified; Stripe Express account created." },
                    { label: "Load funded", description: "Broker commits carrier pay up front — payment visibly secured." },
                    { label: "Delivered & verified", description: "Tracked to the dock; POD AI-verified against the load." },
                    { label: "Paid in ~90s", description: "Human authorizes; funds land in the verified Stripe Express account." },
                ]}
            />
            <ProcessSteps
                sectionTitle="Six steps from tender to paid."
                sectionDescription="Watch the sequence — step five is the point: the release physically halts until a person on your team taps authorize."
                steps={[
                    { title: "Load funded", description: "Broker commits the carrier pay up front. Carrier is notified: payment secured.", icon: "/images/icon-1.svg" },
                    { title: "In Transit", description: "Tracker follows the load via ELD; geofence armed at the receiver.", icon: "/images/transit.svg" },
                    { title: "POD uploaded", description: "Driver submits the signed BOL, photo evidence, GPS timestamp.", icon: "/images/upload.svg" },
                    { title: "AI Verifies", description: "Vault reads the document — signature, address, timestamp matched to the load.", icon: "/images/ai-verifies.svg" },
                    { title: "Human Authorise", description: "The graph halts at an approval node. Your ops taps to release.", icon: "/images/human-authorize.svg" },
                    { title: "Released - 90s", description: "Funds land with the carrier. Receipts and audit trail to both sides.", icon: "/images/released.svg" },
                ]}
            />
            <FeatureSplit
                title="Vetting tells you. DT Pay enforces."
                description="A monitoring report is a snapshot of yesterday. When the same system that vets the carrier and reads the paperwork also holds the release button, trust stops being a PDF and becomes a condition money actually obeys."
                bullets={["For brokers: you pay on verified delivery — the wrong carrier can't collect on a load that didn't land", "For carriers:payment is visibly secured before pickup, and it arrives in seconds, not statements — a real reason to haul your freight first","TFor disputes: every release carries its evidence — the POD, the verification, the approval, timestamped", ]}
                ctaLabel=""
                ctaHref=""
                accentColor="#4A6BFC"
                cards={[
                    { title: "Full order-to-cash", description: "Run the complete lifecycle — onboarding → tracking → verified payment — on one platform, one fee.", variant: "accent" },
                    { title: "One-time invoices", description: "Pay a single carrier invoice through DT Pay without full onboarding. Any carrier, any amount.", variant: "muted" },
                    { title: "Protection when trust is thin", description: "New carrier relationship? Funds held on neutral rails until delivery is verified protects both sides.", variant: "accent2" },
                    { title: "Identity-verified rails", description: "Carriers complete KYB-grade identity checks before their first payout — fraud can't cash out here.", variant: "muted" },
                ]}
            /> 

            <FeatureSection
                title="Every payout goes to a verified carrier."
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

                visual={
                   
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/page-dt-pay-graphic.png"
                            alt="AI-powered task generator connected to your favorite integrations"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />
                    </div>
                }
            /> 
        </main>
    );
}