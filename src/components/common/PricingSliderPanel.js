"use client";

import React, { Component } from "react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

class PricingPanel extends Component {
	handleSliderChange = (index, event) => {
		const val = Number(event.target.value);
		this.props.onSliderChange(index, val);
	};

	handleDropdownChange = (index, event) => {
		this.props.onDropdownChange(index, event.target.value);
	};

	render() {
		const { sliders, dropdowns } = this.props;
		return (
			<AnimateViewAppear delay={300}>
				<div className="bg-gray-50 rounded-xl p-8 flex flex-col gap-8 sticky top-0 w-full max-w-[500px] md:w-[500px]">
					{sliders.map((slider, idx) => (
						<div key={idx}>
							<div className="mb-3">
								<span className="text-xs font-semibold">
									{slider.label}
								</span>
							</div>
							<span className="text-blue-600 font-poppins font-semibold text-sm">
								{slider.displayValue}
							</span>
							<input
								type="range"
								min={slider.min}
								max={slider.max}
								value={slider.value}
								onChange={(e) =>
									this.handleSliderChange(idx, e)
								}
								className="w-full mt-2"
							/>
							<div className="flex justify-between text-xs mt-2 text-black font-semibold">
								<span>{slider.minLabel}</span>
								<span>{slider.maxLabel}</span>
							</div>
						</div>
					))}

					<div className="flex flex-col md:flex-row gap-4">
						{dropdowns.map((dropdown, idx) => (
							<div key={idx} className="w-full md:w-1/2">
								<label className="block font-semibold text-xs text-black mb-1">
									{dropdown.label}
								</label>
								<select
									className="w-full bg-white h-14 px-4 mt-2.5 text-black"
									value={dropdown.value}
									onChange={(e) =>
										this.handleDropdownChange(idx, e)
									}
								>
									{dropdown.options.map((opt, i) => (
										<option key={i} value={opt.value}>
											{opt.label}
										</option>
									))}
								</select>
							</div>
						))}
					</div>
				</div>
			</AnimateViewAppear>
		);
	}
}

export default PricingPanel;
