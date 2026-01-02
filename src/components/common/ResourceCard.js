"use client";

import React, { Component } from "react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class ResourceCard extends Component {
	render() {
		const {
			image,
			title,
			description = "",
			tags = [],
			link,
			actionText = "Read Now",
			className = "",
		} = this.props;

		return (
			<AnimateViewAppear delay={300}>
				<div
					className={`bg-white rounded-xl p-0 shadow-sm min-w-[320px] flex flex-col h-full max-w-[344px] ${className}`}
				>
					<img
						src={image}
						alt={title}
						className="rounded-t-xl w-full h-[180px] object-cover"
					/>

					<div className="p-6 pt-5 flex flex-col h-full">
						{tags.length > 0 && (
							<div className="flex flex-wrap gap-2 mb-3">
								{tags.map((tag, i) => (
									<span
										key={`${tag}-${i}`}
										className="px-3 py-1 text-[13px] rounded-full bg-blue-50 text-blue-600 font-medium"
									>
										{tag}
									</span>
								))}
							</div>
						)}

						<h3 className="font-bold text-[17px] leading-snug text-gray-800 mb-2">
							{title}
						</h3>

						{description && (
							<p className="text-gray-600 text-[15px] mb-5">
								{description}
							</p>
						)}

						<a
							href={link}
							className="flex items-center gap-2 font-medium text-blue-600 hover:underline text-[15px] mt-auto"
							aria-label={`${actionText}: ${title}`}
						>
							<ArrowRight size={18} /> {actionText}
						</a>
					</div>
				</div>
			</AnimateViewAppear>
		);
	}
}

export default ResourceCard;
