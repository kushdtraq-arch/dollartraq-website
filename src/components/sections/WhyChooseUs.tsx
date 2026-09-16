"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/common/SectionHeader";

export interface FeaturePoint {

    icon: string | StaticImageData;
    title: string;
    description: string;
}

export interface ComplianceBadge {
    label: string;
    className?: string;
}

interface WhyChooseUsProps {
    sectionTitle?: string;
    sectionDescription?: string;
    leftFeatures: FeaturePoint[];
    rightFeatures: FeaturePoint[];
    imageSrc?: string;
    imageAlt?: string;
    complianceTitle?: string;
    complianceDescription?: string;
    ctaText?: string;
    ctaHref?: string;
    badges?: ComplianceBadge[];
    className?: string;
}

// Same relaxed pacing used across every other section.
const columnVariants = (fromLeft: boolean) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.2,
        },
    },
});

const rowVariants = (fromLeft: boolean) => ({
    hidden: { opacity: 0, x: fromLeft ? -30 : 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
});

const imageVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 },
    },
};

const barVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const FeatureRow: React.FC<{ feature: FeaturePoint; fromLeft: boolean }> = ({ feature, fromLeft }) => (
    <motion.div variants={rowVariants(fromLeft)} className="flex flex-col gap-3">
        <span className="w-11 h-11  flex items-center justify-center flex-shrink-0 overflow-hidden">
            <Image
                src={feature.icon}
                alt={`${feature.title} icon`}
                width={44}
                height={44}
                className="w-44 h-44 object-contain"
            />
        </span>
        <div>
            <h3 className="text-[15px] font-semibold text-gray-900 mb-1.5">
                {feature.title}
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">
                {feature.description}
            </p>
        </div>
    </motion.div>
);

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
    sectionTitle = "Why Choose us",
    sectionDescription = "Fluence AI offers powerful benefits that help you save time, improve decision-making, and scale your data operations effortlessly.",
    leftFeatures,
    rightFeatures,
    imageSrc = "/images/why-choose-us-preview.png",
    imageAlt = "Product preview",
    complianceTitle = "Enterprise-Grade Security",
    complianceDescription = "We maintain the highest standards of security and compliance for enterprise automation deployments.",
    ctaText = "Meet all Five",
    ctaHref = "/ai-agents",
    className = "",
}) => {
    return (
        <section className={`w-full bg-transparent px-4 pb-16 md:pb-20 ${className}`}>
            <SectionHeader title={sectionTitle} description={sectionDescription} />

            <div className="max-w-[1240px] mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-10 lg:gap-8 items-center">

                    <motion.div
                        className="flex flex-col gap-10 order-2 lg:order-1"
                        variants={columnVariants(true)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {leftFeatures.map((feature, index) => (
                            <FeatureRow key={`left_${index}`} feature={feature} fromLeft />
                        ))}
                    </motion.div>

                    <motion.div
                        className="relative w-full max-w-[440px] mx-auto rounded-2xl overflow-hidden order-1 lg:order-2"
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={440}
                            height={440}
                            unoptimized={imageSrc.endsWith(".gif")}
                            className="w-full h-auto object-contain rounded-2xl"
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-10 order-3"
                        variants={columnVariants(false)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {rightFeatures.map((feature, index) => (
                            <FeatureRow key={`right_${index}`} feature={feature} fromLeft={false} />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Supervisor Bar */}
            <motion.div
                className="max-w-[1240px] mx-auto mt-6 bg-white rounded-2xl border border-gray-100 px-10 py-7 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                variants={barVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="text-left flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {complianceTitle}
                    </h3>
                    <p className="text-[13.5px] text-gray-500 leading-relaxed max-w-[800px]">
                        {complianceDescription}
                    </p>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                    <Link href={ctaHref} className="block w-full md:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.15 }}
                            className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-[#4E62F7] hover:bg-[#3D51E5] text-white text-[14px] font-semibold transition-colors duration-200"
                        >
                            {ctaText}
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default WhyChooseUs;