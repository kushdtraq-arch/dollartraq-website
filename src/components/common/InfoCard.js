"use client";

import React, { Component } from "react";

class InfoCard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			label,
			heading,
			description,
			children,
			className = "",
		} = this.props;

		return (
			<div
				className={`bg-white border border-blue-200 px-4 sm:px-6 md:px-7 py-5 sm:py-6 rounded-xl w-full max-w-full sm:max-w-[478px] ${className}`}
			>
				{label && (
					<span className="text-sm sm:text-[14px] font-medium text-gray-700 block mb-1">
						{label}
					</span>
				)}
				<h2 className="font-montserrat font-extrabold text-xl sm:text-2xl md:text-3xl text-black mb-2 leading-tight">
					{heading}
				</h2>
				<p className="text-gray-700 text-xs sm:text-sm md:text-sm">
					{description}
				</p>
				{children}
			</div>
		);
	}
}

export default InfoCard;
