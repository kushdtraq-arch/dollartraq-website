import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface AgentCardItem {
  id?: string | number;
  image?: string;
  imageAlt?: string;
  graphicNode?: React.ReactNode;
  title: string;
  subtitle: string;
  href?: string; 
}

export interface AgentShowcaseProps {
  title: string;
  items: AgentCardItem[];
  columns?: 2 | 3 | 4;
  id?: string;
  className?: string;
}

const COLUMN_CLASSES: Record<NonNullable<AgentShowcaseProps["columns"]>, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

function AgentGraphic({ item }: { item: AgentCardItem }) {
  if (item.graphicNode) {
    return (
      <div className="relative flex h-[180px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#DCE7FB] to-[#8FA9E8]">
        {item.graphicNode}
      </div>
    );
  }
  if (item.image) {
    return (
      <div className="relative h-[180px] w-full overflow-hidden bg-gradient-to-b from-[#DCE7FB] to-[#8FA9E8]">
        <Image
          src={item.image}
          alt={item.imageAlt ?? ""}
          fill
          className="object-cover"
        />
      </div>
    );
  }
  return <div className="h-[180px] w-full bg-gradient-to-b from-[#DCE7FB] to-[#8FA9E8]" />;
}

export default function AgentShowcase({
  title,
  items,
  columns = 4,
  id,
  className = "",
}: AgentShowcaseProps) {
  return (
    <section id={id} className={`w-full bg-[#F6F4EE] ${className}`}>
      <div className="mx-auto max-w-[1240px] px-[24px] py-[64px] lg:px-[32px]">
        <h2 className="!text-[30px] !leading-[36px] sm:!text-[34px] sm:!leading-[40px] !font-medium !text-gray-900 !m-0 !mb-[32px] text-center">
          {title}
        </h2>

        <div
          className={`grid grid-cols-1 gap-[20px] sm:grid-cols-2 ${COLUMN_CLASSES[columns]}`}
        >
          {items.map((item, i) => {
            const cardBody = (
              <>
                <AgentGraphic item={item} />
                <div className="px-[20px] py-[18px]">
                  <h3 className="!text-[16px] !leading-[22px] !font-semibold !text-gray-900 !m-0">
                    {item.title}
                  </h3>
                  <p className="!mt-[4px] !text-[14px] !leading-[20px] !text-gray-500 !font-normal !m-0">
                    {item.subtitle}
                  </p>
                </div>
              </>
            );

            const cardClasses =
              "flex flex-col overflow-hidden rounded-[14px] border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]";

            return item.href ? (
              <Link
                key={item.id ?? i}
                href={item.href}
                className={cardClasses}
              >
                {cardBody}
              </Link>
            ) : (
              <div key={item.id ?? i} className={cardClasses}>
                {cardBody}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}