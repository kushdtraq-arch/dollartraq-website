"use client";

import React from "react";
import { motion } from "framer-motion";

export interface FeatureItem {
    id?: string | number;
    text: string;
    icon?: React.ReactNode;
}

export interface CtaButton {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    target?: string;
}

export interface FeatureSectionProps {
    eyebrow?: string;
    title: string;
    description?: string;
    features?: FeatureItem[];
    ctas?: CtaButton[];
    visual?: React.ReactNode;
    imagePosition?: "left" | "right";
    mobileImageOrder?: "first" | "last";
    id?: string;
    className?: string;
}

const textVariants = (fromLeft: boolean) => ({
    hidden: { opacity: 0, x: fromLeft ? -40 : 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] as const },
    },
});

const visualVariants = (fromLeft: boolean) => ({
    hidden: { opacity: 0, x: fromLeft ? 40 : -40, scale: 0.96 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
});

const listVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.6,
        },
    },
};

const listItemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

function DefaultCheckIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-[18px] w-[18px] flex-shrink-0"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" className="fill-[#22C55E]" />
            <path
                d="M8.5 12.5l2.5 2.5 5-5.5"
                stroke="white"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CtaButtonEl({ cta }: { cta: CtaButton }) {
    const base =
        "inline-flex items-center justify-center rounded-lg px-[26px] py-[14px] text-[14px] leading-[20px] font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
    const variants: Record<NonNullable<CtaButton["variant"]>, string> = {
        primary:
            "bg-[#3B82F6] text-white hover:bg-blue-600 focus-visible:outline-blue-500 shadow-[0_2px_8px_rgba(59,130,246,0.2)]",
        secondary:
            "bg-white text-gray-900 hover:bg-gray-50 focus-visible:outline-gray-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
    };
    const classes = `${base} ${variants[cta.variant ?? "secondary"]}`;

    if (cta.href) {
        return (
            <motion.a
                href={cta.href}
                target={cta.target}
                className={classes}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
            >
                {cta.label}
            </motion.a>
        );
    }
    return (
        <motion.button
            type="button"
            onClick={cta.onClick}
            className={classes}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
        >
            {cta.label}
        </motion.button>
    );
}

export default function FeatureSection({
    eyebrow,
    title,
    description,
    features = [],
    ctas = [],
    visual,
    imagePosition = "right",
    mobileImageOrder = "first",
    id,
    className = "",
}: FeatureSectionProps) {
    const visualOnLeftDesktop = imagePosition === "left";

    const textOrderClass = visualOnLeftDesktop ? "md:order-2" : "md:order-1";
    const visualOrderClass = visualOnLeftDesktop ? "md:order-1" : "md:order-2";
    const textMobileOrder = mobileImageOrder === "first" ? "order-2" : "order-1";
    const visualMobileOrder = mobileImageOrder === "first" ? "order-1" : "order-2";

    const textEnter = textVariants(visualOnLeftDesktop);
    const visualEnter = visualVariants(visualOnLeftDesktop);

    const visualJustifyClass = visualOnLeftDesktop
        ? "justify-center md:justify-start"
        : "justify-center md:justify-end";

    return (
        <section
            id={id}
            className={`w-full py-[64px] md:py-[80px] ${className}`}
        >
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-[48px] px-[24px] md:grid-cols-2 md:gap-[80px] lg:px-[40px]">

                {/* Text / content column */}
                <motion.div
                    className={`${textMobileOrder} ${textOrderClass} max-w-[490px] w-full complex-text-layout`}
                    variants={textEnter}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {eyebrow && (
                        <p className="mb-[12px] text-[14px] leading-[20px] font-semibold uppercase tracking-wide text-blue-600">
                            {eyebrow}
                        </p>
                    )}
                    <h2 className="text-[38px] leading-[46px] font-medium tracking-[-0.02em] text-[#111827]">
                        {title}
                    </h2>
                    {description && (
                        <p className="mt-[20px] text-[15px] leading-[24px] text-gray-500 font-normal">
                            {description}
                        </p>
                    )}

                    {features.length > 0 && (
                        <motion.ul
                            className="mt-[32px] space-y-[20px]"
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            {features.map((feature, i) => (
                                <motion.li
                                    key={feature.id ?? i}
                                    variants={listItemVariants}
                                    className="flex items-start gap-[14px]"
                                >
                                    <span className="mt-[3px] flex-shrink-0">
                                        {feature.icon ?? <DefaultCheckIcon />}
                                    </span>
                                    <span className="text-[15px] leading-[24px] text-gray-400 font-normal">
                                        {feature.text}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}

                    {ctas.length > 0 && (
                        <div className="mt-[36px] flex flex-wrap gap-[12px]">
                            {ctas.map((cta, i) => (
                                <CtaButtonEl key={i} cta={cta} />
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Visual column — Features the clean white card presentation block */}
                {visual && (
                    <motion.div
                        className={`${visualMobileOrder} ${visualOrderClass} w-full flex ${visualJustifyClass}`}
                        variants={visualEnter}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <div className="bg-white p-[10px] rounded-[24px] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-white w-full max-w-[460px]">
                            <div className="overflow-hidden rounded-[16px] w-full h-full bg-slate-50">
                                {visual}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}