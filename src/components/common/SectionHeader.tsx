
"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title?: string;
    description?: string;
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
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title = "Real-Time Messaging that Understands You",
    description = "Forget robotic replies. Experience natural, context-aware AI messaging from casual chat to professional assistance.",
    className = "",
}) => {
    return (
        <section className={`w-full bg-transparent pt-12 pb-10 md:pt-16 md:pb-14 px-4 ${className}`}>
            <motion.div
                className="max-w-[700px] mx-auto flex flex-col items-center text-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-[28px] sm:text-[34px] md:text-[40px] font-medium tracking-tight text-gray-900 leading-[1.2]"
                >
                    {title}
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="mt-3 text-[14px] md:text-[15px] text-gray-500 font-normal leading-relaxed max-w-[520px]"
                >
                    {description}
                </motion.p>
            </motion.div>
        </section>
    );
};

export default SectionHeader;