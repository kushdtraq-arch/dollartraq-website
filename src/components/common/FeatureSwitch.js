"use client";

import React, { Component } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "./Button";
import dynamic from "next/dynamic";
import ContentBlock from "./ContentBlock";

const AnimateViewAppear = dynamic(
    () => import("@/components/animation/AnimateViewAppear"),
    { ssr: false }
);

class FeatureSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            hover_index: 0,
        };
    }

    handleSelect = (idx, feature) => {
        this.setState({ activeIndex: idx });
        if (feature.link) {
            window.location.href = feature.link;
        }
    };

    render() {
        const {
            features,
            sectionClass = "w-full flex justify-center bg-blue-600",
            contentBlockProps = {},
            descriptionBelowList,
            buttonHref,
            buttonText,
            buttonProps = {},
        } = this.props;

        const { activeIndex, hover_index } = this.state;

        return (
            <section className={sectionClass}>
                <div className="max-w-[1490px] flex flex-col md:flex-row overflow-hidden">
                    <AnimateViewAppear delay={400}>
                        <div className="flex-1 px-4 md:px-16 py-10 flex flex-col justify-center">
                            <ContentBlock {...contentBlockProps} />

                            <ul className="mb-7 max-w-lg divide-y divide-white/30">
                                {features.map((item, idx) => (
                                    <li
                                        key={item.label}
                                        className={`flex items-start gap-3 py-4 transition group cursor-pointer ${
                                            hover_index === idx
                                                ? "text-white font-semibold"
                                                : "text-gray-300 font-normal hover:text-gray-100 hover:font-semibold"
                                        }`}
                                        onClick={() =>
                                            this.handleSelect(idx, item)
                                        }
                                        onMouseOver={() =>
                                            this.setState({
                                                hover_index: idx,
                                            })
                                        }
                                        style={{ userSelect: "none" }}
                                    >
                                        {/* Arrow */}
                                        <ArrowRight
                                            size={24}
                                            strokeWidth={2}
                                            className={`mt-1 transition ${
                                                hover_index === idx
                                                    ? "text-white opacity-80"
                                                    : "text-white opacity-0 group-hover:opacity-90"
                                            }`}
                                        />

                                        {/* Label + Sublabel */}
                                        <div className="flex flex-col">
                                            <span className="text-xl leading-tight">
                                                {item.label}
                                            </span>

                                            {item.sublabel && (
                                                <span
                                                    className={`text-sm transition ${
                                                        hover_index === idx
                                                            ? "text-white/80"
                                                            : "text-gray-400 group-hover:text-gray-200"
                                                    }`}
                                                >
                                                    {item.sublabel}
                                                </span>
                                            )}
                                        </div>
                                    </li>
                                ))}

                                {descriptionBelowList && (
                                    <p className="text-white text-xs font-normal mb-5 mt-8 max-w-md">
                                        {descriptionBelowList}
                                    </p>
                                )}
                            </ul>

                            {buttonHref && buttonText && (
                                <Link href={buttonHref}>
                                    <Button
                                        variant="primary"
                                        className="w-full sm:w-auto flex bg-green-500 items-center gap-2"
                                        {...buttonProps}
                                    >
                                        {buttonText}
                                        <ArrowRight size={16} />
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </AnimateViewAppear>

                    {/* Image */}
                    <div className="flex-1 flex justify-center items-center py-10 px-4 md:pr-16">
                        <img
                            src={features[activeIndex].image}
                            alt={features[activeIndex].label}
                            className="w-full max-w-sm md:max-w-md rounded-lg shadow-md mt-5 md:mt-20"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSwitch;
