"use client";

import React, { Component } from "react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class TestimonialCard extends Component {
	render() {
		const {
			text,
			author,
			company,
			avatar,
			enhanced = false,
			className = "",
		} = this.props;

		const containerClass = enhanced
			? `bg-[#f6f8fa] p-8 rounded-2xl min-w-[260px] flex flex-col h-full shadow-md ${className}`
			: `bg-gray-100 p-6 rounded-xl min-w-[260px] flex flex-col h-full ${className}`;

		const textClass = enhanced
			? "text-[18px] text-black leading-relaxed mb-8 font-small"
			: "text-[15px] text-gray-800 leading-relaxed mb-5";

		const avatarClass = enhanced
			? "w-11 h-11 rounded-full object-cover border border-gray-300"
			: "w-8 h-8 rounded-lg mr-3 object-cover";

		const authorClass = enhanced
			? "block font-semibold text-[16px] text-gray-900"
			: "block font-semibold text-[14px] text-gray-800";

		const companyClass = enhanced
			? "block text-gray-500 text-[15px]"
			: "block text-xs text-gray-500";

		return (
			<AnimateViewAppear delay={300}>
				<div className={containerClass}>
					<p className={textClass}>“{text}”</p>
					<div className="flex items-center mt-auto gap-4">
						<img
							src={avatar}
							alt={author}
							className={avatarClass}
						/>
						<div>
							<span className={authorClass}>{author}</span>
							<span className={companyClass}>{company}</span>
						</div>
					</div>
				</div>
			</AnimateViewAppear>
		);
	}
}

export default TestimonialCard;
