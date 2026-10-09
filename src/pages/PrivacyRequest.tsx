"use client";

import React from "react";
import SectionIntro from "@/components/common/SectionIntro";
import PrivacyRequestForm from "@/components/common/PrivacyRequestForm";
export interface PrivacyRequestProps {
    className?: string;
    lastUpdated?: string;
}

const channels: { label: string; text: React.ReactNode }[] = [
    {
        label: "State privacy rights",
        text: (
            <>
                (access, correct, delete, portable copy, opt-out, limit
                sensitive data, appeal) → use the form below or email{" "}
                <a href="mailto:privacy@dollartraq.com" className="link">
                    privacy@dollartraq.com
                </a>
                .
            </>
        ),
    },
    {
        label: "Dispute a Trust Score, compliance status, flag, or incident report about your carrier",
        text: (
            <>
                → email{" "}
                <a href="mailto:disputes@dollartraq.com" className="link">
                    disputes@dollartraq.com
                </a>{" "}
                with your MC or DOT number, the item you dispute, and
                supporting documents (rate confirmations, correspondence,
                insurance documents, police or claim reports). We acknowledge
                within 5 business days and resolve within 30 days (extendable
                once by 30 days for complex matters). Contested items are
                annotated as disputed while under review.
            </>
        ),
    },
    {
        label: "Information a broker holds about you",
        text: "(for example, a packet you completed for a specific brokerage, or that broker's shipment records): the broker controls that data. Submit your request here and we will forward it to the broker within 5 business days and assist them; where we also hold the data in the shared carrier record, we will respond directly.",
    },
    {
        label: "Stop marketing messages",
        text: (
            <>
                → click "unsubscribe" in any email; reply{" "}
                <strong className="font-semibold text-gray-900">STOP</strong>{" "}
                to any text. Note: opting out of texts may prevent load
                check-ins and passcodes.
            </>
        ),
    },
    {
        label: "Report a security vulnerability",
        text: (
            <>
                →{" "}
                <a href="mailto:security@dollartraq.com" className="link">
                    security@dollartraq.com
                </a>
                .
            </>
        ),
    },
];

const rights: { label: string; text: string }[] = [
    {
        label: "Know / Access",
        text: "confirm we process your personal information and receive a copy of it, including in a portable, machine-readable format.",
    },
    {
        label: "Correct",
        text: "fix inaccurate or incomplete information. (Public government records — FMCSA registration, inspection, crash, and insurance filings — can only be corrected by the agency that maintains them; we will point you to the right place and reflect the agency's correction once published.)",
    },
    {
        label: "Delete",
        text: "delete personal information we hold, subject to legal exceptions (fraud prevention, security, legal compliance, payment and tax recordkeeping, completing a transaction you requested, and defending legal claims).",
    },
    {
        label: "Opt out",
        text: 'of the sale or sharing of personal information and of targeted advertising. We do not sell personal information; our marketing website\'s advertising cookies can be turned off via the "Your Privacy Choices" link in the site footer, and we honor Global Privacy Control browser signals automatically.',
    },
    {
        label: "Limit",
        text: "restrict use of sensitive personal information to purposes permitted by law.",
    },
    {
        label: "Withdraw consent",
        text: "for background location (in your device settings) or biometric verification (decline on the verification screen). Certain features will stop working, and a broker may decline to work with you as a result.",
    },
    {
        label: "Appeal",
        text: 'a decision we make on your request (see "Appeals" below).',
    },
    {
        label: "Oregon residents",
        text: "may additionally request the list of specific third parties to which we disclosed personal data.",
    },
];

const verification: { label: string; text: string }[] = [
    {
        label: "Account holders",
        text: "sign in, or confirm a one-time code sent to the email or phone number on your account.",
    },
    {
        label: "Carriers and drivers",
        text: "a one-time code to the phone or email on the carrier record, plus matching details such as your MC/DOT number; for high-risk requests (deletion, bank or contact changes) we may require additional confirmation, including verification against FMCSA-listed contact information or re-verification through our identity vendor.",
    },
    {
        label: "No account or record match",
        text: "we may ask for two to three data points that match what we hold. Information collected for verification is used only for verification.",
    },
    {
        label: "Authorized agents",
        text: "we require proof of authority and may confirm directly with the individual.",
    },
];

const timelines: { label: string; text: string }[] = [
    {
        label: "Confirmation of receipt",
        text: "within 10 business days, with your request ID.",
    },
    {
        label: "Opt-out and limit requests",
        text: "honored within 15 business days.",
    },
    {
        label: "Access, correction, deletion, portability",
        text: "decision within 45 days; if we need more time, we will notify you and may extend once by a further 45 days.",
    },
    {
        label: "Score and report disputes",
        text: "acknowledged in 5 business days; resolved in 30 days, extendable once by 30 days.",
    },
];

const notes: React.ReactNode[] = [
    <>
        The Services are for adults in commercial transportation; we do not
        knowingly hold data on anyone under 18. Report suspected children's
        data to{" "}
        <a href="mailto:privacy@dollartraq.com" className="link">
            privacy@dollartraq.com
        </a>{" "}
        for deletion.
    </>,
    "Requests to recite, export, or delete data held in a broker's own systems (their TMS, their mailbox) must go to that broker; Dollar Traq cannot act on systems it does not control.",
    "Deleting your carrier record does not remove public FMCSA data from government sources, and records of fraud reports, sanctions screening, payments, and disputes may be retained where the law permits or requires.",
];

const bodyText = "text-sm leading-7 text-gray-600 sm:text-base sm:leading-8";
const linkClass = "font-medium text-gray-900 underline underline-offset-2";
const h2Class = "text-lg font-bold text-gray-900 sm:text-xl";
const listClass = `mt-4 list-disc space-y-2 pl-6 sm:pl-10 ${bodyText}`;
const strong = "font-semibold text-gray-900";

export function PrivacyRequest({
    className = "",
    lastUpdated = "September 30, 2026",
}: PrivacyRequestProps) {
    return (
        <>
            {/* Scoped helper so inline <a className="link"> in data arrays matches linkClass */}
            <style>{`.link{font-weight:500;color:#111827;text-decoration:underline;text-underline-offset:2px}`}</style>

            <SectionIntro
                stickToTop
                title="Your data, your choice."
                description="Access, correct, delete, opt out, or dispute a carrier score, with clear timelines and verification steps."
                backgroundColor="#015EFF"
            />

            <main
                className={`max-w-5xl mx-auto mt-6 mb-16 px-4 sm:px-6 lg:px-8 ${className}`}
            >
                <header>
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                        Submit a Privacy Request
                    </h1>

                    <p className="mt-3 text-sm text-gray-600 sm:text-base">
                        Last updated:{" "}
                        <span className="font-medium text-gray-900">
                            {lastUpdated}
                        </span>
                    </p>
                </header>

                <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
                    {/* Intro */}
                    <section>
                        <p className={bodyText}>
                            Use this page to exercise your privacy rights with
                            Dollar Traq Corp ("Dollar Traq"). It covers everyone
                            we handle information about — freight brokers and
                            their teams, motor carriers and dispatchers,
                            drivers, insurance producers, shippers and
                            consignees, and website visitors. Full details are
                            in our{" "}
                            <a href="/privacy-policy" className={linkClass}>
                                Privacy Policy
                            </a>
                            , Sections 7 and 15. We do not sell personal
                            information, and we will never treat you
                            differently for exercising your rights.
                        </p>
                    </section>

                    {/* Channels */}
                    <section id="channels">
                        <h2 className={h2Class}>Pick the Right Channel First</h2>

                        <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
                            <ul className={`list-disc space-y-3 pl-5 ${bodyText}`}>
                                {channels.map((c) => (
                                    <li key={c.label}>
                                        <strong className={strong}>
                                            {c.label}
                                        </strong>{" "}
                                        {c.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Rights */}
                    <section id="rights">
                        <h2 className={h2Class}>Your Rights</h2>

                        <p className={`mt-3 ${bodyText}`}>
                            Depending on your state or country of residence, you
                            may request to:
                        </p>

                        <ul className={listClass}>
                            {rights.map((r) => (
                                <li key={r.label}>
                                    <strong className={strong}>{r.label}</strong>{" "}
                                    — {r.text}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Form */}
                    <section id="form">
                        <h2 className={h2Class}>Request Form</h2>

                        <div className="mt-4">
                            {/* mockSubmit is true by default; pass mockSubmit={false} once /api/privacy-request exists */}
                            <PrivacyRequestForm />
                        </div>

                        <p className={`mt-5 ${bodyText}`}>
                            If you cannot use the form, email{" "}
                            <a
                                href="mailto:privacy@dollartraq.com"
                                className={linkClass}
                            >
                                privacy@dollartraq.com
                            </a>{" "}
                            or write to: Dollar Traq Corp, Attn: Privacy Office,
                            Suite 304, 1560 Wall Street, Naperville, IL 60563,
                            USA. Requests are free of charge; we may decline or
                            charge a reasonable fee for requests that are
                            manifestly unfounded, excessive, or repetitive, and
                            we will explain why.
                        </p>
                    </section>

                    {/* Verification */}
                    <section id="verification">
                        <h2 className={h2Class}>How We Verify You</h2>

                        <p className={`mt-3 ${bodyText}`}>
                            To protect your information, we verify identity
                            before acting:
                        </p>

                        <ul className={listClass}>
                            {verification.map((v) => (
                                <li key={v.label}>
                                    <strong className={strong}>{v.label}</strong>{" "}
                                    — {v.text}
                                </li>
                            ))}
                        </ul>

                        <p className={`mt-4 ${bodyText}`}>
                            If we cannot verify you to the level of certainty
                            the request requires, we will tell you and, where
                            possible, act on the parts we can verify (for
                            example, treating an unverifiable deletion request
                            as an opt-out).
                        </p>
                    </section>

                    {/* Timelines */}
                    <section id="timelines">
                        <h2 className={h2Class}>Timelines</h2>

                        <ul className={listClass}>
                            {timelines.map((t) => (
                                <li key={t.label}>
                                    <strong className={strong}>{t.label}:</strong>{" "}
                                    {t.text}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Appeals */}
                    <section id="appeals">
                        <h2 className={h2Class}>Appeals</h2>

                        <p className={`mt-3 ${bodyText}`}>
                            If we decline all or part of your request, you may
                            appeal within 60 days by replying to our decision
                            email or submitting the form with "Appeal a prior
                            decision" selected and your request ID. A reviewer
                            not involved in the original decision will respond
                            in writing within 45 days. If your appeal is denied,
                            our response will explain how to contact your state
                            Attorney General or data protection authority to
                            submit a complaint.
                        </p>
                    </section>

                    {/* Notes */}
                    <section id="notes">
                        <h2 className={h2Class}>Notes</h2>

                        <ul className={listClass}>
                            {notes.map((n, i) => (
                                <li key={i}>{n}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </main>
        </>
    );
}

export default PrivacyRequest;