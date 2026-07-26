"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CtaButton {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
}

interface CtaBannerSectionProps {
    title: React.ReactNode;
    description?: string;
    backgroundImageSrc: string;
    buttons?: CtaButton[];
    overlayClassName?: string;
    className?: string;
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({
    title,
    description,
    backgroundImageSrc,
    buttons = [],
    overlayClassName = "bg-black/60",
    className = "",
}) => {
    return (
        <section className={`relative w-full overflow-hidden px-6 py-24 md:py-32 ${className}`}>
            <div className="absolute inset-0">
                <motion.div
                    className="absolute inset-0"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: 1.08 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 8, ease: "easeOut" }}
                >
                    <Image
                        src={backgroundImageSrc}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className={`absolute inset-0 ${overlayClassName}`} />
            </div>

            <motion.div
                className="relative max-w-[1000px] mx-auto text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-[52px] font-bold text-white tracking-tight leading-[1.15] mb-8"
                >
                    {title}
                </motion.h2>

                {description && (
                    <motion.p
                        variants={itemVariants}
                        className="text-[17px] md:text-[19px] text-gray-300 leading-relaxed max-w-[820px] mx-auto mb-10"
                    >
                        {description}
                    </motion.p>
                )}

                {buttons.length > 0 && (
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        {buttons.map((button, index) => (
                            <motion.a
                                key={`${button.label}_${index}`}
                                href={button.href}
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                transition={{ duration: 0.15 }}
                                className={
                                    button.variant === "secondary"
                                        ? "inline-flex items-center gap-2 bg-[#0B1F6B] hover:bg-[#0a1b5c] transition-colors text-white text-[15px] font-semibold px-7 py-4 rounded-full"
                                        : "inline-flex items-center gap-2 bg-gradient-to-r from-emerald-300 to-teal-400 hover:opacity-90 transition-opacity text-gray-900 text-[15px] font-semibold px-7 py-4 rounded-full"
                                }
                            >
                                {button.label}
                                {button.variant !== "secondary" && <span aria-hidden="true">→</span>}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default CtaBannerSection;