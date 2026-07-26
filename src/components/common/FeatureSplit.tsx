"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FeatureCard {
    title: string;
    description: string;
    variant?: "accent" | "accent2" | "muted";
    backgroundColor?: string;
    textColor?: string;
}

interface FeatureSplitProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    bullets?: string[];
    ctaLabel?: string;
    ctaHref?: string;
    cards?: FeatureCard[];
    accentColor?: string;
    accentColor2?: string;
    mutedColor?: string;
    backgroundColor?: string;
    className?: string;
}

const DEFAULT_BULLETS = [
    "Documents classified and extracted on arrival — zero re-keying",
    "Certificate holder verified against your requirement profile",
    "Hard stops on failed identity or lapsed coverage, before dispatch",
    "The finished packet files itself to the carrier record — audit-ready",
];

const DEFAULT_CARDS: FeatureCard[] = [
    {
        title: "Carrier Fraud",
        description:
            "We eliminate inefficiencies by synchronizing every stage of your logistics, reducing operational waste and maximizing overall performance.",
        variant: "accent",
    },
    {
        title: "Tool Fragmentation",
        description:
            "Gain absolute peace of mind with 24/7 real-time tracking, providing full transparency from the moment of pickup to the final destination.",
        variant: "muted",
    },
    {
        title: "Scalable Distribution",
        description:
            "Our flexible infrastructure grows with your business, offering high-capacity transport solutions that adapt to your changing market demands.",
        variant: "accent2",
    },
    {
        title: "Slow Payments",
        description:
            "Leveraging advanced data to anticipate traffic and weather, we ensure your cargo takes the fastest, safest, and most cost-effective path.",
        variant: "muted",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const FeatureSplit: React.FC<FeatureSplitProps> = ({
    title = (
        <>
            The vetting platform that
            <br />
            can also move the money
        </>
    ),
    description = "Monitoring tools tell you a carrier looked fine yesterday. DT Pay changes what happens next: funds committed before pickup, released only when the proof of delivery is AI-verified and a human authorizes. Trust becomes enforceable",
    bullets = DEFAULT_BULLETS,
    ctaLabel = "Vetting & Trust Score",
    ctaHref = "/vetting",
    cards = DEFAULT_CARDS,
    accentColor = "#3730E0",
    accentColor2 = "#4CAF63",
    mutedColor = "#EEEEE8",
    backgroundColor = "#faf9f5",
    className = "",
}) => {
    const cardStyle = (card: FeatureCard) => {
        const base =
            card.variant === "accent"
                ? { backgroundColor: accentColor, isLight: false }
                : card.variant === "accent2"
                ? { backgroundColor: accentColor2, isLight: false }
                : { backgroundColor: mutedColor, isLight: true };

        const backgroundColor = card.backgroundColor ?? base.backgroundColor;

        const isLight = card.backgroundColor ? true : base.isLight;

        return {
            backgroundColor,
            titleColor: card.textColor ?? (isLight ? "#111318" : "#ffffff"),
            bodyColor: card.textColor ?? (isLight ? "#6b7280" : "rgba(255,255,255,0.85)"),
        };
    };

    return (
        <section
            className={`w-full py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-12 lg:px-16 font-sans ${className}`}
            style={{ backgroundColor }}
        >
            <motion.div
                className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* ---- text column ---- */}
                <div className="flex flex-col items-start max-w-[560px]">
                    <motion.h2
                        variants={itemVariants}
                        className="text-[30px] sm:text-[36px] md:text-[40px] font-medium tracking-tight text-gray-900 leading-[1.2]"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-5 text-[15px] sm:text-[16px] text-gray-500 leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    {bullets.length > 0 && (
                        <motion.ul variants={itemVariants} className="mt-6 flex flex-col gap-3">
                            {bullets.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-gray-600">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </motion.ul>
                    )}

                    {ctaLabel && (
                        <motion.div variants={itemVariants} className="mt-8">
                            <Link href={ctaHref}>
                                <button
                                    className="px-6 py-3 rounded-lg text-[14px] sm:text-[15px] font-medium text-white shadow-sm transition-transform hover:scale-[1.02]"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    {ctaLabel}
                                </button>
                            </Link>
                        </motion.div>
                    )}
                </div>

                {/* ---- cards grid ---- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    {cards.map((card, i) => {
                        const style = cardStyle(card);
                        return (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                className="rounded-2xl p-6 sm:p-7 min-h-[190px] sm:min-h-[210px] flex flex-col"
                                style={{ backgroundColor: style.backgroundColor }}
                            >
                                <h3 className="text-[17px] sm:text-[18px] font-semibold" style={{ color: style.titleColor }}>
                                    {card.title}
                                </h3>
                                <p className="mt-3 text-[13px] sm:text-[14px] leading-relaxed" style={{ color: style.bodyColor }}>
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};

export default FeatureSplit;