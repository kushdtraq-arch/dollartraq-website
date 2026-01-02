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

export default function FreightForwardingPage() {
  const statsData = [
	{
	  title: "Faster Production",
	  subtitle: "Managed annually through our movement platform",
	},
	{
	  title: "Cost Savings",
	  subtitle: "Annually, across all modes and geographies",
	},
	{ title: "On-Time Delivery", subtitle: "and 19 languages supported" },
	{
	  title: "Better Quality",
	  subtitle: "benefitting from our global supply chain visibility",
	},
  ];

  const featuresList = [
	{
	  imageSrc: "/images/green.jpg",
	  altText: "Truckload Icon",
	  title: "One provider, one platform, one process",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 text-xs rounded-3xl shadow-lg items-start h-[250px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-10 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[16px] mb-3 text-black text-left",
	  descriptionClass: "text-gray-700 text-[10px] mb-3 text-left",
	  showLink: false,
	},
	{
	  imageSrc: "/images/green.jpg",
	  altText: "Truckload Icon",
	  title: "Unrivaled accuracys",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[250px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-10 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[16px] mb-3 text-black text-left",
	  descriptionClass: "text-gray-700 text-[10px] mb-3 text-left",
	  showLink: false,
	},
	{
	  imageSrc: "/images/green2.jpg",
	  altText: "Truckload Icon",
	  title: "Making you more productive, at every level",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-10 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[16px] mb-3 text-black text-left",
	  descriptionClass: "text-gray-700 text-[10px] mb-3 text-left",
	  showLink: false,
	},
	{
	  imageSrc: "/images/green3.jpg",
	  altText: "Truckload Icon",
	  title: "Enhanced contingency planning and exception management",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-10 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[16px] mb-3 text-black text-left",
	  descriptionClass: "text-gray-700 text-[10px] mb-3 text-left",
	  showLink: false,
	},
  ];

  const featuresLists = [
	{
	  imageSrc: "/images/green.jpg",
	  altText: "Truckload Icon",
	  title: "Make smarter business decisions",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-12 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[18px] mb-2 text-black text-left",
	  descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
	  showLink: false,
	},
	{
	  imageSrc: "/images/green.jpg",
	  altText: "Truckload Icon",
	  title: "Slash your carrier costs",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-12 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[18px] mb-2 text-black text-left",
	  descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
	  showLink: false,
	},
	{
	  imageSrc: "/images/green.jpg",
	  altText: "Truckload Icon",
	  title: "Drive proactive decision-making",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-12 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[18px] mb-2 text-black text-left",
	  descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
	  showLink: false,
	},
	{
	  imageSrc: "/images/green.jpg",
	  altText: "Truckload Icon",
	  title: "Eliminate manual check calls",
	  description: "Stay informed with live shipment updates, from pickup to delivery.",
	  className:
		"flex flex-col bg-gray-100 rounded-3xl shadow-lg items-start h-[270px] min-w-[270px] max-w-[290px]",
	  imageClass: "mb-12 w-15 h-18 rounded-md",
	  titleClass: "font-bold text-[18px] mb-2 text-black text-left",
	  descriptionClass: "text-gray-700 text-[13px] mb-3 text-left",
	  showLink: false,
	},
  ];

  const testimonials = [
	{
	  text:
		"Delivering a superior customer experience is what sets us apart in our industry. Extending real-time shipment visibility across the organization from our manufacturing facilities and distribution centers to our dedicated fleet and carrier partners is key to our exemplary service performance. With Descartes MacroPoint, we’ve been able to reduce load tracking time by 50%, provide faster response times to any shipment issues that may arise, and optimize our labor and capacity planning.",
	  author: "Frank Anderson",
	  company: "Director, N.A. Transportation at Steelcase",
	  avatar: "/avatar1.png",
	},
  ];

  const TestimonialCards = [
	{
	  text:
		"Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
	  author: "Frank Anderson",
	  company: "European Food Co.",
	  avatar: "/avatar1.png",
	},
	{
	  text:
		"Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
	  author: "Frank Anderson",
	  company: "European Food Co.",
	  avatar: "/avatar1.png",
	},
	{
	  text:
		"Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
	  author: "Frank Anderson",
	  company: "European Food Co.",
	  avatar: "/avatar1.png",
	},
	{
	  text:
		"Loginord helped us streamline our entire distribution network in Western Europe. Always on time, always reliable.",
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
		  imageSrc="/images/freight.webp"
		  headerLabel="Freight Forwarding"
		  titleLines={[
			"Next-Level Logistics",
			"Features to Power Your",
			"Supply Chain",
		  ]}
		  subtitle="From real-time visibility to intelligent decision-making, our tools give you full control, insight, and efficiency across every step of your operations"
		  buttons={[
			{ label: "Get a Demo", variant: "primary", onClick: () => {}, href:"/demo" },
			{ label: "Contact Us", variant: "secondary", onClick: () => {}, href:"/contact" },
		  ]}
		  showCompanySection={false}
		/>
	  </section>

	  <section className="w-full bg-blue-600">
		<div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
		  <div className="relative h-64 sm:h-80 lg:h-full">
			<img
			  src="/images/freight1.webp"
			  alt="Logistics container"
			  className="w-full h-full object-cover"
			  style={{
				WebkitMaskImage:
				  "linear-gradient(to right, black 70%, transparent 100%)",
				maskImage:
				  "linear-gradient(to right, black 70%, transparent 100%)",
			  }}
			/>
		  </div>

		  <div className="bg-blue-600 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-10">
			<ContentBlock
			  listItems={["Benefits Overview"]}
			  headingLines={["Solving your biggest", "challenges"]}
			  description="We combine smart operations with real-world reliability to move what matters — faster, safer, and smarter."
			  
			  align="left"
			  spacingTop="mt-0"
			  spacingBottom="mb-6"
			  listColorClass="text-white"
			  headingColorClass="text-white"
			  descriptionColorClass="text-white"
			/>

			<StatsList
			  items={statsData}
			  titleColorClass="text-white"
			  subtitleColorClass="text-white"
			/>
		  </div>
		</div>
	  </section>

	  <section className="w-full bg-white py-16">
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
		  <ContentBlock
			listItems={["Challenges and Solutions "]}
			headingLines={["Solving your biggest challenges"]}
			description="Because logistics isn’t just about moving goods—it’s about moving business forward."
			align="center"
			spacingBottom="mb-8"
		  />

		  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{featuresLists.map((feature, idx) => (
			  <FeatureCard key={idx} {...feature} />
			))}
		  </div>
		</div>
	  </section>

	  <section className="w-full bg-[#1067c9] py-16">
		<div className="mx-auto max-w-6xl px-4 sm:px-6">
		  <ContentBlock
			listItems={["Steelcase Success Story"]}
			headingLines={["Tracking Shipments"]}
			description={
			  <>
				We combine smart operations with real-world reliability to move
				what matters — faster, safer, and smarter.
			  </>
			}
			align="left"
			spacingTop="mt-4"
			spacingBottom="mb-4"
			headingColorClass="text-white"
			listColorClass="text-white"
			descriptionColorClass="text-gray-200"
		  />

		  <div className="flex flex-col md:flex-row gap-8 items-start">
			<div className="flex-1 space-y-6">
			  {testimonials.map(({ text, author, company, avatar }, idx) => (
				<TestimonialCard
				  key={idx}
				  text={text}
				  author={author}
				  company={company}
				  avatar={avatar}
				  enhanced={true}
				/>
			  ))}
			</div>

			<div className="rounded-xl overflow-hidden flex items-center md:w-[380px] h-56 sm:h-72 md:h-[350px]">
			  <img
				src="/images/freight2.webp"
				alt="Testimonial Visual"
				className="w-full h-full object-cover"
			  />
			</div>
		  </div>
		</div>
	  </section>

	  <section className="flex flex-col items-center bg-white py-14">
		<div className="mx-auto max-w-6xl w-full px-4 sm:px-6">
		  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
			<div>
			  <ContentBlock
				listItems={["Actionable insights"]}
				headingLines={[
				  "Clarity at Every Stage",
				  "of Your Logistics",
				]}
				description="Go beyond reports with intelligent insights that highlight risks, uncover opportunities, and guide smarter supply chain decisions"
				align="left"
				spacingBottom="mb-8"
				buttonSpacingClass="mt-10 lg:mt-24"
			  />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
			  {featuresList.map((feature, idx) => (
				<FeatureCard key={idx} {...feature} />
			  ))}
			</div>
		  </div>
		</div>
	  </section>

			<section className="w-full flex justify-center  bg-blue-600">
				<FeatureSwitch
					features={carrierFeatures}
					contentBlockProps={{
						listItems: ["Features for Freight Forwarding "],
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

	 
	  <section className="w-full bg-white py-16">
		<div className="mx-auto max-w-6xl px-4 sm:px-6">
		  <ContentBlock
			listItems={["Testimonials"]}
			headingLines={["What Our Clients Say"]}
			description={
			  <>
				We combine smart operations with real-world reliability to move what matters —
				faster, safer, and smarter.
			  </>
			}
			align="left"
			spacingTop="mt-4"
			spacingBottom="mb-4"
		  />

		  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
			<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
			  {TestimonialCards.map((t, idx) => (
				<TestimonialCard key={idx} {...t} />
			  ))}
			</div>

			<div className="rounded-xl overflow-hidden flex items-center h-56 sm:h-72 lg:h-full min-h-[260px]">
			  <img
				src="/images/freight3.webp"
				alt="Testimonial visual"
				className="w-full h-full object-cover rounded-xl"
			  />
			</div>
		  </div>
		</div>
	  </section>

	
	  <section className="w-full bg-white mt-7">
		<VideoHeroSection
		  variant="banner"
		  imageSrc="/images/freight4.webp"
		  useVideo={false}
		  titleLines={[""]}
		  subtitle="Dollar traq is purpose built to provide end-to-end visibility through every stage of the transportation journey, all from a single provider."
		  buttons={[
			{ label: "Get a Demo", variant: "primary", href:"/demo" },
			{ label: "Contact Us", variant: "secondary", className: "bg-white", href:"/contact" },
		  ]}
		  showCompanySection={false}
		/>
	  </section>
	</>
  );
}
