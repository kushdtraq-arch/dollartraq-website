"use client";

import React from "react";

export interface TermsOfServiceProps {
    className?: string;
    lastUpdated?: string;
}

export function TermsOfService({
    className = "",
    lastUpdated = "30 Sept, 2025",
}: TermsOfServiceProps) {
    return (
        <div
            className={`max-w-5xl mx-auto mt-6 mb-16 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Terms Of Services
            </h1>

            <p className="mt-3 text-sm text-gray-600 sm:text-base">
                Last updated: <span>{lastUpdated}</span>
            </p>

            <div className="mt-6 space-y-8 sm:mt-8 sm:space-y-10">
                <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                    {`These Terms & Conditions (the “Agreement”) govern your access to and use of services offered by Dollar Traq Corp (“Dollar Traq”, “we”, “us”, or “our”) via our website, mobile applications, APIs, and other platforms (collectively, the “Service”). By using or accessing the Service, or by clicking “Accept,” you (the “User” or “you”) agree to be bound by this Agreement. If you do not agree, you may not use the Service.`}
                </p>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        1. Eligibility &amp; Registration
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`You must be at least [legal age, e.g. 18 years] and have capacity to enter into binding contracts.`}</li>
                        <li>{`You agree to provide true, current, and complete information in any registration or account setup. You are responsible for maintaining confidentiality of your account credentials.`}</li>
                        <li>{`You agree to notify us immediately of any unauthorized use or security breach.`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        2. Subscription, Fees &amp; Payment
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`Access to certain features of the Service may require subscription fees. Unless otherwise agreed, all fees are non-refundable.`}</li>
                        <li>{`You agree to pay all fees due in a timely manner, and you authorize us to charge your designated payment method.`}</li>
                        <li>{`We may change pricing or introduce new fees, with notice in advance. Continued use after such changes constitutes acceptance.`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        3. Use of the Service &amp; Restrictions
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`The Service is provided for your internal business use only (for example, tracking shipments, providing location visibility, analytics, etc.).`}</li>
                        <li>
                            {`You shall not (and shall not permit others to) do any of the following:`}
                            <ul className="mt-2 list-disc space-y-2 pl-5">
                                <li>{`reverse engineer, decompile, or otherwise attempt to derive source code of our software (except as permitted by law);`}</li>
                                <li>{`interfere with or impair the integrity or performance of the Service;`}</li>
                                <li>{`use the Service for unlawful or unauthorized purposes;`}</li>
                                <li>{`upload or transmit viruses, malware, or harmful code;`}</li>
                                <li>{`use the Service in a way that infringes third-party rights (intellectual property, privacy, etc.).`}</li>
                            </ul>
                        </li>
                        <li>{`You must comply with all applicable laws, including data protection, privacy, export control, and telecommunications laws.`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        4. Data, Location &amp; Telemetry
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`As part of the Service, you (or your devices, systems, drivers, or assets) may transmit location data, telemetry, status updates, and related information.`}</li>
                        <li>{`You grant Dollar Traq a worldwide, non-exclusive, royalty-free license to collect, store, process, analyze, and display such data for the purpose of providing the Service.`}</li>
                        <li>{`You warrant that any data you submit or allow to be collected is either your own or you have rights/permission to submit it.`}</li>
                        <li>{`We may aggregate, anonymize, and derive analytics from the data for our internal business purposes, so long as individual users are not identifiable.`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        5. Intellectual Property
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`All intellectual property rights in the Service (software, documentation, trademarks, logos) remain with Dollar Traq or its licensors.`}</li>
                        <li>{`Nothing in this Agreement grants you any right, title, or interest in the Service except the limited right to use it as permitted herein.`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        6. Confidentiality
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`“Confidential Information” means non-public information disclosed by one party to the other, including business plans, data, technical information, etc.`}</li>
                        <li>{`Each party agrees to protect the other’s Confidential Information with at least the same standard of care it uses for its own confidential information, and not to disclose it except to necessary personnel or under legal compulsion.`}</li>
                        <li>{`These obligations survive termination of this Agreement for a period of [e.g. 3–5] years.`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        7. Warranties &amp; Disclaimers
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Limited Warranty.
                            </strong>{" "}
                            {`We warrant that the Service will conform materially to the documentation.`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Disclaimer.
                            </strong>{" "}
                            {`Except as expressly set forth in this Agreement:`}
                            <ul className="mt-2 list-disc space-y-2 pl-5">
                                <li>{`the Service is provided “as is,” “as available,” without warranties of any kind (express, implied, statutory);`}</li>
                                <li>{`we make no warranty of uninterrupted or error-free operation;`}</li>
                                <li>{`we disclaim implied warranties of merchantability, fitness for a particular purpose, non-infringement, etc.`}</li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        8. Limitation of Liability
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`In no event will we (or our officers, employees, licensors) be liable for indirect, incidental, special, punitive, or consequential damages (lost profits, loss of data, business interruption), even if we have been advised of the possibility of such damages.`}</li>
                        <li>{`Our total aggregate liability under this Agreement (for all claims combined) shall not exceed the total amount of fees paid by you to us in the prior [12] months (or a smaller amount, if required by applicable law).`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        9. Indemnification
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`You agree to indemnify, defend, and hold harmless Dollar Traq and its officers, directors, employees, and agents from any third-party claims arising out of:`}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`your use of the Service in violation of this Agreement;`}</li>
                        <li>{`your breach of representations or warranties;`}</li>
                        <li>{`your violation of any applicable law or third-party rights.`}</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        10. Term, Suspension &amp; Termination
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Term &amp; Renewal.
                            </strong>{" "}
                            {`This Agreement begins when you accept it and continues until terminated. Subscriptions may renew automatically unless cancelled in accordance with our policies.`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Suspension.
                            </strong>{" "}
                            {`We may suspend or limit access to the Service (without liability) if we suspect misuse, security threat, or breach.`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Termination.
                            </strong>{" "}
                            {`Either party may terminate for material breach (if not cured within [30] days’ notice). Upon termination:`}
                            <ul className="mt-2 list-disc space-y-2 pl-5">
                                <li>{`you must cease use of the Service;`}</li>
                                <li>{`we may delete or anonymize your data (unless legally required to retain);`}</li>
                                <li>{`Sections on confidentiality, indemnification, limitation of liability, and ownership survive.`}</li>
                            </ul>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        11. Modifications
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        {`We reserve the right to modify or update this Agreement at any time. We will provide notice of material changes (e.g. via email or in-app notification). Continued use after notice indicates your consent to the new terms.`}
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        12. Governing Law &amp; Dispute Resolution
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>{`This Agreement shall be governed by the laws of [State / Country — e.g., India, or U.S. State if you are U.S.-based], without regard to its conflict-of-law rules.`}</li>
                        <li>{`Any disputes arising under or related to this Agreement shall be resolved by [arbitration / court] in [venue], unless otherwise required by law.`}</li>
                        <li>{`The prevailing party is entitled to recover reasonable attorneys’ fees and costs.`}</li>
                    </ol>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
                        13. Miscellaneous
                    </h2>
                    <ol className="mt-3 list-decimal space-y-2 pl-10 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Entire Agreement.
                            </strong>{" "}
                            {`This Agreement (plus any attachments, schedules, or Service-specific terms) is the entire agreement between the parties.`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Severability.
                            </strong>{" "}
                            {`If any provision is unenforceable, the remainder shall still apply.`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Waiver.
                            </strong>{" "}
                            {`Delay or failure to enforce a right is not a waiver.`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Assignment.
                            </strong>{" "}
                            {`You may not assign this Agreement without our prior written consent; we may assign it to an affiliate or successor.`}
                        </li>
                        <li>
                            <strong className="font-semibold text-gray-900">
                                Notices.
                            </strong>{" "}
                            {`Notices may be delivered via email, in-app message, or other means to the addresses on file.`}
                        </li>
                    </ol>
                </section>
            </div>
        </div>
    );
}

export default TermsOfService;