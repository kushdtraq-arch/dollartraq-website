"use client";

import React, { useState, useMemo,useEffect } from "react";
import VideoHeroSection from "@/components/common/Front";
import ResourceCard from "@/components/common/ResourceCard";
import { ChevronDown, Search as SearchIcon, Plus } from "lucide-react";

const DATA = [
  {
	id: 1,
	image: "/images/news1.webp",
	title:
	  "Beverage Producer Transforms Operations with Integrated TMS and Real-Time Visibility",
	description:
	  "Plant-to-DC visibility with automated tendering and ETA tracking.",
	link: "/resources/beverage-tms-visibility",
	tags: ["Food & Beverage", "Shippers", "Transportation & Logistic"],
  },
  {
	id: 2,
	image: "/images/news1.webp",
	title: "Electronics Retailer Cuts Last‑Mile Cost with Dynamic Route Planning",
	description: "Time-window adherence and auto-batching for urban deliveries.",
	link: "/resources/electronics-last-mile",
	tags: ["Retail", "E‑commerce", "Last‑Mile"],
  },
  {
	id: 3,
	image: "/images/news1.webp",
	title: "Pharma Firm Improves Cold Chain Compliance with IoT Telemetry",
	description: "Continuous temperature capture and excursion workflows.",
	link: "/resources/pharma-cold-chain",
	tags: ["Pharma", "Life Sciences", "Cold Chain"],
  },
  {
	id: 4,
	image: "/images/news1.webp",
	title: "Automotive OEM Streamlines Inbound with Yard Management",
	description: "Door assignments, dwell reduction, and live gate events.",
	link: "/resources/auto-yard-mgmt",
	tags: ["Automotive", "Manufacturing", "Yard"],
  },
  {
	id: 5,
	image: "/images/news1.webp",
	title: "3PL Boosts On‑Time Delivery via Multi‑Stop Optimization",
	description: "Constraint-aware routing and performance scorecards.",
	link: "/resources/3pl-otd-optimization",
	tags: ["3PL", "Carriers", "Optimization"],
  },
  {
	id: 6,
	image: "/images/news1.webp",
	title: "Fresh Produce Co. Improves Forecasts with AI Planning",
	description: "Demand sensing for seasonal lanes and capacity.",
	link: "/resources/produce-ai-forecast",
	tags: ["Food & Beverage", "Forecasting", "AI/ML"],
  },
  {
	id: 7,
	image: "/images/news1.webp",
	title: "Apparel Brand Accelerates Cross‑Border with HS Code Automation",
	description: "Auto-classification and landed-cost estimates.",
	link: "/resources/apparel-cross-border",
	tags: ["Apparel", "Compliance", "Cross‑Border"],
  },
  {
	id: 8,
	image: "/images/news1.webp",
	title: "Furniture Distributor Reduces Claims through Dock Scheduling",
	description: "Self-serve appointments and load leveling.",
	link: "/resources/furniture-dock-scheduling",
	tags: ["Furniture", "DC Ops", "Scheduling"],
  },
  {
	id: 9,
	image: "/images/news1.webp",
	title: "Chemical Shipper Enhances Safety with Hazmat Workflows",
	description: "Packing group validation and carrier rules.",
	link: "/resources/chemical-hazmat",
	tags: ["Chemicals", "Hazmat", "Safety"],
  },
  {
	id: 10,
	image: "/images/news1.webp",
	title: "Marketplace Scales Returns with RMA Automation",
	description: "Smart disposition and low-cost label routing.",
	link: "/resources/marketplace-rma",
	tags: ["E‑commerce", "Returns", "Automation"],
  },
  {
	id: 11,
	image: "/images/news1.webp",
	title: "Building Materials Supplier Improves Fleet Utilization",
	description: "Telematics-driven dispatch and backhauls.",
	link: "/resources/building-fleet-utilization",
	tags: ["Construction", "Private Fleet", "Telematics"],
  },
  {
	id: 12,
	image: "/images/news1.webp",
	title: "CPG Shortens Tender Cycles with Carrier Scorecards",
	description: "Award strategies by performance and cost.",
	link: "/resources/cpg-tender-cycles",
	tags: ["CPG", "Procurement", "TMS"],
  },
  {
	id: 13,
	image: "/images/news1.webp",
	title: "Grocery Network Optimizes Multi-Temperature Loads",
	description: "Compartments, cube, and stop constraints handled automatically.",
	link: "/resources/grocery-multitemp",
	tags: ["Grocery", "Refrigerated", "Optimization"],
  },
  {
	id: 14,
	image: "/images/news1.webp",
	title: "Parcel Shipper Cuts Surcharges with Zone Skipping",
	description: "Induction strategies and carrier mix simulation.",
	link: "/resources/parcel-zone-skip",
	tags: ["Parcel", "Cost", "Network"],
  },
  {
	id: 15,
	image: "/images/news1.webp",
	title: "B2B Distributor Adds Appointment APIs for Carriers",
	description: "Reduced dwell and better dock capacity utilization.",
	link: "/resources/b2b-appointments",
	tags: ["Distribution", "APIs", "Scheduling"],
  },
  {
	id: 16,
	image: "/images/news1.webp",
	title: "D2C Brand Improves Promise Dates with Lead‑Time ML",
	description: "More accurate PDP and checkout delivery estimates.",
	link: "/resources/d2c-leadtime-ml",
	tags: ["D2C", "ML", "Promise Date"],
  },
  {
	id: 17,
	image: "/images/news1.webp",
	title: "Wholesaler Reduces Carbon with Mode Shift Planning",
	description: "Rail and intermodal scenarios with emissions reporting.",
	link: "/resources/wholesale-mode-shift",
	tags: ["Sustainability", "Emissions", "Planning"],
  },
  {
	id: 18,
	image: "/images/news1.webp",
	title: "Foodservice Distributor Improves Fill Rates with ATP",
	description: "Network-aware allocation and substitutions.",
	link: "/resources/foodservice-atp",
	tags: ["Foodservice", "Inventory", "ATP"],
  },
];

const BATCH_SIZE = 9;
const ALL = "All";
export default function NewsAndUpdatesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(ALL);
  const [dropdownOpen, setDropdownOpen] = useState(false);

const categories = useMemo(() => {
  /** @type {Set<string>} */
  const set = new Set(); 
  DATA.forEach((d) => d.tags.forEach((t) => set.add(t)));
  return [ALL, ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}, []);

  const filtered = useMemo(() => {
	const q = query.trim().toLowerCase();
	return DATA.filter((item) => {
	  const inCategory = selectedCategory === ALL || item.tags.includes(selectedCategory);
	  if (!inCategory) return false;
	  if (!q) return true;
	  const hay = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
	  return hay.includes(q);
	});
  }, [query, selectedCategory]);

  const [visible, setVisible] = useState(BATCH_SIZE);
  useEffect(() => {
	setVisible(BATCH_SIZE);
  }, [query, selectedCategory]);

  const canShowMore = visible < filtered.length;

  return (
	<>
	  <VideoHeroSection
		variant="split"
		imageSrc="/images/news.webp"
		useVideo={false}
		headerLabel="News"
		headerLineWidth={40}
		headerLineColor="white"
		headerLineOpacity={0.8}
		titleLines={["Insights from the", "Logistics World"]}
		subtitle=""
		buttons={[]}
	  />

	  <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
	   
		<form
		  onSubmit={(e) => e.preventDefault()}
		  className="mb-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between"
		  aria-label="Resource search"
		>
		
		  <div className="relative">
			<button
			  type="button"
			  onClick={() => setDropdownOpen((v) => !v)}
			  className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-gray-800 hover:text-gray-900 focus:outline-none"
			  aria-haspopup="listbox"
			  aria-expanded={dropdownOpen}
			>
			  <span className="text-base">Category</span>
			  <ChevronDown className="h-4 w-4 text-gray-500" aria-hidden="true" />
			</button>

			{dropdownOpen && (
			  <ul
				role="listbox"
				tabIndex={-1}
				className="absolute z-20 mt-2 max-h-72 w-56 overflow-auto rounded-md border border-gray-200 bg-white shadow-lg"
			  >
				{categories.map((c) => {
				  const active = selectedCategory === c;
				  return (
					<li key={c}>
					  <button
						type="button"
						role="option"
						aria-selected={active}
						onClick={() => {
						  setSelectedCategory(c);
						  setDropdownOpen(false);
						}}
						className={`block w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${
						  active ? "text-emerald-600" : "text-gray-700"
						}`}
					  >
						{c}
					  </button>
					</li>
				  );
				})}
			  </ul>
			)}
		  </div>

		 
		  <div className="flex w-full sm:max-w-xl mr-10 items-center">
			<div className="relative flex-1">
			  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
				<SearchIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
			  </span>
			  <input
				type="text"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Type here"
				aria-label="Search resources"
				className="h-10 w-full rounded-l-md border border-gray-200 bg-white pl-9 pr-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200"
			  />
			</div>
			<button
			  type="button"
			  onClick={() => setQuery((q) => q.trim())}
			  className="h-10 rounded-r-md bg-emerald-500 px-4 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300"
			>
			  Search
			</button>
		  </div>
		</form>

		
		<section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		  {filtered.slice(0, visible).map((card) => (
			<ResourceCard
			  key={card.id}
			  image={card.image}
			  title={card.title}
			  description={card.description}
			  link={card.link}
			  tags={card.tags}
			/>
		  ))}
		</section>

		<div className="mt-8 flex justify-center">
		  {canShowMore ? (
			<button
			  onClick={() =>
				setVisible((v) => Math.min(v + BATCH_SIZE, filtered.length))
			  }
			  className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
			>
			  Show More
			  <Plus className="h-4 w-4" aria-hidden="true" />
			</button>
		  ) : (
			<p className="text-sm text-slate-500">No more cards</p>
		  )}
		</div>
	  </main>
	          <VideoHeroSection
						variant="banner"
						imageSrc="/images/truck2.webp"
						useVideo={false}
						titleLines={[
							"",
							
						]}
						subtitle="Dollar traq is purpose built to provide end-to-end visibility through every stage of the transportation journey, all from a single provider."
						buttons={[
							{
								label: "Get a Demo",
								variant: "primary",
							},
							{
								label: "Contact Us",
								variant: "secondary",
								className: "bg-white",
							},
						]}
						showCompanySection={false}
		       />
	</>
  );
}