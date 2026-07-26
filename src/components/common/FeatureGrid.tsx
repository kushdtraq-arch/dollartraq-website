"use client";

import React from "react";
import Image from "next/image";

export interface FeatureItem {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    colSpan?: "md:col-span-4" | "md:col-span-5" | "md:col-span-6" | "md:col-span-7" | "md:col-span-8";
}

interface FeatureGridProps {
    features: FeatureItem[];
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
    return (
        <div className="w-full max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-fr">
                {features.map((feature, index) => {
                    const gridSpan = feature.colSpan || "md:col-span-6";

                    return (
                        <div
                            key={`${feature.title}_${index}`}
                            className={`bg-white rounded-2xl p-4 flex flex-col shadow-sm border border-gray-100 overflow-hidden h-full ${gridSpan}`}
                        >

                            <div className="relative w-full flex-1 min-h-[200px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.imageAlt}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                            </div>

                            {/* Text sits right under the image, no forced gap */}
                            <div className="pt-5 flex flex-col gap-1.5">
                                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-500 font-normal leading-relaxed opacity-90">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FeatureGrid;