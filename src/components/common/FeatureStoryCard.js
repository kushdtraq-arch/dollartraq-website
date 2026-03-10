"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

const ACCENT = {
	amber: "text-amber-600",
	emerald: "text-emerald-600",
	sky: "text-sky-600",
	rose: "text-rose-600",
	zinc: "text-zinc-600",
};

export default function FeatureStoryCard({
	tag = "Design",
	title = "",
	paragraph = "",
	thumb_url = "",
	imageAlt = "",
	href = null,
	imageRight = true,
	accent = "zinc",
	className = "",
	priority = false,
}) {
	const accentCls = ACCENT[accent] || ACCENT.zinc;

	const CardContent = (
		<AnimateViewAppear delay={300}>
			<article
				className={[
					"group grid overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md",
					"md:grid-cols-2",
					className,
				].join(" ")}
			>
				<div
					className={[
						"flex flex-col justify-center gap-3 p-6 md:p-8 pb-0",
						imageRight ? "" : "md:order-last",
					].join(" ")}
				>
					<span
						className={[
							"text-xs font-semibold tracking-widest uppercase",
							accentCls,
						].join(" ")}
					>
						{tag}
					</span>

					<h2 className="text-md font-extrabold leading-tight text-zinc-900 md:text-xl">
						{title}
					</h2>

					{paragraph && (
						<p className="text-sm leading-relaxed text-zinc-900 md:text-base">
							{paragraph}
						</p>
					)}
				</div>

				<div
					className={[
						"relative w-full h-40 md:h-64 my-4 md:my-6",
						imageRight ? "" : "md:order-first",
					].join(" ")}
				>
					{thumb_url && (
						<Image
							src={thumb_url}
							alt={title}
							fill
							priority={priority}
							sizes="(min-width: 768px) 50vw, 100vw"
							className="object-cover"
							unoptimized
						/>
					)}
				</div>
			</article>
		</AnimateViewAppear>
	);

	return href ? (
		<Link href={href} className="block focus:outline-none">
			{CardContent}
		</Link>
	) : (
		CardContent
	);
}
