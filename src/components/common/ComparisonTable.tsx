"use client";

import React from "react";
import { motion } from "framer-motion";

interface CompetitorMeta {
    name: string;
    subtitle?: string;
}

type CellType = "check" | "cross" | "text";

interface CompetitorCell {
    type: CellType;
    
    value?: string;
    note?: string;
    color?: string;
}

interface FeaturedCell {
    type?: "check" | "cross" | "text";
    value?: string;
    note?: string;
    
    emphasize?: boolean;
}

interface ComparisonRow {
    label: string;
    
    competitorCells: CompetitorCell[];
    featuredCell: FeaturedCell;
    highlight?: boolean;
}

interface ComparisonTableProps {
    capabilityHeader?: string;
    competitors?: CompetitorMeta[];
    featured?: CompetitorMeta;
    rows?: ComparisonRow[];
   
    accentColor?: string;
    
    valueColor?: string;
    backgroundColor?: string;
    highlightColor?: string;
    featuredColumnStyle?: "plain" | "accent";
    align?: "left" | "center";
    className?: string;
}

const DEFAULT_COMPETITORS: CompetitorMeta[] = [
    { name: "Highway" },
    { name: "Descartes", subtitle: "MyCarrierPortal" },
    { name: "RMIS" },
];

const DEFAULT_FEATURED: CompetitorMeta = { name: "Dollar Traq" };

const DEFAULT_ROWS: ComparisonRow[] = [
    {
        label: "Carrier identity & vetting",
        competitorCells: [{ type: "check" }, { type: "check" }, { type: "check" }],
        featuredCell: { value: "Yes", note: "on self hosted FMCSA data" },
    },
    {
        label: "Insurance monitoring",
        competitorCells: [{ type: "check" }, { type: "check" }, { type: "check" }],
        featuredCell: { value: "Yes", note: "AI-read + holder-verified" },
    },
    {
        label: "Fraud / double-brokering detection",
        competitorCells: [
            { type: "text", value: "Included (Load Lock) · email/VoIP fraud sold as add-ons" },
            { type: "check" },
            { type: "text", value: "Limited" },
        ],
        featuredCell: { value: "Included + chameleon census diffs" },
    },

    {
        label: "Live ELD load tracking",
        competitorCells: [{ type: "check" }, { type: "cross" }, { type: "check" }],
        featuredCell: { type: "check" },
    },
    {
        label: "AI agents with human-in-the-loop",
        competitorCells: [{ type: "cross" }, { type: "cross" }, { type: "cross" }],
        featuredCell: { value: "4+1, approval architecture" },
    },
    {
        label: "Built-in carrier payment rail",
        competitorCells: [{ type: "cross" }, { type: "cross" }, { type: "cross" }],
        featuredCell: { value: "DT Pay · 1.2% flat" },
    },
    {
        label: "Published entry price",
        competitorCells: [
            { type: "text", value: "Quote only — not published", note: "Reported SMB deals $1,500–$2,500/mo" },
            { type: "text", value: "from $515/mo" },
            { type: "text", value: "$340/mo (RMIS Lite) — Pro is quote-only" },
        ],
        featuredCell: { value: "$299/mo", note: "DT PAY AT 1.2% — NO PLATFORM SURCHARGE", emphasize: true },
    },
];

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
        <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12.3 10.6 15 16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CrossIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-rose-300">
        <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const rowVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

const ComparisonTable: React.FC<ComparisonTableProps> = ({
    capabilityHeader = "CAPABILITY",
    competitors = DEFAULT_COMPETITORS,
    featured = DEFAULT_FEATURED,
    rows = DEFAULT_ROWS,
    accentColor = "#2f6feb",
    valueColor = "#16a34a",
    backgroundColor = "#faf9f5",
    highlightColor = "#e8f0e9",
    featuredColumnStyle = "accent",
    align = "center",
    className = "",
}) => {
    const gridTemplate = `minmax(200px,1.4fr) repeat(${competitors.length}, minmax(120px,1fr)) minmax(150px,1.15fr)`;

    return (
        <section
            className={`w-full py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 font-sans ${className}`}
            style={{ backgroundColor }}
        >
            <div className="max-w-[1200px] mx-auto overflow-x-auto">
                <div
                    className="grid min-w-[760px] rounded-2xl overflow-hidden bg-white"
                    style={{ gridTemplateColumns: gridTemplate }}
                >
                    {/* ---- header row ---- */}
                    <div className={`bg-transparent px-5 py-6 flex items-end ${align === "left" ? "justify-start text-left" : "justify-center text-center"}`}>
                        <span className="text-[11px] tracking-wider font-medium text-gray-400 uppercase">
                            {capabilityHeader}
                        </span>
                    </div>

                    {competitors.map((c, i) => (
                        <div key={`head_${i}`} className="px-4 py-6 text-center flex flex-col justify-end">
                            <span className="text-[16px] sm:text-[17px] font-medium text-gray-800">{c.name}</span>
                            {c.subtitle && <span className="text-[12px] text-gray-400 mt-0.5">{c.subtitle}</span>}
                        </div>
                    ))}

                    <div
                        className="px-4 py-6 text-center flex flex-col justify-end rounded-t-xl"
                        style={
                            featuredColumnStyle === "plain"
                                ? undefined
                                : {
                                      backgroundColor: `${accentColor}26`,
                                      borderTop: `3px solid ${accentColor}`,
                                  }
                        }
                    >
                        <span
                            className={featuredColumnStyle === "plain" ? "text-[16px] sm:text-[17px] font-bold text-gray-900" : "text-[16px] sm:text-[17px] font-bold"}
                            style={featuredColumnStyle === "plain" ? undefined : { color: accentColor }}
                        >
                            {featured.name}
                        </span>
                        {featured.subtitle && (
                            <span
                                className="text-[12px] mt-0.5"
                                style={featuredColumnStyle === "plain" ? undefined : { color: accentColor }}
                            >
                                {featured.subtitle}
                            </span>
                        )}
                    </div>

                    {/* ---- body rows ---- */}
                    {rows.map((row, rowIndex) => {
                        const zebra = rowIndex % 2 === 1;
                        const isLast = rowIndex === rows.length - 1;
                        const rowStyle = row.highlight ? { backgroundColor: highlightColor } : undefined;
                        const rowBgClass = row.highlight
                            ? ""
                            : zebra
                            ? "bg-black/[0.015]"
                            : "bg-transparent";
                        return (
                            <React.Fragment key={`row_${rowIndex}`}>
                                <motion.div
                                    variants={rowVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className={`px-5 py-7 flex items-center border-t border-gray-100 ${rowBgClass} ${
                                        align === "left" ? "justify-start" : "justify-center"
                                    }`}
                                    style={rowStyle}
                                >
                                    <span className="text-[14px] sm:text-[15px] text-gray-800">{row.label}</span>
                                </motion.div>

                                {row.competitorCells.map((cell, ci) => (
                                    <motion.div
                                        key={`row_${rowIndex}_cell_${ci}`}
                                        variants={rowVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        className={`px-4 py-7 flex items-center justify-center text-center border-t border-gray-100 ${rowBgClass}`}
                                        style={rowStyle}
                                    >
                                        {cell.type === "check" && <CheckIcon />}
                                        {cell.type === "cross" && <CrossIcon />}
                                        {cell.type === "text" && (
                                            <div className="flex flex-col items-center">
                                                <span
                                                    className="text-[13px] sm:text-[14px] text-gray-500"
                                                    style={cell.color ? { color: cell.color } : undefined}
                                                >
                                                    {cell.value}
                                                </span>
                                                {cell.note && (
                                                    <span className="mt-1 text-[11px] text-gray-400">
                                                        {cell.note}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}

                                <motion.div
                                    variants={rowVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    className={`px-4 py-7 flex flex-col items-center justify-center text-center border-t border-gray-100 ${rowBgClass} ${
                                        isLast ? "rounded-b-xl" : ""
                                    }`}
                                    style={rowStyle}
                                >
                                    {row.featuredCell.type === "check" && <CheckIcon />}
                                    {row.featuredCell.type === "cross" && <CrossIcon />}
                                    {(!row.featuredCell.type || row.featuredCell.type === "text") && (
                                        <>
                                            <span
                                                className={
                                                    row.featuredCell.emphasize
                                                        ? "text-[24px] sm:text-[26px] font-bold"
                                                        : "text-[13px] sm:text-[14px] font-medium"
                                                }
                                                style={{ color: valueColor }}
                                            >
                                                {row.featuredCell.value}
                                            </span>
                                            {row.featuredCell.note && (
                                                <span
                                                    className={`mt-1 ${
                                                        row.featuredCell.emphasize
                                                            ? "text-[11px] font-semibold tracking-wide uppercase"
                                                            : "text-[12px]"
                                                    }`}
                                                    style={{ color: valueColor, opacity: row.featuredCell.emphasize ? 1 : 0.8 }}
                                                >
                                                    {row.featuredCell.note}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </motion.div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ComparisonTable;