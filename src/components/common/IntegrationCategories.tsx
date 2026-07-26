"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { Layers, type LucideIcon } from "lucide-react";

export interface IntegrationItem {
    name: string;
    description: string;
}

export interface IntegrationCategory {
    title: string;
    icon?: string | StaticImageData | LucideIcon;
    items: IntegrationItem[];
}

interface IntegrationCategoriesProps {
    sectionTitle?: string;
    sectionDescription?: string;
    categories: IntegrationCategory[];
    className?: string;
    columns?: 2 | 3;
}

const LG_COLUMNS_CLASS: Record<2 | 3, string> = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
};

function isLucideComponent(
    icon: unknown
): icon is LucideIcon {
    return typeof icon === "function";
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
            staggerChildren: 0.2,
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

export const IntegrationCategories: React.FC<IntegrationCategoriesProps> = ({
    sectionTitle = "Everything the desk already touches",
    sectionDescription = "Some integrations are live today, some are in certification, and some are bring-your-own-license. We label each one honestly — no logos we haven't earned",
    categories = [],
    className = "",
    columns = 3,
}) => {
    return (
        <section className={`w-full bg-[#FAF9F5] px-6 py-16 md:py-24 ${className}`}>
            {/* Header row: title left, description right */}
            <motion.div
                className="max-w-[1180px] mx-auto mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-3xl md:text-[36px] font-normal text-gray-900 tracking-tight leading-[1.15] max-w-[460px]">
                    {sectionTitle}
                </h2>
                <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed max-w-[580px] pt-1">
                    {sectionDescription}
                </p>
            </motion.div>

            {/* Category Grid */}
            <div className="max-w-[1180px] mx-auto">
                <motion.div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${LG_COLUMNS_CLASS[columns]} gap-6 md:gap-8`}
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {categories.map((category, index) => {
                        const icon = category.icon ?? Layers;
                        const isImage =
                            !isLucideComponent(icon) &&
                            (typeof icon === "string" || typeof icon === "object");

                        return (
                            <motion.div
                                key={`${category.title}_${index}`}
                                variants={cardVariants}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#F3F3F399] border-l-1 border-[#0050CB]/70 p-8 md:p-9 flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-white shadow-sm overflow-hidden shrink-0">
                                        {isImage ? (
                                            <Image
                                                src={icon as string | StaticImageData}
                                                alt={`${category.title} icon`}
                                                width={20}
                                                height={20}
                                                className="w-5 h-5 object-contain"
                                            />
                                        ) : (
                                            (() => {
                                                const LucideIconComp = icon as LucideIcon;
                                                return (
                                                    <LucideIconComp
                                                        size={20}
                                                        strokeWidth={1.75}
                                                        className="text-gray-900"
                                                    />
                                                );
                                            })()
                                        )}
                                    </div>
                                    <h4 className="text-[22px] md:text-[24px] font-normal text-gray-950 tracking-tight leading-snug">
                                        {category.title}
                                    </h4>
                                </div>

                                <div className="flex flex-col">
                                    {category.items.map((item, itemIndex) => (
                                        <div
                                            key={`${item.name}_${itemIndex}`}
                                            className={
                                                itemIndex > 0
                                                    ? "pt-5 mt-5 border-t border-gray-300/60"
                                                    : ""
                                            }
                                        >
                                            <p className="text-[14px] font-semibold text-gray-900 mb-1">
                                                {item.name}
                                            </p>
                                            <p className="text-[14px] text-gray-600 leading-relaxed max-w-[290px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default IntegrationCategories;