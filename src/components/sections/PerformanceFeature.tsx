"use client";

import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

export interface FeatureBullet {
    label: string;
    icon: React.ReactNode;
}

export interface FeatureRowData {
    title: React.ReactNode;
    description: string;
    bullets: FeatureBullet[];
    imageSrc: string;
    imageAlt?: string;
    imagePosition?: "left" | "right";
}

interface PerformanceFeaturesProps {
    sectionTitle?: string;
    sectionDescription?: string;
    rows: FeatureRowData[];
    className?: string;
    stickyOffset?: number;
}

const FeatureRow: React.FC<{ row: FeatureRowData }> = ({ row }) => {
    const imageOnLeft = row.imagePosition === "left";

    return (
        <div className="overflow-hidden rounded-2xl lg:rounded-3xl border border-black/5 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] px-5 py-6 sm:p-8 lg:p-10 xl:p-12">
            <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
                {/* Image */}
                <div
                    className={`relative w-full overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] ${
                        imageOnLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                    <Image
                        src={row.imageSrc}
                        alt={row.imageAlt || "Feature"}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw,
                               (max-width:1200px) 50vw,
                               550px"
                    />
                </div>

                {/* Content */}
                <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                    <h3 className="text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-[42px]">
                        {row.title}
                    </h3>

                    <p className="mt-4 max-w-full text-sm leading-7 text-gray-500 sm:text-[15px] lg:max-w-[480px]">
                        {row.description}
                    </p>

                    <div className="mt-6 space-y-4 sm:mt-8">
                        {row.bullets.map((bullet, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 sm:gap-4"
                            >
                                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 sm:h-10 sm:w-10 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">
                                    {bullet.icon}
                                </span>

                                <span className="text-sm font-medium text-gray-900 sm:text-base">
                                    {bullet.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const PerformanceFeatures: React.FC<PerformanceFeaturesProps> = ({
    sectionTitle = "Performance Designed for Your Supply Chain",
    sectionDescription = "Discover how our platform transforms raw data into actionable insights. Our advanced features are designed to optimize workflows.",
    rows,
    className = "",
    stickyOffset = 100,
}) => {
    return (
        <section
            className={`w-full bg-transparent px-4 py-14 sm:px-6 lg:px-8 xl:px-10 ${className}`}
        >
            <SectionHeader
                title={sectionTitle}
                description={sectionDescription}
            />

            <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-6 lg:mt-14 lg:gap-8">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className="lg:sticky"
                        style={{
                            top: `${stickyOffset}px`,
                            zIndex: index + 1,
                        }}
                    >
                        <FeatureRow row={row} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PerformanceFeatures;