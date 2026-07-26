"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/common/SectionHeader";

export interface Testimonial {

    id: string;
    quote: string;
    name: string;
    role: string;
    imageSrc: string;
    imageAlt?: string;
    logoSrc: string;
    logoAlt?: string;
    logoFallbackLabel?: string;
}

export interface TestimonialsSectionProps {
    eyebrow?: string;
    title?: string;
    description?: string;
    testimonials: Testimonial[];
    defaultActiveId?: string;
    className?: string;
}

const LogoMark: React.FC<{
    testimonial: Testimonial;
    isActive: boolean;
}> = ({ testimonial, isActive }) => {
    const [failed, setFailed] = useState(false);

    if (failed) {
        return (
            <span
                className={`text-[14px] font-semibold tracking-tight ${
                    isActive ? "text-[#111827]" : "text-[#9CA3AF]"
                }`}
            >
                {testimonial.logoFallbackLabel ?? testimonial.logoAlt ?? testimonial.name}
            </span>
        );
    }

    return (
        <div className="relative h-[44px] w-full max-w-[180px]">
            <Image
                src={testimonial.logoSrc}
                alt={testimonial.logoAlt ?? `${testimonial.name} company logo`}
                fill
                className={`object-contain object-center transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-60"
                }`}
                sizes="180px"
                onError={() => setFailed(true)}
            />
        </div>
    );
};

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
    eyebrow,
    title = "What Our Valued Users Are Saying About Us",
    description = "Hear directly from our amazing users who've experienced the power of our platform — their feedback, success stories.",
    testimonials,
    defaultActiveId,
    className = "",
}) => {
    const [activeId, setActiveId] = useState<string>(
        defaultActiveId ?? testimonials[0]?.id
    );

    const activeTestimonial =
        testimonials.find((t) => t.id === activeId) ?? testimonials[0];

    if (!activeTestimonial) return null;

    return (
        <section className={`w-full bg-[#FAF9F5] pt-[40px] pb-[100px] px-[24px] ${className}`}>
            <SectionHeader  title={title} description={description} />

            <div className="max-w-[1140px] mx-auto mt-[10px] rounded-[20px] bg-[#FCFCFB] border border-[#E5E7EB] overflow-hidden">
                <div className="flex flex-col md:flex-row items-start gap-[32px] md:gap-[40px] p-[28px] md:p-[32px]">
                    <div className="relative w-[255px] h-[267px] max-w-full flex-shrink-0 rounded-[16px] overflow-hidden">
                        <Image
                            src={activeTestimonial.imageSrc}
                            alt={activeTestimonial.imageAlt ?? activeTestimonial.name}
                            fill
                            className="object-cover"
                            sizes="255px"
                        />
                    </div>

                    <div className="flex flex-col justify-start pt-[4px]">
                        <p className="text-[16px] text-[#374151] leading-[1.7]">
                            {activeTestimonial.quote}
                        </p>

                        <div className="mt-[28px]">
                            <p className="text-[15px] font-semibold text-[#111827]">
                                {activeTestimonial.name}
                            </p>
                            <p className="text-[13.5px] text-[#6B7280] mt-[2px]">
                                {activeTestimonial.role}
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    className="grid border-t border-[#E5E7EB]"
                    style={{
                        gridTemplateColumns: `repeat(${testimonials.length}, minmax(0, 1fr))`,
                    }}
                >
                    {testimonials.map((testimonial) => {
                        const isActive = testimonial.id === activeTestimonial.id;

                        return (
                            <button
                                key={testimonial.id}
                                type="button"
                                onClick={() => setActiveId(testimonial.id)}
                                aria-pressed={isActive}
                                className={`flex items-center justify-center h-[80px] px-[16px] border-r last:border-r-0 border-[#E5E7EB] transition-colors duration-200 ${
                                    isActive
                                        ? "bg-white border-b-2 border-b-[#6366F1]"
                                        : "bg-[#F4F4F2] hover:bg-white"
                                }`}
                            >
                                <LogoMark testimonial={testimonial} isActive={isActive} />
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;