"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface AppShowcaseFeature {
    text: string;
}

interface AppShowcaseSectionProps {
    title: React.ReactNode;
    description: string;
    features: AppShowcaseFeature[];
    imageSrc: string;
    imageAlt?: string;
    appStoreHref?: string;
    googlePlayHref?: string;
    appStoreIconSrc?: string;
    googlePlayIconSrc?: string;
    backgroundColor?: string;
    imagePosition?: "left" | "right";
    className?: string;
}

const textVariants = (fromLeft: boolean) => ({
    hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
    },
});

const visualVariants = (fromLeft: boolean) => ({
    hidden: { opacity: 0, x: fromLeft ? 40 : -40, scale: 0.95 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
});

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.5,
        },
    },
};

const listItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const AppShowcaseSection: React.FC<AppShowcaseSectionProps> = ({
    title,
    description,
    features = [],
    imageSrc,
    imageAlt = "App preview",
    appStoreHref = "#",
    googlePlayHref = "#",
    appStoreIconSrc = "/images/app-store-badge.png",
    googlePlayIconSrc = "/images/google-play-badge.png",
    backgroundColor = "bg-blue-600",
    imagePosition = "right",
    className = "",
}) => {

    const textFromLeft = imagePosition === "right";
    const visualFromLeft = !textFromLeft;

    const textBlock = (
        <motion.div
            className="flex-1 max-w-xl"
            variants={textVariants(textFromLeft)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 tracking-tight leading-[1.15] mb-6">
                {title}
            </h2>
            <p className="text-[16px] text-gray-700 leading-relaxed mb-8">
                {description}
            </p>

            {features.length > 0 && (
                <motion.ul
                    className="space-y-4 mb-10"
                    variants={listVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {features.map((feature, index) => (
                        <motion.li
                            key={`${feature.text}_${index}`}
                            variants={listItemVariants}
                            className="flex items-start gap-3 text-[16px] text-gray-900"
                        >
                            <span className="text-gray-900 font-medium mt-[2px]">✓</span>
                            <span>{feature.text}</span>
                        </motion.li>
                    ))}
                </motion.ul>
            )}

            <div className="flex flex-wrap items-center gap-4">
                <motion.a
                    href={appStoreHref}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-5 py-3 text-[15px] font-medium text-gray-900 shadow-sm hover:shadow transition-shadow"
                >
                    <Image src={appStoreIconSrc} alt="App Store" width={82} height={82} className="shrink-0" />

                </motion.a>
                <motion.a
                    href={googlePlayHref}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-2.5 bg-white border border-gray-200 rounded-full px-5 py-3 text-[15px] font-medium text-gray-900 shadow-sm hover:shadow transition-shadow"
                >
                    <Image src={googlePlayIconSrc} alt="Google Play" width={82} height={82} className="shrink-0" />

                </motion.a>
            </div>
        </motion.div>
    );

    const visualBlock = (
        <motion.div
            className="flex-1 w-full flex justify-center"
            variants={visualVariants(visualFromLeft)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div
                className={`relative w-full max-w-[520px] aspect-[900/730] rounded-[32px] ${backgroundColor} overflow-hidden`}
            >
               
                <div className="absolute left-1/2 -translate-x-1/2 top-[8%] -bottom-[48%] w-[74%]">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </motion.div>
    );

    return (
        <section className={`w-full bg-[#FAF9F5] px-6 py-16 md:py-24 ${className}`}>
            <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
                {imagePosition === "right" ? (
                    <>
                        {textBlock}
                        {visualBlock}
                    </>
                ) : (
                    <>
                        {visualBlock}
                        {textBlock}
                    </>
                )}
            </div>
        </section>
    );
};

export default AppShowcaseSection;