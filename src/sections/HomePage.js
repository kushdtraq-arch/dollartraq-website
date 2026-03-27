"use client";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import StatsList from "@/components/common/StatsList";
import SolutionFeature from "@/components/common/SolutionFeature";
import TestimonialCard from "@/components/common/TestimonialCard";
import ResourceCard from "@/components/common/ResourceCard";
import VideoHeroSection from "@/components/common/Front";
import ContentBlock from "@/components/common/ContentBlock";
import FeatureSwitch from "@/components/common/FeatureSwitch";
import Link from "next/link";
import dynamic from "next/dynamic";

import TrustPilot from "./TrustPilot";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false },
);

export default function HomePage() {
	const statsData = [
		{
			title: "1.2B+ Shipments",
			subtitle: "Managed annually through our movement platform",
		},
		{
			title: "7.3t Data points",
			subtitle: "Annually, across all modes and geographies",
		},
		{ title: "184 Countries", subtitle: "and 19 languages supported" },
		{
			title: "1000+ Customer",
			subtitle: "benefitting from our global supply chain visibility",
		},
	];

	const solutionsList = [
		{
			number: 1,
			title: "Retail & E-commerce",
			imageSrc: "/images/retail.webp",
		},
		{
			number: 2,
			title: "Manufacturing",
			imageSrc: "/images/manufacturing.webp",
		},

		{
			number: 3,
			title: "Freight Forwarding",
			imageSrc: "/images/freight-forwarding.webp",
		},
		{ number: 4, title: "3PL & Brokerage", imageSrc: "/images/3pl.webp" },
		{
			number: 5,
			title: "Pharma & Healthcare",
			imageSrc: "/images/pharma-new.webp",
		},
	];

	const featuresList = [
		{
			imageSrc: "/images/eye.jpg",
			title: "Real-time Visibility",
			description:
				"Stay informed with live shipment updates, from pickup to delivery.",
			className:
				"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-auto min-w-[220px] max-w-[290px]",
			imageClass: "mb-10 w-16 h-16 rounded-md",
			titleClass: "font-bold text-lg mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-sm mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/blue.jpg",
			title: "Drayage & Port Tracking",
			description:
				"Stay informed with live shipment updates, from pickup to delivery.",
			className:
				"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-auto min-w-[220px] max-w-[290px]",
			imageClass: "mb-10 w-16 h-16 rounded-md",
			titleClass: "font-bold text-lg mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-sm mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/blue1.jpg",
			title: "API & Webhooks",
			description:
				"Stay informed with live shipment updates, from pickup to delivery.",
			className:
				"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-auto min-w-[220px] max-w-[290px]",
			imageClass: "mb-10 w-16 h-16 rounded-md",
			titleClass: "font-bold text-lg mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-sm mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/blue2.jpg",
			title: "Dashboard & Analytics",
			description:
				"Stay informed with live shipment updates, from pickup to delivery.",
			className:
				"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-auto min-w-[220px] max-w-[290px]",
			imageClass: "mb-10 w-16 h-16 rounded-md",
			titleClass: "font-bold text-lg mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-sm mb-3 text-left",
			showLink: false,
		},
	];

	const testimonials = [
		{
			text: "Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
			author: "Frank Anderson",
			company: "European Food Co.",
			avatar: "/avatar1.png",
		},
		{
			text: "Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
			author: "Frank Anderson",
			company: "European Food Co.",
			avatar: "/avatar1.png",
		},
		{
			text: "Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
			author: "Frank Anderson",
			company: "European Food Co.",
			avatar: "/avatar1.png",
		},
		{
			text: "Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
			author: "Frank Anderson",
			company: "European Food Co.",
			avatar: "/avatar1.png",
		},
	];

	const resources = [
		{
			image: "/images/resource1.webp",
			title: "Visibility starts with connection",
			description:
				"Securely share visibility and gain frictionless connectivity, from...",
			link: "#",
		},
		{
			image: "/images/resource2.webp",
			title: "Beverage Producer Transforms Operations",
			description:
				"Securely share visibility and gain frictionless connectivity, from...",
			link: "#",
		},
		{
			image: "/images/resource3.webp",
			title: "Feature Alert: FraudGuard 2.0 - Next-gen",
			description:
				"Securely share visibility and gain frictionless connectivity, from...",
			link: "#",
		},
	];
	const carrierFeatures = [
		{
			label: "For Shippers",
			image: "/images/map1.jpg",
			link: "/services/shippers",
		},
		{
			label: "For Freight Brokers & 3PLs",
			image: "/images/map1.jpg",
			link: "/services/3pls-freight-brokers",
		},
		{
			label: "Carriers",
			image: "/images/map1.jpg",
			link: "/services/carriers",
		},
		{ label: "For Forwarders", image: "/images/map1.jpg" },
	];

	return (
		<>
			<section>
				<VideoHeroSection
					variant="default"
					videoSrc="/truck.mp4"
					headerLabel="Smart Logistics"
					titleLines={[
						"Visibility and Control, at",
						"Every Step of the Supply",
						"Chain",
					]}
					subtitle="Experience supply chain visibility proven to deliver reliable connectivity, reduce costs, and enable real-time collaboration."
					buttons={[
						{
							label: "Get a Demo",
							variant: "primary",
							onClick: () => {},
							href: "/demo",
						},
						{
							label: "Contact Us",
							variant: "secondary",
							onClick: () => {},
							href: "/contact",
						},
					]}
					companyLogos={[
						{ src: "/impossible.png", alt: "Impossible" },
						{ src: "/chrobinson.png", alt: "C.H. Robinson" },
						{ src: "/tql.png", alt: "TQL" },
						{ src: "/hormel.png", alt: "hormel" },
						{ src: "/echo.png", alt: "echo" },
						{ src: "/toyota.png", alt: "toyota" },
						{ src: "/coyote.png", alt: "coyote" },
					]}
					companySectionText="Helping 100+ leading companies get better results "
				/>
			</section>
			<hr className=" border-gray-300" />

			<section className="w-full flex justify-center mt-9 bg-blue-600">
				<FeatureSwitch
					features={carrierFeatures}
					contentBlockProps={{
						listItems: ["Our Services"],
						headingLines: ["Powering Smarter Decisions"],
						description:
							"Seamless visibility and control for shippers, brokers, and carriers",
						align: "left",
						spacingTop: "mt-0",
						spacingBottom: "mb-2",
						listColorClass: "text-white",
						headingColorClass: "text-white text-3xl",
						descriptionColorClass: "text-white text-sm font-light",
					}}
					descriptionBelowList="We analyze and redesign logistics networks to improve efficiency, reduce emissions, and build resilience. From route planning to warehouse integration, we turn complex systems into strategic assets."
				/>
			</section>

			<section className="flex flex-col items-center bg-white py-10 px-4">
				<div className="w-full max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div>
						<ContentBlock
							listItems={["How we work"]}
							headingLines={["Smarter Logistics, Simplified"]}
							description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter."
							buttons={[
								{
									label: "Know More",
									variant: "green",
									onClick: () => alert("Know More clicked"),
									href: "/how-it-works",
								},
							]}
							align="left"
							spacingBottom="mb-8"
							buttonSpacingClass="mt-35"
						/>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
						<FeatureCard
							imageSrc="/images/tracker.jpg"
							altText="Real-time Tracking Icon"
							title="Real-Time Tracking"
							description="Stay informed with live shipment updates, from pickup to delivery."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[180px] w-full"
							descriptionClass="text-gray-700 text-sm mb-3 text-center"
						/>
						<FeatureCard
							imageSrc="/images/global.jpg"
							altText="Global Coverage Icon"
							title="Global Coverage"
							description="Stay informed with live shipment updates, from pickup to delivery."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[180px] w-full"
							descriptionClass="text-gray-700 text-sm mb-3 text-center"
						/>
						<FeatureCard
							imageSrc="/images/shield.jpg"
							altText="Secure & Reliable Icon"
							title="Secure & Reliable"
							description="Stay informed with live shipment updates, from pickup to delivery."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[180px] w-full"
							descriptionClass="text-gray-700 text-sm mb-3 text-center"
						/>
						<FeatureCard
							imageSrc="/support.jpg"
							altText="24/7 Support Icon"
							title="24/7 Support"
							description="Stay informed with live shipment updates, from pickup to delivery."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[180px] w-full"
							descriptionClass="text-gray-700 text-sm mb-3 text-center"
						/>
					</div>
				</div>
			</section>

			<hr className=" border-gray-300" />

			<section className="w-full bg-white py-16 px-4">
				<div className="w-full max-w-[1160px] mx-auto flex flex-col md:flex-row gap-12">
					<div className="flex-1">
						<img
							src="/container.jpg"
							alt="Logistics container"
							className="w-full h-[450px] mt-7 rounded-xl shadow-lg"
						/>
					</div>
					<div className="flex-1 flex flex-col justify-center">
						<AnimateViewAppear delay={500}>
							<ContentBlock
								listItems={["About us"]}
								headingLines={[
									"Powering Innovation across",
									"industries, globally",
								]}
								description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter."
								buttons={[
									{
										label: "Know More",
										variant: "green",
										onClick: () =>
											alert("Know More clicked"),
										href: "/about",
									},
								]}
								align="left"
								spacingTop="mt-0"
								spacingBottom="mb-6"
							/>
						</AnimateViewAppear>
						<StatsList items={statsData} />
					</div>
				</div>
			</section>

			<hr className=" border-gray-300" />

			<section className="w-full bg-white py-10 px-4">
				<div className="w-full max-w-[1160px] mx-auto flex flex-col md:flex-row gap-50">
					<div className="flex-1 md:sticky md:top-28 self-start">
						<ContentBlock
							listItems={["Our Solutions"]}
							headingLines={[
								"Explore Our Industry",
								"Tailored Solutions",
							]}
							description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter. We deliver end-to-end logistics solutions tailored to your needs."
							buttons={[
								{
									label: "Know More",
									variant: "green",
									onClick: () => alert("Know More clicked"),
									href: "/services/shippers",
								},
							]}
							align="left"
							spacingTop="mt-4"
							spacingBottom="mb-10"
						/>
					</div>
					<div className="flex-1 flex flex-col ">
						{solutionsList.map((solution) => (
							<SolutionFeature
								key={solution.title}
								number={solution.number}
								title={solution.title}
								imageSrc={solution.imageSrc}
							/>
						))}
					</div>
				</div>
			</section>

			<hr className=" border-gray-300" />

			<section className="w-full bg-white py-10 px-4 flex flex-col items-center">
				<ContentBlock
					listItems={["Our Features"]}
					headingLines={["Powering Your Supply Chain"]}
					description="Streamlined processes, real-time tracking, and reliable delivery designed to keep your business moving forward."
					buttons={[
						{
							label: "Know More",
							variant: "green",
							onClick: () => alert("Know More clicked"),
							href: "/features",
						},
					]}
					align="center"
					spacingTop="mt-6"
					spacingBottom="mb-8"
				/>
				<div className="w-full max-w-[1160px] grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-4  gap-6 md:gap-8">
					{featuresList.map((feature, idx) => (
						<FeatureCard key={idx} {...feature} />
					))}
				</div>
			</section>
			<hr className=" border-gray-300" />
			<section className="w-full bg-white py-10 px-4 sm:px-6">
				<div className="w-full max-w-[1160px] mx-auto">
					<ContentBlock
						listItems={["Testimonials"]}
						headingLines={["What Our Clients Say"]}
						description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter."
						align="left"
						spacingTop="mt-4"
						spacingBottom="mb-4"
					/>
					<div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-8 gap-6">
						<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-none">
							{testimonials.map((t, idx) => (
								<TestimonialCard key={idx} {...t} />
							))}
						</div>
						<div className="lg:col-span-1 order-2 lg:order-none flex justify-center lg:justify-start">
							<div className="rounded-xl overflow-hidden w-full max-w-sm lg:max-w-none h-[280px] sm:h-[360px]">
								<img
									src="/truck-testimonial.webp"
									alt="Testimonial visual"
									className="w-full h-full object-cover rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<hr className=" border-gray-300" />

			<section className="w-full bg-white py-10 px-4 sm:px-6">
				<div className="w-full max-w-[1160px] mx-auto">
					<ContentBlock
						listItems={["More Information"]}
						headingLines={["Resources & Information"]}
						description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter."
						align="left"
						spacingTop="mt-4"
						spacingBottom="mb-4"
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
						{resources.map((r, idx) => (
							<ResourceCard key={idx} {...r} />
						))}
					</div>
				</div>
			</section>

			<VideoHeroSection
				variant="banner"
				imageSrc="/images/banner.webp"
				useVideo={false}
				titleLines={[""]}
				subtitle="Dollar traq is purpose built to provide end-to-end visibility through every stage of the transportation journey, all from a single provider."
				buttons={[
					{
						label: "Get a Demo",
						variant: "primary",
						className: "bg-blue-700 hover:bg-blue-800 text-white",
						href: "/demo",
					},
					{
						label: "Contact Us",
						variant: "secondary",
						className: "bg-white text-[#1566D6] border-0",
						href: "/contact",
					},
				]}
				showCompanySection={false}
			/>

			<div className="mb-9">
				<TrustPilot />
			</div>
		</>
	);
}
