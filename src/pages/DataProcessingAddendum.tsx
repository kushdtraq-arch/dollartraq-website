"use client";

import React from "react";
import SectionIntro from "@/components/common/SectionIntro";

export interface DataProcessingAddendumProps {
    className?: string;
    lastUpdated?: string;
}

interface Item {
    label?: string;
    text: React.ReactNode;
}

interface Section {
    id: string;
    number: string;
    title: string;
    items: Item[];
    /** "list" renders a numbered list (default); "paragraphs" renders plain paragraphs. */
    variant?: "list" | "paragraphs";
    /** Optional lettered sub-list rendered after the items */
    subItems?: string[];
    /** Text rendered after the sub-list */
    closing?: string;
}

const emailLink = (email: string, subject?: string) => (
    <a
        href={`mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}
        className="font-medium text-gray-900 underline underline-offset-2"
    >
        {email}
    </a>
);

const pageLink = (href: string, label: string) => (
    <a
        href={href}
        className="font-medium text-gray-900 underline underline-offset-2"
    >
        {label}
    </a>
);

const dpaSections: Section[] = [
    {
        id: "definitions",
        number: "1",
        title: "Definitions",
        items: [
            {
                label: "Applicable Data Protection Laws",
                text: 'means all laws governing the Processing of Personal Information under this DPA, including the California Consumer Privacy Act as amended by the CPRA and its regulations ("CCPA"), the Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, and Virginia privacy acts, the Illinois Biometric Information Privacy Act, and, to the extent applicable, PIPEDA, the GDPR, and the UK GDPR.',
            },
            {
                label: "Customer Personal Data",
                text: "means Personal Information contained in Customer Data that Dollar Traq Processes on Customer's behalf.",
            },
            {
                label: "Personal Information",
                text: '(or "personal data") means information that identifies, relates to, or could reasonably be linked with an identified or identifiable individual or household, as defined by Applicable Data Protection Laws.',
            },
            {
                label: "Platform Data",
                text: "means Personal Information that Dollar Traq Processes for its own purposes as described in Section 3.3, including the shared carrier intelligence database, Public Regulatory Data, Trust Scores, network fraud signals, identity-verification and sanctions-screening records, DT Pay compliance records, account and billing records, and Aggregated Data.",
            },
            {
                label: "Process / Processing",
                text: "means any operation performed on Personal Information, such as collection, storage, use, disclosure, or deletion.",
            },
            {
                label: "Security Incident",
                text: "means a confirmed breach of Dollar Traq's security leading to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Customer Personal Data.",
            },
            {
                label: "Subprocessor",
                text: "means a third party engaged by Dollar Traq to Process Customer Personal Data on Dollar Traq's behalf.",
            },
            {
                label: "Other terms.",
                text: 'The terms "business," "service provider," "controller," "processor," "sell," "share," "consumer," and "business purpose" have the meanings given in Applicable Data Protection Laws.',
            },
        ],
    },
    {
        id: "scope",
        number: "2",
        title: "Scope and Duration",
        variant: "paragraphs",
        items: [
            {
                text: (
                    <>
                        This DPA applies to Dollar Traq's Processing of
                        Customer Personal Data to provide the Services during
                        the term of the Agreement and until deletion under
                        Section 12. It does not apply to Platform Data (Section
                        3.3) or to Personal Information Dollar Traq processes as
                        a business for its own operations (marketing,
                        recruiting, vendor management), which are governed by
                        the Dollar Traq {pageLink("/privacy-policy", "Privacy Policy")}
                        .
                    </>
                ),
            },
        ],
    },
    {
        id: "roles",
        number: "3",
        title: "Roles of the Parties",
        items: [
            {
                label: "3.1 Customer as business/controller.",
                text: "For Customer Personal Data, Customer is the business (controller) and determines the purposes and means of Processing. Customer's Authorized Users, shipment records, connected-mailbox content, rate history, notes, configurations, uploaded documents, and the personal information of Customer's shippers, consignees, and personnel are Customer Personal Data.",
            },
            {
                label: "3.2 Dollar Traq as service provider/processor.",
                text: "Dollar Traq Processes Customer Personal Data as Customer's service provider (processor) solely to provide, secure, support, and improve the Services for Customer under the Agreement and Customer's documented instructions, and for no other purpose. The Agreement, this DPA, Customer's configurations in the Services, and Customer's use of Service features are Customer's complete instructions. Additional instructions require mutual written agreement.",
            },
            {
                label: "3.3 Dollar Traq as an independent business/controller.",
                text: "The parties acknowledge that certain Processing is inherent to a multi-customer carrier-intelligence and fraud-prevention network and is performed by Dollar Traq for its own purposes, as an independent business (controller), under the Dollar Traq Privacy Policy and not on Customer's behalf:",
            },
        ],
        subItems: [
            "building and maintaining the shared carrier intelligence database, including carrier profiles, contact details, documents, and change history, whether sourced from Public Regulatory Data, insurance producers, Carriers, or Customers;",
            "generating and distributing Trust Scores, tiers, verdicts, flags, and network fraud signals to all customers;",
            "identity verification, Know-Your-Business/Know-Your-Customer, anti-money-laundering, and sanctions screening for the Services and DT Pay, and related recordkeeping;",
            "operating carrier and driver accounts, the Driver App, and communications with Carriers, Drivers, and insurance producers;",
            "Customer account, authentication, billing, and support records; and",
            "creating and using Aggregated Data.",
        ],
        closing:
            "Each party is independently responsible for its own compliance with respect to the Processing it controls; the parties are not joint controllers and do not Process Personal Information as a partnership or joint venture.",
    },
    {
        id: "service-provider-certifications",
        number: "4",
        title: "Dollar Traq Obligations (Service Provider Certifications)",
        items: [
            {
                text: "For Customer Personal Data, Dollar Traq will, and hereby certifies that it understands these restrictions and will:",
            },
        ],
        subItems: [
            "Process it only for the business purposes of providing the Services described in the Agreement and Annex I, or as otherwise permitted by Applicable Data Protection Laws (including security, debugging, and internal use to build or improve the quality of the Services);",
            "not sell it or share it for cross-context behavioral advertising;",
            "not retain, use, or disclose it outside the direct business relationship with Customer or for any purpose (including a commercial purpose) other than the business purposes specified, except as permitted by law;",
            "not combine it with Personal Information received from or on behalf of another person, or collected from its own interaction with a consumer, except as permitted by Applicable Data Protection Laws for the business purposes specified (the parties acknowledge that Platform Data under Section 3.3 is not Customer Personal Data);",
            "comply with Applicable Data Protection Laws and provide the same level of privacy protection they require;",
            "notify Customer without undue delay if it determines it can no longer meet its obligations under Applicable Data Protection Laws;",
            "permit Customer to take reasonable and appropriate steps under Sections 10 and 11 to ensure Dollar Traq uses Customer Personal Data consistently with Customer's obligations, and to stop and remediate unauthorized use;",
            "ensure every person authorized to Process Customer Personal Data is bound by confidentiality obligations; and",
            "impose the obligations of this DPA on Subprocessors by written contract.",
        ],
    },
    {
        id: "customer-obligations",
        number: "5",
        title: "Customer Obligations",
        variant: "paragraphs",
        items: [
            {
                text: "Customer will: (a) comply with Applicable Data Protection Laws as a business/controller, including providing privacy notices and establishing a lawful basis; (b) obtain and document all consents and provide all notices required for the Processing it instructs — including driver and vehicle location tracking, call recording and monitoring, AI-assisted calls and messages, text messaging, biometric identity verification, and mailbox connection; (c) ensure the accuracy and lawfulness of Customer Personal Data; (d) not instruct Processing that would violate Applicable Data Protection Laws; and (e) configure retention, access, and feature settings consistent with its own obligations. Dollar Traq may decline an instruction it reasonably believes unlawful and will notify Customer.",
            },
        ],
    },
    {
        id: "requests",
        number: "6",
        title: "Consumer and Data Subject Requests",
        variant: "paragraphs",
        items: [
            {
                text: "Taking into account the nature of the Processing, Dollar Traq will assist Customer in responding to verifiable consumer requests (access, deletion, correction, portability, opt-out, limit) concerning Customer Personal Data by: (a) providing self-service export, correction, and deletion tools in the Services; and (b) forwarding to Customer, within 5 business days, any request Dollar Traq receives that identifies Customer, without responding except to direct the requester to Customer, unless a response by Dollar Traq is required by law. Requests concerning Platform Data are handled by Dollar Traq under its Privacy Policy, including the carrier score and report dispute process.",
            },
        ],
    },
    {
        id: "subprocessors",
        number: "7",
        title: "Subprocessors",
        items: [
            {
                label: "7.1 Authorization.",
                text: (
                    <>
                        Customer generally authorizes Dollar Traq to engage the
                        Subprocessors listed at{" "}
                        {pageLink(
                            "/subprocessors",
                            "www.dollartraq.com/subprocessors"
                        )}{" "}
                        and its Affiliates (including Dollar Traq LLP, India).
                    </>
                ),
            },
            {
                label: "7.2 Changes.",
                text: (
                    <>
                        Dollar Traq will update the list and notify subscribed
                        Customers at least 30 days before a new Subprocessor
                        Processes Customer Personal Data (10 days for a
                        replacement required urgently for security or
                        continuity, with prompt notice). Subscribe by emailing{" "}
                        {emailLink(
                            "privacy@dollartraq.com",
                            "Subscribe — Subprocessor Updates"
                        )}{" "}
                        with the subject "Subscribe — Subprocessor Updates."
                    </>
                ),
            },
            {
                label: "7.3 Objection.",
                text: "Customer may object on reasonable data-protection grounds within 30 days of notice. The parties will discuss in good faith; if Dollar Traq cannot offer a commercially reasonable alternative, Customer may terminate the affected Service on notice and receive a pro-rated refund of prepaid, unused fees for it, as Customer's sole remedy.",
            },
            {
                label: "7.4 Responsibility.",
                text: "Dollar Traq remains responsible for its Subprocessors' performance and liable for their breaches of this DPA to the same extent Dollar Traq would be liable for its own.",
            },
        ],
    },
    {
        id: "security",
        number: "8",
        title: "Security",
        variant: "paragraphs",
        items: [
            {
                text: "Dollar Traq will maintain the technical and organizational measures described in Annex II, appropriate to the risk and the nature of Customer Personal Data, and will not materially decrease the overall security of the Services during a subscription term. Customer is responsible for security within its control: credentials, Authorized User management, device and network security, and configuration choices.",
            },
        ],
    },
    {
        id: "incidents",
        number: "9",
        title: "Security Incidents",
        variant: "paragraphs",
        items: [
            {
                text: "Dollar Traq will notify Customer without undue delay, and in any event within 72 hours after confirming a Security Incident, by email to Customer's account and security contacts. The notice will describe, to the extent known, the nature of the incident, the categories and approximate volume of Customer Personal Data and individuals concerned, likely consequences, measures taken or proposed, and a contact point, supplemented as information develops. Dollar Traq will take reasonable steps to contain and remediate the incident and will reasonably cooperate with Customer's own notification obligations. Dollar Traq's notice is not an acknowledgment of fault. Customer is solely responsible for notifying regulators, individuals, and its own customers as its obligations require.",
            },
        ],
    },
    {
        id: "audits",
        number: "10",
        title: "Audits and Assessments",
        variant: "paragraphs",
        items: [
            {
                text: "Dollar Traq will make available, under NDA: its most recent SOC 2 report (or, while the examination is in progress, the auditor's bridge or status letter), penetration-test summaries, and responses to Customer's reasonable written security questionnaires (no more than once per 12 months, except after a Security Incident or a demonstrated material compliance concern). If those materials are insufficient to demonstrate compliance and Applicable Data Protection Laws grant Customer an audit right, Customer may conduct, at its own cost, a remote or on-site audit of relevant controls once per 12 months on at least 30 days' notice, during business hours, without access to other customers' data, other customers' configurations, or Dollar Traq systems unrelated to Customer Personal Data, subject to Dollar Traq's confidentiality and site policies. The parties agree these measures constitute the audit and inspection rights, and the assessment mechanism, contemplated by Applicable Data Protection Laws.",
            },
        ],
    },
    {
        id: "remediation",
        number: "11",
        title: "Remediation",
        variant: "paragraphs",
        items: [
            {
                text: (
                    <>
                        If Customer reasonably and in good faith determines that
                        Dollar Traq is Processing Customer Personal Data in an
                        unauthorized manner, Customer may notify{" "}
                        {emailLink("legal@dollartraq.com")}, and the parties
                        will work together promptly to stop and remediate the
                        unauthorized Processing.
                    </>
                ),
            },
        ],
    },
    {
        id: "deletion",
        number: "12",
        title: "Return and Deletion",
        variant: "paragraphs",
        items: [
            {
                text: "During the term, Customer may export Customer Personal Data through the Services. For 30 days after termination, export remains available on request. Dollar Traq will delete Customer Personal Data within 90 days after termination, except (a) copies in routine backups, deleted on the backup cycle; (b) records Dollar Traq must retain under law (including payment, tax, and sanctions-screening records); and (c) data needed to establish, exercise, or defend legal claims — in each case protected under this DPA until deletion. Platform Data (Section 3.3) is retained under the Dollar Traq Privacy Policy and is not deleted on a Customer's termination. On written request, Dollar Traq will confirm deletion in writing.",
            },
        ],
    },
    {
        id: "transfers",
        number: "13",
        title: "International Processing",
        variant: "paragraphs",
        items: [
            {
                text: "Customer Personal Data is hosted in the United States. Dollar Traq personnel, including personnel of its engineering and support affiliate Dollar Traq LLP (Gurugram, India), may access Customer Personal Data from India to provide, support, and secure the Services, under a written intercompany agreement imposing this DPA's obligations, role-based access, logging, and the Annex II measures. To the extent the GDPR or UK GDPR applies to any transfer, the EU Standard Contractual Clauses (Module 2: controller-to-processor; Module 3: processor-to-processor, as applicable) are incorporated by reference with Dollar Traq as data importer, Annexes I and II of this DPA serving as their annexes, Illinois courts and law applying where a choice is permitted for non-EU matters, and the UK International Data Transfer Addendum and Swiss adaptations applying as required.",
            },
        ],
    },
    {
        id: "liability",
        number: "14",
        title: "Liability; Precedence; Changes",
        variant: "paragraphs",
        items: [
            {
                text: "Each party's liability under this DPA is subject to the exclusions and caps in Section 16 of the Agreement, and liability under the Agreement and this DPA is aggregated, not additive. For data-protection matters, this DPA controls over the Terms of Service; a signed Order Form controls over this DPA. Dollar Traq may update this DPA to reflect changes in law or the Services; material changes take effect 30 days after notice per Section 18 of the Terms of Service.",
            },
        ],
    },
];

const annexI: Item[] = [
    {
        label: "A. Parties.",
        text: (
            <>
                Data exporter / business: Customer (freight broker, 3PL, or
                shipper identified in the account or Order Form). Data importer
                / service provider: Dollar Traq Corp, with sub-Processing by the
                entities at{" "}
                {pageLink(
                    "/subprocessors",
                    "www.dollartraq.com/subprocessors"
                )}
                .
            </>
        ),
    },
    {
        label: "B. Subject matter and nature.",
        text: "Hosting, storage, transmission, analysis, extraction, classification, drafting, display, and deletion of Customer Data to provide the Services: carrier vetting and onboarding, insurance verification, compliance monitoring, load tracking, driver coordination, voice and messaging, connected-mailbox workflows, rate intelligence, document extraction, and conditional payment release (DT Pay).",
    },
    {
        label: "C. Purpose.",
        text: "Performance of the Agreement; security, support, and improvement of the Services for Customer; compliance with law.",
    },
    {
        label: "D. Categories of data subjects.",
        text: "Customer's Authorized Users, employees, and contractors; carrier personnel, dispatchers, and drivers assigned to Customer's loads; insurance producers; shippers, consignees, and facility contacts; counterparties in connected mailboxes and calls.",
    },
    {
        label: "E. Categories of Customer Personal Data.",
        text: "Names, business contact details, job titles; MC/DOT and business identifiers; shipment, load, rate, and billing records; mailbox messages and attachments within authorized scopes; call recordings, transcripts, and messages; tracking and location data for Customer's loads; photographs, signatures, PODs, BOLs, and extracted document data; support and configuration records.",
    },
    {
        label: "F. Sensitive data.",
        text: "Precise geolocation of drivers and vehicles on Customer's loads; taxpayer identification numbers on W-9s; bank account details (processed by the payment processor); government-ID and biometric verification outcomes (verification itself is Platform Data processed with the verification vendor under Section 3.3). Safeguards: Annex II, purpose limitation, and access restriction.",
    },
    {
        label: "G. Frequency and duration.",
        text: "Continuous during the term; retention per the Agreement, Customer configuration, and Section 12.",
    },
];

const annexII: string[] = [
    "Encryption of Personal Information in transit (TLS 1.2+) and at rest (AES-256); integration and OAuth tokens encrypted at rest.",
    "Logical tenant separation of Customer Data; documents in private cloud storage accessed via short-lived signed URLs.",
    "Role-based access control on least-privilege; multi-factor authentication for personnel and available to Customers; SMS/OTP login controls for driver and broker access.",
    "Centralized secrets management; environment separation (production/staging); controlled deployment pipeline with rollback.",
    "Logging and monitoring of production access and security events; audit trails for e-signatures and payment actions.",
    "Vulnerability management, dependency scanning, and remediation of prioritized findings; periodic penetration testing.",
    "Secure development lifecycle with code review; human-in-the-loop approval gates for agent actions affecting third parties.",
    "Personnel: background checks where lawful, confidentiality agreements, security training, and documented onboarding/offboarding with access revocation; engineering access from India under intercompany agreement and the same controls.",
    "Vendor management: security review and written data-protection terms for Subprocessors.",
    "Backups with defined cycles; disaster-recovery and incident-response procedures with defined severity levels and the Section 9 notification commitment.",
    "Independent examination: SOC 2 examination in progress; report or bridge letter available under NDA.",
];

const bodyText =
    "text-sm leading-7 text-gray-600 sm:text-base sm:leading-8";
const listText =
    "mt-4 space-y-3 pl-6 text-sm leading-7 text-gray-600 sm:pl-10 sm:text-base sm:leading-8";

function ContentItem({ label, text }: Item) {
    return (
        <li>
            {label && (
                <strong className="font-semibold text-gray-900">
                    {label}{" "}
                </strong>
            )}
            {text}
        </li>
    );
}

export function DataProcessingAddendum({
    className = "",
    lastUpdated = "September 30, 2026",
}: DataProcessingAddendumProps) {
    return (
        <>
            <SectionIntro
                stickToTop
                title="How we handle your data, in detail."
                description="Our commitments as your service provider: what we process, who helps us, how we protect it, and what happens if something goes wrong."
                backgroundColor="#015EFF"
            />

            <main
                className={`max-w-5xl mx-auto mt-6 mb-16 px-4 sm:px-6 lg:px-8 ${className}`}
            >
                <header>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Data Processing Addendum
                    </h1>

                    <p className="mt-3 text-sm text-gray-600 sm:text-base">
                        Effective Date:{" "}
                        <span className="font-medium text-gray-900">
                            September 30, 2026
                        </span>
                    </p>

                    <p className="mt-1 text-sm text-gray-600 sm:text-base">
                        Last updated:{" "}
                        <span className="font-medium text-gray-900">
                            {lastUpdated}
                        </span>
                    </p>
                </header>

                <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
                    <section>
                        <p className={`${bodyText}`}>
                            This Data Processing Addendum (the{" "}
                            <strong className="text-gray-900">"DPA"</strong>)
                            forms part of the Dollar Traq{" "}
                            {pageLink("/terms-of-service", "Terms of Service")} or other
                            written agreement for the Services (the{" "}
                            <strong className="text-gray-900">
                                "Agreement"
                            </strong>
                            ) between Dollar Traq Corp, a Delaware corporation
                            with offices at Suite 304, 1560 Wall Street,
                            Naperville, IL 60563 ("Dollar Traq"), and the
                            customer that has accepted the Agreement
                            ("Customer"). This DPA is incorporated into the
                            Agreement by Section 6.9 of the Terms of Service and
                            applies automatically to every Customer whose
                            Customer Data includes Personal Information — no
                            signature is required. A countersigned copy is
                            available on request to{" "}
                            {emailLink("legal@dollartraq.com")}. Capitalized
                            terms not defined here have the meanings in the
                            Agreement.
                        </p>
                    </section>

                    {dpaSections.map((section) => (
                        <section key={section.id} id={section.id}>
                            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                                {section.number}. {section.title}
                            </h2>

                            {section.variant === "paragraphs" ? (
                                <div className={`mt-3 space-y-3 ${bodyText}`}>
                                    {section.items.map((item, index) => (
                                        <p key={`${section.id}-${index}`}>
                                            {item.text}
                                        </p>
                                    ))}
                                </div>
                            ) : (
                                <ul
                                    className={`${listText} ${
                                        section.id === "definitions"
                                            ? ""
                                            : "list-none pl-0 sm:pl-0"
                                    }`}
                                >
                                    {section.items.map((item, index) => (
                                        <ContentItem
                                            key={`${section.id}-${index}`}
                                            label={item.label}
                                            text={item.text}
                                        />
                                    ))}
                                </ul>
                            )}

                            {section.subItems && (
                                <ol
                                    className={`mt-3 list-[lower-alpha] ${listText}`}
                                >
                                    {section.subItems.map((text, index) => (
                                        <li key={`${section.id}-sub-${index}`}>
                                            {text}
                                        </li>
                                    ))}
                                </ol>
                            )}

                            {section.closing && (
                                <p className={`mt-4 ${bodyText}`}>
                                    {section.closing}
                                </p>
                            )}
                        </section>
                    ))}

                    <section id="contact">
                        <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                            15. Contact
                        </h2>

                        <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 text-sm leading-7 text-gray-600 sm:p-6 sm:text-base">
                            <p>
                                Privacy Office:{" "}
                                {emailLink("privacy@dollartraq.com")}
                            </p>
                            <p>Legal: {emailLink("legal@dollartraq.com")}</p>
                            <p>
                                Security: {emailLink("security@dollartraq.com")}
                            </p>
                            <address className="mt-2 not-italic">
                                Dollar Traq Corp, Attn: Privacy Office, Suite
                                304, 1560 Wall Street, Naperville, IL 60563, USA
                            </address>
                        </div>
                    </section>

                    <section
                        id="annex-1"
                        className="border-t border-gray-200 pt-8"
                    >
                        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            Annex I — Details of Processing
                        </h2>

                        <ul
                            className={`list-none pl-0 sm:pl-0 ${listText}`}
                        >
                            {annexI.map((item, index) => (
                                <ContentItem
                                    key={`annex-1-${index}`}
                                    label={item.label}
                                    text={item.text}
                                />
                            ))}
                        </ul>
                    </section>

                    <section id="annex-2">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                            Annex II — Technical and Organizational Measures
                        </h2>

                        <ul className={`list-disc ${listText}`}>
                            {annexII.map((text, index) => (
                                <li key={`annex-2-${index}`}>{text}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
}

export default DataProcessingAddendum;