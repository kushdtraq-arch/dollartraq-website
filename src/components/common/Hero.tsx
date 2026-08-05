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

interface HeroProps {
    title?: string;
    description?: string;
    ctas?: HeroCTA[];
    backgroundImageSrc?: string;
    videoThumbnailSrc?: string;

    stickToTop?: boolean;

    typewriter?: boolean;

    titleTypeSpeed?: number;
}

const DEFAULT_CTAS: HeroCTA[] = [
    { label: "Get Started", href: "/sign-up", variant: "primary" },
    { label: "Book a Demo", href: "/demo", variant: "secondary" },
];

const isVideoSrc = (src: string) => /\.(mp4|webm|ogg|mov)$/i.test(src);

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const mockupVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.7 },
    },
};

function useTypewriter(
    text: string,
    { speed = 35, startDelay = 0 }: { speed?: number; startDelay?: number } = {}
) {
    const [displayedText, setDisplayedText] = React.useState("");
    const [isDone, setIsDone] = React.useState(false);

    React.useEffect(() => {
        setDisplayedText("");
        setIsDone(text.length === 0);

        let i = 0;
        let interval: ReturnType<typeof setInterval>;

        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                i += 1;
                setDisplayedText(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(interval);
                    setIsDone(true);
                }
            }, speed);
        }, startDelay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, speed, startDelay]);

    return { displayedText, isDone };
}

const Hero: React.FC<HeroProps> = ({
    title = "The AI Agent Platform for Modern Teams",
    description = "We delivers a smarter, faster, and more reliable way to move goods. Combining modern trucking, optimized routing, and real-time visibility across every shipment.",
    ctas = DEFAULT_CTAS,
    backgroundImageSrc = "/images/hero-bg.png",
    videoThumbnailSrc = "/images/dashboard-preview.png",
    stickToTop = true,
    typewriter = true,
    titleTypeSpeed = 40,
}) => {
    const { displayedText: typedTitle, isDone: titleDone } = useTypewriter(title, {
        speed: titleTypeSpeed,
        startDelay: typewriter ? 300 : 0,
    });

    const shownTitle = typewriter ? typedTitle : title;

    return (
        <section
            className={`relative w-full flex flex-col justify-between overflow-hidden bg-gray-900 font-sans shadow-xl ${
                stickToTop
                    ? "-mt-[72px] pt-[104px] md:pt-[112px] lg:pt-[120px]"
                    : "mt-4 pt-8 md:pt-10 lg:pt-12"
            }`}
        >

            {/* Background Image Asset with Dark Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src={backgroundImageSrc}
                    alt="Logistics background"
                    fill
                    priority
                    quality={100}
                    className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-900/90" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
            </div>

            {/* Core Content Container */}
            <motion.div
                className="relative z-10 max-w-[1220px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col items-center gap-8 text-center lg:text-left"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="max-w-[800px] lg:max-w-[1050px] w-full flex flex-col items-center lg:items-start">
                    <motion.h1
                        variants={itemVariants}
                        className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] max-w-[900px] font-semibold tracking-tight text-white leading-[1.15] min-h-[1.15em]"
                    >
                        {shownTitle}
                        {typewriter && !titleDone && (
                            <span
                                aria-hidden="true"
                                className="inline-block w-[3px] md:w-[4px] h-[0.9em] bg-white ml-1 align-middle animate-pulse"
                            />
                        )}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-3 text-[14px] sm:text-[16px] text-gray-300 font-normal leading-relaxed max-w-[900px] opacity-90"
                    >
                        {description}
                    </motion.p>

                    {ctas.length > 0 && (
                        <motion.div
                            variants={itemVariants}
                            className="mt-5 flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
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
            </motion.div>

            {/* Dashboard Mockup / Video Preview */}
            <div className="relative z-10 w-full max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8 mt-8">
                <motion.div
                    variants={mockupVariants}
                    initial="hidden"
                    animate="visible"
                    className="w-full relative rounded-t-2xl p-1.5 sm:p-2 bg-white/10 backdrop-blur-md border-t border-x border-white/20 shadow-2xl"
                >
                    <div className="relative w-full aspect-[16/10] max-h-[460px] rounded-t-xl overflow-hidden bg-gray-900 shadow-inner">
                        {isVideoSrc(videoThumbnailSrc) ? (
                            <video
                                src={videoThumbnailSrc}
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
                                src={videoThumbnailSrc}
                                alt="Application Demo Video"
                                fill
                                priority
                                className="object-cover object-top"
                                sizes="(max-width: 1280px) 100vw, 1120px"
                            />
                        )}
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;