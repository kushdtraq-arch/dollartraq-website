"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface StatItem {
    label: string;
    value: string;
    icon?: string; 
    iconAlt?: string;
}

interface StatsSectionProps {
    title: React.ReactNode;
    stats: StatItem[];
    description?: React.ReactNode;
    className?: string;
}

const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const StatsSection: React.FC<StatsSectionProps> = ({
    title,
    description,
    stats,
    className = "",
}) => {
    return (
        <section className={`w-full bg-transparent py-16 md:py-20 px-4 ${className}`}>
            <div className="max-w-[1140px] mx-auto">

                {/* Header row: title left, description right */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 md:mb-14"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-[32px] sm:text-[38px] md:text-[38px] font-medium tracking-tight leading-[1.15] text-gray-900 max-w-[640px]">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-[15px] md:text-base text-gray-500 leading-relaxed text-left md:text-right max-w-[420px] md:pt-2">
                            {description}
                        </p>
                    )}
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 border border-dashed border-gray-300 rounded-2xl overflow-hidden"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {stats.map((stat, index) => {
                        const rightBorderMobile = index % 2 === 0;
                        const bottomBorderMobile = index < 2;
                        const rightBorderDesktop = index < stats.length - 1;

                        return (
                            <motion.div
                                key={`${stat.label}_${index}`}
                                variants={cardVariants}
                                className={`flex flex-col items-center justify-center text-center px-6 py-10 md:py-14 border-dashed border-gray-300
                                    ${rightBorderMobile ? "border-r" : "border-r-0"}
                                    ${bottomBorderMobile ? "border-b" : "border-b-0"}
                                    ${rightBorderDesktop ? "md:border-r" : "md:border-r-0"}
                                    md:border-b-0
                                `}
                            >
                                <span className="text-[13px] md:text-[15px] text-gray-500 font-normal mb-6 leading-snug max-w-[180px]">
                                    {stat.label}
                                </span>

                                {stat.icon && (
                                    <div className="relative w-6 h-6 md:w-7 md:h-7 mb-3">
                                        <Image
                                            src={stat.icon}
                                            alt={stat.iconAlt ?? ""}
                                            fill
                                            className="object-contain opacity-70"
                                        />
                                    </div>
                                )}

                                <span className="text-3xl md:text-[34px] font-semibold text-gray-900 tracking-tight">
                                    {stat.value}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;