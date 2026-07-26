"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface TabItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    content: {
        title: string;
        description: string;
        bullets: string[];
        imageSrc: string;
        imageAlt: string;
    };
}

export interface TabbedFeatureSectionProps {
    heading: string;
    subheading: string;
    tabs: TabItem[];
    className?: string;
}

const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const tabRowVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.3,
        },
    },
};

const tabButtonVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const panelVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
    },
};

const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
    exit: {
        opacity: 0,
        y: -12,
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export default function TabbedFeatureSection({
    heading,
    subheading,
    tabs,
    className = "",
}: TabbedFeatureSectionProps) {
    const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id || "");

    const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

    if (!currentTab) return null;

    return (
        <section className={`w-full py-[64px] md:py-[80px] ${className}`}>
            <div className="mx-auto max-w-[1200px] px-[24px] lg:px-[40px]">

                {/* Header Block - centered */}
                <motion.div
                    className="max-w-[720px] mx-auto mb-[36px] text-center"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-[34px] leading-[42px] font-medium tracking-[-0.02em] text-[#111827]">
                        {heading}
                    </h2>
                    <p className="mt-[14px] text-[15px] leading-[24px] text-gray-500 font-normal">
                        {subheading}
                    </p>
                </motion.div>

                {/* Tab Navigation Menu Row - centered, pill-shaped */}
                <motion.div
                    className="flex flex-wrap justify-center gap-[10px] mb-[32px]"
                    variants={tabRowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {tabs.map((tab) => {
                        const isActive = tab.id === activeTabId;
                        return (
                            <motion.button
                                key={tab.id}
                                type="button"
                                variants={tabButtonVariants}
                                onClick={() => setActiveTabId(tab.id)}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className={`inline-flex items-center gap-[8px] rounded-full px-[20px] py-[12px] text-[14px] font-medium transition-colors duration-200 ${
                                    isActive
                                        ? "bg-[#3B82F6] text-white shadow-sm"
                                        : "bg-[#F3F4F1] text-gray-700 hover:bg-gray-200/80"
                                }`}
                            >
                                {tab.icon && (
                                    <span className={`w-[18px] h-[18px] flex items-center justify-center rounded-md ${
                                        isActive ? "text-white" : "text-gray-500"
                                    }`}>
                                        {tab.icon}
                                    </span>
                                )}
                                <span>{tab.label}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Unified Flat Content Canvas Panel matching the second layout */}
                <motion.div
                    className="bg-white p-[16px] md:p-[16px] rounded-[16px] shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 overflow-hidden"
                    variants={panelVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTab.id}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="grid grid-cols-1 items-center gap-[40px] md:grid-cols-12 md:gap-[56px]"
                        >

                            {/* Visual Column Left (No outer card nesting frame) */}
                            <div className="md:col-span-6 w-full flex justify-center">
                                <div className="relative aspect-[460/340] w-full max-w-[480px] overflow-hidden rounded-[12px]">
                                    <Image
                                        src={currentTab.content.imageSrc}
                                        alt={currentTab.content.imageAlt}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Dynamic Swapped Text Content Column Right */}
                            <div className="md:col-span-6 w-full max-w-[480px]">
                                <h3 className="text-[26px] leading-[34px] font-medium tracking-[-0.01em] text-[#111827]">
                                    {currentTab.content.title}
                                </h3>
                                <p className="mt-[16px] text-[14px] leading-[24px] text-gray-500 font-normal">
                                    {currentTab.content.description}
                                </p>

                                {currentTab.content.bullets.length > 0 && (
                                    <ul className="mt-[28px] space-y-[16px]">
                                        {currentTab.content.bullets.map((bullet, idx) => {
                                            const isBoldPrefix = bullet.includes(":");
                                            const prefix = isBoldPrefix ? bullet.split(":")[0] + ":" : "";
                                            const mainText = isBoldPrefix ? bullet.split(":").slice(1).join(":") : bullet;

                                            return (
                                                <li key={idx} className="flex items-start gap-[10px] text-[14px] leading-[22px] text-gray-500">
                                                    <span className="text-gray-400 mt-[1px] select-none text-[16px]">•</span>
                                                    <span>
                                                        {isBoldPrefix ? (
                                                            <>
                                                                <strong className="text-gray-900 font-medium">{prefix}</strong>
                                                                {mainText}
                                                            </>
                                                        ) : (
                                                            bullet
                                                        )}
                                                    </span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}