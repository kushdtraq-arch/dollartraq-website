"use client";

import React from "react";
import SectionIntro from "@/components/common/SectionIntro";

export interface SubprocessorsProps {
    className?: string;
    lastUpdated?: string;
}

interface Subprocessor {
    name: string;
    purpose: string;
    data: string;
    location: string;
}

const subprocessors: Subprocessor[] = [
    {
        name: "Amazon Web Services, Inc.",
        purpose:
            "Cloud hosting, databases, and document storage (including certificate-of-insurance and shipment document storage)",
        data: "All Service data, encrypted at rest",
        location: "United States",
    },
    {
        name: "Stripe, Inc.",
        purpose:
            "Payment processing, connected accounts, payouts, and payment compliance for DT Pay",
        data: "Identity, business, bank, and transaction data of payers and payees",
        location: "United States",
    },
    {
        name: "Didit Identity, Inc.",
        purpose:
            "Identity verification: government-ID document verification, selfie liveness and face-match comparison, and sanctions/AML screening for drivers, carrier principals, and DT Pay accounts",
        data: "ID document images, selfie/biometric verification data, verification outcomes",
        location: "United States",
    },
    {
        name: "Nylas, Inc.",
        purpose:
            "Email and calendar integration for customer-connected mailboxes",
        data: "Mailbox messages, attachments, and metadata within authorized scopes",
        location: "United States",
    },
    {
        name: "Twilio Inc. (including Twilio SendGrid)",
        purpose:
            "Voice telephony, provisioned phone numbers, call recording, messaging, and transactional email delivery (sent from dollartraq.app)",
        data: "Phone numbers, call audio and metadata, message content, email content and delivery data",
        location: "United States",
    },
    {
        name: "Telnyx LLC",
        purpose:
            "SMS delivery of one-time passcodes and two-factor authentication codes",
        data: "Phone numbers, OTP message content, delivery metadata",
        location: "United States",
    },
    {
        name: "ElevenLabs, Inc.",
        purpose: "Voice synthesis for AI voice agents",
        data: "Call scripts and generated audio",
        location: "United States",
    },
    {
        name: "Terminal",
        purpose:
            "ELD and telematics data aggregation for carrier-authorized vehicle tracking",
        data: "Vehicle identifiers, location, and telematics data",
        location: "United States / Canada",
    },
    {
        name: "Anthropic, PBC",
        purpose:
            "Large-language-model inference for AI features (no training on customer data)",
        data: "Prompts and content submitted to AI features",
        location: "United States",
    },
    {
        name: "OpenAI, LLC",
        purpose:
            "Large-language-model inference for AI features (no training on customer data)",
        data: "Prompts and content submitted to AI features",
        location: "United States",
    },
    {
        name: "Google LLC (Google Cloud / Gemini)",
        purpose:
            "Large-language-model inference for AI features (no training on customer data)",
        data: "Prompts and content submitted to AI features",
        location: "United States",
    },
];

const affiliates = [
    {
        name: "Dollar Traq LLP",
        purpose:
            "Engineering, product development, customer support, and business operations performed for Dollar Traq Corp under a written intercompany agreement, role-based access, and the security measures in DPA Annex II",
        location: "Gurugram, India",
    },
];

const connectedServices = [
    {
        label: "Transportation management systems",
        text: "for example McLeod, Rose Rocket, Tai, Turvo, Alvys",
    },
    {
        label: "ELD and telematics providers",
        text: "for example Motive, Samsara, Geotab, connected directly or through our aggregation partner with the carrier's authorization",
    },
    {
        label: "Load boards and rate-data providers",
        text: "for example DAT and Truckstop, under your own licenses with them",
    },
    {
        label: "Email and calendar providers",
        text: "Google Workspace and Microsoft 365 mailboxes you connect",
    },
    {
        label: "Your bank, factoring company, or accounting system",
        text: "",
    },
];

const changeLog = [
    { date: "September 30, 2026", text: "Initial publication." },
];

const bodyText =
    "text-sm leading-7 text-gray-600 sm:text-base sm:leading-8";
const linkClass = "font-medium text-gray-900 underline underline-offset-2";
const th =
    "border border-gray-200 bg-gray-50 px-3 py-2.5 text-left font-semibold text-gray-900";
const td =
    "border border-gray-200 px-3 py-2.5 align-top text-gray-600";

export function Subprocessors({
    className = "",
    lastUpdated = "September 30, 2026",
}: SubprocessorsProps) {
    return (
        <>
            <SectionIntro
                stickToTop
                title="Who helps us handle your data."
                description="The vendors and affiliates we use to run Dollar Traq, what they do, and how you hear about changes."
                backgroundColor="#015EFF"
            />

            <main
                className={`max-w-5xl mx-auto mt-6 mb-16 px-4 sm:px-6 lg:px-8 ${className}`}
            >
                <header>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Dollar Traq Subprocessors
                    </h1>

                    <p className="mt-3 text-sm text-gray-600 sm:text-base">
                        Last updated:{" "}
                        <span className="font-medium text-gray-900">
                            {lastUpdated}
                        </span>
                    </p>
                </header>

                <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
                    <section>
                        <p className={bodyText}>
                            Dollar Traq Corp ("Dollar Traq") uses the
                            third-party subprocessors and affiliates listed
                            below to help provide the Services. A "subprocessor"
                            is a vendor that processes Customer Personal Data on
                            Dollar Traq's behalf, as described in our{" "}
                            <a href="/dpa" className={linkClass}>
                                Data Processing Addendum
                            </a>{" "}
                            and{" "}
                            <a href="/privacy-policy" className={linkClass}>
                                Privacy Policy
                            </a>
                            . Before engaging any subprocessor, we perform a
                            security and privacy review and put in place a
                            written contract requiring confidentiality,
                            security measures, and data-protection obligations
                            consistent with our DPA. Dollar Traq remains
                            responsible for its subprocessors' handling of
                            Customer Personal Data.
                        </p>

                        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                            <p className="text-sm font-semibold text-gray-900">
                                Stay informed
                            </p>

                            <p className={`mt-2 ${bodyText}`}>
                                We will update this page and give subscribed
                                customers at least 30 days' advance notice
                                before a new subprocessor processes Customer
                                Personal Data (10 days for an urgent security or
                                continuity replacement, with prompt notice). To
                                subscribe, email{" "}
                                <a
                                    href="mailto:privacy@dollartraq.com?subject=Subscribe%20%E2%80%94%20Subprocessor%20Updates"
                                    className={linkClass}
                                >
                                    privacy@dollartraq.com
                                </a>{" "}
                                with the subject "Subscribe — Subprocessor
                                Updates." Customers may object to a new
                                subprocessor as described in Section 7.3 of the
                                DPA.
                            </p>
                        </div>
                    </section>

                    <section id="infrastructure">
                        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Infrastructure and Platform Subprocessors
                        </h2>

                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full min-w-[640px] border-collapse text-sm sm:text-[15px] leading-6">
                                <thead>
                                    <tr>
                                        <th className={th}>Subprocessor</th>
                                        <th className={th}>Purpose</th>
                                        <th className={th}>Data processed</th>
                                        <th className={th}>
                                            Location of processing
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {subprocessors.map((row) => (
                                        <tr key={row.name}>
                                            <td
                                                className={`${td} font-medium text-gray-900`}
                                            >
                                                {row.name}
                                            </td>
                                            <td className={td}>
                                                {row.purpose}
                                            </td>
                                            <td className={td}>{row.data}</td>
                                            <td className={td}>
                                                {row.location}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section id="affiliates">
                        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Affiliates
                        </h2>

                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full min-w-[640px] border-collapse text-sm sm:text-[15px] leading-6">
                                <thead>
                                    <tr>
                                        <th className={th}>Affiliate</th>
                                        <th className={th}>Purpose</th>
                                        <th className={th}>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {affiliates.map((row) => (
                                        <tr key={row.name}>
                                            <td
                                                className={`${td} font-medium text-gray-900`}
                                            >
                                                {row.name}
                                            </td>
                                            <td className={td}>
                                                {row.purpose}
                                            </td>
                                            <td className={td}>
                                                {row.location}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className={`mt-4 ${bodyText}`}>
                            Engineering contractors working on the Services do
                            so under Dollar Traq's supervision, written
                            confidentiality and IP agreements, and access
                            controls; any contractor that independently
                            processes Customer Personal Data will be listed on
                            this page before doing so.
                        </p>
                    </section>

                    <section id="connected-services">
                        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Services You Connect (Not Subprocessors)
                        </h2>

                        <p className={`mt-3 ${bodyText}`}>
                            When you choose to connect your own third-party
                            systems, data flows to and from those systems at
                            your direction. They act on your behalf under their
                            own terms and privacy policies, not as Dollar Traq
                            subprocessors. Examples:
                        </p>

                        <ul
                            className={`mt-4 list-disc space-y-2 pl-6 sm:pl-10 ${bodyText}`}
                        >
                            {connectedServices.map((item) => (
                                <li key={item.label}>
                                    <strong className="font-semibold text-gray-900">
                                        {item.label}
                                    </strong>
                                    {item.text && <> — {item.text}</>}
                                </li>
                            ))}
                        </ul>

                        <p className={`mt-4 ${bodyText}`}>
                            Payment services for DT Pay are provided by Stripe
                            under the Stripe Services Agreement and Stripe
                            Connected Account Agreement, to which each payer and
                            payee agrees directly.
                        </p>
                    </section>

                    <section id="change-log">
                        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Change Log
                        </h2>

                        <ul
                            className={`mt-4 list-disc space-y-2 pl-6 sm:pl-10 ${bodyText}`}
                        >
                            {changeLog.map((entry) => (
                                <li key={entry.date}>
                                    <strong className="font-semibold text-gray-900">
                                        {entry.date}
                                    </strong>{" "}
                                    — {entry.text}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="border-t border-gray-200 pt-8">
                        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Contact
                        </h2>

                        <div className="mt-4 space-y-2 text-sm leading-7 text-gray-600 sm:text-base">
                            <p>
                                Questions:{" "}
                                <a
                                    href="mailto:privacy@dollartraq.com"
                                    className={linkClass}
                                >
                                    privacy@dollartraq.com
                                </a>
                            </p>

                            <address className="not-italic">
                                Dollar Traq Corp, Suite 304, 1560 Wall Street,
                                Naperville, IL 60563, USA
                            </address>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Subprocessors;