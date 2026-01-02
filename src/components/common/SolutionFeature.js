"use client";

import React, { Component } from "react";
import { Circle } from "lucide-react";

import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class SolutionFeature extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			number,
			title,
			imageSrc,
			description,
			showBadge = true,
			imageTop = false,
			className = "",
			cardStyle = "default",
			bgColor = "transparent",
			index = 0,
		} = this.props;

		const isFigma = cardStyle === "figma";
		const cardClasses = isFigma
			? `w-[410px] rounded-2xl shadow-md border border-gray-200 bg-white ${className}`
			: `max-w-[420px] ${className}`;

		const imageClasses = isFigma
			? "w-full h-[175px] object-cover rounded-2xl"
			: "w-[580px] h-[320px] object-cover rounded-md shadow-xs ";

		const Content = (
			<div
				style={{
					backgroundColor: bgColor,
					padding: "1rem",
					marginTop: imageTop ? 0 : "1rem",
					marginBottom: imageTop ? "1rem" : 0,
				}}
			>
				{showBadge && (
					<div className="flex items-center gap-2 mb-1">
						<Circle
							size={10}
							strokeWidth={5}
							className="text-blue-700"
						/>
						<span className="text-black font-medium text-xs">
							{number < 10 ? `0${number}` : number}
						</span>
					</div>
				)}
				<h3
					className={`font-bold text-xl ${
						isFigma ? "mb-1 text-gray-900 mt-1" : "mb-4 text-black"
					}`}
				>
					{title}
				</h3>
				{description && (
					<p className="text-gray-600 text-sm mb-1">{description}</p>
				)}
			</div>
		);

		return (
			<AnimateViewAppear delay={400 + index * 100}>
				<div className={`mb-12 last:mb-0 ${cardClasses}`}>
					{imageTop ? (
						<>
							<img
								src={imageSrc}
								alt={title}
								className={imageClasses}
								loading="lazy"
							/>
							{Content}
						</>
					) : (
						<>
							{Content}
							<img
								src={imageSrc}
								alt={title}
								className={imageClasses}
								loading="lazy"
							/>
						</>
					)}
				</div>
			</AnimateViewAppear>
		);
	}
}

export default SolutionFeature;
