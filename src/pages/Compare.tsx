
import React from "react";

import CtaBannerSection from "@/components/common/CtaBanner";
import SectionIntro from "@/components/common/SectionIntro";
import ProcessSteps from "@/components/sections/ProcessSteps";
import ComparisonTable from "@/components/common/ComparisonTable";
import ValueGrid from "@/components/sections/ValueGrid";

export default function Compare() {
    return (
        <main className="w-full min-h-screen bg-[#FAF9F5] ">

            <SectionIntro />

            <ComparisonTable />

            <ProcessSteps
                sectionTitle="Rent versus own."
                sectionDescription={`Most platforms in this space are a friendly interface on top of data someone else controls. That's a fine business — until you need to diff an entire census, show provenance in a dispute, or attach a payment condition to a vetting result. Ownership is what makes those possible.`}
                steps={[
                    { title: "We own the data", description: "22.7M FMCSA rows in our warehouse. Census diffs for chameleon detection, provenance on screen, and queries no rate-limited API would ever allow.", icon: "/images/icon-1.svg" },
                    { title: "We read the paper", description: "Vetting vendors check a box that says \"insured.\" We extract the certificate, verify the holder, and watch the expiry — then feed that fact to the payment decision.", icon: "/images/transit.svg" },
                    { title: "We move the money", description: "No incumbent on this page can release a payment. When trust and payment live in one system, \"verified\" stops being a report and becomes a condition.", icon: "/images/upload.svg" },
                ]}
            />

            <ValueGrid
                sectionTitle="We'll tell you straight."
                sectionDescription=""
                cards={[
                    {
                        icon: "/images/data-layer.svg",
                        title: "Choose an incumbent if…",
                        description: "You need one thing — pure carrier vetting at the largest possible network scale — and you already have separate, working tools for tracking and payment you don't intend to consolidate.",
                    },
                    {
                        icon: "/images/sales-automation.svg",
                        title: "Choose Dollar Traq if…",
                        description: "You're a broker who wants vetting, fraud, documents, tracking, and fast carrier payment on one platform with one audit trail — and you value owning the data and keeping a human on every action.",
                    },
                    {
                        icon: "/images/contact-lead-managment.svg",
                        title: "Run both if…",
                        description: "Some brokers keep an incumbent for network breadth and add Dollar Traq for the agent workflows and DT Pay. We connect to your inbox and TMS either way.",
                    },
                ]}
            />
 
            <CtaBannerSection
                backgroundImageSrc="/images/truck.png"
                title="Compare us on your own carriers."
                description="Bring the report from whatever you use today. We'll run the same carriers and put the two side by side."
                buttons={[
                    { label: "Book a demo", href: "/demo", variant: "primary" },
                    { label: "Security & trust", href: "/company/security-trust", variant: "secondary" },
                ]}
            />   

        </main>
    );
}