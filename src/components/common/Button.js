"use client";

import React, { Component } from "react";
import Link from "next/link";

export default class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {
			children,
			variant = "primary",
			className = "",
			size = "md",
			disabled = false,
			loading = false,
			icon,
			href,
			rounded = false,
			...rest
		} = this.props;

		const base =
			"flex items-center justify-center font-medium transition duration-200 whitespace-nowrap";

		const sizeClasses = {
			xs: "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-xs",
			sm: "px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-sm",
			md: "px-4 py-2 text-base sm:px-5 sm:py-3 sm:text-base",
			lg: "px-5 py-3 text-lg sm:px-6 sm:py-4 sm:text-lg",
		};

		const variants = {
			primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
			secondary:
				"bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
			green: "bg-green-500 text-white hover:bg-green-600 shadow",
		};

		const variantClass = variants[variant] || variants.primary;

		const roundedClass =
			rounded === true
				? "rounded-full"
				: rounded
				? `rounded-${rounded}`
				: "rounded-md";

		const iconClass = icon ? "flex items-center justify-center" : "";

		const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

		const combinedClasses = `${base} ${sizeClasses[size]} ${variantClass} ${roundedClass} ${iconClass} ${disabledClass} ${className}`;

		const content = (
			<>
				{icon && <span className="mr-2">{icon}</span>}
				{children}
				{loading && <span className="ml-2">Loading...</span>}
			</>
		);

		if (href) {
			return (
				<Link href={href} className={combinedClasses} {...rest}>
					{content}
				</Link>
			);
		}

		return (
			<button className={combinedClasses} disabled={disabled} {...rest}>
				{content}
			</button>
		);
	}
}
