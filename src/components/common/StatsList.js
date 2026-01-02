"use client";

import React, { Component } from "react";

import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class StatsList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			items,
			titleColorClass = "text-gray-800",
			subtitleColorClass = "text-gray-600",
		} = this.props;

		return (
			<div className="grid grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-lg pt-8">
				{items.map(({ title, subtitle }, index) => (
					<AnimateViewAppear key={index} delay={500}>
						<div className="flex flex-col py-4">
							<span
								className={`font-poppins font-semibold text-xl ${titleColorClass}`}
							>
								{title}
							</span>
							<span
								className={`${subtitleColorClass} text-[15px]`}
							>
								{subtitle}
							</span>
						</div>
					</AnimateViewAppear>
				))}
			</div>
		);
	}
}

export default StatsList;
