import React from "react";
import Link from "next/link";
import { Radar, ArrowRight } from "lucide-react";

// Next.js App Router convention: place this file at app/not-found.tsx
// It renders inside your RootLayout (Header + Footer still show), so it
// picks up the same transparent-header behavior as your Hero sections.

export default function NotFound() {
    return (
        <section className="relative w-full min-h-screen -mt-[72px] pt-[72px] flex items-center justify-center overflow-hidden bg-[#070B14] font-sans">
            {/* Keyframes for the radar signature element */}
            <style>{`
                @keyframes dt-radar-spin {
                    to { transform: rotate(360deg); }
                }
                @keyframes dt-radar-ping {
                    0% { transform: scale(0.55); opacity: 0.5; }
                    80%, 100% { transform: scale(1.15); opacity: 0; }
                }
            `}</style>

            {/* Background: deep navy wash + faint dot grid, matching the site's port/night palette */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(37,99,235,0.16),transparent)]" />
                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070B14]" />
            </div>

            {/* Signature element: a radar sweep searching for a route it can't find */}
            <div
                className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
                aria-hidden="true"
            >
                <div className="relative w-[560px] h-[560px] max-w-[92vw] max-h-[92vw]">
                    {/* concentric rings */}
                    <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
                    <div className="absolute inset-[15%] rounded-full border border-white/[0.07]" />
                    <div className="absolute inset-[30%] rounded-full border border-white/[0.08]" />
                    <div className="absolute inset-[45%] rounded-full border border-white/[0.10]" />

                    {/* pulsing scan rings */}
                    <div className="absolute inset-[30%] rounded-full border border-blue-400/30 motion-safe:[animation:dt-radar-ping_3.4s_ease-out_infinite]" />
                    <div className="absolute inset-[30%] rounded-full border border-blue-400/30 motion-safe:[animation:dt-radar-ping_3.4s_ease-out_infinite] [animation-delay:1.7s]" />

                    {/* rotating sweep beam */}
                    <div className="absolute inset-0 rounded-full overflow-hidden motion-safe:[animation:dt-radar-spin_7s_linear_infinite]">
                        <div
                            className="absolute inset-0"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, rgba(37,99,235,0.35), transparent 28%, transparent 100%)",
                            }}
                        />
                    </div>

                    {/* center blip */}
                    <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[640px] w-full px-6 sm:px-10 flex flex-col items-center text-center">
                {/* Tracking-chip eyebrow, echoing the carrier profile chips (MC# / DOT#) from the product UI */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 backdrop-blur-sm">
                    <Radar size={14} className="text-blue-400" />
                    <span className="font-mono text-[12px] tracking-[0.14em] text-blue-300/90">
                        ROUTE&nbsp;#404
                    </span>
                    <span className="h-1 w-1 rounded-full bg-white/20" />
                    <span className="font-mono text-[12px] tracking-[0.14em] text-white/50">
                        COMING SOON
                    </span>
                </div>

                <h1 className="mt-7 text-[32px] sm:text-[42px] md:text-[48px] font-semibold tracking-tight text-white leading-[1.15]">
                    The page you requested could not be found.
                </h1>

                <p className="mt-4 text-[15px] sm:text-[16px] text-gray-400 leading-relaxed max-w-[480px]">
                    The page you&apos;re looking for doesn&apos;t exist, moved, or is
                    still in transit. We&apos;re building it out — check back soon.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <Link href="/">
                        <button className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 active:scale-[0.98] text-black rounded-lg px-6 py-3 text-[14px] font-semibold whitespace-nowrap transition-all shadow-sm">
                            Back to home
                        </button>
                    </Link>

                    <Link
                        href="/product"
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        Explore what we do
                        <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
}