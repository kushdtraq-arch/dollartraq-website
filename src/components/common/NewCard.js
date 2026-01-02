"use client";

import React, { Component } from "react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class NewCard extends Component {
	renderImage = () => {
		const { imageSrc, altText } = this.props;
		if (!imageSrc) return null;

		return (
			<div className="relative w-full h-48 overflow-hidden rounded-t-xl">
				<img
					src={imageSrc}
					alt={altText || ""}
					className="w-full h-full object-cover"
				/>
			</div>
		);
	};

	renderTitle = () => {
		const { title } = this.props;
		return (
			<h3 className="font-semibold text-[20px] text-[#222] mb-2">
				{title}
			</h3>
		);
	};

	renderDescription = () => {
		const { description } = this.props;
		return (
			<p className="text-gray-600 text-[14px] leading-relaxed">
				{description}
			</p>
		);
	};

	renderLink = () => {
		const { showLink, linkUrl, linkLabel } = this.props;
		if (!showLink) return null;

		return (
			<a
				href={linkUrl || "#"}
				className="text-blue-600 font-semibold flex items-center gap-1 hover:underline mt-4"
			>
				{linkLabel || "Read More"} <ArrowRight size={16} />
			</a>
		);
	};

	render() {
		const { className, style } = this.props;

		return (
			<AnimateViewAppear delay={500}>
				<div
					className={`bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden ${className || ""}`}
					style={style}
				>
					{this.renderImage()}

					<div className="p-5">
						{this.renderTitle()}
						{this.renderDescription()}
						{this.renderLink()}
					</div>
				</div>
			</AnimateViewAppear>
		);
	}
}

export default NewCard;
