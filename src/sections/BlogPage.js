"use client";
import React from "react";
import FeatureStoryCard from "@/components/common/FeatureStoryCard";

import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false },
);

function BlogPage(props){
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

					{props.articles.length > 0 &&
					
						<>
							{props.articles.map((article, index) => {

								return (

									<FeatureStoryCard
										key={article.row_id}
										{...article}
										href={`/stories/${article.slug}`}
										className="min-h-[22rem] h-full"
									/>
								)
							})}
						</>
					}
				</div>
			</div>
		</div>
	);
}

export default BlogPage;
