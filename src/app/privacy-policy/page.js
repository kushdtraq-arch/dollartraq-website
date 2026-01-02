
import Main from '@/components/layout/Main';

export default function Page() {
    return (
        <>
            <Main
                page="terms_of_service"
                active_page="terms_of_service"
            >
                <div className='w-5xl mx-auto mt-9'>
                    <div className='grid grid-span-12'>
                        <div className='col-span-12 pt-9'>
                            <h1 className='font-bold text-2xl'>Privacy Policy</h1>
                        </div>
                        <div className='col-span-12 mt-5'>
                            <div className='text-sm'>
                                Last updated: <span>30 Sept, 2025</span>
                            </div>
                        </div>
                        <div className='col-span-12 mt-5 mb-9 pb-9'>
                            <div className='content-wrapper'>
                                <p>{`This Privacy Policy describes how Dollar Traq Corp (“Dollar Traq”, “we”, “us”, or “our”) collects, uses, stores, discloses, and protects personal information of users of our services (website, mobile apps, APIs, etc.). By using our services, you agree to the practices described here.`}</p>

                                <h2>1. Scope & Applicability</h2>
                                <ul>
                                    <li>{`This Policy applies to all personal information collected from users (e.g. customers, carriers, drivers) in their capacity as natural persons.`}</li>
                                    <li>{`Employee or employment applicant data may be handled under a separate “Employee Privacy Policy.”`}</li>
                                    <li>{`We may adapt or supplement this Policy to comply with local data protection laws (GDPR, CCPA, India’s data laws, etc.).`}</li>
                                </ul>

                                <h2>2. Definitions</h2>
                                <ul>
                                    <li><strong>Personal Information / Personal Data:</strong> <span>{`any information relating to an identified or identifiable natural person (e.g. name, email, phone, device identifiers, location).`}</span></li>
                                    <li><strong>Processing:</strong> <span>{`any operation performed on personal data (collecting, storing, using, disclosing, combining, deleting).`}</span></li>
                                    <li><strong>Anonymized / Aggregated Data:</strong> <span>{`data that has been stripped of identifiers such that individuals cannot be identified.`}</span></li>
                                </ul>

                                <h2>3. Information We Collect</h2>
                                <p>{`We collect information from you in various ways:`}</p>
                                
                                <h3>{`a) Information You Provide`}</h3>
                                <ul>
                                    <li>{`Account registration: name, email, phone number, address, company name`}</li>
                                    <li>{`Payment or billing information”`}</li>
                                    <li>{`Customer support communications or feedback`}</li>
                                    <li>{`Any data you input or upload (e.g. shipment IDs, instructions)`}</li>
                                </ul>

                                <h3>{`b) Location & Telemetry Data`}</h3>
                                <ul>
                                    <li>{`Device GPS/location (latitude, longitude, altitude, accuracy)`}</li>
                                    <li>{`Movement, heading, speed, timestamps`}</li>
                                    <li>{`Other device metadata (device type, OS version, battery status)`}</li>
                                    <li>{`We collect this when the Service is active (e.g. during shipments)`}</li>
                                </ul>

                                <h3>{`c) Automatically Collected / Log Data`}</h3>
                                <ul>
                                    <li>{`IP address`}</li>
                                    <li>{`Browser or app usage (pages visited, feature use)`}</li>
                                    <li>{`Cookies and similar technologies`}</li>
                                    <li>{`Crash logs, diagnostics`}</li>
                                </ul>

                                <h3>{`d) From Third Parties`}</h3>
                                <ul>
                                    <li>{`Integration partners (e.g. GPS / ELD vendors, telematics systems)`}</li>
                                    <li>{`Public or commercial data sources`}</li>
                                    <li>{`Affiliates or business partners`}</li>
                                </ul>

                                <h2>4. How We Use Personal Information</h2>
                                <p>We use your data for the following purposes:</p>
                                <ul>
                                    <li>{`to provide, maintain, and improve our Service`}</li>
                                    <li>{`to authenticate users, manage accounts, and provide support`}</li>
                                    <li>{`to transmit location data or tracking information to authorized parties`}</li>
                                    <li>{`to analyze usage, generate insights, reports, and aggregated analytics`}</li>
                                    <li>{`to communicate with you (notifications, updates, marketing, security alerts)`}</li>
                                    <li>{`to detect, prevent, and address technical or security issues`}</li>
                                    <li>{`to comply with legal obligations, enforce policies, or respond to legal requests`}</li>
                                    <li>{`for internal research, development, or business intelligence`}</li>
                                </ul>

                                <p>{`Where required by law, we will obtain your consent before using your data for certain purposes (e.g. marketing).`}</p>

                                <h2>5. Sharing & Disclosure of Data</h2>
                                <p>{`We may share personal information with:`}</p>

                                <ul>
                                    <li>{`Our affiliates, subsidiaries, contractors, and service providers (e.g. hosting, analytics, communications)`}</li>
                                    <li>{`Authorized business partners and customers (for enabling shipment tracking)`}</li>
                                    <li>{`Legal or regulatory authorities if required by law or in response to valid legal processes`}</li>
                                    <li>{`In connection with mergers, acquisitions, restructuring (with appropriate safeguards)`}</li>
                                    <li>{`If you consent, to third parties for marketing or other purposes`}</li>
                                </ul>

                                <p>{`We will require third parties to maintain confidentiality and only use the data for permitted purposes. We do not sell personal data for direct marketing without your explicit consent (subject to applicable law).`}</p>

                                <h2>6. International Transfers</h2>
                                <p>{`Because we may operate across national borders, your data may be transferred, stored, and processed in jurisdictions different from your residence. We will ensure such transfers comply with applicable legal standards (e.g. EU standard contractual clauses, data localization laws, etc.).`}</p>

                                <h2>7. Data Retention</h2>
                                <p>{`We retain personal information only as long as needed for the purposes set forth, unless longer retention is required by law. After that, we will delete, anonymize, or de-identify the data.`}</p>

                                <h2>8. Security</h2>
                                <p>{`We implement appropriate technical, organizational, and administrative safeguards to protect data against unauthorized access, disclosure, alteration, or destruction. Access is limited to personnel who require it for their job. However, no method of transmission or storage is 100% secure; we cannot guarantee absolute security.`}</p>

                                <h2>9. Your Rights & Choices</h2>
                                <p>{`Subject to applicable law, you may have rights including:`}</p>

                                <ul>
                                    <li>{`Access: request a copy of your data`}</li>
                                    <li>{`Correction: request corrections to inaccurate or incomplete data`}</li>
                                    <li>{`Deletion: ask us to delete your personal data`}</li>
                                    <li>{`Restriction or objection: limit or object to certain processing`}</li>
                                    <li>{`Portability: receive your data in a machine-readable format`}</li>
                                    <li>{`Withdraw consent: where processing is consent-based`}</li>
                                    <li>{`Oppose profiling / automated decision-making`}</li>
                                </ul>

                                <p>{`To exercise any of these rights, contact us as described below. We may need to verify your identity before granting requests.`}</p>

                                <h2>10. Cookies & Tracking Technologies</h2>
                                <p>{`We use cookies, beacons, and similar technologies to:`}</p>

                                <ul>
                                    <li>{`distinguish users`}</li>
                                    <li>{`improve user experience`}</li>
                                    <li>{`analyze usage and performance`}</li>
                                    <li>{`deliver relevant content`}</li>
                                </ul>
                                <p>{`You may disable cookies via your browser settings, but some features of the Service may not function properly if you do so.`}</p>

                                <h2>11. Minors</h2>
                                <p>{`Our Service is not intended for minors (e.g. under 13). We do not knowingly collect personal data from minors. If you become aware of such data being collected, contact us so we can remove it.`}</p>

                                <h2>12. Changes to This Policy</h2>
                                <p>{`We may update this Privacy Policy from time to time. When we make material changes, we will notify users (e.g. via email or in-app notification). Your continued use after the changes means you accept the updated policy.`}</p>

                                <h2>13. Contact Information</h2>
                                <p>{`If you have questions, concerns, or wish to exercise your rights, contact us at`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
}
