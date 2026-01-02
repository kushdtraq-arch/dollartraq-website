"use client";

import React from "react";
import VideoHeroSection from "@/components/common/Front";
import ResourceCard from "@/components/common/ResourceCard";

function VideosAndWebinarsPage() {
  const bulletPoints1 = (
	<ul className="list-disc ml-5 space-y-2 text-gray-600 text-[15px]">
	  <li>
		Understand the role of Descartes MacroPoint in driving real-time,
		end-to-end supply chain visibility.
	  </li>
	  <li>
		{`"Explore how MacroPoint’s automation of tracking, monitoring, and
		reporting reduces manual work and improves operational efficiency`}
	  </li>
	  <li>
		Learn how intelligent machine learning powers faster, more accurate
		data delivery for informed decision-making.
	  </li>
	  <li>
		Discover how MacroPoint supports scalability, security, and reliability
		across industries, uniting people and technology to transform supply
		chains globally.
	  </li>
	</ul>
  );

  const bulletPoints2 = (
	<ul className="list-disc ml-5 space-y-2 text-gray-600 text-[15px]">
	  <li>
		Understand the role of Descartes MacroPoint in driving real-time,
		end-to-end supply chain visibility.
	  </li>
	  <li>
		{`Explore how MacroPoint’s automation of tracking, monitoring, and
		reporting reduces manual work and improves operational efficiency.`}
	  </li>
	  <li>
		Learn how intelligent machine learning powers faster, more accurate
		data delivery for informed decision-making.
	  </li>
	</ul>
  );

  const resources = [
	{
	  image: "/images/video2.webp",
	  title: "What is Dollar Traq?",
	  description: bulletPoints1,
	  link: "#",
	  actionText: "Watch Now",
	},
	{
	  image: "/images/video3.webp",
	  title:
		"Talking Logistics: Key Factors Shaping Transportation Management in 2024",
	  description: bulletPoints2,
	  link: "#",
	  actionText: "Watch Now",
	},
	{
	  image: "/images/video2.webp",
	  title: "What is Dollar Traq?",
	  description: bulletPoints1,
	  link: "#",
	  actionText: "Watch Now",
	},
	{
	  image: "/images/video3.webp",
	  title:
		"Talking Logistics: Key Factors Shaping Transportation Management in 2024",
	  description: bulletPoints2,
	  link: "#",
	  actionText: "Watch Now",
	},
	 {
	  image: "/images/video2.webp",
	  title: "What is Dollar Traq?",
	  description: bulletPoints1,
	  link: "#",
	  actionText: "Watch Now",
	},
	{
	  image: "/images/video3.webp",
	  title:
		"Talking Logistics: Key Factors Shaping Transportation Management in 2024",
	  description: bulletPoints2,
	  link: "#",
	  actionText: "Watch Now",
	},
	 {
	  image: "/images/video2.webp",
	  title: "What is Dollar Traq?",
	  description: bulletPoints1,
	  link: "#",
	  actionText: "Watch Now",
	},
	{
	  image: "/images/video3.webp",
	  title:
		"Talking Logistics: Key Factors Shaping Transportation Management in 2024",
	  description: bulletPoints2,
	  link: "#",
	  actionText: "Watch Now",
	},
	  {
	  image: "/images/video2.webp",
	  title: "What is Dollar Traq?",
	  description: bulletPoints1,
	  link: "#",
	  actionText: "Watch Now",
	},
	{
	  image: "/images/video3.webp",
	  title:
		"Talking Logistics: Key Factors Shaping Transportation Management in 2024",
	  description: bulletPoints2,
	  link: "#",
	  actionText: "Watch Now",
	},
  ];

  return (
	<div>
	  <VideoHeroSection
		variant="split"
		imageSrc="/images/video1.webp"
		useVideo={false}
		headerLabel="Videos & Webinars"
		headerLineWidth={40}
		headerLineColor="white"
		headerLineOpacity={0.8}
		titleLines={["Insights from the", "Logistics World"]}
		subtitle="For shippers, this means better collaboration with your carriers, higher levels of customer satisfaction, and improved supply chain execution."
		buttons={[]}
	  />

	  <div className="bg-gray-100 py-16 px-4">
		<div className="max-w-7xl mx-auto">
		  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center">
			{resources.map((resource, idx) => (
			  <ResourceCard
				key={idx}
				{...resource}
				className="w-full max-w-[620px]" 
			  />
			))}
		  </div>
		</div>
	  </div>
	</div>
  );
}

export default VideosAndWebinarsPage;
