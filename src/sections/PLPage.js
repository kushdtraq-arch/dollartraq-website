"use client";
import React, { Component } from "react";
import Button from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import NewCard from "@/components/common/NewCard";
import StatsList from "@/components/common/StatsList";
import SolutionFeature from "@/components/common/SolutionFeature";
import TestimonialCard from "@/components/common/TestimonialCard";
import ResourceCard from "@/components/common/ResourceCard";
import VideoHeroSection from "@/components/common/Front";
import ContentBlock from "@/components/common/ContentBlock";
import StatBox from "@/components/common/PricingBox";
import PricingPanel from "@/components/common/PricingSliderPanel";
import FeatureSwitch from "@/components/common/FeatureSwitch";
import Link from "next/link";

const statsData = [
	{
		title: "Low Operational Costs",
		subtitle:
			"Automated alerts replace check calls, prevent detention, and reduce costly manual errors.",
	},
	{
		title: "More Reliable Freight Execution",
		subtitle:
			"Stay ahead of slowdowns with steady updates, clear milestones, and intelligent exception signals.",
	},
	{
		title: "Consistent Performance",
		subtitle:
			"Keep routes steady with consistent updates and smoother carrier coordination.",
	},
	{
		title: "Scales With Your Network",
		subtitle:
			"Bring new lanes, shippers, and carriers onboard without adding extra layers of work.",
	},
];
const solutionsList = [
	{
		title: "Seamless load building",
		description:
			"Intelligently consolidate orders into optimized shipments based on location, delivery date, fill rate, shared route constraints, and more.",
		imageSrc: "/images/graph1.webp",
		imageTop: true,
		showBadge: false,
		cardStyle: "figma",
		bgColor: "#f3f4f6",
	},
	{
		title: "Get the best rates with active bidding",
		description:
			"Access a centralized dashboard to make quote requests, evaluations, and bookings so much easier.",
		imageSrc: "/images/graph2.webp",
		imageTop: true,
		showBadge: false,
		cardStyle: "figma",
		bgColor: "#f3f4f6",
	},
	{
		title: "Unlock access to a wider range of carriers and rates",
		description:
			"Don’t be limited by your current carrier network.  TMS lets you access carriers beyond your network and secure competitive rates in just a few clicks.",
		imageSrc: "/images/graph3.webp",
		imageTop: true,
		showBadge: false,
		cardStyle: "figma",
		bgColor: "#f3f4f6",
	},
	{
		title: "Automate the booking process and keep your cargo moving",
		description:
			"Include all the necessary shipment details, such as pickup and delivery information and contact details, when tendering bookings.",
		imageSrc: "/images/graph4.webp",
		imageTop: true,
		showBadge: false,
		cardStyle: "figma",
		bgColor: "#f3f4f6",
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
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[300px] w-full sm:max-w-[290px]",
		imageClass: "mb-15 w-15 h-18 rounded-md   ",
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
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[300px] w-full sm:max-w-[290px]",
		imageClass: "mb-15 w-15 h-18 rounded-md   ",
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
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[300px] w-full sm:max-w-[290px]",
		imageClass: "mb-15 w-15 h-18 rounded-md   ",
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
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[300px] w-full sm:max-w-[290px]",
		imageClass: "mb-15 w-15 h-18 rounded-md   ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		showLink: false,
	},
];
const Feature = [
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "One Partner for All Movement Needs",
		description:
			"Run your routing, exceptions, and carrier coordination from a single place.",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] w-full sm:max-w-[290px]",
		imageClass: "mb-12 w-15 h-18 rounded-md   ",
		titleClass: "font-bold text-[18px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
		showLink: false,
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Reliable, Accurate Data",
		description:
			"Load details stay clean and consistent, reducing confusion across teams.",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] w-full sm:max-w-[290px]",
		imageClass: "mb-12 w-15 h-18 rounded-md   ",
		titleClass: "font-bold text-[18px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
		showLink: false,
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Helping Your Team Move Faster",
		description:
			"A shared, unified view helps dispatch and operations make quicker decisions.",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] w-full sm:max-w-[290px]",
		imageClass: "mb-8 w-15 h-18 rounded-md   ",
		titleClass: "font-bold text-[18px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
		showLink: false,
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Ready for the Unexpected",
		description:
			"Use early warnings and route insight to get ahead of disruptions.",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] w-full sm:max-w-[290px]",
		imageClass: "mb-8 w-15 h-18 rounded-md   ",
		titleClass: "font-bold text-[18px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
		showLink: false,
	},
];
const modesList = [
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Truckload",
		description:
			"Truckload visibility and carrier connectivity you can rely on",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[310px] w-full sm:max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: " text-[15px] mt-4 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "LTL",
		description:
			"Truckload visibility and carrier connectivity you can rely on",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[310px] w-full sm:max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: " text-[15px] mt-4 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Ocean",
		description:
			"Truckload visibility and carrier connectivity you can rely on",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[310px] w-full sm:max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: "text-[15px] mt-4 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Air",
		description:
			"Truckload visibility and carrier connectivity you can rely on",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[310px] w-full sm:max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: "text-[15px] mt-4 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
	{
		imageSrc: "/images/green.jpg",
		altText: "Truckload Icon",
		title: "Rail / Intermodal",
		description:
			"Truckload visibility and carrier connectivity you can rely on",
		className:
			"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[310px] w-full sm:max-w-[290px]",
		imageClass: "mb-10 w-18 h-18 rounded-lg  ",
		titleClass: "font-bold text-[19px] mb-2 text-black text-left",
		descriptionClass: "text-gray-700 text-[15px] mb-3 text-left",
		linkClass: " text-[15px] mt-4 flex items-center hover:underline",
		showLink: true,
		linkLabel: "Know More",
		linkUrl: "/truckload",
	},
];
const TestimonialCards = [
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

class Main extends Component {
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
						imageSrc="/images/manufacture.webp"
						headerLabel="Freight Brokers & 3PLs"
						titleLines={[
							"Real-time, accurate visibility",
							"across every load",
						]}
						subtitle="DollarTraq supplies brokers and 3PLs with the visibility needed to coordinate carriers effectively, update shippers in real time, and address exceptions early."
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
					<div className="w-full max-w-[1160px] flex flex-col lg:flex-row gap-x-20 items-center px-4">
						<div className="flex-1 flex justify-center lg:justify-start">
							<img
								src="/images/boy.webp"
								alt="Logistics container"
								className="rounded-xl shadow-lg w-full max-w-md"
							/>
						</div>
						<div className="flex-1 mt-10 ">
							<ContentBlock
								listItems={["Integration and Connectivity"]}
								headingLines={[
									"Why Brokers & 3PLs Rely on DollarTraq?",
								]}
								description="We help brokerage teams move faster and operate with confidence by improving communication, tightening carrier coordination, and giving a live view of every active load."
								align="left"
								spacingTop="mt-0"
								spacingBottom="mb-3"
							/>
							<StatsList items={statsData} />
						</div>
					</div>
				</section>
				<hr className=" border-gray-300" />

				<section className="flex flex-col items-center bg-white  px-6">
					<div className="w-full max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20 pt-14">
						<div>
							<ContentBlock
								listItems={["Value and Industry Leadership"]}
								headingLines={[
									"Better Tools. Stronger Coordination.",
									" Faster Operations.",
								]}
								description="Empower teams with automation and real-time clarity so freight moves smoothly without unnecessary follow-ups."
								/* buttons={[
                                    {
                                        label: "Get A Demo",
                                        variant: "green",
                                      onClick: () =>
                                           alert("Know More clicked"),
                                        className: "mx-auto ",
                                       href:"/demo",
                                    },
                                ]} */
								align="left"
								buttonSpacingClass="mt-45"
								spacingBottom="mb-8"
							/>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center w-full">
							<FeatureCard
								imageSrc="/images/image1.png"
								altText="Machine"
								title="Smart Load Automation"
								description="Automated calls, driver status detection, and immediate movement notifications for every load."
								className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[200px] w-full sm:w-[270px]"
								descriptionClass="text-gray-700 text-[10px] mb-3 text-center"
							/>
							<FeatureCard
								imageSrc="/images/image2.png"
								altText="Paper"
								title="Digital Document Management"
								description="Capture PODs quickly, keep paperwork organized, and make document sharing easy for carriers and teams."
								className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[200px] w-full sm:w-[270px]"
								descriptionClass="text-gray-700 text-[10px] mb-3 text-center"
							/>
							<FeatureCard
								imageSrc="/images/image3.png"
								altText="Real time"
								title="Continuous Movement Signals"
								description="Telematics-driven data and real-time alerts reveal delays and exceptions early."
								className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[200px] w-full sm:w-[270px]"
								descriptionClass="text-gray-700 text-[10px] mb-3 text-center"
							/>
							<FeatureCard
								imageSrc="/images/image4.png"
								altText="Ig Platforms"
								title="Unified Carrier Workspace"
								description="Offer carriers a single, simple hub for updates, documentation, and compliance tasks."
								className="flex flex-col bg-gray-100 rounded-3xl shadow-lg h-[200px] w-full sm:w-[270px]"
								descriptionClass="text-gray-700 text-[10px] mb-3 text-center"
							/>
						</div>
					</div>
				</section>
				<hr className=" border-gray-300" />

				<section className="w-full bg-white py-12 flex justify-center">
					<div className="w-full max-w-[1160px] flex flex-col md:flex-row gap-10 md:gap-36 items-start">
						<div className="flex-1 md:sticky md:top-[110px] self-start px-4 sm:px-6">
							<ContentBlock
								listItems={["Operational Impact"]}
								headingLines={[
									"Better Visibility. Better Planning.",
									" Better Outcomes.",
								]}
								description="Help your team adjust routes, tighten schedules, and reduce disruptions using timely operational intelligence."
								align="left"
								spacingTop="mt-4"
								spacingBottom="mb-10"
							/>
						</div>
						<div className="flex-1 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
							<div className="flex flex-col gap-4 md:gap-6 lg:gap-10">
								{" "}
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
					</div>
				</section>
				<hr className=" border-gray-300" />
				<section className="w-full bg-white py-16 flex  flex-col items-center">
					<ContentBlock
						listItems={["Feature & Differentiator Callouts"]}
						headingLines={[
							"A Better Way to Manage Shipments Every Day",
						]}
						description="Gives you a clearer view of what’s moving, what’s delayed, and what needs attention, right when they need it."
						align="center"
						spacingTop="mt-6"
						spacingBottom="mb-8"
					/>
					<div className="w-full max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						<NewCard
							imageSrc="/images/truck1.webp"
							title="Connected Freight Visibility"
							description="Follow drayage runs, telematics signals, carrier updates, and port activity from one simple view."
						/>

						<NewCard
							imageSrc="/images/truck2.webp"
							title="Milestone-Based Tracking"
							description="Know when freight hits key points, pickup, delay, pause, and delivery, with real-time accuracy."
						/>

						<NewCard
							imageSrc="/images/truck3.webp"
							title="Integrated Operations"
							description="Keep partners and internal systems connected so work stays coordinated and predictable."
						/>

						<NewCard
							imageSrc="/images/transportation3.webp"
							title="Decision-Ready Intelligence"
							description="Use what you see in movement trends to guide faster, smarter decisions."
						/>
					</div>
				</section>
				<hr className=" border-gray-300" />

				<section className="flex flex-col items-center bg-white py-2">
					<div className="w-full max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20 pt-14 px-4 sm:px-6 lg:px-8">
						<div>
							<ContentBlock
								listItems={["Automation Focus"]}
								headingLines={[
									"Visibility That Helps You Stay ",
									"Ahead of Every Freight Move",
								]}
								description="When you can see issues early and understand where risks are forming, your team can keep freight moving without unnecessary stops."
								align="left"
								spacingBottom="mb-8"
								buttonSpacingClass="mt-40"
							/>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 self-start">
							{Feature.map((feature, idx) => (
								<FeatureCard key={idx} {...feature} />
							))}
						</div>
					</div>
				</section>

				<section className="w-full flex justify-center mt-9 bg-blue-600">
					<FeatureSwitch
						features={carrierFeatures}
						contentBlockProps={{
							listItems: ["Feature Set for Brokers & 3PLs"],
							headingLines: [
								"Powerful Tools to Simplify Shipping",
							],
							description:
								"Everything you need to manage, track, and optimize your shipments—all in one place.",
							align: "left",
							spacingTop: "mt-0",
							spacingBottom: "mb-2",
							listColorClass: "text-white",
							headingColorClass: "text-white text-3xl",
							descriptionColorClass:
								"text-white text-sm font-light",
						}}
						descriptionBelowList="We analyze and redesign logistics networks to improve efficiency, reduce emissions, and build resilience. From route planning to warehouse integration, we turn complex systems into strategic assets."
					/>
				</section>
				<section className="w-full min-h-screen bg-white py-12 flex justify-center">
					<div className="w-full max-w-[1160px] mx-auto px-4 sm:px-6 flex flex-col xl:flex-row gap-6 xl:gap-12">
						<div className="w-full xl:w-1/2">
							<ContentBlock
								listItems={["ROI and Resource Optimization"]}
								headingLines={["See How We Can Help You"]}
								description="By automating low value tasks, our technology can enable your resources to focus on high value relationships and growth."
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
								<div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
									{this.state.statsItems.map((item, idx) => (
										<StatBox
											key={idx}
											title={item.title}
											value={item.value}
										/>
									))}
								</div>
								<div className="flex justify-center"></div>
							</div>
						</div>

						<div className="w-full xl:w-1/2 flex justify-center">
							<div className="xl:sticky xl:top-[110px] mt-8 xl:mt-20 w-full max-w-md xl:max-w-none rounded-xl p-6 sm:p-10 flex flex-col justify-center">
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

				<hr className=" border-gray-300 " />
				<section className="w-full bg-white py-14 px-6 flex flex-col items-center">
					<div className="max-w-[1280px] w-full">
						<ContentBlock
							listItems={["Our Mode"]}
							headingLines={[
								"Comprehensive End-To-End",
								" Visibility For Every Mode",
							]}
							align="left "
							spacingTop="mt-0"
							spacingBottom="mb-2"
							headingColorClass="text-black text-3xl"
							descriptionColorClass=" text-black text-xs font-light"
						/>

						<div className="w-full max-w-[1240px] mx-auto px-4 grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-2  xl:grid-cols-4  gap-6 md:gap-8">
							{modesList.map((feature, idx) => (
								<FeatureCard key={idx} {...feature} />
							))}
						</div>
					</div>
				</section>
				<hr className=" border-gray-300 " />
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
								{TestimonialCards.map((t, idx) => (
									<TestimonialCard key={idx} {...t} />
								))}
							</div>
							<div className="lg:col-span-1 order-2 lg:order-none flex justify-center lg:justify-start mt-6 lg:mt-0">
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

				<section className="w-full bg-white mt-7">
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
				</section>
			</>
		);
	}
}

export default Main;
