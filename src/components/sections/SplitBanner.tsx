import React from "react";
import Image from "next/image";

export interface SplitBannerCta {
  label: string;
  href?: string;
  onClick?: () => void;
  target?: string;
}

export interface SplitBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  cta?: SplitBannerCta;
  imageSrc: string;
  imageAlt?: string;
  backgroundColor?: string;
  textColor?: string;
  imagePosition?: "left" | "right";
  desktopHeight?: number;
  mobileImageHeight?: number;
  id?: string;
  className?: string;

  stickToTop?: boolean;
}

function isCssColor(value: string) {
  return value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl");
}

export default function SplitBanner({
  eyebrow,
  title,
  description,
  cta,
  imageSrc,
  imageAlt = "",
  backgroundColor = "#2f4bf0",
  textColor = "text-white",
  imagePosition = "right",
  desktopHeight = 460,
  mobileImageHeight = 280,
  id,
  className = "",
  stickToTop = true,
}: SplitBannerProps) {
  const bgIsColorValue = isCssColor(backgroundColor);
  const panelStyle = bgIsColorValue ? { backgroundColor } : undefined;
  const panelClass = bgIsColorValue ? "" : backgroundColor;

  const textOrderClass = imagePosition === "left" ? "md:order-2" : "md:order-1";
  const imageOrderClass = imagePosition === "left" ? "md:order-1" : "md:order-2";

  return (
    <section
      id={id}
      className={`relative w-full overflow-hidden ${
        stickToTop ? "-mt-[72px]" : ""
      } ${className}`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Text / color panel */}
        <div
          className={`flex flex-col justify-center px-[24px] py-[48px] sm:px-[48px] md:w-1/2 md:px-[64px] md:py-0 ${textOrderClass} ${panelClass}`}
          style={{ ...panelStyle, minHeight: 0 }}
        >
          <div
            className="md:flex md:flex-col md:justify-center"
            style={{
              minHeight: `${desktopHeight}px`,
              paddingTop: stickToTop ? 72 : undefined,
            }}
          >
            {eyebrow && (
              <div className="flex items-center gap-[12px]">
                <span
                  className={`h-[2px] w-[32px] ${bgIsColorValue ? "bg-current" : "bg-white"}`}
                />
                <span className={`!text-[14px] !leading-[20px] !font-semibold ${textColor}`}>
                  {eyebrow}
                </span>
              </div>
            )}

            <h2
              className={`!mt-[20px] !text-[32px] !leading-[38px] sm:!text-[40px] sm:!leading-[46px] !font-bold ${textColor} !m-0`}
            >
              {title}
            </h2>

            {description && (
              <p
                className={`!mt-[20px] !text-[16px] !leading-[26px] !font-normal ${textColor} opacity-90 max-w-[420px]`}
              >
                {description}
              </p>
            )}

            {cta && (
              <div className="mt-[28px]">
                {cta.href ? (
                  <a
                    href={cta.href}
                    target={cta.target}
                    className="inline-flex items-center justify-center rounded-lg bg-white px-[24px] py-[12px] text-[14px] font-medium text-indigo-600 transition-colors hover:bg-gray-100"
                  >
                    {cta.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={cta.onClick}
                    className="inline-flex items-center justify-center rounded-lg bg-white px-[24px] py-[12px] text-[14px] font-medium text-indigo-600 transition-colors hover:bg-gray-100"
                  >
                    {cta.label}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Image panel */}
        <div className={`relative w-full md:w-1/2 ${imageOrderClass}`}>
          <div className="relative md:hidden" style={{ height: `${mobileImageHeight}px` }}>
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          </div>
          <div
            className="relative hidden md:block"
            style={{ height: `${desktopHeight}px` }}
          >
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}