"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionIntroProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    backgroundColor?: string;
    textColor?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const SIZE_PADDING: Record<NonNullable<SectionIntroProps["size"]>, string> = {
    sm: "py-16 sm:py-20",
    md: "py-24 sm:py-28 md:py-32",
    lg: "py-32 sm:py-40 md:py-48",
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const SectionIntro: React.FC<SectionIntroProps> = ({
    title = "How Dollar Traq compares — honestly",
    description = "The incumbents are good at what they do. Here's where they stop, where we start, and the one thing none of them can offer: vetting, verification, and the payment rail in a single system.",
    backgroundColor = "#6C70E0",
    textColor = "text-white",
    size = "md",
    className = "",
}) => {
    return (
        <section
            className={`w-full ${SIZE_PADDING[size]} px-6 sm:px-10 md:px-12 lg:px-16 font-sans ${className}`}
            style={{ backgroundColor }}
        >
            <motion.div
                className="max-w-[900px] mx-auto flex flex-col items-center text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.h2
                    variants={itemVariants}
                    className={`text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-normal tracking-tight leading-[1.15] ${textColor}`}
                >
                    {title}
                </motion.h2>

                {description && (
                    <motion.p
                        variants={itemVariants}
                        className={`mt-5 sm:mt-6 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[680px] opacity-80 ${textColor}`}
                    >
                        {description}
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
};

export default SectionIntro;