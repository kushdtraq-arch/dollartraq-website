
import React from "react";
import FeatureSection from "@/components/sections/FeatureSection";
import HeroSplit from "@/components/common/HeroSplit";
import CtaBannerSection from "@/components/common/CtaBanner";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Image from "next/image";

export default function AiAgentsPage() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">
            <HeroSplit
                title="Four specialists. One orchestrator. Zero freelancing."
                description="Sentinel, Rate, Tracker, and Vault each own one question about your freight. Fleetra routes everything between them — and holds the approval gates no action can pass without a human. This page is each agent's job description, with the receipts."
                backgroundImageSrc="/images/hero-bg.png"
                mediaSrc="/images/control-tower.png"   
                mediaAlt="Dollar Traq Control Tower dashboard"
            />

            <ProcessSteps
                sectionTitle="An assembly line for trust, not a chatbot with tools."
                sectionDescription="Every inbound event — an email, a document, a position ping, a typed command — lands on one event bus. Fleetra plans which agents the moment needs, runs them in parallel on shared memory, and merges one sourced answer. The division of labor is strict: Vault extracts, Sentinel judges; Rate computes, Fleetra delivers."
                steps={[
                    { title: "Shared memory", description: "One carrier record, one load timeline, one document index. An insight any agent produces is instantly available to all of them — no swivel-chair, no copy-paste.", icon: "/images/icon-1.svg" },
                    { title: "Guardrails as graph edges", description: "Rules R1–R6 aren't prompt suggestions an agent might ignore. They're edges in the orchestration graph — a payment physically cannot route around the approval node.", icon: "/images/icon-1.svg" },
                    { title: "Replayable sessions", description: "Every run is checkpointed end to end. Ask \"why did the system flag this carrier?\" and get the exact evidence chain, step by step, months later.", icon: "/images/icon-1.svg" },
                ]}
            />
            <FeatureSection
                title="Sentinel"
                description="Sentinel owns the trust question end to end. It renders the vet card inline in your inbox the moment a carrier email arrives, runs fraud detection on every message, watches the whole network for authority and insurance changes, and makes per-load coverage judgments on the facts Vault extracted."
                imagePosition="right"
                features={[
                    { text: "Inbound-sender vet card — email arrives → identity resolved → Trust Score + authority + insurance rendered inline" },
                    {
                        text:
                        "Fraud scan on every carrier email — domain age, lookalike domains, phone-vs-FMCSA, signature-vs-MC",
                    },
                    {
                        text:
                        "Chameleon detection — monthly authority census diffs surface reincarnation signals: shared officers, addresses, phones with revoked MCs",
                    },
                    {
                        text:
                        "Batch CSV vetting — upload a carrier list, get back a scored sheet with flags",
                    },
                    {
                        text:
                        "Threshold alerts — a score falls through your floor, you know before dispatch does",
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

             <FeatureSection
                title="Rate"
                description="Rate owns pricing truth. Inbound, every carrier quote in your email is extracted into tenant-siloed rate memory with source evidence. Outbound, a shipper RFQ triggers a DAT RateView fetch under your own license, your margin rules compute a sell price, and a reply lands in the review queue. The rented benchmark covers day one; your proprietary memory compounds forever — and it never trains anyone else's pricing."
                imagePosition="left"
                features={[
                    { text: "Quote capture — every emailed rate parsed to lane memory with the evidence attached" },
                    {
                        text:
                        "Anomaly flags — a quote 2.1σ above your lane history gets marked before you reply",
                    },
                    {
                        text:
                        "RFQ → priced draft — DAT benchmark + your margin rules → sell price → drafted reply, human sends",
                    },
                    {
                        text:
                        "Negotiation cards — the carrier's last four quotes and your booked average, beside the email",
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
            <FeatureSection
                title="Tracker"
                description="Tracker fuses live ELD position streams, geofences, and the status language parsed out of carrier emails into one load timeline — then acts early when the timeline slips. It starts automatically when Vault files a signed rate con, predicts late risk before the appointment is missed, drafts the check-call for a human to send, and emits 214-shaped status webhooks so your customer's TMS updates itself."
                imagePosition="right"
                features={[
                    { text: "Auto-init — tracking starts the moment a signed rate con is filed, no setup step" },
                    {
                        text:
                        "Late-risk prediction — ETA math against appointments, flags raised hours early",
                    },
                    {
                        text:
                        "Drafted check-calls — carrier check-in and customer heads-up written, queued, human-sent",
                    },
                    {
                        text:
                        "TMS sync — 214-shaped webhooks keep the customer's system current without a phone call",
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

             <FeatureSection
                title="Vault"
                description="Vault is the extraction layer for freight's paper. Every attachment entering a connected inbox is classified — COI, W-9, rate con, BOL, POD, NOA — parsed with a text-layer-first pipeline (vision-model fallback for scans), confidence-scored, and filed to the right carrier and load. Its facts feed everyone else: Sentinel's coverage judgments, Tracker's start signal, Rate's booked price, and DT Pay's human-authorized release."
                imagePosition="left"
                features={[
                    { text: "Classify + extract on arrival — no drag-and-drop, no re-keying, confidence scores on every field" },
                    {
                        text:
                        "Holder verification — the certificate is checked against your requirement profile, not just parsed",
                    },
                    {
                        text:
                        "Expiry watch — T-15 renewal draft, T-7 escalation, dispatch hold if coverage lapses",
                    },
                    {
                        text:
                        "Low-confidence → human — an uncertain extraction is routed for review, never guessed",
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
            <FeatureSection
                title="Fleetra"
                description="Fleetra is the supervisor every event and command passes through. It plans which agents a request needs, runs them in parallel, merges their structured outputs, and answers with sources. It owns the review queue and the single drafting pipeline — and its approval nodes are where the human-in-the-loop physically lives: any send, payment, or dispute action halts the graph until a person approves."
                imagePosition="right"
                features={[
                    { text: "Fan-out:one compound sentence becomes parallel work for three or more agents, returned as one sourced answer" },
                    {
                        text:
                        "Late-risk prediction — ETA math against appointments, flags raised hours early",
                    },
                    {
                        text:
                        "RBAC-filtered answers:a user sees only what their role permits — nothing more",
                    },
                    {
                        text:
                        "One pipeline out:exactly one drafting-and-queue path exists; nothing sends from anywhere else",
                    },  
                    {
                        text:
                        "Refuses out-of-lane requests with an explanation — and logs the refusal",
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
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Watch the agents work your carriers."
                description="Bring a compound question to the demo —  vet these three compare their quotes flag anything off  and watch one sentence become four agents and one answer "
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    
                ]}
            />   

        </main>
    );
}