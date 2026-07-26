"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

export interface ValueCardItem {

    icon: string | StaticImageData;
    title: string;
    description: string;
}

interface ValueGridProps {
    sectionTitle?: string;
    sectionDescription?: string;
    cards: ValueCardItem[];
    className?: string;
}

const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const ValueGrid: React.FC<ValueGridProps> = ({
    sectionTitle = "Most tools rent intelligence. We manufacture it",
    sectionDescription = "The new wave of freight AI rents its truth from data vendors and resells it. Dollar Traq owns the three layers trust is actually made of",
    cards = [],
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#FAF9F5] px-6 py-16 md:py-24 ${className}`}>
            <motion.div
                className="max-w-[1180px] mx-auto mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 tracking-tight leading-[1.15] max-w-[600px]">
                    {sectionTitle}
                </h2>
                <p className="text-[15px] text-gray-700 leading-relaxed max-w-[420px] md:pt-2">
                    {sectionDescription}
                </p>
            </motion.div>

            <div className="max-w-[1180px] mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {cards.map((card, index) => {
                        return (
                            <motion.div
                                key={`${card.title}_${index}`}
                                variants={cardVariants}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-[20px] border border-gray-100 p-8 flex flex-col"
                            >
                                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-6 overflow-hidden">
                                    <Image
                                        src={card.icon}
                                        alt={`${card.title} icon`}
                                        width={40}
                                        height={40}
                                        className="w-40 h-40 object-contain"
                                    />
                                </div>
                                <h3 className="text-[19px] font-medium text-gray-900 mb-3 tracking-tight">
                                    {card.title}
                                </h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ValueGrid;