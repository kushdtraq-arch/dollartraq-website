"use client";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import VideoHeroSection from "@/components/common/Front";
import ContentBlock from "@/components/common/ContentBlock";
import StatsList from "@/components/common/StatsList";
import Link from "next/link";

export default function WorkPage() {
	const statsData1 = [
		{
			title: "Clear Visibility Into Every Move",
			subtitle:
				"Port updates, drayage activity, carrier movement, and route performance all flow into one connected visibility system.",
		},
		{
			title: "Real-Time Shipment Awareness",
			subtitle:
				"See movement progress, key events, and milestone changes instantly through a single, easy-to-read dashboard.",
		},
		{
			title: "A Unified Hub for Your Operation",
			subtitle:
				"Bring partners, platforms, and data feeds together so information stays organized and teams work from the same source of truth.",
		},
		{
			title: "Route Insight That Improves Planning",
			subtitle:
				"Use lane metrics, port indicators, and forward-looking visibility to prevent issues before they disrupt schedules.",
		},
	];
	const featuresLists = [
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Make better decisions, faster",
			description:
				"Real-time movement information and automated status alerts keep your team fully informed.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-12 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Avoid charges caused by silence",
			description:
				"Idle time, storage, and detention become preventable when you see issues the moment they start.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-12 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Stay ahead of any slowdown",
			description:
				"Early warnings give you time to adjust plans before a delay impacts customers.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-12 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Replace manual check-ins with smart automation",
			description:
				"API-fed updates and automated alerts remove the repetitive outreach that slows teams down.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-12 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
			showLink: false,
		},
	];
	const statsData = [
		{
			title: "Higher Operational Efficiency",
			subtitle:
				"Teams work more effectively with clear movement details, unified statuses, and full visibility at each handoff.",
		},
		{
			title: "Lowers Operational Costs",
			subtitle:
				"Identify issues the moment they begin, preventing detention, idle time, and other avoidable expenses.",
		},
		{
			title: "Stronger On-Time Performance",
			subtitle:
				"With accurate ELD insights and movement signals, schedules remain predictable across all freight legs.",
		},
		{
			title: "Higher Supply Chain Accuracy",
			subtitle:
				"API-driven data and analytics show what’s performing well and what requires adjustment.",
		},
	];
	const modesList = [
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "True multimodal visibility",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Updates at every milestone",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start  h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "One single source of truth",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Market-leading intel",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start  h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Improvements you can measure",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start  h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Integration with all major platforms",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start  h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Make your resources go further",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start  h-[280px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-semibold text-[18px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[10px]  mb-3 text-left",
			showLink: false,
		},
	];

	return (
		<>
			<section>
				<VideoHeroSection
					variant="default"
					imageSrc="/images/feature-truck.webp"
					headerLabel="How It Works"
					titleLines={[
						"The real-time movement ",
						"network for modern logistics",
					]}
					subtitle="With DollarTraq, drayage activity, port milestones, and carrier movement come together live, helping logistics teams follow freight easily and respond to issues sooner."
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
			<section className="w-full bg-blue-600 mt-10  ">
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

					<div className="w-full md:w-1/2 bg-blue-600 flex flex-col justify-center  px-6 sm:px-10 md:px-12 py-8 md:py-10">
						<ContentBlock
							headingLines={[
								"How DollarTraq Strengthens",
								"Your Daily Operations",
							]}
							align="left"
							spacingTop="mt-0"
							spacingBottom="mb-6"
							listColorClass="text-white"
							headingColorClass="text-white text-2xl sm:text-3xl md:text-3xl"
							descriptionColorClass="text-white text-sm sm:text-base"
						/>

						<StatsList
							items={statsData1}
							titleColorClass="text-white text-base sm:text-lg md:text-xl"
							subtitleColorClass="text-white text-xs sm:text-sm"
						/>
					</div>
				</div>
			</section>

			<section className="w-full bg-white mt-12 px-6 flex  flex-col items-center">
				<ContentBlock
					listItems={["Smarter Supply Solutions"]}
					headingLines={[
						"Turning Unpredictable Moves Into Smooth, Managed Flow",
					]}
					description="Your logistics network depends on clear timing. DollarTraq removes the gaps that cause delays and gives teams the insight they need to operate confidently."
					align="center"
					spacingBottom="mb-8"
				/>
				<div className="w-full max-w-[1160px] mx-auto grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-2  xl:grid-cols-4  gap-6 md:gap-8  px-4 md:px-0 md:pl-10">
					{featuresLists.map((feature, idx) => (
						<FeatureCard key={idx} {...feature} />
					))}
				</div>
			</section>
			<hr className=" border-gray-300 mt-7" />
			<section className="w-full bg-white py-10 px-4">
				<div className="w-full max-w-[1160px] mx-auto flex flex-col md:flex-row gap-12">
					<div className="flex-1">
						<img
							src="/images/name.webp"
							alt="Logistics container"
							className="w-full h-[450px] mt-7 rounded-xl shadow-lg"
						/>
					</div>

					<div className="flex-1  ">
						<ContentBlock
							listItems={["Value We Deliver"]}
							headingLines={[
								"Technology That Brings Control to Your Logistics",
							]}
							description="DollarTraq provides real-time tracking and trustworthy data, giving operations the clarity needed to cut waste and maintain steady movement."
							align="left"
							spacingTop="mt-0"
							spacingBottom="mb-6"
						/>

						<StatsList items={statsData} />
					</div>
				</div>
			</section>
			<hr className=" border-gray-300" />
			{/* <section className="w-full bg-white py-14 px-6 flex flex-col items-center">
				<div className="w-full max-w-[1240px] mx-auto ">
					<ContentBlock
						headingLines={[
							"How we make a difference",
							"for your business",
						]}
						align="left "
						spacingTop="mt-0"
						spacingBottom="mb-5"
						headingColorClass="text-black text-4xl"
						descriptionColorClass=" text-black text-xs font-light"
					/>

					<div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
						{modesList.map((feature, idx) => (
							<FeatureCard key={idx} {...feature} />
						))}
					</div>
				</div>
			</section> */}
		</>
	);
}
