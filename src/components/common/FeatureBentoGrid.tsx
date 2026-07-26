"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

export interface BentoFeatureCard {
    title: string;
    description: string;

    icon: string | StaticImageData;

    background?: string;
    
    textVariant?: "light" | "dark";
}

interface FeatureBentoGridProps {
    sectionTitle?: React.ReactNode;
    sectionDescription?: React.ReactNode;
    cards: BentoFeatureCard[];
    className?: string;
}

const DEFAULT_CARDS: BentoFeatureCard[] = [
    {
        title: "Carrier Fraud",
        description:
            "We eliminate inefficiencies by synchronizing every stage of your logistics, reducing operational waste and maximizing overall performance.",
        icon: "/images/icons/carrier-fraud.png",
        background: "bg-[#3B34E0]",
        textVariant: "light",
    },
    {
        title: "Tool Fragmentation",
        description:
            "Gain absolute peace of mind with 24/7 real-time tracking, providing full transparency from the moment of pickup to the final destination.",
        icon: "/images/icons/tool-fragmentation.png",
        background: "bg-[#EFEFEA]",
        textVariant: "dark",
    },
    {
        title: "Scalable Distribution",
        description:
            "Our flexible infrastructure grows with your business, offering high-capacity transport solutions that adapt to your changing market demands.",
        icon: "/images/icons/scalable-distribution.png",
        background: "bg-[#4CAF50]",
        textVariant: "light",
    },
    {
        title: "Slow Payments",
        description:
            "Leveraging advanced data to anticipate traffic and weather, we ensure your cargo takes the fastest, safest, and most cost-effective path.",
        icon: "/images/icons/slow-payments.png",
        background: "bg-[#EFEFEA]",
        textVariant: "dark",
    },
];

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
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const FeatureBentoGrid: React.FC<FeatureBentoGridProps> = ({
    sectionTitle = (
        <>
            The vetting platform that
            <br />
            can also move the money
        </>
    ),
    sectionDescription = "Monitoring tools tell you a carrier looked fine yesterday. DT Pay changes what happens next: funds committed before pickup, released only when the proof of delivery is AI-verified and a human authorizes. Trust becomes enforceable",
    cards = DEFAULT_CARDS,
    className = "",
}) => {
    return (
        <section className={`w-full bg-[#FAF9F5] px-6 py-16 md:py-24 ${className}`}>
            {/* Header row: title left, description right */}
            <motion.div
                className="max-w-[1200px] mx-auto mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h2
                    variants={headerItemVariants}
                    className="text-3xl md:text-[40px] font-normal text-gray-900 tracking-tight leading-[1.15] max-w-[560px]"
                >
                    {sectionTitle}
                </motion.h2>
                <motion.p
                    variants={headerItemVariants}
                    className="text-[15px] md:text-base text-gray-700 leading-relaxed max-w-[580px] pt-1"
                >
                    {sectionDescription}
                </motion.p>
            </motion.div>

            {/* Card Grid */}
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {cards.map((card, index) => {
                        const isLight = card.textVariant !== "dark";
                        return (
                            <motion.div
                                key={`${card.title}_${index}`}
                                variants={cardVariants}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className={`${card.background ?? "bg-[#EFEFEA]"} min-h-[340px] md:min-h-[340px] p-8 flex flex-col justify-between`}
                            >
                                <div>
                                    <h3
                                        className={`text-2xl font-medium tracking-tight mb-3 ${
                                            isLight ? "text-white" : "text-gray-900"
                                        }`}
                                    >
                                        {card.title}
                                    </h3>
                                    <p
                                        className={`text-[15px] leading-relaxed max-w-[260px] ${
                                            isLight ? "text-white/85" : "text-gray-600"
                                        }`}
                                    >
                                        {card.description}
                                    </p>
                                </div>

                                <div className="w-[110px] h-[110px] relative mt-8">
                                    <Image
                                        src={card.icon}
                                        alt={`${card.title} icon`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureBentoGrid;