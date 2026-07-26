"use client";

import React from "react";
import { motion } from "framer-motion";

export interface ScenarioItem {
    title: string;
    description: string;
}

interface ScenarioGridProps {
    sectionTitle?: string;
    sectionDescription?: string;
    scenarios: ScenarioItem[];
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

export const ScenarioGrid: React.FC<ScenarioGridProps> = ({
    sectionTitle = "How it plays out on a real desk",
    sectionDescription = "Three scenarios straight from the product — the kind of day the agents are built for",
    scenarios = [],
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#FAF9F5] px-6 py-16 md:py-24 ${className}`}>
            <motion.div
                className="max-w-[1180px] mx-auto mb-12"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 tracking-tight leading-[1.15] max-w-[700px] mb-6">
                    {sectionTitle}
                </h2>
                <p className="text-[15px] text-gray-700 leading-relaxed max-w-[720px]">
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
                    {scenarios.map((scenario, index) => (
                        <motion.div
                            key={`${scenario.title}_${index}`}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-[24px] border border-gray-200 p-8 flex flex-col"
                        >
                            <h3 className="text-[17px] font-medium text-blue-600 mb-4 tracking-tight">
                                {scenario.title}
                            </h3>
                            <p className="text-[15px] text-gray-500 leading-relaxed font-normal">
                                {scenario.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ScenarioGrid;