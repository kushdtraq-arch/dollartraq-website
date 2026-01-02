"use client";

import React from "react";
import VideoHeroSection from "@/components/common/Front";
import ResourceCard from "@/components/common/ResourceCard";

const resources = [
  {
	id: 1,
	image: "/images/resource1.webp",
	title: "Visibility starts with connection",
	description:
	  "Securely share visibility and gain frictionless connectivity, from...",
	link: "#",
  },
  {
	id: 2,
	image: "/images/resource2.webp",
	title: "Beverage Producer Transforms Operations",
	description:
	  "Securely share visibility and gain frictionless connectivity, from...",
	link: "#",
  },
  {
	id: 3,
	image: "/images/resource3.webp",
	title: "Feature Alert: FraudGuard 2.0 - Next-gen",
	description:
	  "Securely share visibility and gain frictionless connectivity, from...",
	link: "#",
  },
  {
	id: 4,
	image: "/images/resource1.webp",
	title: "Visibility starts with connection",
	description:
	  "Securely share visibility and gain frictionless connectivity, from...",
	link: "#",
  },
  {
	id: 5,
	image: "/images/resource2.webp",
	title: "Beverage Producer Transforms Operations",
	description:
	  "Securely share visibility and gain frictionless connectivity, from...",
	link: "#",
  },
  {
	id: 6,
	image: "/images/resource3.webp",
	title: "Feature Alert: FraudGuard 2.0 - Next-gen",
	description:
	  "Securely share visibility and gain frictionless connectivity, from...",
	link: "#",
  },
];

function CaseStudiesPage() {
  return (
	<div>
	  <VideoHeroSection
		variant="split"
		imageSrc="/images/case.webp" 
		useVideo={false}
		headerLabel="Case Studies"
		headerLineWidth={40}
		headerLineColor="white"
		headerLineOpacity={0.8}
		titleLines={["Insights from the", "Logistics World"]}
		subtitle="For shippers, this means better collaboration with your carriers, higher levels of customer satisfaction, and improved supply chain execution."
		buttons={[]}
	  />

	  <div className="bg-gray-100 py-16 px-4">
		<div className="max-w-7xl mx-auto">
		  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">
			{resources.map((resource) => (
			  <ResourceCard key={resource.id} {...resource} />
			))}
		  </div>
		</div>
	  </div>
	</div>
  );
}

export default CaseStudiesPage;
