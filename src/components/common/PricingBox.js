"use client";

import React, { Component } from "react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class StatBox extends Component {
	render() {
		const { title, value, className = "" } = this.props;

		return (
			<AnimateViewAppear delay={400}>
				<div
					className={`bg-gray-50 rounded-lg py-5 sm:py-7 px-2 sm:px-4 text-center ${className}`}
				>
					<span className="block text-xs sm:text-sm font-medium mb-2 text-gray-500">
						{title}
					</span>

					<span className="font-poppins text-blue-600 font-semibold text-sm sm:text-base">
						{value}
					</span>
				</div>
			</AnimateViewAppear>
		);
	}
}

export default StatBox;
