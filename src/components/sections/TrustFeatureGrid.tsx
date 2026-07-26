"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TrustFeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface TrustFeatureGridProps {
    sectionTitle?: string;
    sectionDescription?: string;
    ctaLabel?: string;
    ctaHref?: string;
    features: TrustFeatureItem[];
    className?: string;
}

const headerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const headerItemVariants = {
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
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const TrustFeatureGrid: React.FC<TrustFeatureGridProps> = ({
    sectionTitle = "Built to be trusted with money and data.",
    sectionDescription = "Dollar Traq handles carrier identity, documents, and payouts — so trust and data security aren't an afterthought, they're the foundation.",
    ctaLabel = "Security & trust",
    ctaHref = "/security",
    features = [],
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
                <motion.div variants={headerItemVariants}>
                    <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 tracking-tight leading-[1.15] max-w-[700px] mb-6">
                        {sectionTitle}
                    </h2>
                    <p className="text-[15px] text-gray-500 leading-relaxed max-w-[640px]">
                        {sectionDescription}
                    </p>
                </motion.div>
                {ctaLabel && (
                    <motion.a
                        variants={headerItemVariants}
                        href={ctaHref}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white text-[15px] font-medium px-6 py-3.5 rounded-full whitespace-nowrap"
                    >
                        {ctaLabel}
                        <span aria-hidden="true">→</span>
                    </motion.a>
                )}
            </motion.div>

            <div className="max-w-[1180px] mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 rounded-[24px] border border-gray-200 divide-y divide-gray-200 md:divide-y-0"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {features.map((feature, index) => {
                        const isLastCol = (index + 1) % 3 === 0;
                        const isTopRow = index < 3;
                        return (
                            <motion.div
                                key={`${feature.title}_${index}`}
                                variants={cardVariants}
                                className={[
                                    "p-8",
                                    !isLastCol ? "md:border-r md:border-gray-200" : "",
                                    !isTopRow ? "md:border-t md:border-gray-200" : "",
                                ].join(" ")}
                            >
                                <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-emerald-600 mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-[19px] font-medium text-gray-900 mb-3 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed font-normal">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustFeatureGrid;