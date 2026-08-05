
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import FeatureSplit from "@/components/common/FeatureSplit";
import Image from "next/image";

export default function ProductVet() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Vet any carrier in seconds on data you can audit"
                description="Dollar Traq vets carriers against a 22.7-million-row FMCSA warehouse we host ourselves — authority history, inspections, out-of-service orders, insurance filings — and compresses it into one Trust Score built for a booking decision, not a research project."
                backgroundImageSrc="/images/vetting-banner.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Fraud prevention", href: "/product/fraud-prevention", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />

            <ProcessSteps
                sectionTitle="A number you can defend to a customer, an insurer, or a courtroom"
                sectionDescription={`Most "carrier scores" are black boxes. Ours is math you can inspect — and it's deliberately hard to game.`}
                steps={[
                    { title: "Exposure-normalized", description: "Crashes and violations are weighed against fleet size and miles of exposure. A two-truck carrier with one incident isn't scored like a 500-truck fleet with one incident.", icon: "/images/exposure-normalized.svg" },
                    { title: "Confidence caps", description: "Thin-file carriers — new authorities, few inspections — can't earn a top score on absence of evidence. Low data means a capped score and an honest confidence label.", icon: "/images/confidence-caps.svg" },
                    { title: "Hard stops", description: "Some things aren't a weighting question. Lapsed insurance, out-of-service orders, and failed identity checks stop the workflow regardless of the composite number.", icon: "/images/hard-stop.svg" },
                ]}
            />

            <FeatureSplit
                title="Vetting that meets the work where it happens."
                bullets={["Inbox vet cards— a carrier emails about a load and the card renders beside the message: score, authority, insurance, fraud chips", "Command vetting — type \"vet MC-123456\" to Fleetra, get the full profile with sources in seconds","Batch CSV — upload your whole carrier list, get back a scored sheet with flags and affected-load notes","Recent-search enrichment — carriers you've been working keep a live rating and last-quoted rate pinned"]}
                ctaLabel=""
                ctaHref=""
                accentColor="#4A6BFC"
                cards={[
                    { title: "22.7M", description: "FMCSA rows self-hosted — carriers, authority history, inspections, OOS orders, insurance", variant: "accent" },
                    { title: "500+", description: "Carriers vetted in one CSV upload — scored, flagged, returned as a working sheet", variant: "muted" },
                    { title: "24/7", description: "Network watch after you book — authority flips and insurance lapses alert you with affected loads", variant: "accent2" },
                    { title: "1", description: "Screen. Score, evidence, and history in one card — no tab-hopping across government sites", variant: "muted" },
                ]}
            />            
            <FeatureSection
                title="From who are you? to dispatch-ready in minutes."
                description="Send the carrier one link. Vault collects and reads the W-9, authority letter, and COI as they arrive; Sentinel clears identity and fraud signals; your packet requirements are enforced automatically. Your team reviews a finished file — with anything uncertain routed to a human, never guessed."
                imagePosition="right"
                features={[
                    { text: "Documents classified and extracted on arrival — zero re-keying" },
                    {
                        text:
                        "Certificate holder verified against your own requirement profile",
                    },
                    {
                        text:
                        "Hard stops on lapsed coverage or failed identity, before the first load",
                    },
                    {
                        text:
                        "The finished packet files itself to the carrier record — audit-ready",
                    },
                ]}

                visual={
                   
                    <div className="relative w-full max-w-lg aspect-[440/390] mx-auto md:ml-auto md:mr-0">
                        <Image
                            src="/images/home/onboard.png"
                            alt="AI-powered task generator connected to your favorite integrations"
                            fill
                            className="object-cover rounded-[12px]"
                            priority
                        />
                    </div>
                }
            />

            <FaqAccordion
                sectionTitle="Carrier vetting, plainly."
                faqs={[
                    {
                    question: "How is this different from checking SAFER myself?",
                    answer:
                        "SAFER shows you one carrier's current snapshot, one page at a time. Dollar Traq queries the full historical dataset — authority changes, inspection records, insurance filing history — joins it in one card, scores it with exposure-normalized math, and then keeps watching the carrier after you book. It's the difference between a lookup and a system.",
                    },
                    { question: "Do you rent your data from a vetting vendor?", answer: "No. We load FMCSA public data files directly into our own PostgreSQL warehouse — 22.7 million rows, refreshed on a rolling snapshot cycle. Owning the data is what lets us run monthly census diffs for chameleon detection and show provenance for every claim." },
                    { question: "Can a brand-new carrier get a good Trust Score?", answer: "Not automatically. New authorities have thin evidence, so the score is capped and labeled with its confidence level. That's deliberate: chameleon operations rely on fresh identities looking clean. A new carrier can still be onboarded — with eyes open and tighter controls." },
                ]}
            /> 
 
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Send us five MC numbers before the call."
                description="We'll have the vet cards on screen when you join — your carriers, our data, live. You keep the report either way."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />   

        </main>
    );
}