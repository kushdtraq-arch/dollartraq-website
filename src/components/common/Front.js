"use client";

import React, { Component } from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false },
);

class VideoHeroSection extends Component {
	render() {
		const {
			videoSrc,
			imageSrc,
			useVideo = true,
			videoOverlayBlur = 0,
			videoOverlayOpacity = 0.7,
			headerLabel,
			headerLineWidth = 70,
			headerLineOpacity = 1,
			headerLineColor = "white",
			titleLines = [],
			subtitle,
			buttons = [],
			companyLogos = [],
			className = "",
			companySectionText = "",
			showCompanySection = false,
			companyLogoWrapperClassName = "",
			companyLogoClassName = "",
			variant = "default",
		} = this.props;

		const variants = {
			default: {
				section: `bg-white flex flex-col items-center ${className}`,
				container:
					"w-full max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 rounded-[16px] overflow-hidden",
				heroWrapper:
					"relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[613px]",
				contentWrapper:
					"relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:pl-16 lg:pt-12 inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent",
				title: "text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-[56px] mb-4 sm:mb-6",
				subtitle:
					"text-white text-sm sm:text-base md:text-lg mb-4 sm:mb-7 font-normal max-w-md sm:max-w-xl md:max-w-2xl",
				overlay: "absolute inset-0",
			},
			banner: {
				section: `w-full bg-white pt-8 pb-3 ${className}`,
				container:
					"w-full max-w-[1440px] rounded-[16px] mx-auto px-4 sm:px-6 lg:px-8",
				heroWrapper:
					"relative rounded-2xl overflow-hidden w-full min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[613px] flex items-end mb-8 sm:mb-16 bg-[#222]",
				contentWrapper:
					"relative z-10 flex flex-col justify-end h-full px-6 sm:px-10 md:px-14 pb-8 sm:pb-12 max-w-full sm:max-w-[770px]",
				title: "text-white font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-4 sm:mb-5 leading-tight drop-shadow-lg mt-5",
				subtitle:
					"text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-7 font-normal drop-shadow max-w-full sm:max-w-[770px] opacity-95",
				overlay:
					"absolute inset-0 bg-gradient-to-r from-black/60 to-transparent rounded-2xl",
			},
			split: {
				section: `w-screen bg-white overflow-hidden ${className}`,
				container:
					"w-screen grid grid-cols-1 lg:grid-cols-2 items-stretch min-h-[400px] lg:min-h-0 lg:h-[460px] xl:h-[520px] gap-0",
				heroWrapper: "relative flex order-2 lg:order-1",
				contentWrapper:
					"flex flex-col justify-center bg-blue-700 text-white h-auto md:h-full min-h-0 overflow-hidden px-6 py-8 sm:px-10 sm:py-10",
				title: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-snug mb-4 sm:mb-6",
				subtitle:
					"text-white/90 text-base sm:text-lg mb-5 sm:mb-7 max-w-md",
				overlay: "",
			},
		};

		const active = variants[variant] || variants.default;

		const base = 120;
		const d1 = base + 60;
		const d2 = base + 160;
		const d3 = base + 260;

		return (
			<section className={active.section}>
				<div className={active.container}>
					{variant === "split" ? (
						<>
							{/* Left Content */}
							<AnimateViewAppear
								className={active.contentWrapper}
								effect="fade"
								delay={base}
							>
								<div className="flex items-center gap-3 mb-3">
									<div
										className="h-[1px]"
										style={{
											width: headerLineWidth,
											backgroundColor: headerLineColor,
											opacity: headerLineOpacity,
										}}
									/>
									<span className="font-medium">
										{headerLabel}
									</span>
								</div>

								<AnimateViewAppear delay={d1} translate={12}>
									<h1 className={active.title}>
										{titleLines.map((line, idx) => (
											<React.Fragment key={idx}>
												{line}
												<br />
											</React.Fragment>
										))}
									</h1>
								</AnimateViewAppear>

								{subtitle && (
									<AnimateViewAppear
										delay={d2}
										translate={14}
									>
										<p className={active.subtitle}>
											{subtitle}
										</p>
									</AnimateViewAppear>
								)}

								{buttons?.length > 0 && (
									<AnimateViewAppear
										delay={d3}
										translate={16}
									>
										<div className="flex flex-wrap gap-3 sm:gap-4">
											{buttons.map(
												(
													{
														label,
														variant,
														onClick,
														className: btnClass,
													},
													idx,
												) => (
													<Button
														key={idx}
														variant={variant}
														className={`gap-2 ${btnClass || ""}`}
														onClick={onClick}
													>
														{label}{" "}
														<ArrowRight size={16} />
													</Button>
												),
											)}
										</div>
									</AnimateViewAppear>
								)}
							</AnimateViewAppear>

							{/* Right Image */}
							<div className="relative h-[240px] sm:h-[360px] md:h-[400px] lg:h-full min-h-0 overflow-hidden">
								<img
									src={imageSrc}
									alt={headerLabel || "Hero image"}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</div>
						</>
					) : (
						<div className={active.heroWrapper}>
							{useVideo && videoSrc ? (
								<video
									autoPlay
									muted
									loop
									playsInline
									className="absolute inset-0 w-full h-full object-cover"
									style={{
										filter: `blur(${videoOverlayBlur}px)`,
										opacity: videoOverlayOpacity,
									}}
								>
									<source src={videoSrc} type="video/mp4" />
								</video>
							) : (
								imageSrc && (
									<img
										src={imageSrc}
										alt={headerLabel || "Hero image"}
										className="absolute inset-0 w-full h-full object-cover"
										style={{
											filter: `blur(${videoOverlayBlur}px)`,
											opacity: videoOverlayOpacity,
										}}
									/>
								)
							)}

							{active.overlay && (
								<div className={active.overlay} />
							)}

							<AnimateViewAppear
								className={active.contentWrapper}
								effect="fade"
								delay={base}
							>
								{variant === "default" && (
									<AnimateViewAppear
										delay={base + 40}
										translate={10}
									>
										<div className="flex items-center gap-3 mb-2">
											<div
												className="h-[1px]"
												style={{
													width: headerLineWidth,
													backgroundColor:
														headerLineColor,
													opacity: headerLineOpacity,
												}}
											/>
											<span className="text-white font-medium">
												{headerLabel}
											</span>
										</div>
									</AnimateViewAppear>
								)}

								<AnimateViewAppear delay={d1} translate={12}>
									<h1 className={active.title}>
										{titleLines.map((line, idx) => (
											<React.Fragment key={idx}>
												{line}
												<br />
											</React.Fragment>
										))}
									</h1>
								</AnimateViewAppear>

								{subtitle && (
									<AnimateViewAppear
										delay={d2}
										translate={14}
									>
										<p className={active.subtitle}>
											{subtitle}
										</p>
									</AnimateViewAppear>
								)}

								{buttons?.length > 0 && (
									<AnimateViewAppear
										delay={d3}
										translate={16}
									>
										<div className="flex flex-wrap gap-3 sm:gap-4">
											{buttons.map(
												(
													{
														label,
														variant,
														onClick,
														href,
														className: btnClass,
													},
													idx,
												) =>
													href ? (
														<Link
															key={idx}
															href={href}
														>
															<Button
																variant={
																	variant
																}
																className={`gap-2 ${btnClass || ""}`}
															>
																{label}{" "}
																<ArrowRight
																	size={16}
																/>
															</Button>
														</Link>
													) : (
														<Button
															key={idx}
															variant={variant}
															className={`gap-2 ${btnClass || ""}`}
															onClick={onClick}
														>
															{label}{" "}
															<ArrowRight
																size={16}
															/>
														</Button>
													),
											)}
										</div>
									</AnimateViewAppear>
								)}
							</AnimateViewAppear>
						</div>
					)}
				</div>

				{showCompanySection && companyLogos?.length > 0 && (
					<AnimateViewAppear
						className={`w-full max-w-[1440px] bg-white rounded-b-[16px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5 ${companyLogoWrapperClassName}`}
						effect="fade"
						delay={base + 100}
					>
						{companySectionText && (
							<AnimateViewAppear effect="fade" delay={base + 140}>
								<p className="mb-6 mt-0 text-center text-gray-600 font-medium text-sm sm:text-base tracking-wide">
									{companySectionText}
								</p>
							</AnimateViewAppear>
						)}
						<div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-4 pb-2">
							{companyLogos.map(({ src, alt }, idx) => (
								<AnimateViewAppear
									key={idx}
									effect="fade"
									delay={base + 160 + idx * 80}
									translate={8}
								>
									<img
										src={src}
										alt={alt}
										className={`h-6 sm:h-7 object-contain ${companyLogoClassName}`}
									/>
								</AnimateViewAppear>
							))}
						</div>
					</AnimateViewAppear>
				)}
			</section>
		);
	}
}

export default VideoHeroSection;
