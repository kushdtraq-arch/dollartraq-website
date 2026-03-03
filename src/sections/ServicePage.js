"use client";
import React, { Component } from "react";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import StatsList from "@/components/common/StatsList";
import TestimonialCard from "@/components/common/TestimonialCard";
import VideoHeroSection from "@/components/common/Front";
import ContentBlock from "@/components/common/ContentBlock";
import FeatureSwitch from "@/components/common/FeatureSwitch";

import StatBox from "@/components/common/PricingBox";
import PricingPanel from "@/components/common/PricingSliderPanel";
import Link from "next/link";
import NewCard from "@/components/common/NewCard";

const statsData = [
	{
		title: "Smarter Cost Control",
		subtitle:
			"Catch detention risks, route issues, and unexpected delays early with automated updates and alerts.",
	},
	{
		title: "Clarity Across Every Mile",
		subtitle:
			"See truck movement, routing, and timing without hunting for answers or chasing carriers.s",
	},
	{
		title: "Reliable On-Time Delivery",
		subtitle:
			"Geofencing and driver signals keep every milestone clear, making arrivals more predictable.",
	},
	{
		title: "Built to Grow With You",
		subtitle:
			"From a few lanes to a full nationwide network, DollarTraq adapts as your operation expands.",
	},
];
const featuresList = [
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "True multimodal visibility",
		description:
			"Stay informed with live shipment updates, from pickup to delivery.",
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
		title: "Updates at every milestone",
		description:
			"Stay informed with live shipment updates, from pickup to delivery.",
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
		title: "One single source of truth",
		description:
			"Stay informed with live shipment updates, from pickup to delivery.",
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
		title: "Market-leading intel",
		description:
			"Stay informed with live shipment updates, from pickup to delivery.",
		className:
			"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[300px] min-w-[270px] max-w-[290px]",
		imageClass: "mb-10 w-15 h-18 rounded-md   ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		showLink: false,
	},
];
const modesList = [
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Truckload",
		description: "Watch trucks move in real time with accurate ETAs.",
		className:
			"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[310px] min-w-[270px] max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: " text-[15px] mt-2 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "LTL",
		description:
			"Follow shipments as they move through terminals and transfers.",
		className:
			"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[310px] min-w-[270px] max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: " text-[15px] mt-2 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Ocean",
		description:
			"See container status, vessel progress, and port events in one spot.",
		className:
			"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[310px] min-w-[270px] max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: "text-[15px] mt-2 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Air",
		description: "Real-time event updates for high-priority air moves.",
		className:
			"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[310px] min-w-[270px] max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: "text-[15px] mt-2 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Rail / Intermodal",
		description:
			"TUnified visibility through rail milestones and cross-mode transitions.",
		className:
			"flex flex-col bg-gray-100  rounded-3xl shadow-lg items-start h-[310px] min-w-[270px] max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: " text-[15px] mt-2 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
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
		label: "Route Optimization",
		sublabel: "Reduce miles and delays with smarter routing.",
		image: "/images/map.png",
	},
	{
		label: "POD Tracking",
		sublabel:
			"Capture delivery paperwork instantly for quick, clean billing.",
		image: "/images/map.png",
	},
	{
		label: "Temperature-Controlled Tracking",
		sublabel:
			"Check temperature-sensitive freight live so nothing slips out of range.",
		image: "/images/map.png",
	},
	{
		label: "Cold-Chain Monitoring",
		sublabel: "Continuous updates that protect product integrity.",
		image: "/images/map.png",
	},
];

class ServicePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statsItems: [
				{ title: "Annual Manual Tracking Costs", value: "$44,444" },
				{ title: "Annual Hours Spent", value: "5,616" },
				{ title: "Savings with Automated Tracking", value: "+$81,000" },
				{ title: "Additional Hours Gained", value: "+3,369.6" },
			],
			sliders: [
				{
					label: "NUMBER OF EMPLOYEES TRACKING & MANAGING FREIGHT",
					value: 18,
					min: 0,
					max: 300,
					minLabel: "0",
					maxLabel: "300",
					displayValue: "18 EMPLOYEES",
				},
				{
					label: "AVG. SALARY FOR RELEVANT EMPLOYEES",
					value: 50000,
					min: 0,
					max: 100000,
					minLabel: "$0",
					maxLabel: "$100K",
					displayValue: "$50K",
				},
				{
					label: "PERCENTAGE OF TIME SPENT MANUALLY TRACKING FREIGHT",
					value: 15,
					min: 0,
					max: 100,
					minLabel: "%0",
					maxLabel: "100%",
					displayValue: "15%",
				},
			],
			dropdowns: [
				{
					label: "SELECT THE TIME PERIOD",
					value: "Annually",
					options: [
						{ label: "Annually", value: "Annually" },
						{ label: "Monthly", value: "Monthly" },
						{ label: "Weekly", value: "Weekly" },
						{ label: "Daily", value: "Daily" },
					],
				},
				{
					label: "SELECT CURRENCY",
					value: "USD",
					options: [
						{ label: "USD", value: "USD" },
						{ label: "EUR", value: "EUR" },
					],
				},
			],
		};
	}

	handleSliderChange = (index, newValue) => {
		this.setState((prev) => {
			const sliders = [...prev.sliders];
			sliders[index].value = newValue;
			if (index === 0)
				sliders[index].displayValue = `${newValue} EMPLOYEES`;
			if (index === 1)
				sliders[index].displayValue = `$${(newValue / 1000).toFixed(
					0,
				)}K`;
			if (index === 2) sliders[index].displayValue = `${newValue}%`;

			const statsItems = [
				{
					title: "Annual Manual Tracking Costs",
					value: `$${44444 + newValue * 200}`,
				},
				{
					title: "Annual Hours Spent",
					value: `${5616 + newValue * 20}`,
				},
				{
					title: "Savings with Automated Tracking",
					value: `+$${81000 - newValue * 50}`,
				},
				{
					title: "Additional Hours Gained",
					value: `+${3369.6 + newValue * 10}`,
				},
			];

			return { sliders, statsItems };
		});
	};

	handleDropdownChange = (index, newValue) => {
		this.setState((prev) => {
			const dropdowns = [...prev.dropdowns];
			dropdowns[index].value = newValue;
			return { dropdowns };
		});
	};

	render() {
		return (
			<>
				<section>
					<VideoHeroSection
						variant="default"
						imageSrc="/images/truck1.webp"
						headerLabel="Shippers"
						titleLines={[
							"Clarity is the fastest way ",
							"to strengthen logistics.",
						]}
						subtitle="DollarTraq gives shippers live shipment info that makes it easier to avoid delays, reduce spend, and keep lanes predictable, without adding pressure to the team."
						buttons={[
							{
								label: "Explore the Platform ",
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

				<section className="w-full bg-white py-16 flex justify-center">
					<div className="w-[1160px] flex flex-col lg:flex-row gap-x-20 items-center px-4">
						<div className="flex-1 flex justify-center lg:justify-start">
							<img
								src="/images/boy.webp"
								alt="Logistics container"
								className="rounded-xl shadow-lg w-full max-w-md"
							/>
						</div>

						<div className="flex-1 mt-12">
							<ContentBlock
								listItems={["Primary Benefits"]}
								headingLines={[
									"Why Shippers Trust Our Platform?",
								]}
								description="DollarTraq gives shippers a live, dependable view of their freight so teams can plan with confidence, react quickly, and avoid the guesswork that slows operations down."
								align="left"
								spacingTop="mt-0"
								spacingBottom="mb-3"
							/>

							<StatsList items={statsData} />
						</div>
					</div>
				</section>

				<hr className=" border-gray-300" />
				<section className="w-full bg-white py-16 flex  flex-col items-center">
					<ContentBlock
						listItems={["Feature Highlights"]}
						headingLines={["Making Your Daily Operations Easier"]}
						description="When your data is clear and connected, your supply chain becomes easier to manage. DollarTraq helps you stay ahead of issues and keep freight moving without stressing your team."
						align="center"
						spacingTop="mt-6"
						spacingBottom="mb-8"
					/>
					<div className="w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						<NewCard
							imageSrc="/images/truck1.webp"
							title="Clear Insight Into Every Trip"
							description="One view shows movement, status, and what’s coming next."
						/>

						<NewCard
							imageSrc="/images/truck2.webp"
							title="Timely, Non-Disruptive Updates"
							description="Only important events trigger alerts, nothing extra."
						/>

						<NewCard
							imageSrc="/images/truck3.webp"
							title="Everything in One Unified Hub"
							description="Manage the entire workflow from one connected screen."
						/>

						<NewCard
							imageSrc="/images/transportation3.webp"
							title="Insights You Can Act On"
							description="Analytics point out trends, delays, and risks clearly."
						/>
					</div>
				</section>
				<hr className=" border-gray-300" />
				<section className="w-full min-h-screen bg-white py-12 flex justify-center">
					<div className="w-full max-w-[1160px] mx-auto px-4 sm:px-6 flex flex-col xl:flex-row gap-6 xl:gap-12">
						<div className="w-full xl:w-1/2">
							<ContentBlock
								listItems={["ROI and Resource Optimization"]}
								headingLines={["What Do We Help You Achieve?"]}
								description="Automating the day-to-day tracking work gives your team time to improve planning, carrier coordination, and long-term operational growth."
								align="left"
								spacingTop="mt-0"
								spacingBottom="mb-6"
							/>

							<div>
								<h2 className="text-xl text-center font-bold mb-1 mt-2 text-[#1A1A1A]">
									What Does Manual Tracking Cost You?
								</h2>
								<p className="text-center text-xs text-gray-500 mb-5">
									Visibility & Automation Streamline
									Operations
								</p>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
									{this.state.statsItems.map((item, idx) => (
										<StatBox
											key={idx}
											title={item.title}
											value={item.value}
										/>
									))}
								</div>

								<div className="flex justify-center">
									{/* <Link href="/demo"> <Button  
            variant="primary"
            className="w-[170px] h-[42px] rounded-md text-base font-semibold"
          >
            Get Demo{" "}
            <ArrowRight
              className="inline ml-2"
              size={18}
            />
          </Button></Link>*/}
								</div>
							</div>
						</div>

						<div className="w-full xl:w-1/2 flex justify-center">
							<div className="xl:sticky xl:top-[110px] mt-8 xl:mt-20 w-full max-w-md xl:max-w-none rounded-xl p-6 md:p-10 flex flex-col justify-center">
								<PricingPanel
									sliders={this.state.sliders}
									dropdowns={this.state.dropdowns}
									onSliderChange={this.handleSliderChange}
									onDropdownChange={this.handleDropdownChange}
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full flex justify-center mt-9 bg-blue-600">
					<FeatureSwitch
						features={carrierFeatures}
						contentBlockProps={{
							listItems: ["Features for Shippers"],
							headingLines: [
								"Technology That Keeps Your Logistics on Track",
							],
							description:
								"Track freight movement, monitor conditions, and manage routes from one place, across every region and mode.",
							align: "left",
							spacingTop: "mt-0",
							spacingBottom: "mb-2",
							listColorClass: "text-white",
							headingColorClass: "text-white text-3xl",
							descriptionColorClass:
								"text-white text-sm font-light",
						}}
						descriptionBelowList="With real-time visibility, your network becomes cleaner, more accurate, and easier to manage."
					/>
				</section>
				<hr className=" border-gray-300 " />
				<section className="w-full bg-white py-14 px-6 flex flex-col items-center">
					<div className="max-w-[1280px] w-full">
						<ContentBlock
							listItems={["Our Mode"]}
							headingLines={["Visibility Across Every Mode"]}
							align="left "
							spacingTop="mt-0"
							spacingBottom="mb-2"
							headingColorClass="text-black text-3xl"
							descriptionColorClass=" text-black text-xs font-light"
						/>

						<div className="w-full max-w-[1160px] mx-auto  grid grid-cols-1  sm:grid-cols-2  md:grid-cols-2  xl:grid-cols-4  gap-6 md:gap-8 px-4 md:px-0">
							{modesList.map((feature, idx) => (
								<FeatureCard key={idx} {...feature} />
							))}
						</div>
					</div>
				</section>
				<hr className=" border-gray-300" />
				<section className="w-full bg-white py-10 px-4 sm:px-6">
					<div className="w-full max-w-[1160px] mx-auto">
						<ContentBlock
							listItems={["Testimonials"]}
							headingLines={["What Our Partners Experience"]}
							description="Shippers tell us their days run smoother, better communication, fewer surprises, and clearer decisions. With steady visibility behind every move, freight stays on track and teams feel more in control."
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
							<div className="lg:col-span-1 order-2 lg:order-none flex justify-center lg:justify-start mt-8 lg:mt-0">
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
					imageSrc="/images/truck2.webp"
					useVideo={false}
					titleLines={[""]}
					subtitle="Dollar traq is purpose built to provide end-to-end visibility through every stage of the transportation journey, all from a single provider."
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
			</>
		);
	}
}

export default ServicePage;
