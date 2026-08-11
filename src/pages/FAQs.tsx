
import React from "react";
import FaqAccordion from "@/components/sections/FaqAccordion";
import PricingSection, { PricingPlan } from "@/components/sections/PricingSection";
import CtaBannerSection from "@/components/common/CtaBanner";
import SectionIntro from "@/components/common/SectionIntro";
import ProcessSteps from "@/components/sections/ProcessSteps";
import FeatureSection from "@/components/sections/FeatureSection";
import Image from "next/image";

export default function FAQs() {
    return (
        <main className="w-full min-h-screen  ">

            <SectionIntro  
                stickToTop
                title="Straight answers."
                description="Everything brokers ask before a demo — the product, the data, the payment rail, and the guardrails. If yours isn't here, ask us on the call."
                backgroundColor="#015EFF"
                

            />
            <FaqAccordion
                sectionTitle="The platform"
                faqs={[
                    {
                    question: "What is Dollar Traq in one sentence?",
                    answer:
                        "An AI operating system for US freight brokers that unifies carrier vetting, fraud detection, insurance verification, load tracking, and DT Pay conditional payment release — run by five AI agents with a human approving every consequential action.",
                    },
                    { question: "Do I have to replace my TMS?", answer: "No. Dollar Traq runs alongside your existing stack. It connects to your inbox, posts alerts where your team already works, and pushes 214-shaped status webhooks into your TMS. McLeod certification is in progress and an EDI rail is mapped." },
                    { question: "How long does it take to get started?", answer: "Onboarding is white-glove and typically has you vetting carriers in the first session: connect an inbox, import your carrier list, set your thresholds. Your first DT Pay test release usually happens in week one." },
                ]}
            /> 
            <FaqAccordion
                sectionTitle="The AI agents"
                faqs={[
                    {
                    question: "HWhat are the five agents?",
                    answer:
                        "Sentinel (carrier trust and fraud), Rate (pricing intelligence), Tracker (load tracking), Vault (document extraction), and Fleetra — the orchestrator that routes work between them and holds the human-approval gates. See the AI Agents page for each one's workflows.",
                    },
                    { question: "Does the AI ever act without a human?", answer: "No consequential action — no send, payment, or dispute — leaves the system without passing a human-approval node. The AI drafts, verifies, and prepares; a person on your team executes." },
                    { question: "What's a chameleon carrier and how do you catch one?", answer: "An operator that re-registers under a new MC to shed a bad record. Sentinel diffs monthly FMCSA authority census files to spot shared officers, addresses, and phone numbers tied to revoked authorities." },
                ]}
            /> 
            <FaqAccordion
                sectionTitle="DT Pay"
                faqs={[
                    {
                    question: "How does DT Pay hold and release funds?",
                    answer:
                        "DT Pay is conditional payment release: funds committed on Stripe rails, released only on AI-verified proof of delivery plus human authorization. Dollar Traq is not a bank, factor, or freight broker.",
                    },
                    { question: "How fast do carriers get paid?", answer: "Typically about 90 seconds after a human authorizes the verified release." },
                    { question: "What does DT Pay cost?", answer: "A flat 1.2% per transaction for subscribers, or 2.0% pay-per-use — with verification, receipts, and audit trail included. No hidden fees." },
                ]}
            /> 
            <FaqAccordion
                sectionTitle="Data & security"
                faqs={[
                    {
                    question: "Where does the carrier data come from?",
                    answer:
                        "FMCSA public data files loaded into our own PostgreSQL warehouse — 22.7 million rows, refreshed on a rolling snapshot cycle. Provenance for any claim is viewable on a demo.",
                    },
                    { question: "Is my rate data shared with other brokers?", answer: "Never. Rate memory is tenant-siloed. Your lane history is yours and does not train anyone else's pricing." },
                    { question: "Are you SOC 2 certified?", answer: "Our SOC 2 attestation is in progress and we hold a bridge letter we can share under NDA — ask for current documentation on your call. More on the Security page." },
                ]}
            />                                     
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Got a question that isn't here?"
                description="Bring it to the demo — along with five MC numbers we'll vet live."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/security", variant: "secondary" },
                ]}
            />            
        </main>
    );
}