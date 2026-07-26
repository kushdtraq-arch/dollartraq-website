import React from "react";
import Image from "next/image";

export interface FeatureCardItem {

  id?: string | number;
  icon?: string;
  iconAlt?: string;
  iconNode?: React.ReactNode;
  title: string;
  description: string;
}

export interface IconFeatureGridProps {

  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureCardItem[];
  columns?: 2 | 3 | 4;
  id?: string;
  className?: string;
}

const COLUMN_CLASSES: Record<NonNullable<IconFeatureGridProps["columns"]>, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

function FeatureIcon({ item }: { item: FeatureCardItem }) {
  if (item.iconNode) {
    return (
      <div className="flex h-[43px] w-[43px] items-center justify-center">
        {item.iconNode}
      </div>
    );
  }
  if (item.icon) {
    return (
      <div className="relative h-[43px] w-[43px]">
        <Image
          src={item.icon}
          alt={item.iconAlt ?? ""}
          width={43}
          height={43}
          className="h-[43px] w-[43px] object-contain"
        />
      </div>
    );
  }
  return null;
}

export default function IconFeatureGrid({
  eyebrow,
  title,
  description,
  items,
  columns = 4,
  id,
  className = "",
}: IconFeatureGridProps) {
  return (
    <section id={id} className={`w-full py-[64px] md:py-[96px] ${className}`}>
      <div className="mx-auto max-w-[1240px] px-[24px] lg:px-[32px]">
        {/* Header row: heading left, description right */}
        <div className="flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between md:gap-[48px]">
          <div className="md:max-w-[560px]">
            {eyebrow && (
              <p className="!mb-[12px] !text-[14px] !leading-[20px] !font-semibold !uppercase !tracking-wide !text-indigo-600">
                {eyebrow}
              </p>
            )}
            <h2 className="!text-[26px] !leading-[32px] sm:!text-[32px] sm:!leading-[38px] !font-medium !text-gray-900 !m-0">
              {title}
            </h2>
          </div>
          {description && (
            <p className="!text-[14px] !leading-[22px] !text-gray-600 !font-normal md:max-w-[360px] md:pt-[8px]">
              {description}
            </p>
          )}
        </div>

        {/* Card grid */}
        <div
          className={`mt-[40px] grid grid-cols-1 gap-[20px] sm:grid-cols-2 ${COLUMN_CLASSES[columns]}`}
        >
          {items.map((item, i) => (
            <div
              key={item.id ?? i}
              className="flex flex-col gap-[24px] bg-[#F2F2ED] px-[24px] py-[28px]"
            >
              <FeatureIcon item={item} />
              <div>
                <h3 className="!text-[16px] !leading-[22px] !font-semibold !text-gray-900 !m-0">
                  {item.title}
                </h3>
                <p className="!mt-[10px] !text-[14px] !leading-[21px] !text-gray-500 !font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}