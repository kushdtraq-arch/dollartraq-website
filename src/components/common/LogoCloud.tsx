"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

interface LogoCloudProps {
    text?: string;
    logos?: { src: string; alt: string }[];
}

const DEFAULT_LOGOS = [
    { src: "/images/logo-cloud/logo-cloud-1.png", alt: "Logoipsum 1" },
    { src: "/images/logo-cloud/logo-cloud-2.png", alt: "Sisyphus" },
    { src: "/images/logo-cloud/logo-cloud-3.png", alt: "Logoipsum 2" },
    { src: "/images/logo-cloud/logo-cloud-4.png", alt: "Quotient" },
    { src: "/images/logo-cloud/logo-cloud-5.png", alt: "Logoipsum 3" },
    { src: "/images/logo-cloud/logo-cloud-1.png", alt: "Logoipsum 4" },
    { src: "/images/logo-cloud/logo-cloud-2.png", alt: "Sisyphus 2" },
    { src: "/images/logo-cloud/logo-cloud-3.png", alt: "Logoipsum 5" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.1,
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

export const LogoCloud: React.FC<LogoCloudProps> = ({
    text = "Trusted by 7,000+ top startups, freelancers and studios",
    logos = DEFAULT_LOGOS,
}) => {
    return (
        <section className="w-full bg-transparent py-16 px-4 md:px-8">
            <motion.div
                className="max-w-[1400px] mx-auto flex flex-col items-center gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {/* Heading Text */}
                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 text-sm md:text-base font-medium tracking-wide text-center"
                >
                    {text}
                </motion.p>

                {/* Marquee slider */}
                <motion.div variants={itemVariants} className="w-full">
                    <Marquee
                        gradient
                        gradientColor="#FAF9F5"
                        gradientWidth={80}
                        speed={40}
                        pauseOnHover
                    >
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="relative h-8 w-[120px] mx-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </Marquee>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default LogoCloud;