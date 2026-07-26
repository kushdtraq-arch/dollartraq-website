"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
    Coins,
    RefreshCw,
    UploadCloud,
    BadgeCheck,
    UserCog,
    ShieldCheck,
    type LucideIcon,
} from "lucide-react";

export type StepIconName =
    | "coins"
    | "refreshCw"
    | "uploadCloud"
    | "badgeCheck"
    | "userCog"
    | "shieldCheck";

export interface StepItem {
    number?: string;
    title: string;
    description: string;
    icon?: string | StaticImageData | StepIconName;
}

interface ProcessStepsProps {
    sectionTitle?: string;
    sectionDescription?: string;
    steps: StepItem[];
    className?: string;
    columns?: 2 | 3;
}

const LUCIDE_ICON_BY_KEY: Record<StepIconName, LucideIcon> = {
    coins: Coins,
    refreshCw: RefreshCw,
    uploadCloud: UploadCloud,
    badgeCheck: BadgeCheck,
    userCog: UserCog,
    shieldCheck: ShieldCheck,
};

const DEFAULT_ICON_KEY_BY_TITLE: Record<string, StepIconName> = {
    "Load funded": "coins",
    "In Transit": "refreshCw",
    "POD uploaded": "uploadCloud",
    "AI Verifies": "badgeCheck",
    "Human Authorise": "userCog",
    "Released - 90s": "shieldCheck",
};

const LG_COLUMNS_CLASS: Record<2 | 3, string> = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
};

function isLucideKey(icon: unknown): icon is StepIconName {
    return typeof icon === "string" && icon in LUCIDE_ICON_BY_KEY;
}

const headerVariants = {
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
            staggerChildren: 0.2,
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

export const ProcessSteps: React.FC<ProcessStepsProps> = ({
    sectionTitle = "The vetting platform that can also move the money",
    sectionDescription = "Monitoring tools tell you a carrier looked fine yesterday. DT Pay changes what happens next: funds committed before pickup, released only when the proof of delivery is AI-verified and a human authorizes. Trust becomes enforceable",
    steps = [],
    className = "",
    columns = 3,
}) => {
    return (
        <section className={`w-full bg-[#FAF9F5] px-6 py-16 md:py-24 ${className}`}>
            {/* Header row: title left, description right */}
            <motion.div
                className="max-w-[1180px] mx-auto mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-8"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <h2 className="text-3xl md:text-[36px] font-normal text-gray-900 tracking-tight leading-[1.15] max-w-[460px]">
                    {sectionTitle}
                </h2>
                <p className="text-[14px] md:text-[15px] text-gray-700 leading-relaxed max-w-[580px] pt-1">
                    {sectionDescription}
                </p>
            </motion.div>

            {/* Steps Grid */}
            <div className="max-w-[1180px] mx-auto">
                <motion.div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${LG_COLUMNS_CLASS[columns]} gap-6 md:gap-8`}
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {steps.map((step, index) => {

                        const resolvedIcon =
                            step.icon ?? DEFAULT_ICON_KEY_BY_TITLE[step.title] ?? "coins";

                        const isImage =
                            !isLucideKey(resolvedIcon) &&
                            (typeof resolvedIcon === "string" || typeof resolvedIcon === "object");

                        return (
                            <motion.div
                                key={`${step.title}_${index}`}
                                variants={cardVariants}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.3 }}
                                className="bg-[#F3F3F399] border-l-1 border-[#0050CB]/70 p-8 md:p-9 flex flex-col justify-between min-h-[250px]"
                            >
                                <div
                                    className={`w-11 h-11 rounded-lg flex items-center justify-center mb-12 overflow-hidden ${
                                        columns === 2 ? "" : "bg-white shadow-sm"
                                    }`}
                                >
                                    {isImage ? (
                                        <Image
                                            src={resolvedIcon as string | StaticImageData}
                                            alt={`${step.title} icon`}
                                            width={48}
                                            height={48}
                                            className="w-[48px] h-[48px] object-contain"
                                        />
                                    ) : (
                                        (() => {
                                            const LucideIconComp =
                                                LUCIDE_ICON_BY_KEY[resolvedIcon as StepIconName];
                                            return (
                                                <LucideIconComp
                                                    size={20}
                                                    strokeWidth={1.75}
                                                    className="text-gray-900"
                                                />
                                            );
                                        })()
                                    )}
                                </div>

                                <div>
                                    <h4 className="text-[22px] md:text-[24px] font-normal text-gray-950 mb-3 tracking-tight leading-snug">
                                        {step.title}
                                    </h4>
                                    <p
                                        className={`text-[14px] text-gray-600 leading-relaxed font-normal ${
                                            columns === 2 ? "max-w-[520px]" : "max-w-[290px]"
                                        }`}
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default ProcessSteps;