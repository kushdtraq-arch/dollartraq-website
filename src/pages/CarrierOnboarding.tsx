
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import IconFeatureGrid from "@/components/common/IconFeatureGrid";
import FeatureSplit from "@/components/common/FeatureSplit";
import Image from "next/image";

export default function CarrierOnboarding() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Onboard a carrier in minutes — verified to the payout."
                description="One link turns a cold carrier into a dispatch-ready, KYC-verified, payment-ready partner. Identity checks, facial liveness, CDL capture, and AI-read documents run automatically — then each carrier gets a login and a Stripe Express payout account wired straight to DT Pay."
                backgroundImageSrc="/images/carrier-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "DT Pay", href: "/product/dt-pay", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />
            <IconFeatureGrid
            title="Every carrier proves who they are — before the first load and the first dollar."
            description={`Onboarding isn't a form. It's the identity gate the whole quote-to-cash program depends on. Four checks run automatically, and anything uncertain routes to a human.`}
            columns={4}
            items={[
                {
                icon: "/images/kyc.svg",
                iconAlt: "Hourglass icon",
                title: "KYC",
                description:
                    "Business and officer identity verified against authoritative records — the same standard you'd expect before money moves.",
                },
                {
                icon: "/images/facial-liveness.svg",
                iconAlt: "Signal waves icon",
                title: "Facial liveness",
                description:
                    "A third-party liveness check confirms a real person, matched to their ID — not a photo, not a stolen credential.",
                },
                {
                icon: "/images/cdl-capture.svg",
                iconAlt: "Truck icon",
                title: "CDL capture",
                description:
                    "The driver's license is captured and read — class and expiry validated and filed to the carrier record.",
                },
                {
                icon: "/images/box.svg",
                iconAlt: "Package icon",
                title: "Stripe Express",
                description:
                    "A payout account is created and linked, so the moment a load delivers, DT Pay has somewhere verified to send the money.",
                },
            ]}
            />


            <FeatureSplit
                title="Your team reviews a packet — not chases one."
                description="Send the carrier a single onboarding link. As they complete it, Vault reads the W-9, authority letter, and COI; Sentinel clears identity and fraud; KYC, liveness, and CDL run in the background. What lands on your desk is a complete, verified file."
                bullets={["Documents classified and extracted on arrival — zero re-keying", "Certificate holder verified against your requirement profile","Hard stops on failed identity or lapsed coverage, before dispatch","The finished packet files itself to the carrier record — audit-ready"]}
                ctaLabel="See vetting & Trust Score →"
                ctaHref="/product/carrier-vetting"
                accentColor="#4A6BFC"
                cards={[
                    { title: "Minutes", description: "from cold carrier to dispatch- and payout-ready — not days of back-and-forth", variant: "accent" },
                    { title: "4", description: "automated identity checks: KYC, liveness, CDL, and payout account", variant: "muted" },
                    { title: "1", description: "link the carrier opens — everything else runs on its own", variant: "accent2" },
                    { title: "100%", description: "of payouts go to a KYC-verified carrier — no exceptions", variant: "muted" },
                ]}
            /> 
            <FeatureSection
                title="Carriers get a login of their own."
                description="Onboarding doesn't end at approval — it opens an account. Each carrier signs in to their own portal to see their loads, documents, and payment status, backed by the Stripe Express account created during onboarding. Fewer status calls for your team, more transparency for them."
                imagePosition="right"
                features={[
                    { text: "Track their loads in real time — the same timeline your team sees" },
                    {
                        text:
                        "Watch payment status— funded, verified, released — no more \"where's my money?\" calls",
                    },
                    {
                        text:
                        "Manage documents — renew a COI or update details without an email thread",
                    },
                    {
                        text:
                        "Stripe Express payouts — their verified account, their payout history, in one place",
                    },                    
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

            <FaqAccordion
                sectionTitle="KYC, liveness & payouts, plainly."
                faqs={[
                    {
                    question: "What identity checks do you run on a carrier?",
                    answer:
                        " During onboarding we run KYC on the business and its officers, a third-party facial liveness check to confirm a real person matched to their ID, and CDL capture with class and expiry validation. Results feed the carrier record, and anything uncertain is routed to a human rather than auto-approved.",
                    },
                    { question: "How does the liveness check work?", answer: "It's a facial liveness verification performed through a trusted third-party provider — confirming the person completing onboarding is live and present, and matches the identity document, rather than using a stolen photo or credential." },
                    { question: "What is a Stripe Express account and why do carriers need one?", answer: "Stripe Express is a payout account created for each carrier during onboarding. It's how DT Pay sends money to a verified destination the moment a delivery is confirmed and authorized — on regulated payment rails, with the carrier's payout history in their own portal." },
                    { question: "Do carriers get their own login?", answer: "Yes. Every onboarded carrier gets a portal login to track their loads, manage documents, and see payment status — backed by the Stripe Express account linked to DT Pay. It cuts down status calls and gives carriers a real reason to prefer your freight." },
                    { question: "How long does onboarding actually take?", answer: "For a prepared carrier, minutes. The link collects documents and runs KYC, liveness, and CDL capture in the background, so your team reviews a finished, verified file instead of chasing one over days." },                    
                ]}
            />  

            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Watch a carrier go from cold to payout-ready."
                description="On the demo we'll run a full onboarding — KYC, liveness, CDL, Stripe Express — and show you the carrier portal that opens at the end."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    
                ]}
            />   

        </main>
    );
}