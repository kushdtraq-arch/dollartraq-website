"use client";

import React, { Component } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false },
);

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
				{ page: "about", label: "About", link: "/about" },
				{
					page: "how-it-works",
					label: "How It Works",
					link: "/how-it-works",
				},
				{ page: "solutions", label: "Solutions", link: "/manufacture" },
				{ page: "features", label: "Features", link: "/features" },
				{ page: "resources", label: "Resources", link: "/resources" },
			],
			mobileMenuOpen: false,
			showSolutionsMenu: false,
			showMobileSolutions: false,
		};
		this.timeout = null;
	}

	toggleMobileMenu = () => {
		this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen });
	};

	handleMouseEnter = () => {
		clearTimeout(this.timeout);
		this.setState({ showSolutionsMenu: true });
	};

	handleMouseLeave = () => {
		this.timeout = setTimeout(() => {
			this.setState({ showSolutionsMenu: false });
		}, 150);
	};

	toggleMobileSolutions = () => {
		this.setState({ showMobileSolutions: !this.state.showMobileSolutions });
	};

	render() {
		const { showSolutionsMenu, mobileMenuOpen, showMobileSolutions } =
			this.state;

		return (
			<header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
				<div className="max-w-[1440px] w-full mx-auto flex items-center justify-between h-[80px] px-4 md:px-8 relative">
					<AnimateViewAppear delay={100} duration={300} y={10}>
						<Link href="/">
							<img
								src="/dollar-traq-logo-main.png"
								alt="DollarTraq"
								className="w-[130px] md:w-[200px]"
							/>
						</Link>
					</AnimateViewAppear>

					<nav className="hidden xl:flex gap-6 xl:gap-10 text-[14px] font-medium text-gray-800 relative">
						{this.state.links.map((_link, index) => (
							<AnimateViewAppear
								key={`nav_${index}`}
								delay={150 * (index + 1)}
								duration={150}
								y={10}
							>
								{_link.label === "Solutions" ? (
									<div
										className="relative"
										onMouseEnter={this.handleMouseEnter}
										onMouseLeave={this.handleMouseLeave}
									>
										<button
											className={`hover:text-blue-700 transition ${
												this.props.active_page ===
												_link.page
													? "text-blue-700"
													: ""
											}`}
										>
											{_link.label}
										</button>
									</div>
								) : (
									<Link
										href={_link.link}
										className={`hover:text-blue-700 ${
											this.props.active_page ===
											_link.page
												? "text-blue-700"
												: ""
										}`}
									>
										{_link.label}
									</Link>
								)}
							</AnimateViewAppear>
						))}
					</nav>

					<div className="hidden xl:flex gap-2 xl:gap-3 items-center">
						<Link
							href={process.env.NEXT_PUBLIC_APPLICATION_URL}
							target="_blank"
							className="text-[14px] font-medium text-gray-800 px-2 py-1 rounded hover:bg-gray-50 transition"
						>
							Login
						</Link>
						<Link
							href="/sign-up"
							className="text-[14px] font-medium text-gray-800 px-2 py-1 rounded hover:bg-gray-50 transition"
						>
							Sign Up
						</Link>
						<Link href="/contact">
							<button className="bg-green-500 hover:bg-green-600 text-white rounded px-4 lg:px-6 py-2 font-semibold transition">
								Contact
							</button>
						</Link>
						<Link href="/demo">
							<button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 lg:px-6 py-2 font-semibold transition">
								Demo
							</button>
						</Link>
					</div>

					<div className="xl:hidden flex items-center">
						<button onClick={this.toggleMobileMenu}>
							{mobileMenuOpen ? (
								<X size={24} />
							) : (
								<Menu size={24} />
							)}
						</button>
					</div>
				</div>

				{showSolutionsMenu && (
					<div
						className="absolute top-[80px] left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-100 rounded-xl w-[95%] md:w-[800px] lg:w-[950px] z-50 overflow-hidden transition-all duration-200 ease-in-out hidden xl:flex flex-col xl:flex-row"
						onMouseEnter={this.handleMouseEnter}
						onMouseLeave={this.handleMouseLeave}
					>
						<div className="w-full md:w-1/2 relative h-[200px] md:h-auto">
							<img
								src="/images/3pl.webp"
								alt="Solutions"
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
							<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
								<h3 className="text-lg md:text-2xl font-semibold">
									Empower Your Logistics
								</h3>
								<p className="text-xs md:text-sm text-gray-100">
									Choose your solution to optimize every
									shipment.
								</p>
							</div>
						</div>

						<div className="w-full md:w-1/2 bg-white p-5 md:p-8 grid gap-4">
							<Link
								href="/services/shippers"
								className="flex flex-col hover:bg-gray-50 p-4 rounded-lg transition border border-transparent hover:border-gray-200"
							>
								<h4 className="font-semibold text-gray-900 text-base md:text-lg">
									Shippers
								</h4>
								<p className="text-sm text-gray-600 mt-1 leading-snug">
									Optimize freight operations with real-time
									visibility and data-driven insights.
								</p>
							</Link>

							<Link
								href="/services/3pls-freight-brokers"
								className="flex flex-col hover:bg-gray-50 p-4 rounded-lg transition border border-transparent hover:border-gray-200"
							>
								<h4 className="font-semibold text-gray-900 text-base md:text-lg">
									3PLs
								</h4>
								<p className="text-sm text-gray-600 mt-1 leading-snug">
									Simplify client management, automation, and
									logistics coordination.
								</p>
							</Link>

							<Link
								href="/services/carriers"
								className="flex flex-col hover:bg-gray-50 p-4 rounded-lg transition border border-transparent hover:border-gray-200"
							>
								<h4 className="font-semibold text-gray-900 text-base md:text-lg">
									Carriers
								</h4>
								<p className="text-sm text-gray-600 mt-1 leading-snug">
									Boost efficiency, minimize empty miles, and
									enhance customer satisfaction.
								</p>
							</Link>
						</div>
					</div>
				)}

				{mobileMenuOpen && (
					<div className="xl:hidden bg-white w-full border-t border-gray-100 shadow-md">
						<nav className="flex flex-col gap-2 p-4 text-gray-800 font-medium">
							{this.state.links.map((_link, index) => (
								<div key={`mobile_${index}`}>
									{_link.label === "Solutions" ? (
										<div>
											<button
												onClick={
													this.toggleMobileSolutions
												}
												className={`w-full flex justify-between items-center py-2 px-2 rounded hover:bg-gray-50 ${
													this.props.active_page ===
													_link.page
														? "text-blue-700"
														: ""
												}`}
											>
												<span>{_link.label}</span>
												<ChevronDown
													size={18}
													className={`transition-transform ${
														showMobileSolutions
															? "rotate-180"
															: ""
													}`}
												/>
											</button>

											{showMobileSolutions && (
												<div className="pl-4 mt-2 flex flex-col gap-2">
													<Link
														href="/services/shippers"
														className="py-2 px-2 rounded hover:bg-gray-50 text-sm text-gray-700"
														onClick={
															this
																.toggleMobileMenu
														}
													>
														Shippers
													</Link>
													<Link
														href="/services/3pls-freight-brokers"
														className="py-2 px-2 rounded hover:bg-gray-50 text-sm text-gray-700"
														onClick={
															this
																.toggleMobileMenu
														}
													>
														3PLs
													</Link>
													<Link
														href="/services/carriers"
														className="py-2 px-2 rounded hover:bg-gray-50 text-sm text-gray-700"
														onClick={
															this
																.toggleMobileMenu
														}
													>
														Carriers
													</Link>
												</div>
											)}
										</div>
									) : (
										<Link
											href={_link.link}
											className={`py-2 px-2 rounded hover:bg-gray-50 block ${
												this.props.active_page ===
												_link.page
													? "text-blue-700"
													: ""
											}`}
											onClick={this.toggleMobileMenu}
										>
											{_link.label}
										</Link>
									)}
								</div>
							))}

							<div className="flex flex-col gap-2 mt-4">
								<Link
									href={
										process.env.NEXT_PUBLIC_APPLICATION_URL
									}
									target="_blank"
									className="py-2 px-2 rounded hover:bg-gray-50 text-gray-800"
									onClick={this.toggleMobileMenu}
								>
									Login
								</Link>

								<Link
									href="/contact"
									onClick={this.toggleMobileMenu}
								>
									<button className="bg-green-500 hover:bg-green-600 text-white rounded w-full py-2 font-semibold">
										Contact
									</button>
								</Link>

								<Link
									href="/demo"
									onClick={this.toggleMobileMenu}
								>
									<button className="bg-blue-600 hover:bg-blue-700 text-white rounded w-full py-2 font-semibold mt-1">
										Demo
									</button>
								</Link>
							</div>
						</nav>
					</div>
				)}
			</header>
		);
	}
}

export default Header;
