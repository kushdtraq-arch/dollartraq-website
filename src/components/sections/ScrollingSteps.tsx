
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export interface StepItem {
    step: string;        
    title: string;       
    description: string; 
}

interface ScrollingStepsProps {
    heading: React.ReactNode;
    description: React.ReactNode;
    steps: StepItem[];
    className?: string;
}

const headerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
    },
};

const trackVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
    },
};

export const ScrollingSteps: React.FC<ScrollingStepsProps> = ({
    heading,
    description,
    steps,
    className = "",
}) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const startScrollLeft = useRef(0);

    const onMouseDown = (e: React.MouseEvent) => {
        const track = trackRef.current;
        if (!track) return;
        isDragging.current = true;
        startX.current = e.pageX;
        startScrollLeft.current = track.scrollLeft;
        track.style.cursor = "grabbing";
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !trackRef.current) return;
        e.preventDefault();
        const dx = e.pageX - startX.current;
        trackRef.current.scrollLeft = startScrollLeft.current - dx;
    };

    const stopDragging = () => {
        isDragging.current = false;
        if (trackRef.current) trackRef.current.style.cursor = "grab";
    };

    const handleScroll = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (maxScroll <= 0) {
            setActiveIndex(0);
            return;
        }
        const progress = track.scrollLeft / maxScroll; // 0 → 1
        const idx = Math.round(progress * (steps.length - 1));
        setActiveIndex(Math.min(Math.max(idx, 0), steps.length - 1));
    }, [steps.length]);

    const scrollToIndex = (index: number) => {
        const track = trackRef.current;
        if (!track) return;
        const maxScroll = track.scrollWidth - track.clientWidth;
        const progress = index / (steps.length - 1);
        track.scrollTo({ left: maxScroll * progress, behavior: "smooth" });
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        track.addEventListener("scroll", handleScroll, { passive: true });
        return () => track.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);



    return (
        <section className={`w-full bg-[#FAF9F5] py-16 md:py-24 px-4 ${className}`}>
            <div className="max-w-[1180px] mx-auto">
                {/* Header row: heading left, description right */}
                <motion.div
                    className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16"
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-[32px] sm:text-[36px] md:text-[36px] font-medium tracking-tight leading-[1.15] text-gray-900 max-w-[480px]">
                        {heading}
                    </h2>
                    <div className="text-[15px] md:text-base text-gray-500 leading-relaxed max-w-[480px]">
                        {description}
                    </div>
                </motion.div>

                {/* Progress line with dots */}
                <div className="relative flex items-center mb-10">
                    <div className="absolute left-0 right-0 h-px bg-gray-300" />
                    <div className="relative w-full flex justify-between">
                        {steps.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => scrollToIndex(index)}
                                aria-label={`Go to step ${index + 1}`}
                                className="relative w-3 h-3 rounded-full"
                            >
                                <motion.span
                                    className="absolute inset-0 rounded-full bg-blue-600/40"
                                    animate={{
                                        scale: index === activeIndex ? 1.3 : 1,
                                        backgroundColor: index === activeIndex ? "#2563eb" : "rgba(37,99,235,0.4)",
                                    }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Draggable horizontal step cards */}
                <motion.div
                    ref={trackRef}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={stopDragging}
                    onMouseLeave={stopDragging}
                    variants={trackVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex gap-6 overflow-x-auto cursor-grab select-none scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                    {steps.map((item, index) => (
                        <motion.div
                            key={`${item.step}-${index}`}
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#F3F3F3]  p-7 shadow-sm shrink-0 basis-[calc(33.333%-16px)] min-w-[280px]"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-sm text-blue-600 font-medium">{item.step}</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-3 tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-[15px] md:text-base text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ScrollingSteps;