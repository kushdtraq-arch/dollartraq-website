"use client";

import React, { Component } from "react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false },
);

class BlueHeroSection extends Component {
	render() {
		const {
			titleGreen = "",
			titleWhite = "",
			subtitle,
			description,
			imageSrc,
			imageAlt = "",
			bgColor = "#1c74e9",
			textColor = "#fff",
			className = "",
			appStoreUrl = "",
			playStoreUrl = "",
			topPadding = "pt-20",
		} = this.props;

		return (
			<section
				className={`relative w-full flex flex-col ${topPadding} ${className}`}
				style={{ backgroundColor: bgColor, color: textColor }}
			>
				<div className="max-w-6xl w-full mx-auto flex flex-col xl:flex-row items-center xl:items-start px-4 xl:px-0">
					<div className="flex-1 flex flex-col justify-center gap-3 xl:pr-10 text-center xl:text-left">
						<AnimateViewAppear delay={300}>
							<h2 className="font-semibold text-4xl md:text-5xl leading-tight">
								<span className="text-green-300 font-bold">
									{titleGreen}
								</span>{" "}
								<span className="text-white font-bold">
									{titleWhite}
								</span>
							</h2>
							{subtitle && (
								<h3 className="font-semibold text-sm text-green-300 mt-2">
									{subtitle}
								</h3>
							)}
							{description && (
								<p className="text-sm md:text-base opacity-80 mt-2">
									{description}
								</p>
							)}
							<div className="flex gap-4 mt-4 xl:mt-6 justify-center xl:justify-start">
								{appStoreUrl && (
									<a
										href={appStoreUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="/images/app.png"
											alt="Download on the App Store"
											className="h-9 md:h-10"
										/>
									</a>
								)}
								{playStoreUrl && (
									<a
										href={playStoreUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<img
											src="/images/play.png"
											alt="Get it on Google Play"
											className="h-9 md:h-10"
										/>
									</a>
								)}
							</div>
						</AnimateViewAppear>
					</div>

					<div className="flex-1 mt-16 xl:mt-0 flex justify-center xl:justify-end w-full relative">
						<img
							src={imageSrc}
							alt={imageAlt || subtitle || titleGreen}
							className="w-[360px] xl:w-auto xl:max-h-[500px] object-contain"
						/>
					</div>
				</div>
			</section>
		);
	}
}

export default BlueHeroSection;
