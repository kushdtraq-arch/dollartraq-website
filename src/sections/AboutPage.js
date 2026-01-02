"use client";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import StatsList from "@/components/common/StatsList";
import SolutionFeature from "@/components/common/SolutionFeature";
import ResourceCard from "@/components/common/ResourceCard";
import VideoHeroSection from "@/components/common/Front";
import ContentBlock from "@/components/common/ContentBlock";

export default function AboutPage() {
	const statsData = [
		{
			title: "Stop Losing Money to Avoidable Delays",
			subtitle: "Detention and demurrage build up because slowdowns go unnoticed. DollarTraq flags issues early so your team can take action before the charges land.",
		},
		{
			title: "Share Information Everyone Can Trust",
			subtitle: "One accurate update cuts out the need for repeated calls, scattered spreadsheets, and jumping between carrier, port, and broker portals.",
		},
		{ title: "Trade Assumptions for Real Understanding", subtitle: "With visibility into port steps, yard flow, and driver movement, your team stays informed and makes choices with confidence." },
		{
			title: "Find the Source of Every Delay",
			subtitle: "From terminal backups to long dwell or unexpected stops, DollarTraq pinpoints the issue so you know where to act first.",
		},
	];
	const featuresList = [
		{
			imageSrc: "/images/green.jpg",
			title: "Keep Timelines Steady",
			description:
				"Identify possible delays early and maintain a smooth customer experience.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[250px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green1.jpg",
			title: "All Movement Insight in One Place",
			description:
				"Track containers through live ELD streams, sensor updates, port events, and fleet systems, without switching tools.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[250px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green2.jpg",
			title: "Avoid Costs That Don’t Need to Happen",
			description:
				"Be proactive about stalls, extended waits, and inefficiencies before they turn into costs.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[250px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green3.jpg",
			title: "Stay Ahead With Early Signals",
			description:
				"Avoid disruptions by receiving early alerts about slowdowns, dwell trends, and shipment conditions.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[250px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px] mb-3 text-left",
			showLink: false,
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
		{
			number: 4,
			title: "3PL & Brokerage",
			imageSrc: "/images/3pl.webp",
		},
		{
			number: 5,
			title: "Pharma & Healthcare",
			imageSrc: "/images/pharma-new.webp",
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

	return (
		<>
			<section>
				<VideoHeroSection
					variant="default"
					imageSrc="/images/about-truck.webp"
					headerLabel="About us"
					titleLines={[
						"Real-time intelligence enabling faster,",
						" smoother logistics operations",
					]}
					subtitle="DollarTraq gives logistics teams the visibility they’ve been missing, live ELD movement details, port API activity, and automated alerts all together. From port release to final delivery, shippers get clearer tracking and smoother operations."
					buttons={[
						{
							label: "Explore the Platform",
							variant: "primary",
							onClick: () => {},
							href:"/demo",
						},
						{
							label: "Connect With Our Team",
							variant: "secondary",
							onClick: () => {},
							href:"/contact",
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
					companySectionText="Trusted by top companies who want freight movement to be more predictable."
				/>
			</section>
			<hr className=" border-gray-300 " />
			<section className="w-full bg-blue-600 mt-12">
				<div className="flex flex-col md:flex-row items-stretch overflow-hidden">
					<div className="w-full md:w-1/2 relative">
						<img
							src="/images/name.webp"
							alt="Logistics container"
							className="w-full h-[250px] sm:h-[350px] md:h-full object-cover"
							style={{
								WebkitMaskImage:
									"linear-gradient(to right, black 70%, transparent 100%)",
								maskImage:
									"linear-gradient(to right, black 70%, transparent 100%)",
							}}
						/>
					</div>

					<div className="w-full md:w-1/2 bg-blue-600 flex flex-col justify-center px-6 sm:px-10 md:px-12 py-8 md:py-10">
						<ContentBlock
							listItems={["Our Stats"]}
							headingLines={[
								"How Much Do Blind Spots Really ",
								"Cost Your Operation?",
							]}
							description="When you can’t see where containers are, or why they’re not moving, fees pile up, customers escalate, and your team ends up working in the dark. DollarTraq removes that uncertainty by giving you clear container milestones, steady movement updates, and early signals when something needs attention."
							
							align="left"
							spacingTop="mt-0"
							spacingBottom="mb-6"
							listColorClass="text-white"
							headingColorClass="text-white text-2xl sm:text-3xl md:text-3xl"
							descriptionColorClass="text-white text-sm sm:text-base"
						/>

						<StatsList
							items={statsData}
							titleColorClass="text-white text-base sm:text-lg md:text-xl"
							subtitleColorClass="text-white text-xs sm:text-sm"
						/>
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-10 px-4 flex flex-col items-center">
				<ContentBlock
					listItems={["Why Choose Us"]}
					headingLines={["Why Businesses Choose DollarTraq?"]}
					description="When data is scattered, decisions slow down. DollarTraq gives teams a clean, unified window into container activity so you operate with confidence, not guesswork."
					align="center"
					spacingTop="mt-6"
					spacingBottom="mb-8"
				/>

				<div className="w-full max-w-[1160px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{featuresList.map((feature, idx) => (
						<FeatureCard key={idx} {...feature} />
					))}
				</div>
			</section>
			<hr className=" border-gray-300" />

			<section className="w-full bg-white py-12 px-4">
				<div className="w-full max-w-[1160px] mx-auto flex flex-col md:flex-row gap-10">
					<div className="flex-1 md:sticky md:top-28 self-start">
						<ContentBlock
							listItems={["Our Solutions"]}
							headingLines={[
								"Making Container Movement ",
								"Easy to Understand",
							]}
							description="DollarTraq fills the information gap with steady movement tracking, early indicators, and automated alerts, helping teams plan sharper, react quicker, and cut avoidable costs."
							buttons={[
								{
									label: "Discover More",
									variant: "green",
									onClick: () => alert("Know More clicked"),
									href:"/services/shippers",
								},
							]}
							align="left"
							spacingTop="mt-4"
							spacingBottom="mb-10"
						/>
					</div>
					<div className="flex-1 flex flex-col">
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
			<section className="w-full bg-white py-10 px-4">
				<div className="w-full max-w-[1160px] mx-auto">
					<ContentBlock
						listItems={["More Information"]}
						headingLines={["Research & Insights"]}
						description="Find clear explanations, practical tools, and industry knowledge to help logistics teams be more efficient and productive."
						align="left"
						spacingTop="mt-4"
						spacingBottom="mb-4"
					/>
					<div className="flex flex-wrap gap-7">
						{resources.map((r, idx) => (
							<ResourceCard key={idx} {...r} />
						))}
					</div>
				</div>
			</section>
		</>
	);
}
