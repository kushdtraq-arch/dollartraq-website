"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
	() => import("@/components/animation/AnimateViewAppear"),
	{ ssr: false }
);

export default function Accordion({
	title,
	children,
	defaultOpen = false,
	isOpen: controlledIsOpen,
	onToggle,
}) {
	const [internalOpen, setInternalOpen] = useState(defaultOpen);

	const isOpen =
		controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

	const toggle = () => {
		if (onToggle) {
			onToggle(!isOpen);
		} else {
			setInternalOpen(!isOpen);
		}
	};

	return (
		<div className="border-b">
			<button
				onClick={toggle}
				className="flex items-center gap-3 w-full py-4 text-left font-semibold text-lg"
			>
				{isOpen ? (
					<Minus className="w-5 h-5 text-sky-500 flex-shrink-0" />
				) : (
					<Plus className="w-5 h-5 text-sky-500 flex-shrink-0" />
				)}
				<span>{title}</span>
			</button>

			{isOpen && (
				<AnimateViewAppear delay={300}>
					<div className="pl-8 pb-4 text-gray-600">{children}</div>
				</AnimateViewAppear>
			)}
		</div>
	);
}
