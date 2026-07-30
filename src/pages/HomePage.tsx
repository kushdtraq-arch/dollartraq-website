
import React from "react";

import {
    ArrowDown,
    Droplet,
    CloudCog,
    UserRound,
    Database,
    Network,
    Cable,
    TrendingUp,
    PieChart,
    Gauge,ShieldCheck, UserPlus, Navigation, Eye, Wallet, Settings, BookOpen,Shield, UserCog, Clock, Gem, Lock, Table2,   Coins,
    RefreshCw,
    UploadCloud,
    BadgeCheck, CheckCircle2

} from "lucide-react";
import Image from "next/image";

import Hero from "@/components/common/Hero";
import LogoCloud from "@/components/common/LogoCloud";
import SectionHeader from "@/components/common/SectionHeader";
import StatsSection from "@/components/common/StatsSection";
import FeatureGrid, { FeatureItem } from "@/components/common/FeatureGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PerformanceFeatures from "@/components/sections/PerformanceFeature";
import PricingSection, { PricingPlan } from "@/components/sections/PricingSection";
import TestimonialsSection, { Testimonial } from "@/components/sections/TestimonialSection";
import BlogSection, { BlogPost } from "@/components/sections/BlogSection";
import ScrollingSteps from "@/components/sections/ScrollingSteps";
import FeatureSection from "@/components/sections/FeatureSection";
import ValueGrid from "@/components/sections/ValueGrid";
import TabbedFeatureSection, { TabItem } from "@/components/sections/TabbedFeatureSection";
import ProcessSteps from "@/components/sections/ProcessSteps";
import TrustFeatureGrid from "@/components/sections/TrustFeatureGrid";
import FaqAccordion from "@/components/sections/FaqAccordion";
import AppShowcaseSection from "@/components/sections/AppShowcase";
import ScenarioGrid from "@/components/sections/ScenarioGrid";
import CtaBannerSection from "@/components/common/CtaBanner";



const PRICING_PLANS: PricingPlan[] = [
    {
        id: "start",
        name: "Start",
        price: "$499",
        priceSuffix: "/mo",
        description: "Perfect for growing regional logistics teams needing basic oversight.",
        features: [
            { label: "500 Active Assets", icon: "check" },
            { label: "Standard Analytics", icon: "check" },
            { label: "Email Support", icon: "check" },
        ],
        ctaLabel: "Choose Basic",
        href: "/checkout/start",
    },
    {
        id: "growth",
        name: "Growth",
        price: "$1,299",
        priceSuffix: "/mo",
        description: "For mid-to-large enterprises seeking absolute automated intelligence.",
        features: [
            { label: "Unlimited Assets", icon: "checkCircle2" },
            { label: "Predictive AI Tools", icon: "checkCircle2" },
            { label: "24/7 Priority Access", icon: "checkCircle2" },
            { label: "Custom API Hooks", icon: "checkCircle2" },
        ],
        ctaLabel: "Get Started Pro",
        href: "/checkout/growth",
        featured: true,
        badge: "Most Recommended",
    },
    {
        id: "global",
        name: "Global",
        price: "Custom",
        priceSuffix: "/enterprise",
        description: "Full ecosystem integration and dedicated global infrastructure.",
        features: [
            { label: "Dedicated Server Nodes", icon: "server" },
            { label: "On-site Training", icon: "users" },
            { label: "Custom Security SLAs", icon: "shieldCheck" },
        ],
        ctaLabel: "Contact Sales",
        href: "/contact-sales",
    },
];

const TESTIMONIALS: Testimonial[] = [
    {
        id: "samuel-walker",
        quote:
            "This is easily one of the most advanced AI chat platforms I've experienced. Conversations feel fluid, natural, and surprisingly human, with a strong grasp of context. It responds quickly while still offering meaningful and well-thought-out insights. Overall, it has raised the bar for what I expect from AI-driven communication truly impressive.",
        name: "Samuel Walker",
        role: "Head of Data & Insights",
        imageSrc: "/images/testimonial.png",
        imageAlt: "Samuel Walker",
        logoSrc: "/images/testimonial-1.png",
        logoAlt: "Logoipsum Academy",
    },
    {
        id: "logoipsum-university",
        quote:
            "Switching to this platform cut our response times dramatically while keeping every reply on-brand. The setup was simple and the results were visible within the first week.",
        name: "Jordan Lee",
        role: "Director of Operations",
        imageSrc: "/images/testimonials/jordan-lee.jpg",
        imageAlt: "Jordan Lee",
        logoSrc: "/images/logos/logoipsum-university.svg",
        logoAlt: "Logoipsum University",
    },
    {
        id: "logoipsum-forlberia",
        quote:
            "The predictive tools alone paid for the subscription within a month. Our team now spends less time digging through data and more time acting on it.",
        name: "Priya Nair",
        role: "VP of Analytics",
        imageSrc: "/images/testimonials/priya-nair.jpg",
        imageAlt: "Priya Nair",
        logoSrc: "/images/logos/logoipsum-forlberia.svg",
        logoAlt: "Logoipsum Forlberia",
    },
    {
        id: "logoipsum-brand-standard",
        quote:
            "Rock solid uptime and a support team that actually understands the product. It has become the backbone of how we handle customer conversations.",
        name: "Marcus Chen",
        role: "Head of Customer Success",
        imageSrc: "/images/testimonials/marcus-chen.jpg",
        imageAlt: "Marcus Chen",
        logoSrc: "/images/logos/logoipsum-brand-standard.svg",
        logoAlt: "Logoipsum Brand Standard",
    },
    {
        id: "logoipsum-fictional-logos",
        quote:
            "We evaluated four platforms before landing here. The onboarding experience and depth of integrations put it well ahead of the alternatives.",
        name: "Elena Torres",
        role: "Chief Technology Officer",
        imageSrc: "/images/testimonials/elena-torres.jpg",
        imageAlt: "Elena Torres",
        logoSrc: "/images/logos/logoipsum-fictional-logos.svg",
        logoAlt: "Logoipsum Department of Fictional Logos",
    },
];
const BLOG_POSTS: BlogPost[] = [
    {
        id: "carrier-fraud-problem",
        title: "The $6B Carrier Fraud Problem — And How AI Is Finally Solving It",
        date: "May 14, 2026",
        imageSrc: "/images/blog-1.png",
        imageAlt: "Wind turbine in a wheat field",
        href: "/blog/carrier-fraud-problem",
    },
    {
        id: "native-eld-vs-macropoint",
        title: "Why Native ELD Data Beats MacroPoint for Real-Time Freight Visibility",
        date: "Nov 2, 2025",
        imageSrc: "/images/blog-1.png",
        imageAlt: "Engineers reviewing data in a wind farm",
        href: "/blog/native-eld-vs-macropoint",
    },
    {
        id: "true-cost-of-net-30",
        title: "The True Cost of Net-30: How Slow Carrier Payments Are Killing Your Carrier Relationships",
        date: "Dec 1, 2025",
        imageSrc: "/images/blog-1.png",
        imageAlt: "Solar panels on a coastal rooftop",
        href: "/blog/true-cost-of-net-30",
    },
];
const TAB_DATA: TabItem[] = [
    {
        id: "vet",
        label: "Vet",
        icon: <ShieldCheck size={14} />,
        content: {
            title: "Know the carrier in seconds — and know it stays true",
            description: "Type an MC number, forward an email, or upload a CSV of 500 carriers. Sentinel resolves identity against our FMCSA warehouse, scores risk with exposure-normalized math, and keeps watching after you book.",
            bullets: [
                "Trust Score: with confidence caps thin-file carriers can't fake a good number",
                "Fraud scan on every carrier email: domain age, lookalikes, phone-vs-FMCSA",
                "Authority & insurance change alerts with affected-loads lists",
            ],
            imageSrc: "/images/Image-1.png",
            imageAlt: "Task Mapping Automation",
        },
    },
    {
        id: "onboard",
        label: "Onboard",
        icon: <UserPlus size={14} />,
        content: {
            title: "Onboarding measured in minutes, not days.",
            description: "The carrier gets one link. Vault collects and reads the W-9, authority letter, and COI; Sentinel clears identity; your packet requirements are enforced automatically. Your team reviews a finished file instead of chasing one.",
            bullets: [
                "Documents classified and extracted on arrival — no re-keying",
                "Certificate holder verified against your requirement profile",
                "Hard stops on lapsed coverage or failed identity — before dispatch",
            ],
            imageSrc: "/images/supplychain.png",
            imageAlt: "Onboard System",
        },
    },
    {
        id: "track",
        label: "Track",
        icon: <Navigation size={14} />,
        content: {
            title: "The delay your customer never feels.",
            description: "Tracker starts the moment a signed rate con is filed. ELD position, geofences, and the status language inside carrier emails fuse into one timeline — and the late-risk model raises its hand hours before the appointment slips.",
            bullets: ["Motive ELD live today; more providers in the pipeline", "Check-call drafts written for you — a human sends them", "214-shaped status webhooks straight into your customer's TMS"],
            imageSrc: "/images/why-choose-us.png",
            imageAlt: "Tracking Interface",
        },
    },
    {
        id: "verify",
        label: "Verify",
        icon: <Eye size={14} />,
        content: {
            title: "Paper becomes facts. Facts feed everything.",
            description: "Every attachment in a connected inbox is classified — COI, W-9, rate con, BOL, POD — parsed with a text-layer-first pipeline, confidence-scored, and filed to the right carrier and load. Vault's facts power Sentinel's judgments, Tracker's start signal, and DT Pay's release.",
            bullets: ["Expiry dates watched from the day of filing — T-15 renewal drafts, T-7 escalation", "Low-confidence extractions routed to a human, never guessed","Every fact traceable back to the source document"],
            imageSrc: "/images/supply-chain.png",
            imageAlt: "Verification Flow",
        },
    },
    {
        id: "pay",
        label: "Pay",
        icon: <Wallet size={14} />,
        content: {
            title: "Payment that releases itself — after a human says so.",
            description: "DT Pay is conditional payment release on Stripe rails: the load is funded up front, the AI verifies the proof of delivery, and the release halts at an approval node until your team taps authorize. Carriers get paid in about 90 seconds. You pay a flat 1.2%.",
            bullets: ["No factoring games, no 30–90 day waits for carriers", "Funds committed before pickup — carriers see payment is secured","Receipts and audit trail on both sides of every release"],
            imageSrc: "/images/Image.png",
            imageAlt: "Payment Screen",
        },
    },
];
const TRUST_FEATURES = [
  { icon: <Shield size={20} />, title: "SOC 2 in progress", description: "Independent audit underway across our core systems." },
  { icon: <UserCog size={20} />, title: "Human-approved by design", description: "Approval isn't a setting someone can switch off — it's a node in the graph. Nothing sends, pays, or disputes without a person." },
  { icon: <Clock size={20} />, title: "Replayable audit trail", description: "Every session is checkpointed end-to-end. When a customer or auditor asks what happened?, you can show them — step by step." },
  { icon: <Gem size={20} />, title: "No black-box scoring", description: "Independent audit underway across our core systems." },
  { icon: <Lock size={20} />, title: "Role-based answers", description: "Fleetra answers with exactly what the asking user's role permits — and nothing more." },
  { icon: <Table2 size={20} />, title: "Your data stays yours", description: "Rate memory is tenant-siloed. Your lane history never trains a competitor's price." },
];

export default function Homepage() {
    return (
        <main className="w-full  bg-[#FAF9F5] ">
            <Hero
                title="From quote to cash — with an AI team that vets carriers before you can."
                description="Dollar Traq is the AI operating system for US freight brokers — vet and onboard carriers on a 22.7-million-row FMCSA database we own, then pay them on verified delivery through DT Pay. Five accountable agents, KYC-verified carriers, and no payment or send without a human tap."
                backgroundImageSrc="/images/hero-bg.png"
                videoThumbnailSrc="/banner.mp4"
                ctas={[
                    { label: "Meet the agents", href: "/ai-agents", variant: "primary" },
                    { label: "Demo", href: "/demo", variant: "secondary" },
                    
                ]}
            />

            <LogoCloud text="Trusted by 7,000+ top startups, freelancers and studios" />

            <StatsSection
                title={
                    <>
                        One operating system for the whole
                        <br />
                        trust problem
                    </>
                }
                description="Dollar Traq is an AI operating system for US freight brokers that unifies carrier vetting, fraud detection, insurance verification, load tracking, and conditional payment release in one platform. It runs on a self-hosted 22.7-million-row FMCSA database, is operated by a team of five AI agents, and requires human approval on every payment, message, and dispute. Brokers stop stitching four tools together and start running freight on facts."
                stats={[
                    { label: "FMCSA records in our own PostgreSQL warehouse — queried directly, not rented through someone's API", value: "22.7M", icon: "/images/arrow-down.svg", iconAlt: "Refresh" },
                    { label: "Carrier insurance certificates on file, AI-read and holder-verified", value: "350K+", icon: "/images/gauge.svg", iconAlt: "Monitor" },
                    { label: "Flat DT Pay fee for subscribers — carriers paid in ~90 seconds on verified delivery", value: "1.2%", icon: "/images/lock.svg", iconAlt: "Security" },
                    { label: "Of payments, sends, and disputes pass a human-approval node. Zero exceptions, by architecture", value: "100%", icon: "/images/check.svg", iconAlt: "Verified" },
                ]}
            />

            <ScrollingSteps
                heading={
                    <>
                        One program. Quote to cash.
                        <br />
                        Verified at every step.
                    </>
                }
                description={
                    <p>
                        Most platforms stop at "this carrier looks fine." Dollar Traq carries the whole load — vet the carrier against change history, score the trust, paper the agreement, verify the delivery, and pay the carrier through DT Pay. The payment is the point: it's what turns every check above it into something money actually obeys.
                    </p>
                }
                steps={[
                    {
                        step: "Step 1",
                        title: "Vet & change history",
                        description: "Authority, inspections, and monthly census diffs catch chameleon carriers before they touch a load.",
                    },
                    {
                        step: "Step 2",
                        title: "Trust Score",
                        description: "Exposure-normalized risk math with confidence caps — a number you can defend.",
                    },
                    {
                        step: "Step 3",
                        title: "Agreements & KYC",
                        description: "Carrier onboarded, identity KYC-verified, documents read and filed.",
                    },
                    {
                        step: "Step 4",
                        title: "Deliver & verify",
                        description: "Load tracked to delivery; the POD is AI-verified against the load.",
                    },
                    {
                        step: "Step 5",
                        title: "Pay the carrier",
                        description: "DT Pay releases in ~90 seconds — human-authorized, flat 1.2%.",
                    },
                ]}
            />
            <FeatureSection
                title="The trust you verified, enforced at payout."
                description="Every carrier that gets paid through DT Pay was KYC-verified at onboarding, passed a third-party liveness check, and had its CDL captured. Funds are committed before pickup and released only when delivery is verified and a human authorizes — so the money follows the same trust the rest of the platform built."
                imagePosition="right"
                features={[
                    { text: "KYC on every carrier before a single dollar can move" },
                    {
                        text:"Stripe Express payout accounts - carriers get paid fast, on regulated rails",
                    },
                    {
                        text:
                        "Human authorizes every release — enforced by architecture, not policy",
                    },
                ]}
                ctas={[
                    { label: "How DT Pay works", href: "/product/dt-pay", variant: "secondary" },
                    { label: "Carrier onboarding & KYC", href: "/product/carrier-onboarding", variant: "primary" },
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

            <TabbedFeatureSection
                heading="From first vet to final payment"
                subheading="Five stages, one system. The numbers below are the order a load actually moves in — click through the flow."
                tabs={TAB_DATA}
            />        
            <WhyChooseUs
                sectionTitle="Four specialists. One orchestrator. Zero unsupervised actions."
                sectionDescription="Every event and command flows through Fleetra, which fans work out to the four agents and merges one sourced answer back. Guardrails aren't prompt suggestions — they're edges in the graph"
                imageSrc="/images/why-choose-us.png"
                complianceTitle="Fleetra — the +1"
                complianceDescription="The supervisor every request passes through. It plans, fans out to the four agents, merges sourced answers — and its approval nodes are where the human-in-the-loop physically lives."
                ctaText="Meet all Five"
                leftFeatures={[
                    {
                        icon: "/images/sentinel.svg",
                        title: "Sentinel",
                        description: "Can I trust this carrier for this load — and is that still true tomorrow? Vet cards, fraud scans, chameleon detection, 24/7 network watch",
                    },
                    {
                        icon: "/images/rate.svg",
                        title: "Rate",
                        description: "What's the right number — both directions? Quote extraction into tenant-siloed rate memory, DAT benchmarks under your license, 2.1σ anomaly flags",
                    },
                ]}
                rightFeatures={[
                    {
                        icon: "/images/tracker.svg",
                        title: "Tracker",
                        description: "Where's the load, and will it be on time? ELD fusion, late-risk prediction, drafted check-calls, 214-shaped webhooks to the customer's TMS.",
                    },
                    {
                        icon: "/images/vault.svg",
                        title: "Vault",
                        description: "Turn paper into facts. Every COI, rate con, BOL and POD classified, extracted, confidence-scored, and filed — feeding every other agent.",
                    },
                ]}
            />
            <FeatureSection
                title="One sentence in. Four agents out. One answer back."
                description="Watch it happen: a broker types one plain request, and Fleetra plans the graph and fans the job to all four specialists at once — Sentinel vets, Rate prices, Vault reads the paper, Tracker confirms coverage. Fleetra merges four reports into one sourced recommendation, and stops at the human gate."
                imagePosition="right"
                features={[
                    { text: "Parallel by design — four agents work the same load at the same time" },
                    {
                        text:
                        "One sourced answer — not four dashboards to reconcile yourself",
                    },
                    {
                        text:
                        "Human sends it — Fleetra drafts and recommends; a person approves",
                    },
                ]}
                ctas={[
                    { label: "Meet the agents", href: "/ai-agents", variant: "secondary" },
                    { label: "See the architecture", href: "/product/platform-overview", variant: "primary" },
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
            <ProcessSteps
                sectionTitle="The vetting platform that can also move the money."
                sectionDescription="Monitoring tools tell you a carrier looked fine yesterday. DT Pay changes what happens next: funds committed before pickup, released only when the proof of delivery is AI-verified and a human authorizes. Trust becomes enforceable."
                steps={[
                    { title: "Load funded", description: "Broker commits funds; carrier sees payment secured", icon: "/images/icon-1.svg" },
                    { title: "In Transit", description: "Tracked via ELD, geofence armed", icon: "/images/transit.svg" },
                    { title: "POD uploaded", description: "Signed BOL, photo, GPS timestamp", icon: "/images/upload.svg" },
                    { title: "AI Verifies", description: "Vault reads and matches the POD to the load", icon: "/images/ai-verifies.svg" },
                    { title: "Human Authorise", description: "Release halts until your team taps approve", icon: "/images/human-authorize.svg" },
                    { title: "Released - 90s", description: "Carrier paid; receipts both sides", icon: "/images/released.svg" },
                ]}
            />

            <ValueGrid
                sectionTitle="Most tools rent intelligence. We manufacture it."
                sectionDescription="The new wave of freight AI rents its truth from data vendors and resells it. Dollar Traq owns the three layers trust is actually made of."
                cards={[
                    {
                        icon: "/images/data-layer.svg",
                        title: "The Data Layer",
                        description: "22.7M FMCSA rows in our own warehouse — authority history, inspections, out-of-service orders, insurance filings. Every claim traceable to a government record you can see on screen.",
                    },
                    {
                        icon: "/images/sales-automation.svg",
                        title: "Sales Automation",
                        description: "350,000+ insurance certificates on file plus every rate con, BOL, and POD your inbox receives — read by AI, verified against requirements, never re-keyed.",
                    },
                    {
                        icon: "/images/contact-lead-managment.svg",
                        title: "Contact And Lead Management",
                        description: "DT Pay on Stripe rails. When vetting, verification, and payment live in one system, trust stops being a PDF report and becomes a release condition.",
                    },
                ]}
            />

            <ScenarioGrid
                scenarios={[
                    {
                    title: "The chameleon that didn't get through",
                    description:
                        "\"Summit Line Logistics\" wants a $38K electronics load. Domain registered nine days ago; the listed phone matches an MC revoked in February; the census diff shows that MC's officer filed a new authority three weeks ago from the same address. One flag, three evidence lines, human review — the load never moved.",
                    },
                    {
                    title: "Negotiating with a memory",
                    description:
                        "A carrier quotes $3,100 on Atlanta → Miami dry van. The card beside the email shows their last four quotes averaged $2,780 and your booked average is $2,690 — 2.1σ above your lane memory. Your rep counters at $2,750 with history on their side, books at $2,800.",
                    },
                    {
                    title: "The delay the customer never felt",
                    description:
                        "Load L-2287 hits I-40 construction; ETA slips 92 minutes past the appointment. Tracker flags it at 11:04 — two hours early — drafts the carrier check-in and the customer heads-up, ops sends both with one tap. The delay happened; the fire drill didn't.",
                    },
                ]}
            />  

            <TrustFeatureGrid 
                sectionDescription="Dollar Traq handles carrier identities, insurance documents, and payment flows — so trust is engineered in, not bolted on. Every consequential action passes a human-approval gate, every answer is access-filtered, and every session is replayable."
                ctaLabel="Security&Trust"
                ctaHref="/company/security-trust"
                features={TRUST_FEATURES} 
            />  

            <FaqAccordion
                faqs={[
                    {
                    question: "What exactly is Dollar Traq?",
                    answer:
                        "Dollar Traq is an AI operating system for US freight brokers. It combines carrier vetting on a self-hosted 22.7-million-row FMCSA database, a Trust Score risk engine, AI-read insurance verification, ELD-based load tracking, and DT Pay — conditional payment release at a flat 1.2% — run by five AI agents with human approval required on every consequential action.",
                    },
                    { question: "Does AI ever send money or messages on its own?", answer: "No. Every send, payment release, and dispute action halts at a human-approval node built into the orchestration graph itself. The AI drafts, verifies, and prepares; a person on your team taps to execute. This is enforced by architecture, not by policy." },
                    { question: "Where does the carrier data come from?", answer: "Directly from FMCSA public data files, loaded into our own PostgreSQL warehouse — 22.7 million rows covering carriers, authority history, inspections, out-of-service orders, and insurance filings, refreshed on a rolling snapshot cycle. We can show the provenance of any claim on screen during a demo." },
                    {
                    question: "What does \"quote to cash\" mean here?",
                    answer:
                        "It means Dollar Traq covers the entire load lifecycle in one system: vetting the carrier, scoring trust, onboarding with KYC and CDL verification, tracking the load, verifying delivery, and paying the carrier through DT Pay. Instead of stitching a vetting tool, a tracking product, and a payment program together, the whole path from quoting a load to the carrier getting cash runs on one platform with one audit trail.",
                    },
                    { question: "Are carriers identity-verified before they get paid?", answer: "Yes. Every carrier paid through DT Pay is KYC-verified during onboarding, passes a third-party facial liveness check, and has its CDL captured — then gets a Stripe Express payout account. Payment can't move to an unverified party." },
                    { question: "Do I have to replace my current tools to start?", answer: "No. Dollar Traq runs alongside your existing stack — it connects to your inbox (Gmail or Outlook), posts alerts where your team lives, and pushes 214-shaped status webhooks to your TMS. Most brokers start with a free carrier-list audit and expand from there." },
                ]}
            /> 

            <AppShowcaseSection
                title={<>A driver app that does the last<br />mile of trust.</>}
                description="Onboarding, check-ins, and proof of delivery happen in the driver's hand. The Dollar Traq driver app captures the CDL, runs the live facial-liveness check, signs the eBOL, and submits a GPS-stamped POD — the same POD that releases DT Pay. Available on iOS and Android."
                features={[
                    { text: "Guided onboarding — CDL capture and liveness, done in minutes" },
                    { text: "Digital check-in & eBOL— status without the phone tag" },
                    { text: "GPS-stamped POD — the proof that triggers payment on delivery" },
                ]}
                imageSrc="/images/mobile.png"
                imageAlt="Driver app tracking screen"
            />   

            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Bring five MC numbers Leave with the truth"
                description="Book a 25-minute demo and we'll vet your own carriers live on the call — authority, insurance, Trust Score, fraud signals. You keep the report either way."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/company/security-trust", variant: "secondary" },
                ]}
            />

        </main>
    );
}