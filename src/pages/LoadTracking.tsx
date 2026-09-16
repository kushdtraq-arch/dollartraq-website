
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FaqAccordion from "@/components/sections/FaqAccordion";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import IconFeatureGrid from "@/components/common/IconFeatureGrid";
import Image from "next/image";

export default function LoadTracking() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Visibility that acts, not just watches."
                description="Tracker fuses live ELD position, geofences, and the status language inside carrier emails into one load timeline — then does something about it: late risk predicted hours early, check-calls drafted for one-tap sending, and 214-shaped webhooks keeping your customer's TMS current without a phone call."
                backgroundImageSrc="/images/load-banner.png"
                mediaSrc="/load-tracking.webm"
                mediaWidth={1280}
                mediaHeight={678}   
                mediaAlt="Dollar Traq Control Tower dashboard"
                ctas={[
                    { label: "Meet Tracker", href: "/ai-agents/tracker", variant: "primary" },
                    { label: "Book a Demo", href: "/demo", variant: "secondary" },
                ]}                
            />
            <IconFeatureGrid
                title="From signed rate con to closed delivery — hands off, eyes on."
                description={`Most "carrier scores" are black boxes. Ours is math you can inspect and it's deliberately hard to game.`}
                columns={4}
                items={[
                    {
                    icon: "/images/load-auto-initation.svg",
                    iconAlt: "Hourglass icon",
                    title: "Auto-initiation",
                    description:
                        "The moment Vault files a signed rate con, tracking starts. No setup task, no forgotten load.",
                    },
                    {
                    icon: "/images/load-fused-timline.svg",
                    iconAlt: "Signal waves icon",
                    title: "Fused timeline",
                    description:
                        "ELD pings, geofence events, and carrier-email status language merge into one truth per load.",
                    },
                    {
                    icon: "/images/load-risk-model.svg",
                    iconAlt: "Truck icon",
                    title: "Late-risk model",
                    description:
                        "ETA continuously tested against appointments. A 92-minute slip gets flagged two hours before it becomes a missed dock.",
                    },
                    {
                    icon: "/images/drafted-response.svg",
                    iconAlt: "Package icon",
                    title: "Drafted responses",
                    description:
                        "Carrier check-in and customer heads-up written and queued. Your team sends both with one tap — and stays in control.",
                    },
                ]}
            />


            <FeatureBentoGrid
                sectionTitle={<>Plugged into the truck<br />and the TMS.</>}
                sectionDescription="Position data comes straight from the ELD; status flows straight to your customer's system. Honest states, always:"
                cards={[
                    { title: "2 hrs", description: "early warning in our reference exception — before the truck would've been late", icon: "/images/Container.svg", background: "bg-[#3B34E0]", textVariant: "light" },
                    { title: "0", description: "check calls your customer has to make when 214-shaped webhooks feed their TMS", icon: "/images/Circle.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                    { title: "1", description: "timeline per load — ELD, geofence, and email status fused, not scattered", icon: "/images/arrow-scale.svg", background: "bg-[#4CAF50]", textVariant: "light" },
                    { title: "100%", description: "of outbound messages human-approved — drafted by AI, sent by your team", icon: "/images/multiple-circles.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                ]}
            />

 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Your next exception, handled before the phone rings."
                description="Bring a live load to the demo and watch Tracker build its timeline in front of you."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                   
                ]}
            />   

        </main>
    );
}