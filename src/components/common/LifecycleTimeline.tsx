"use client";

import React from "react";
import { motion } from "framer-motion";

interface LifecycleStep {
    label: string;
    description: string;
}

interface LifecycleTimelineProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    steps?: LifecycleStep[];
    backgroundColor?: string;
    className?: string;
}

const DEFAULT_STEPS: LifecycleStep[] = [
    { label: "AI Verifies", description: "Broker commits funds; carrier sees payment secured" },
    { label: "KYC onboarded", description: "Broker commits funds; carrier sees payment secured" },
    { label: "Load funded", description: "Broker commits funds; carrier sees payment secured" },
    { label: "Delivered & verified", description: "Broker commits funds; carrier sees payment secured" },
    { label: "Paid in ~90s", description: "Broker commits funds; carrier sees payment secured" },
];

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
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const LifecycleTimeline: React.FC<LifecycleTimelineProps> = ({
    title = "DT Pay is the last mile of a verified lifecycle.",
    description = "Payment isn't a bolt-on. It's the payoff of everything the platform already verified — the carrier's identity, the coverage, the delivery. Here's the full path a dollar travels.",
    steps = DEFAULT_STEPS,
    backgroundColor = "#faf9f5",
    className = "",
}) => {
    return (
        <section
            className={`w-full py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans ${className}`}
            style={{ backgroundColor }}
        >
            <div className="max-w-[1200px] mx-auto">
                {/* Header: stacks on mobile, sits side-by-side from md up */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start mb-14 sm:mb-16 md:mb-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-[30px] sm:text-[36px] md:text-[40px] lg:text-[46px] font-medium tracking-tight text-gray-900 leading-[1.15] max-w-[520px]"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-[15px] sm:text-[16px] md:text-[17px] text-gray-500 leading-relaxed max-w-[560px]"
                    >
                        {description}
                    </motion.p>
                </motion.div>

                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* connecting line — desktop (horizontal) */}
                    <div
                        aria-hidden
                        className="hidden md:block absolute left-0 right-0 border-t border-dashed border-gray-300"
                        style={{ top: "4px" }}
                    />
                    {/* connecting line — mobile (vertical) */}
                    <div
                        aria-hidden
                        className="md:hidden absolute top-1 bottom-1 border-l border-dashed border-gray-300"
                        style={{ left: "4px" }}
                    />

                    <div className="flex flex-col gap-9 md:flex-row md:justify-between md:gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={`${step.label}_${index}`}
                                variants={itemVariants}
                                className="relative flex flex-row md:flex-col items-start gap-4 md:gap-0 md:flex-1 md:min-w-0"
                            >
                                {/* dot */}
                                <span
                                    aria-hidden
                                    className="relative z-10 mt-[7px] md:mt-0 md:mb-6 flex-shrink-0 w-[9px] h-[9px] rounded-full bg-gray-900"
                                />

                                <div className="flex flex-col gap-2 min-w-0">
                                    <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-medium text-gray-900 whitespace-nowrap md:whitespace-normal">
                                        {step.label}
                                    </h3>
                                    <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed max-w-[260px]">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LifecycleTimeline;