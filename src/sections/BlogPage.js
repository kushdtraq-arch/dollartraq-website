"use client";
import React from "react";
import FeatureStoryCard from "@/components/common/FeatureStoryCard";

import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false },
);

const cards = [
	{
		id: "a01",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/boy.webp",
		imageAlt: "Pilot facade",
		href: "/stories/windows-1",
		imageRight: true,
		accent: "amber",
	},
	{
		id: "a02",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/img1.webp",
		imageAlt: "Retrofit tower",
		href: "/stories/retrofit-2",
		imageRight: true,
		accent: "emerald",
	},
	{
		id: "a03",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/img2.webp",
		imageAlt: "Glass logistics",
		href: "/stories/carbon-3",
		imageRight: true,
		accent: "sky",
	},
	{
		id: "a04",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/img3.webp",
		imageAlt: "Test lab",
		href: "/stories/tests-4",
		imageRight: true,
		accent: "rose",
	},
	{
		id: "a05",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/img4.webp",
		imageAlt: "Daylight facade",
		href: "/stories/daylight-5",
		imageRight: true,
		accent: "amber",
	},
	{
		id: "a06",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/banner.webp",
		imageAlt: "City code",
		href: "/stories/codes-6",
		imageRight: true,
		accent: "zinc",
	},
	{
		id: "a07",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/truck1.webp",
		imageAlt: "Furnace line",
		href: "/stories/furnace-7",
		imageRight: true,
		accent: "emerald",
	},
	{
		id: "a08",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/truck2.webp",
		imageAlt: "Library",
		href: "/stories/library-8",
		imageRight: true,
		accent: "sky",
	},
	{
		id: "a09",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/truck3.webp",
		imageAlt: "Smart facade",
		href: "/stories/sensors-9",
		imageRight: true,
		accent: "rose",
	},
	{
		id: "a10",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/3pl.webp",
		imageAlt: "Cost charts",
		href: "/stories/cost-10",
		imageRight: true,
		accent: "amber",
	},
	{
		id: "a11",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/retail.webp",
		imageAlt: "Safety glass",
		href: "/stories/safety-11",
		imageRight: true,
		accent: "zinc",
	},
	{
		id: "a12",
		tag: "Blog",
		title: "Credit‑card thin windows — pilot tower",
		paragraph: "Ultra‑thin glazing hits multi‑unit housing.",
		imageSrc: "/images/boxes.webp",
		imageAlt: "PV facade",
		href: "/stories/pv-12",
		imageRight: true,
		accent: "emerald",
	},
];
function BlogPage() {
	return (
		<div>
			<section className="relative isolate overflow-hidden bg-gray-50">
				<AnimateViewAppear delay={100}>
					<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_120%_at_50%_-20%,rgba(2,6,23,0.06),transparent_60%)]" />
					<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
						<div className="flex justify-center">
							<span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 shadow-sm">
								Blog
							</span>
						</div>
						<h1 className="mt-6 text-center font-extrabold tracking-tight text-gray-900 text-4xl sm:text-5xl md:text-5xl">
							Discover our latest news
						</h1>
						<p className="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg md:text-xl leading-relaxed text-gray-600">
							Discover the achievements that set us apart. From
							groundbreaking projects to industry accolades, we
							take pride in our accomplishments.
						</p>
					</div>
				</AnimateViewAppear>
			</section>
			<div className="mx-auto max-w-6xl mt-2 p-6">
				<div className="grid grid-cols-1 sm:grid-cols-2 items-stretch gap-6">
					{cards.map((item) => (
						<FeatureStoryCard
							key={item.id}
							{...item}
							className="min-h-[22rem] h-full"
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default BlogPage;
