"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
    question: string;
    answer: string;
}

interface FaqAccordionProps {
    sectionTitle?: string;
    faqs: FaqItem[];
    defaultOpenIndex?: number | null;
    className?: string;
}

const titleVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const rowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
    sectionTitle = "The questions brokers ask first.",
    faqs = [],
    defaultOpenIndex = 0,
    className = "",
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const toggleIndex = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className={`w-full bg-[#FAF9F5] px-6 py-16 md:py-24 ${className}`}>
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20">
                {/* Sticky left title */}
                <div className="md:w-[340px] shrink-0">
                    <div className="md:sticky md:top-24">
                        <motion.h2
                            variants={titleVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            className="text-3xl md:text-[40px] font-normal text-gray-900 tracking-tight leading-[1.15]"
                        >
                            {sectionTitle}
                        </motion.h2>
                    </div>
                </div>

                {/* Scrollable right column */}
                <motion.div
                    className="flex-1 min-w-0 border-t border-gray-200"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={`${faq.question}_${index}`}
                                variants={rowVariants}
                                className="border-b border-gray-200"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleIndex(index)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-6 py-8 text-left"
                                >
                                    <span className="text-[18px] md:text-[19px] font-semibold text-gray-900 tracking-tight">
                                        {faq.question}
                                    </span>
                                    <span className="shrink-0 w-8 h-8 rounded-full border border-gray-900 flex items-center justify-center text-gray-900">
                                        <motion.span
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className="flex items-center justify-center"
                                        >
                                            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                        </motion.span>
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed max-w-[720px] pb-8">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default FaqAccordion;