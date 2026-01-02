"use client";

import React, { Component, Fragment } from "react";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import Link from "next/link";

import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class ContentBlock extends Component {
	renderList(items, colorClass) {
		return (
			<ul
				className={`list-disc list-inside font-semibold mb-4 ${colorClass} text-sm sm:text-2xl`}
			>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		);
	}

	renderHeading(lines, colorClass) {
		return (
			<h2
				className={`text-2xl sm:text-2xl md:text-2xl font-extrabold mb-3 leading-tight ${colorClass}`}
			>
				{lines.map((line, index) => (
					<Fragment key={index}>
						{line}
						<br />
					</Fragment>
				))}
			</h2>
		);
	}

	renderButtons(buttons) {
		const { buttonSpacingClass = "mt-2", buttonAlignment = "flex-start" } =
			this.props;
		const alignmentClassMap = {
			"flex-start": "justify-start",
			center: "justify-center",
			"flex-end": "justify-end",
		};
		return (
			<div
				className={`flex flex-wrap gap-2 sm:gap-4 ${buttonSpacingClass} ${
					alignmentClassMap[buttonAlignment] || "justify-start"
				}`}
			>
				{buttons.map(({ label, variant, onClick, href }, index) => (
	            href ? (
		        <Link key={index} href={href}>
			       <Button variant={variant} className="gap-2">
				     {label} <ArrowRight size={16} />
			       </Button>
		      </Link>
	            ) : (
		           <Button
			         key={index}
			         variant={variant}
			         className="gap-2"
			         onClick={onClick}
		            >
			         {label} <ArrowRight size={16} />
		          </Button>
	               )
                    ))}

			</div>
		);
	}

	render() {
		const {
			listItems = [],
			headingLines = [],
			description = "",
			buttons = [],
			align = "left",
			spacingTop = "mt-0",
			spacingBottom = "mb-7",
			className = "",
			listColorClass = "text-black",
			headingColorClass = "text-[#222]",
			descriptionColorClass = "text-gray-700",
			children,
		} = this.props;

		const alignMap = {
			left: "text-left items-start",
			center: "text-center items-center",
			right: "text-right items-end",
		};

		return (
			<AnimateViewAppear delay={300}>
				<div
					className={`flex flex-col ${alignMap[align]} ${spacingTop} ${spacingBottom} w-full sm:max-w-md md:max-w-2xl ${className}`}
				>
					{listItems.length > 0 && (
						<AnimateViewAppear delay={400}>
							{this.renderList(listItems, listColorClass)}
						</AnimateViewAppear>
					)}

					{headingLines.length > 0 && (
						<AnimateViewAppear delay={400}>
							{this.renderHeading(
								headingLines,
								headingColorClass
							)}
						</AnimateViewAppear>
					)}

					{description && (
						<AnimateViewAppear delay={500}>
							<p
								className={`${descriptionColorClass} mb-4 sm:mb-6 text-sm sm:text-base max-w-full`}
							>
								{description}
							</p>
						</AnimateViewAppear>
					)}

					{buttons.length > 0 && (
						<AnimateViewAppear delay={600}>
							{this.renderButtons(buttons)}
						</AnimateViewAppear>
					)}

					{children && (
						<AnimateViewAppear delay={600}>
							{children}
						</AnimateViewAppear>
					)}
				</div>
			</AnimateViewAppear>
		);
	}
}

export default ContentBlock;
