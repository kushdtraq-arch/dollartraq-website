"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
    LucideIcon,
    Check,
    CheckCircle2,
    Server,
    Users,
    ShieldCheck,
    Package,
    Smartphone,
    UserX,
    UserPlus,
    CreditCard,
    Infinity,
    AppWindow,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
    check: Check,
    checkCircle2: CheckCircle2,
    server: Server,
    users: Users,
    shieldCheck: ShieldCheck,
    package: Package,
    smartphone: Smartphone,
    userX: UserX,
    userPlus: UserPlus,
    creditCard: CreditCard,
    infinity: Infinity,
    appWindow: AppWindow,
};

export type PricingIconName = keyof typeof ICON_MAP;

export interface PricingFeature {
    label: string;

    icon?: PricingIconName;
}

export interface PricingPlan {

    id: string;
    name: string;
    price: string;
    priceSuffix?: string;
    description: string;
    features: PricingFeature[];
    ctaLabel: string;
    href: string;
    featured?: boolean;
    badge?: string;
    /** Small callout under the feature list, e.g. "Extra loads billed at $2.75 each" */
    note?: string;
}

export interface PricingSectionProps {
    eyebrow?: string;
    title?: string;
    description?: string;
    plans: PricingPlan[];
    onSelectPlan?: (planId: string) => void;
    className?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
    eyebrow = "Pricing",
    title = "Scale with Precision",
    description = "Transparent models that evolve as you do. No hidden overhead, just absolute performance.",
    plans,
    onSelectPlan,
    className = "",
}) => {
    const router = useRouter();
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

    const handleSelect = (plan: PricingPlan) => {
        setSelectedPlan(plan.id);
        onSelectPlan?.(plan.id);
        router.push(plan.href);
    };

    return (
        <section
            className={`w-full bg-[#000B21] relative overflow-hidden pt-[100px] pb-[100px] px-[24px] text-white ${className}`}
        >
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0044B3] rounded-full blur-[160px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-[-15%] right-[-5%] w-[450px] h-[450px] bg-[#0033aa] rounded-full blur-[140px] opacity-15 pointer-events-none" />

            <div className="max-w-[1140px] mx-auto text-center flex flex-col items-center mb-[64px] relative z-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#3B82F6] mb-[16px]">
                    {eyebrow}
                </p>

                <h2 className="text-[40px] md:text-[48px] font-normal tracking-tight text-white leading-[1.2]">
                    {title}
                </h2>

                <p className="text-[15px] font-normal text-[#94A3B8] max-w-[560px] mt-[18px] leading-[1.6]">
                    {description}
                </p>
            </div>

            <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[28px] items-stretch relative z-10">
                {plans.map((plan) => {
                    const isSelected = selectedPlan === plan.id;

                    if (plan.featured) {
                        return (
                            <div
                                key={plan.id}
                                className="rounded-[24px] bg-[#001D6680] border-2 border-[#0052CC] p-[36px] flex flex-col justify-between relative transition-all duration-300 hover:translate-y-[-4px] hover:bg-[#002277A6] shadow-[0_0_40px_rgba(0,82,204,0.15)]"
                            >
                                {plan.badge && (
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0052CC] text-white text-[10px] font-bold uppercase tracking-[0.18em] px-[18px] py-[6px] rounded-full shadow-md whitespace-nowrap">
                                        {plan.badge}
                                    </div>
                                )}

                                <div>
                                    <p className="text-[11px] font-bold tracking-[0.15em] text-[#93C5FD] uppercase mb-[24px] mt-[6px]">
                                        {plan.name}
                                    </p>

                                    <div className="flex items-baseline mb-[20px]">
                                        <span className="text-[52px] font-normal text-white tracking-tight">
                                            {plan.price}
                                        </span>
                                        {plan.priceSuffix && (
                                            <span className="text-[13px] text-[#64748B] ml-[4px]">
                                                {plan.priceSuffix}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-[13.5px] text-[#93C5FD] opacity-90 leading-[1.6] mb-[32px] min-h-[44px]">
                                        {plan.description}
                                    </p>

                                    <ul className="space-y-[16px] border-t border-[#0033AA] pt-[28px]">
                                        {plan.features.map((feature) => {
                                            const Icon = ICON_MAP[feature.icon ?? "checkCircle2"] ?? CheckCircle2;
                                            return (
                                                <li
                                                    key={feature.label}
                                                    className="flex items-center gap-[12px] text-[13.5px] text-white"
                                                >
                                                    <Icon
                                                        className="text-[#3B82F6] shrink-0"
                                                        size={16}
                                                        strokeWidth={2}
                                                    />
                                                    <span>{feature.label}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    {plan.note && (
                                        <div className="mt-[24px] rounded-[14px] bg-[#00133F] border border-[#0033AA] px-[18px] py-[14px] text-[12.5px] text-[#93C5FD] leading-[1.5]">
                                            {plan.note}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => handleSelect(plan)}
                                    className={`w-full h-[50px] rounded-full text-[13.5px] font-medium mt-[44px] shadow-lg transition-all duration-200 ${
                                        isSelected
                                            ? "bg-white text-[#0052CC]"
                                            : "bg-[#0052CC] text-white hover:bg-[#0066FF] hover:shadow-[0_4px_20px_rgba(0,82,204,0.4)]"
                                    }`}
                                >
                                    {isSelected ? "Selected" : plan.ctaLabel}
                                </button>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={plan.id}
                            className="rounded-[24px] bg-[#031333B3] border border-[#1E293B] p-[36px] flex flex-col justify-between transition-all duration-300 hover:border-[#334155] hover:translate-y-[-4px] hover:bg-[#041840E6]"
                        >
                            <div>
                                <p className="text-[11px] font-bold tracking-[0.15em] text-[#94A3B8] uppercase mb-[24px]">
                                    {plan.name}
                                </p>

                                <div className="flex items-baseline mb-[20px]">
                                    <span className="text-[48px] font-normal text-white tracking-tight">
                                        {plan.price}
                                    </span>
                                    {plan.priceSuffix && (
                                        <span className="text-[13px] text-[#64748B] ml-[4px]">
                                            {plan.priceSuffix}
                                        </span>
                                    )}
                                </div>

                                <p className="text-[13.5px] text-[#94A3B8] leading-[1.6] mb-[32px] min-h-[44px]">
                                    {plan.description}
                                </p>

                                <ul className="space-y-[16px] border-t border-[#1E293B] pt-[28px]">
                                    {plan.features.map((feature) => {
                                        const Icon = ICON_MAP[feature.icon ?? "check"] ?? Check;
                                        return (
                                            <li
                                                key={feature.label}
                                                className="flex items-center gap-[12px] text-[13.5px] text-[#E2E8F0]"
                                            >
                                                <Icon
                                                    className="text-[#3B82F6] shrink-0"
                                                    size={16}
                                                    strokeWidth={2}
                                                />
                                                <span>{feature.label}</span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                {plan.note && (
                                    <div className="mt-[24px] rounded-[14px] bg-[#0B1424] border border-[#1E293B] px-[18px] py-[14px] text-[12.5px] text-[#94A3B8] leading-[1.5]">
                                        {plan.note}
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={() => handleSelect(plan)}
                                className={`w-full h-[48px] rounded-full text-[13.5px] font-medium mt-[44px] transition-all duration-200 border ${
                                    isSelected
                                        ? "bg-[#1E293B] text-white border-[#3B82F6]"
                                        : "bg-[#111E38] text-[#94A3B8] border-transparent hover:bg-[#1C2C4E] hover:text-white"
                                }`}
                            >
                                {isSelected ? "Selected" : plan.ctaLabel}
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PricingSection;