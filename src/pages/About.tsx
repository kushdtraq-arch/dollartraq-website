
import React from "react";
import { Shield, UserCog, Clock, Gem, Lock, Table2 } from "lucide-react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import TrustFeatureGrid from "@/components/sections/TrustFeatureGrid";
import FeatureBentoGrid from "@/components/common/FeatureBentoGrid";
import Image from "next/image";

const TRUST_FEATURES = [
  { icon: <Shield size={20} />, title: "An FMCSA database we own", description: "We loaded FMCSA public data into our own warehouse and grew it to 22.7 million rows. Owning the data — not renting lookups — is what everything else stands on." },
  { icon: <UserCog size={20} />, title: "The Trust Score engine", description: "Exposure-normalized crash and violation math with confidence caps for thin-file carriers — a score built to survive scrutiny, not just to look reassuring." },
  { icon: <Clock size={20} />, title: "AI document verification", description: "Vault learned to read freight's paper — COIs, rate cons, BOLs, PODs — classify it, verify it, and file it, turning inbox chaos into structured facts." },
  { icon: <Gem size={20} />, title: "The 4+1 agent architecture", description: "The workflows consolidated into five clear roles on shared memory, with guardrails wired as graph edges and a human approval node on every consequential action." },
  { icon: <Lock size={20} />, title: "DT Pay", description: "The last piece: a payment rail on Stripe that releases only on verified delivery — turning all that verification into something money actually obeys." },
  { icon: <Table2 size={20} />, title: "Available to brokers", description: "Proven against real freight, the platform is available to US brokerages — with white-glove onboarding, live carrier vetting on your first call, and DT Pay ready to run." },
];

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            
            <HeroSplit
                title="Built by people who book freight."
                description="Dollar Traq didn't start in a lab. It started on a brokerage floor, with a founder tired of stitching four tools together to answer one question: can I trust this carrier with this load? "
                backgroundImageSrc="/images/about-banner.png"
                ctas={[]}
            />

            <FeatureBentoGrid
                sectionTitle={<>A live brokerage, not a<br />pitch deck.</>}
                sectionDescription="Dollar Traq was built by operators who have lived the freight desk. Every feature on this site was pressure-tested against real loads, real carriers, and real fraud attempts — before it was ever put in front of a customer. That's the difference you feel in the product: the roadmap comes from a dispatch desk under deadline, not a whiteboard. When Sentinel flags a nine-day-old domain, it's because that exact pattern tried to take a real load."
                cards={[
                    { title: "Operators first", description: "We are our own hardest customer. If a workflow annoys the people who actually run freight, it doesn't ship.", icon: "/images/Container.svg", background: "bg-[#3B34E0]", textVariant: "light" },
                    { title: "Incorporated in Wyoming", description: "US company, US freight focus, built for the American brokerage market and its regulations.", icon: "/images/Circle.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                    { title: "Honest by policy", description: "No invented testimonials, no borrowed logos, no stats we can't source. If it's on this site, we stand behind it.", icon: "/images/arrow-scale.svg", background: "bg-[#4CAF50]", textVariant: "light" },
                    { title: "Human-in-the-loop believers", description: "We think the right role for AI in freight is a tireless assistant that never gets the final say. The product enforces that view.", icon: "/images/multiple-circles.svg", background: "bg-[#EFEFEA]", textVariant: "dark" },
                ]}
            />
 
            <TrustFeatureGrid
                sectionTitle="How Dollar Traq came together."
                sectionDescription="The order matters — each layer made the next one possible. This is a real sequence, so it's numbered like one."
                ctaLabel="Security&Trust"
                ctaHref="/company/security-trust"                
                features={TRUST_FEATURES} 
            />  

            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Come see what a broker built for brokers."
                description="The demo is run by people who use this product to move real freight every day."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/company-trust", variant: "secondary" },
                ]}
            />   

        </main>
    );
}