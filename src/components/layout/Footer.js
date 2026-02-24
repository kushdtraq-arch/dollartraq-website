"use client";

import React, { Component } from "react";
import Link from "next/link";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";

class Footer extends Component {
	render() {
		return (
			<footer className="w-full bg-blue-600 pt-14 pb-10 text-white">
				<div className="w-full max-w-[1300px] mx-auto flex flex-col md:flex-row md:items-start gap-10 md:gap-20 px-4 md:px-0">
					<div className="flex-shrink-0 w-full md:w-[300px]">
						<div className="mb-5">
							<img
								src="/dollar-traq-logo-white.webp"
								alt="DollarTraq"
								className="h-[50px] w-auto"
							/>
						</div>
						<p className="text-md md:text-md mb-6">
							Guiding industries through sustainable transitions
							with bold thinking and technical precision.
						</p>
					    <Link href="/demo">	<Button
							variant="secondary"
							className="bg-white text-blue-700 border-0 px-6 py-2 flex items-center gap-2 mb-6 md:mb-0"
						>
							Book a Demo <ArrowRight size={16} />
						</Button></Link>

						<nav className="mt-7 flex flex-col gap-3 md:gap-4 font-semibold text-sm">
							<Link
								href="/services/shippers"
								className="hover:underline"
							>
								For Shippers
							</Link>
							<Link
								href="/services/3pls-freight-brokers"
								className="hover:underline"
							>
								For 3PLs & Freight Brokers
							</Link>
							<Link
								href="/services/carriers"
								className="hover:underline"
							>
								For Carriers
							</Link>
							<Link
								href="/forwarders"
								className="hover:underline"
							>
								For Forwarders
							</Link>
							<Link href="/partners" className="hover:underline">
								For Partners
							</Link>
						</nav>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 flex-1">
						<div className="text-sm">
							<h4 className="font-bold mb-4 text-lg md:text-xl">
								Features
							</h4>
							<nav className="flex flex-col gap-2 md:gap-4">
								<Link
									href="/real-time-visibility"
									className="hover:underline"
								>
									Real-time Visibility
								</Link>
								<Link
									href="/drayage-port-tracking"
									className="hover:underline"
								>
									Drayage & Port Tracking
								</Link>
								<Link
									href="/eld-telematics"
									className="hover:underline"
								>
									ELD / Telematics Integrations
								</Link>
								<Link
									href="/api-webhooks"
									className="hover:underline"
								>
									API & Webhooks
								</Link>
								<Link
									href="/dashboard-analytics"
									className="hover:underline"
								>
									Dashboard & Analytics
								</Link>
								<Link
									href="/all-features"
									className="hover:underline"
								>
									All Features
								</Link>
							</nav>
						</div>

						<div className="text-sm">
							<h4 className="font-bold mb-4 text-lg md:text-xl">
								Solutions
							</h4>
							<nav className="flex flex-col gap-2 md:gap-4">
								<Link
									href="/retail"
									className="hover:underline"
								>
									Retail & E-commerce
								</Link>
								<Link
									href="/manufacture"
									className="hover:underline"
								>
									Manufacturing
								</Link>
								<Link
									href="/consumers"
									className="hover:underline"
								>
									Consumer Goods
								</Link>
								<Link href="/food" className="hover:underline">
									Food & Beverage
								</Link>
								<Link
									href="/pharma"
									className="hover:underline"
								>
									Pharma & Healthcare
								</Link>
								<Link
									href="/freight-forwarding"
									className="hover:underline"
								>
									Freight Forwarding
								</Link>
								<Link
									href="/3pl-brokerage"
									className="hover:underline"
								>
									3PL & Brokerage
								</Link>
								<Link
									href="/transport"
									className="hover:underline"
								>
									Transportation & Logistics
								</Link>
							</nav>
						</div>

						<div className="text-sm">
							<h4 className="font-bold mb-4 text-lg md:text-xl">
								Resources
							</h4>
							<nav className="flex flex-col gap-2 md:gap-4">
								<Link
									href="/resources"
									className="hover:underline"
								>
									Blog / Insights
								</Link>
								<Link
									href="/news-updates"
									className="hover:underline"
								>
									News & Updates
								</Link>
								
								<Link
									href="/videos-webinars"
									className="hover:underline"
								>
									Videos & Webinars
								</Link>
								<Link
									href="/whitepapers-ebooks"
									className="hover:underline"
								>
									Whitepapers & eBooks
								</Link>
								<Link href="/faqs" className="hover:underline">
									FAQs
								</Link>
							</nav>

							<h4 className="font-bold mb-4 mt-6 text-lg md:text-xl">
								Legal & Compliance
							</h4>
							<nav className="flex flex-col gap-2 md:gap-4">
								<Link
									href="/privacy-policy"
									className="hover:underline"
								>
									Privacy Policy
								</Link>
								<Link
									href="/terms-of-service"
									className="hover:underline"
								>
									Terms of Service
								</Link>
								<Link
									href="/cookie-policy"
									className="hover:underline"
								>
									Cookie Policy
								</Link>
								<Link
									href="/gdpr-ccpa"
									className="hover:underline"
								>
									GDPR / CCPA Compliance
								</Link>
							</nav>
						</div>

						<div className="text-sm">
							<h4 className="font-bold mb-4 text-lg md:text-xl">
								About us
							</h4>
							<nav className="flex flex-col gap-2 md:gap-4 mb-4 md:mb-8">
								<Link
									href="/careers"
									className="hover:underline"
								>
									Careers
								</Link>
								<Link
									href="/press-media"
									className="hover:underline"
								>
									Press / Media
								</Link>
								<Link
									href="/case-studies"
									className="hover:underline"
								>
									Case Studies
								</Link>
								<Link
									href="/contact"
									className="hover:underline"
								>
									Contact
								</Link>
							</nav>

							<h4 className="font-bold mb-4 mt-6 text-lg md:text-xl">
								Reach Us
							</h4>
							<address className="text-md font-normal">
								1309 Coffeen Avenue
								<br />
								STE 1200 Sheridan
								<br />
								Wyoming 82801
							</address>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
