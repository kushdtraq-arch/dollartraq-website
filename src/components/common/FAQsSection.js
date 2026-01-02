"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";


const FAQSection = ({ title, subtitle, faqItems }) => {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleIndex = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="bg-[#fdfdf8] py-16 px-4">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-3xl font-semibold mb-3">{title}</h2>
				<p className="text-gray-600 max-w-xl mx-auto text-[15px]">{subtitle}</p>
			</div>

			<div className="mt-10 max-w-3xl mx-auto space-y-4">
				{faqItems.map((faq, index) => (
					<div
						key={index}
						className="bg-gray-100 rounded-lg overflow-hidden transition-all"
					>
						<button
							onClick={() => toggleIndex(index)}
							className="w-full text-left flex justify-between items-center px-6 py-5 text-[16px] font-medium text-gray-800 hover:bg-gray-200 transition"
						>
							<span>{faq.question}</span>
							{openIndex === index ? (
								<ChevronDown size={20} className="text-gray-500" />
							) : (
								<ChevronRight size={20} className="text-gray-500" />
							)}
						</button>

						{openIndex === index && (
							<div className="px-6 pb-5 text-[15px] text-gray-700">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQSection;
