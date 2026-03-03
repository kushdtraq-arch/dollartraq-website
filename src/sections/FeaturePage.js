"use client";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import SolutionFeature from "@/components/common/SolutionFeature";
import VideoHeroSection from "@/components/common/Front";
import ContentBlock from "@/components/common/ContentBlock";
import BlueHeroSection from "@/components/common/BlueHeroSection";
import FeatureSwitch from "@/components/common/FeatureSwitch";
import Link from "next/link";

export default function FeaturePage() {
	const modesList = [
		{
			imageSrc: "/images/blue.jpg",
			altText: "Truckload Icon",
			title: "Predict Demand & Disruptions",
			description:
				"Spot when weather or capacity issues might get in the way.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/blue.jpg",
			altText: "Truckload Icon",
			title: "Optimize Routes & Resources",
			description:
				"Use lane and port patterns to shape better routing decisions.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/blue.jpg",
			altText: "Truckload Icon",
			title: "Mitigate Risks Early",
			description:
				"Know right away when dwell, detention, or idle pauses begin.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/blue.jpg",
			altText: "Truckload Icon",
			title: "Scenario Simulation",
			description:
				"Check how different decisions might affect cost or timing.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/blue.jpg",
			altText: "Truckload Icon",
			title: "Data-Backed Confidence",
			description:
				"Feel certain about your next move with clean, reliable insight.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-15 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
	];
	const solutionsList = [
		{
			title: "Seamless load building",
			description:
				"Quickly generate optimized loads based on real constraints.",
			imageSrc: "/images/graph1.webp",
			imageTop: true,
			showBadge: false,
			cardStyle: "figma",
			bgColor: "#f3f4f6",
		},
		{
			title: "Get the best rates with active bidding",
			description:
				"Compare carriers and secure strong pricing without leaving the platform.",
			imageSrc: "/images/graph2.webp",
			imageTop: true,
			showBadge: false,
			cardStyle: "figma",
			bgColor: "#f3f4f6",
		},
		{
			title: "Expand Your Career Options",
			description: "Tap into more carrier choices to avoid bottlenecks.",
			imageSrc: "/images/graph3.webp",
			imageTop: true,
			showBadge: false,
			cardStyle: "figma",
			bgColor: "#f3f4f6",
		},
		{
			title: "Automated Booking to Keep Freight Moving",
			description: "Send error-free tenders that speed up confirmations.",
			imageSrc: "/images/graph4.webp",
			imageTop: true,
			showBadge: false,
			cardStyle: "figma",
			bgColor: "#f3f4f6",
		},
	];
	const carrierFeatures = [
		{
			label: "Real-time multimodal visibility",
			sublabel:
				"Watch every mode of movement through one reliable interface.",
			image: "/images/map.png",
		},
		{
			label: "Actionable insights",
			sublabel:
				"Recognize delays and irregular movement early and stay in front of problems.",
			image: "/images/map.png",
		},
		{ label: "Intelligent alerting", image: "/images/map.png" },
		{ label: "Higher levels of data integrity", image: "/images/map.png" },
	];

	return (
		<>
			<section>
				<VideoHeroSection
					variant="default"
					imageSrc="/images/feature-truck.webp"
					headerLabel="Our Feature"
					titleLines={[
						"Built-in intelligence  ",
						"ensuring every shipment",
						"moves right",
					]}
					subtitle="With clearer insight and smarter planning, DollarTraq helps keep freight moving without unnecessary delays."
					buttons={[
						{
							label: "Talk to an Expert",
							variant: "green",
							onClick: () => {},
							href: "/contact",
						},
					]}
					showCompanySection={false}
				/>
			</section>
			<section className="w-full flex justify-center mt-9 bg-blue-600">
				<FeatureSwitch
					features={carrierFeatures}
					contentBlockProps={{
						listItems: ["Real Time Visibilty"],
						headingLines: [
							"See What’s Happening Across Your Supply Chain",
						],
						description:
							"Watch drayage, port work, and over-the-road activity in real time inside one connected system.",
						align: "left",
						spacingTop: "mt-0",
						spacingBottom: "mb-2",
						listColorClass: "text-white",
						headingColorClass: "text-white text-3xl",
						descriptionColorClass: "text-white text-sm font-light",
					}}
					descriptionBelowList="DollarTraq unifies tracking data and gives you clarity the moment anything changes."
				/>
			</section>
			<section className="flex flex-col items-center bg-white mt-12  px-6">
				<div className="w-full max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10 ">
					<div>
						<ContentBlock
							listItems={["Actionable insights"]}
							headingLines={[
								"Clarity at Every Stage",
								" of Your Logistics.",
							]}
							description="DollarTraq brings intelligence to your visibility, showing risk sooner, improving performance, and gives you the insight needed to manage risk and improve daily operations."
							align="left"
							buttonSpacingClass="mt-60"
							spacingBottom="mb-8"
						/>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
						<FeatureCard
							imageSrc="/images/image1.png"
							altText="Machine"
							title="Identify Risks Early"
							description="Track dwell time, idle behavior, slower segments, and missed milestones as soon as they happen."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg  h-[200px] w-[270px]"
							descriptionClass="text-gray-700 text-[10px] mb-3 text-centre"
						/>
						<FeatureCard
							imageSrc="/images/image2.png"
							altText="Paper"
							title="Optimize Performance"
							description="Understand movement trends that affect cost, speed, and operational flow."
							className="flex flex-col bg-gray-100  rounded-3xl shadow-lg  h-[200px] w-[270px]"
							descriptionClass="text-gray-700 text-[10px] mb-3 text-centre"
						/>
						<FeatureCard
							imageSrc="/images/image3.png"
							altText="Real time"
							title="Make Confident Decisions"
							description="Use clean, dependable data to guide every routing and planning decision."
							className="flex flex-col bg-gray-100  rounded-3xl shadow-lg   h-[200px] w-[270px]"
							descriptionClass="text-gray-700 text-[10px] mb-3 text-centre"
						/>
						<FeatureCard
							imageSrc="/images/image4.png"
							altText="Ig Platforms"
							title="Boost Transparency"
							description="Keep teams, partners, and customers aligned with consistent status updates."
							className="flex flex-col bg-gray-100  rounded-3xl shadow-lg  h-[200px] w-[270px]"
							descriptionClass="text-gray-700 text-[10px] mb-3 text-centre"
						/>
					</div>
				</div>
			</section>
			<hr className=" border-gray-300" />
			<section className="w-full bg-white py-10 px-6 flex flex-col items-center">
				<div className="max-w-[1280px] w-full">
					<ContentBlock
						listItems={["Decision Intelligence For Supply Chains"]}
						headingLines={[
							"Clarity That Powers Your Logistics Strategy",
						]}
						align="left "
						spacingTop="mt-0"
						spacingBottom="mb-5"
						headingColorClass="text-black text-3xl"
						description="Tools that help high-volume logistics teams stay ahead of change."
						descriptionColorClass=" text-black text-xs font-light"
					/>
					<div
						className="w-full grid 
  grid-cols-1 
  sm:grid-cols-2 
  md:grid-cols-2 
  xl:grid-cols-4 
  gap-8 md:pl-10"
					>
						{modesList.map((feature, idx) => (
							<FeatureCard key={idx} {...feature} />
						))}
					</div>
				</div>
			</section>
			<section className="w-full bg-white py-12 flex justify-center">
				<div className="w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 md:gap-20 items-start">
					<div className="flex-1 md:sticky md:top-[110px] self-start">
						<ContentBlock
							listItems={["Transportation Management"]}
							headingLines={[
								"Transportation Management Designed",
								"for High-Performance ",
								"Logistics",
							]}
							description="Plan, route, and execute freight in one unified system for steady, on-time deliveries."
							align="left"
							spacingTop="mt-4"
							spacingBottom="mb-10"
						/>
					</div>

					<div className="flex-1 flex flex-col gap-4 md:gap-8 lg:gap-10">
						{solutionsList.map((solution, index) => (
							<SolutionFeature
								key={index}
								title={solution.title}
								description={solution.description}
								imageSrc={solution.imageSrc}
								variant={solution.variant}
								imageTop={solution.imageTop}
								showBadge={solution.showBadge}
								bgColor={solution.bgColor}
							/>
						))}
					</div>
				</div>
			</section>

			<section>
				<BlueHeroSection
					titleGreen="Bring Your Logistics Workflow"
					titleWhite="to Your Phone"
					description="Real-time tracking, quick alerts, and booking controls delivered through one simple mobile app."
					imageSrc="/images/phone.webp"
					imageAlt="Logistics App"
					bgColor="#1c74e9"
					textColor="#fff"
					appStoreUrl="https://apple.com/store"
					playStoreUrl="https://play.google.com/store"
				/>
			</section>
			<section className="w-full bg-white mt-7">
				<VideoHeroSection
					variant="banner"
					imageSrc="/images/truck2.webp"
					useVideo={false}
					titleLines={["Complete Clarity Across Every Shipment"]}
					subtitle="DollarTraq centralizes full-lifecycle tracking, pickup, port workflow, drayage, long-haul, and final delivery into your single, scalable logistics platform."
					buttons={[
						{
							label: "Get a Demo",
							variant: "primary",
							href: "/demo",
						},
						{
							label: "Contact Us",
							variant: "secondary",
							className: "bg-white",
							href: "/contact",
						},
					]}
					showCompanySection={false}
				/>
			</section>
		</>
	);
}
