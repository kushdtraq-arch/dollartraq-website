"use client";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import StatsList from "@/components/common/StatsList";
import TestimonialCard from "@/components/common/TestimonialCard";
import VideoHeroSection from "@/components/common/Front";
import ContentBlock from "@/components/common/ContentBlock";
import FeatureSwitch from "@/components/common/FeatureSwitch";
import Link from "next/link";

export default function CarrierPage() {
	const statsData = [
		{
			title: "Reliable Fleet Access",
			subtitle:
				"Operational help is designed to keep your trucks on the road without interruptions.",
		},
		{
			title: "Drivers With Real Experience",
			subtitle:
				"Drivers who respect timelines and understand what safe, efficient movement looks like.",
		},
		{
			title: "Carriers Built on Consistency",
			subtitle:
				"Fleets that value discipline, predictability, and clean execution mile after mile.",
		},
		{
			title: "Partners Who Support Your Growth",
			subtitle:
				"People committed to helping you move freight smoothly and on schedule.",
		},
	];

	const featuresList = [
		{
			imageSrc: "/images/green.jpg",
			altText: "Truckload Icon",
			title: "Serve Customers With Confidence",
			description:
				"Provide clients with live shipment details so updates stay clear and proactive.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[300px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green1.jpg",
			altText: "Truckload Icon",
			title: "A Trusted Carrier Network",
			description:
				"Operate among partners who value consistency, reliability, and shared expectations.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[300px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green2.jpg",
			altText: "Truckload Icon",
			title: "Full Control of Your Operational Data",
			description:
				"Store and manage fleet details with full ownership and complete transparency.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[300px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
			showLink: false,
		},
		{
			imageSrc: "/images/green3.jpg",
			altText: "Truckload Icon",
			title: "Hassle-Free Onboarding",
			description:
				"Bring drivers and teams onto the platform easily, without slowing down your current workload.",
			className:
				"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[300px] min-w-[270px] max-w-[290px]",
			imageClass: "mb-10 w-15 h-18 rounded-md   ",
			titleClass: "font-bold text-[19px] mb-2 text-black text-left",
			descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
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
	const carrierFeatures = [
		{
			label: "Real-Time Tracking",
			image: "/images/map.png",
		},
		{ label: "Analytics & Intelligence", image: "/images/map.png" },
		{ label: "Temp Tracking", image: "/images/map.png" },
		{ label: "Dock Appointment Scheduling", image: "/images/map.png" },
	];

	return (
		<>
			<section>
				<VideoHeroSection
					variant="default"
					imageSrc="/images/truck3.webp"
					headerLabel="For Carriers"
					titleLines={[
						"A smarter, more organized ",
						"way for carriers to",
						"manage every load",
					]}
					subtitle="Get live updates from shippers, remove everyday confusion, and manage each move with clear, reliable information."
					buttons={[
						{
							label: "Explore the Platform",
							variant: "primary",
							onClick: () => {},
							href: "/demo",
						},
						{
							label: "Connect With Our Team",
							variant: "secondary",
							onClick: () => {},
							href: "/contact",
						},
					]}
					showCompanySection={false}
				/>
			</section>
			<section className="w-full mx-auto bg-white py-16 px-20 flex flex-col lg:flex-row gap-y-10 lg:gap-x-20 items-center">
				<div className="flex-1 w-full  flex justify-center">
					<img
						src="/images/boxes.webp"
						alt="Boxes"
						className="rounded-xl shadow-lg w-full max-w-[500px] h-[300px] sm:h-[400px] lg:h-[510px] object-cover"
					/>
				</div>

				<div className="flex-1 w-full">
					<ContentBlock
						listItems={["Impact & Network"]}
						headingLines={[
							"Connecting Strong Carriers With",
							"the Freight That Fits Them",
						]}
						description="Work with the network built on reliability, steady communication, and partnerships that hold up under pressure."
						align="left"
						spacingTop="mt-0"
						spacingBottom="mb-1"
					/>

					<StatsList items={statsData} />
				</div>
			</section>

			<hr className=" border-gray-300" />
			<section className="flex flex-col items-center bg-white  px-6">
				<div className="w-full max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20 pt-14">
					<div>
						<ContentBlock
							listItems={["workflow digitization"]}
							headingLines={[
								"Simplify Operations. Maximize Efficiency.",
							]}
							description="Streamline workflows, cut manual effort, and gain efficiency with technology built for carriers."
							/* buttons={[
								{
									label: "Get A Demo",
									variant: "green",
									onClick: () => alert("Know More clicked"),
									className: "mx-auto",
									href:"/demo",
								},
							]} */
							align="left"
							buttonSpacingClass="mt-60"
							spacingBottom="mb-8"
						/>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
						<FeatureCard
							imageSrc="/images/image1.png"
							altText="Machine"
							title="Automated Load Management"
							description="Stay informed with live shipment updates, from pickup to delivery.."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[220px] w-full max-w-[270px]"
							descriptionClass="text-gray-700 text-[12px] mb-3 text-center"
						/>
						<FeatureCard
							imageSrc="/images/image2.png"
							altText="Paper"
							title="Paperless Documentation"
							description="Stay informed with live shipment updates, from pickup to delivery."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[220px] w-full max-w-[270px]"
							descriptionClass="text-gray-700 text-[12px] mb-3 text-center"
						/>
						<FeatureCard
							imageSrc="/images/image3.png"
							altText="Real time"
							title="Real-Time Updates"
							description="Stay informed with live shipment updates, from pickup to delivery."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[220px] w-full max-w-[270px]"
							descriptionClass="text-gray-700 text-[12px] mb-3 text-center"
						/>
						<FeatureCard
							imageSrc="/images/image4.png"
							altText="Ig Platforms"
							title="Integrated Platforms"
							description="Stay informed with live shipment updates, from pickup to delivery."
							className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[220px] w-full max-w-[270px]"
							descriptionClass="text-gray-700 text-[12px] mb-3 text-center"
						/>
					</div>
				</div>
			</section>
			<section className="w-full flex justify-center  bg-blue-600">
				<FeatureSwitch
					features={carrierFeatures}
					contentBlockProps={{
						listItems: ["Features for Carriers"],
						headingLines: ["Powerful Tools to Simplify Shipping"],
						description:
							"Everything you need to manage, track, and optimize your shipments—all in one place.",
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
			<section className="w-full bg-white py-16 flex  flex-col items-center">
				<ContentBlock
					listItems={["Trust and Differentiators"]}
					headingLines={[
						"Tools That Help Carriers Work Quicker,",
						"Stay Organized & Keep Control",
					]}
					description="DollarTraq brings dispatch, communication, and tracking into one smooth workflow so carriers work with less friction and more certainty."
					align="center"
					spacingBottom="mb-8"
				/>
				<div className="w-full max-w-[1160px] grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-2  xl:grid-cols-4  gap-8 md:pl-10">
					{featuresList.map((feature, idx) => (
						<FeatureCard key={idx} {...feature} />
					))}
				</div>
			</section>
			<hr className=" border-gray-300" />
			<section className="w-full bg-white py-8 px-4 sm:px-6">
				<div className="w-full max-w-[1160px] mx-auto">
					<ContentBlock
						listItems={["Testimonials"]}
						headingLines={["What Our Clients Say"]}
						description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter."
						align="left"
						spacingTop="mt-4"
						spacingBottom="mb-4"
					/>
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
						<div className="lg:col-span-2 order-1 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
							{testimonials.map((t, idx) => (
								<TestimonialCard key={idx} {...t} />
							))}
						</div>
						<div className="lg:col-span-1 order-2 flex justify-center lg:justify-start">
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

			<VideoHeroSection
				variant="banner"
				imageSrc="/images/boxes2.webp"
				useVideo={false}
				titleLines={[
					"Clarity That Makes Every Freight Movement Easier",
				]}
				subtitle="Carriers use DollarTraq to manage shipments, understand what needs attention, and keep operations balanced, without hunting through multiple systems."
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
		</>
	);
}
