"use client";

import React from "react";

export interface PricingDisclaimerProps {
    text?: string;
    className?: string;
}

export const PricingDisclaimer: React.FC<PricingDisclaimerProps> = ({
    text = "Competitor pricing reflects publicly listed or publicly reported entry pricing as of July 2026. Verify current pricing with each vendor.",
    className = "",
}) => {
    return (
        <div className={`w-full bg-[#faf9f5] px-4 sm:px-8 md:px-12 lg:px-16 ${className}`}>
            <p className="max-w-[1200px] mx-auto text-center text-[12px] sm:text-[13px] text-gray-400 pt-6 pb-2">
                {text}
            </p>
        </div>
    );
};

export default PricingDisclaimer;