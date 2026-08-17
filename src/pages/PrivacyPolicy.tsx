"use client";

import React from "react";
import SectionIntro from "@/components/common/SectionIntro";
export interface PrivacyPolicyProps {
    className?: string;
    lastUpdated?: string;
}

export function PrivacyPolicy({
    className = "",
    lastUpdated = "30 Sept, 2025",
}: PrivacyPolicyProps) {
    return (
          <>
            <SectionIntro
                stickToTop
                title="Your data, protected end to end."
                description="Here's exactly what we collect, how we use it, and the controls you have over it — no fine print surprises."
                backgroundColor="#015EFF"
            />


        <div
            className={`max-w-5xl mx-auto mt-6 mb-16 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Privacy Policy
            </h1>

            <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Last updated: <span>{lastUpdated}</span>
            </p>

            <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
                <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {`This Privacy Policy describes how Dollar Traq Corp (“Dollar Traq”, “we”, “us”, or “our”) collects, uses, stores, discloses, and protects personal information of users of our services (website, mobile apps, APIs, etc.). By using our services, you agree to the practices described here.`}
                </p>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        1. Scope &amp; Applicability
                    </h2>
                    <ul className="mt-3 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`This Policy applies to all personal information collected from users (e.g. customers, carriers, drivers) in their capacity as natural persons.`}</li>
                        <li>{`Employee or employment applicant data may be handled under a separate “Employee Privacy Policy.”`}</li>
                        <li>{`We may adapt or supplement this Policy to comply with local data protection laws (GDPR, CCPA, India’s data laws, etc.).`}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        2. Definitions
                    </h2>
                    <ul className="mt-3 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Personal Information / Personal Data:
                            </strong>{" "}
                            {`any information relating to an identified or identifiable natural person (e.g. name, email, phone, device identifiers, location).`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Processing:
                            </strong>{" "}
                            {`any operation performed on personal data (collecting, storing, using, disclosing, combining, deleting).`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Anonymized / Aggregated Data:
                            </strong>{" "}
                            {`data that has been stripped of identifiers such that individuals cannot be identified.`}
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        3. Information We Collect
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We collect information from you in various ways:`}
                    </p>

                    <div className="mt-5 space-y-5 pl-5">
                        <div>
                            <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                                {`a) Information You Provide`}
                            </h3>
                            <ul className="mt-2 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                                <li>{`Account registration: name, email, phone number, address, company name`}</li>
                                <li>{`Payment or billing information”`}</li>
                                <li>{`Customer support communications or feedback`}</li>
                                <li>{`Any data you input or upload (e.g. shipment IDs, instructions)`}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                                {`b) Location & Telemetry Data`}
                            </h3>
                            <ul className="mt-2 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                                <li>{`Device GPS/location (latitude, longitude, altitude, accuracy)`}</li>
                                <li>{`Movement, heading, speed, timestamps`}</li>
                                <li>{`Other device metadata (device type, OS version, battery status)`}</li>
                                <li>{`We collect this when the Service is active (e.g. during shipments)`}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                                {`c) Automatically Collected / Log Data`}
                            </h3>
                            <ul className="mt-2 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                                <li>{`IP address`}</li>
                                <li>{`Browser or app usage (pages visited, feature use)`}</li>
                                <li>{`Cookies and similar technologies`}</li>
                                <li>{`Crash logs, diagnostics`}</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                                {`d) From Third Parties`}
                            </h3>
                            <ul className="mt-2 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                                <li>{`Integration partners (e.g. GPS / ELD vendors, telematics systems)`}</li>
                                <li>{`Public or commercial data sources`}</li>
                                <li>{`Affiliates or business partners`}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        4. How We Use Personal Information
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        We use your data for the following purposes:
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`to provide, maintain, and improve our Service`}</li>
                        <li>{`to authenticate users, manage accounts, and provide support`}</li>
                        <li>{`to transmit location data or tracking information to authorized parties`}</li>
                        <li>{`to analyze usage, generate insights, reports, and aggregated analytics`}</li>
                        <li>{`to communicate with you (notifications, updates, marketing, security alerts)`}</li>
                        <li>{`to detect, prevent, and address technical or security issues`}</li>
                        <li>{`to comply with legal obligations, enforce policies, or respond to legal requests`}</li>
                        <li>{`for internal research, development, or business intelligence`}</li>
                    </ul>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`Where required by law, we will obtain your consent before using your data for certain purposes (e.g. marketing).`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        5. Sharing &amp; Disclosure of Data
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We may share personal information with:`}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`Our affiliates, subsidiaries, contractors, and service providers (e.g. hosting, analytics, communications)`}</li>
                        <li>{`Authorized business partners and customers (for enabling shipment tracking)`}</li>
                        <li>{`Legal or regulatory authorities if required by law or in response to valid legal processes`}</li>
                        <li>{`In connection with mergers, acquisitions, restructuring (with appropriate safeguards)`}</li>
                        <li>{`If you consent, to third parties for marketing or other purposes`}</li>
                    </ul>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We will require third parties to maintain confidentiality and only use the data for permitted purposes. We do not sell personal data for direct marketing without your explicit consent (subject to applicable law).`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        6. International Transfers
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`Because we may operate across national borders, your data may be transferred, stored, and processed in jurisdictions different from your residence. We will ensure such transfers comply with applicable legal standards (e.g. EU standard contractual clauses, data localization laws, etc.).`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        7. Data Retention
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We retain personal information only as long as needed for the purposes set forth, unless longer retention is required by law. After that, we will delete, anonymize, or de-identify the data.`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        8. Security
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We implement appropriate technical, organizational, and administrative safeguards to protect data against unauthorized access, disclosure, alteration, or destruction. Access is limited to personnel who require it for their job. However, no method of transmission or storage is 100% secure; we cannot guarantee absolute security.`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        9. Your Rights &amp; Choices
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`Subject to applicable law, you may have rights including:`}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`Access: request a copy of your data`}</li>
                        <li>{`Correction: request corrections to inaccurate or incomplete data`}</li>
                        <li>{`Deletion: ask us to delete your personal data`}</li>
                        <li>{`Restriction or objection: limit or object to certain processing`}</li>
                        <li>{`Portability: receive your data in a machine-readable format`}</li>
                        <li>{`Withdraw consent: where processing is consent-based`}</li>
                        <li>{`Oppose profiling / automated decision-making`}</li>
                    </ul>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`To exercise any of these rights, contact us as described below. We may need to verify your identity before granting requests.`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        10. Cookies &amp; Tracking Technologies
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We use cookies, beacons, and similar technologies to:`}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`distinguish users`}</li>
                        <li>{`improve user experience`}</li>
                        <li>{`analyze usage and performance`}</li>
                        <li>{`deliver relevant content`}</li>
                    </ul>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`You may disable cookies via your browser settings, but some features of the Service may not function properly if you do so.`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        11. Minors
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`Our Service is not intended for minors (e.g. under 13). We do not knowingly collect personal data from minors. If you become aware of such data being collected, contact us so we can remove it.`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        12. Changes to This Policy
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We may update this Privacy Policy from time to time. When we make material changes, we will notify users (e.g. via email or in-app notification). Your continued use after the changes means you accept the updated policy.`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        13. Contact Information
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`If you have questions, concerns, or wish to exercise your rights, contact us at`}
                    </p>
                </section>
            </div>
        </div>
        </>
    );
}

export default PrivacyPolicy;