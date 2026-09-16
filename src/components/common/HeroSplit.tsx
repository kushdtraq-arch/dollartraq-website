"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroCTA {
    label: string;
    href: string;
    variant: "primary" | "secondary";
}

interface HeroSplitProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    ctas?: HeroCTA[];
    backgroundImageSrc?: string;

    mediaSrc?: string;
    mediaAlt?: string;
    mediaWidth?: number;
    mediaHeight?: number;
    className?: string;
    /**
     * When true (default), the hero pulls up underneath the fixed header
     * (cancelling out the layout's `pt-[72px]` on <main>) so the background
     * image/gradient extends behind the transparent header instead of
     * showing the page background above the hero. Set to false if this
     * component is ever rendered somewhere other than the very top of the page.
     */
    stickToTop?: boolean;
}

const DEFAULT_CTAS: HeroCTA[] = [
    { label: "Get Started", href: "/contact", variant: "primary" },
    { label: "Book a Demo", href: "/demo", variant: "secondary" },
];

const isVideoSrc = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.2,
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

const mediaVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 },
    },
};

const HeroSplit: React.FC<HeroSplitProps> = ({
    title = "From quote to cash — with an AI team that reads the paper before you can",
    description = "Dollar Traq is the AI operating system for US freight brokers — vet and onboard carriers on a 22.7-million-row FMCSA database we own, then pay them on verified delivery through DT Pay.",
    ctas = DEFAULT_CTAS,
    backgroundImageSrc = "/images/hero-bg.png",
    mediaSrc,
    mediaAlt = "Product preview",
    mediaWidth = 1600,
    mediaHeight = 1400,
    className = "",
    stickToTop = true,
}) => {
    const hasMedia = Boolean(mediaSrc);
    const mediaIsVideo = hasMedia && isVideoSrc(mediaSrc as string);

    return (
        <section
            className={`relative w-full overflow-hidden bg-gray-900 font-sans ${
                stickToTop ? "-mt-[72px] pt-[72px] mb-4" : "my-4"
            } ${
                hasMedia
                    ? ""
                    : "flex flex-col justify-center min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px]"
            } ${className}`}
        >
            {/* Background photo + overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src={backgroundImageSrc}
                    alt=""
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            </div>

            <motion.div
                className={`relative z-10 grid items-center gap-10 px-6 py-14 sm:px-10 sm:py-16 md:px-12 lg:px-16 ${
                    hasMedia
                        ? "grid-cols-1 md:grid-cols-2 md:items-end md:gap-0 md:pl-12 lg:pl-16 md:pt-20 md:pb-0"
                        : "grid-cols-1 md:py-24"
                }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Text column */}
                <div
                    className={`flex flex-col items-start text-left ${
                        hasMedia ? "max-w-[560px] md:pb-20" : "max-w-[640px]"
                    }`}
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-[32px] sm:text-[40px] md:text-[42px] lg:text-[48px] font-medium tracking-tight text-white leading-[1.15]"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-5 text-[15px] sm:text-[16px] text-gray-200 font-normal leading-relaxed opacity-90"
                    >
                        {description}
                    </motion.p>

                    {ctas.length > 0 && (
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 flex flex-row flex-wrap items-center gap-4"
                        >
                            {ctas.map((cta, index) => (
                                <Link key={`${cta.label}_${index}`} href={cta.href}>
                                    <motion.button
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ duration: 0.15 }}
                                        className={`font-semibold text-[14px] sm:text-[15px] px-6 py-3 rounded-lg shadow-md transition-colors ${
                                            cta.variant === "primary"
                                                ? "bg-white hover:bg-gray-100 text-black"
                                                : "bg-blue-600 hover:bg-blue-700 text-white"
                                        }`}
                                    >
                                        {cta.label}
                                    </motion.button>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </div>

                {hasMedia && (
                    <motion.div
                        variants={mediaVariants}
                        className="relative w-full h-full md:justify-self-end flex items-end self-stretch"
                    >
                        <div className="relative w-full  rounded-t-2xl md:rounded-b-none overflow-hidden shadow-2xl">
                            <div
                                className="relative w-full bg-gray-900 rounded-t-2xl overflow-hidden"
                                style={{ aspectRatio: `${mediaWidth} / ${mediaHeight}` }}
                            >
                                {mediaIsVideo ? (
                                    <video
                                        src={mediaSrc}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover object-top"
                                    >
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={mediaSrc as string}
                                        alt={mediaAlt}
                                        fill
                                        priority
                                        className="object-cover object-top"
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                    />
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
};

export default HeroSplit;