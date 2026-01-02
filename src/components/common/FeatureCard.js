"use client";

import React, { Component } from "react";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const AnimateViewAppear = dynamic(
  () => import("@/components/animation/AnimateViewAppear"),
  { ssr: false }
);

class FeatureCard extends Component {
  renderImage() {
    const { imageSrc, altText, imageClass } = this.props;
    if (!imageSrc) return null;

    return (
      <img
        src={imageSrc}
        alt={altText || ""}
        className={imageClass || "max-w-[64px] h-auto"}
      />
    );
  }

  renderTitle() {
    const { title, titleClass } = this.props;
    if (!title) return null;

    return (
      <h3
        className={`font-semibold text-sm text-[#222] ${
          titleClass || ""
        }`}
      >
        {title}
      </h3>
    );
  }

  renderDescription() {
    const { description, descriptionClass } = this.props;
    if (!description) return null;

    return (
      <p
        className={`text-gray-600 text-xs leading-relaxed ${
          descriptionClass || ""
        }`}
      >
        {description}
      </p>
    );
  }

  renderLink() {
    const { showLink, linkUrl, linkLabel, linkClass } = this.props;
    if (!showLink) return null;

    return (
      <a
        href={linkUrl || "#"}
        className={`text-blue-600 text-sm font-semibold flex items-center gap-1 hover:underline ${
          linkClass || ""
        }`}
      >
        {linkLabel || "Read More"}
        <ArrowRight size={16} />
      </a>
    );
  }

  render() {
    const { className, style } = this.props;

    return (
      <AnimateViewAppear delay={500}>
        <div
          className={`bg-gray-100 rounded-xl shadow-sm 
            p-6 flex flex-col gap-3 
            w-full h-auto ${className || ""}`}
          style={style}
        >
          {this.renderImage()}
          {this.renderTitle()}
          {this.renderDescription()}

          {this.props.showLink && (
            <div className="mt-auto">
              {this.renderLink()}
            </div>
          )}
        </div>
      </AnimateViewAppear>
    );
  }
}

export default FeatureCard;
