"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const productLinks = [
    { label: "Load Tracking", link: "/product/load-tracking" },
    { label: "Carrier Vetting", link: "/product/carrier-vetting" },
    { label: "Fraud Prevention", link: "/product/fraud-prevention" },
    { label: "COI Verification", link: "/product/coi-verification" },
    { label: "DT Pay Network", link: "/product/dt-pay" },
    { label: "Carrier Onboarding", link: "/product/carrier-onboarding" },
    { label: "Platform Overview", link: "/product/platform-overview" },
    { label: "Integration ", link: "/product/integrations" },
];

const solutionLinks = [
    { label: "Freight Brokers", link: "/solutions/freight-brokers" },
    { label: "Shippers", link: "/solutions/shippers" },
    { label: "3PLs & Forwarders", link: "/solutions/3pls-forwarders" },
    { label: "Carriers", link: "/solutions/carriers" },
];

const resourceLinks = [
    { label: "Blog & Insights", link: "/blogs" },
    { label: "FAQs", link: "/company/faqs" },
    { label: "Developers", link: "https://developers.dollartraq.com/", external: true },

];

const companyLinks = [
    { label: "About Us", link: "/company/about" },
    { label: "Book a Demo", link: "/demo" },
    { label: "Contact", link: "/contact" },
    { label: "Privacy Policy", link: "/privacy-policy" },
    { label: "Terms of Service", link: "/terms-of-service" },
     { label: "Data Processing Addendum", link: "/dpa" },
     { label: "SubProcessors", link: "/subprocessors" },
     { label: "Privacy Request", link: "/privacy-request" },
   
];

const Footer: React.FC = () => {
    return (
        <footer className="w-full px-3 md:px-4 pb-3 md:pb-4 pt-6 font-sans">
            {/* Main rounded container matching the vibrant blue gradient */}
            <div className="relative w-full rounded-[28px] md:rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0c24f5] via-[#1030ff] to-[#0c24f5] text-white shadow-2xl">
                
                {/* Soft purple glow blobs */}
                <div className="pointer-events-none absolute -left-10 top-0 h-full w-1/2 bg-gradient-to-br from-purple-500/30 to-transparent blur-3xl" />
                <div className="pointer-events-none absolute right-0 top-20 h-2/3 w-1/3 bg-gradient-to-bl from-purple-400/20 to-transparent blur-[120px]" />

                {/* CTA section */}
                <div className="relative max-w-[1240px] mx-auto px-8 md:px-16 pt-8  md:pt-8  flex flex-col md:flex-row items-center justify-between z-10">
                    <div className="max-w-2xl">
                        {/* Tagline Pill */}
                        <div className="inline-block bg-white text-black text-[10px] md:text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-6 uppercase shadow-sm">
                            Join the AI Revolution
                        </div>

                        

                    </div>
                    
                    {/* 3D Graphic */}
                    <div className="mt-16 md:mt-0 md:mr-4 lg:mr-12 flex-shrink-0 relative w-[140px] h-[140px] md:w-[160px] md:h-[160px]">
                        <Image
                            src="/images/three-d.png"
                            alt="AI Cube"
                            fill
                            className="object-contain drop-shadow-2xl opacity-90"
                        />
                    </div>
                </div>

                {/* Divider */}
                <div className="relative max-w-[1240px] mx-auto px-8 md:px-16 z-10">
                    <div className="border-t border-white/10" />
                </div>

                {/* Link columns */}
                <div className="relative max-w-[1240px] mx-auto px-8 md:px-16 py-14 z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 justify-between">
                        
                        {/* Brand column */}
                        <div className="flex-shrink-0 w-full lg:w-[260px]">
                            <div className="relative w-[150px] h-[50px] mb-3">
                                <Image
                                    src="/images/dollar-traq-white-logo-cropped.png"
                                    alt="Dollar Traq"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-[14px] text-white/90 mt-5 mb-6">
                                The AI operating system for US freight brokers
                            </p>
                            
                            <address className="text-[13px] text-white/70 not-italic leading-relaxed mb-6">
                                1560 Wall St, Naperville, IL 60563
                            </address>
                            {/* Social Icons */}
                            <div className="flex items-center gap-3">

                                <a href="https://x.com/dollartraq?s=11" aria-label="X" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition">
                                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.9 2H22l-7.6 8.68L23 22h-6.9l-5.4-6.9L4.5 22H1.4l8.1-9.3L1 2h7.1l4.9 6.3L18.9 2Zm-1.2 18h1.7L7.4 3.9H5.6L17.7 20Z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/dollar.traq?igsh=MWJmemxueGFleHZiMA==" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="4" />
                                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/dollar-traq/" aria-label="LinkedIn" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 hover:border-white transition">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.5 9.5h5V21h-5V9.5Zm7.5 0h4.8v1.57h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.06 6 7.04V21h-5v-4.86c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.26-1.87 2.57V21h-5V9.5Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Links Grid */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 lg:ml-8">
                            {/* Products */}
                            <div>
                                <h4 className="text-white text-[15px] font-semibold mb-5">Products</h4>
                                <ul className="flex flex-col gap-4">
                                    {productLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link} className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div>
                                <h4 className="text-white text-[15px] font-semibold mb-5">Solutions</h4>
                                <ul className="flex flex-col gap-4">
                                    {solutionLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link} className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            
                            <div>
                                <h4 className="text-white text-[15px] font-semibold mb-5">Resources</h4>
                                <ul className="flex flex-col gap-4">
                                    {resourceLinks.map((item, index) => (
                                        <li key={index}>
                                            {item.external ? (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                                                >
                                                    {item.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={item.link}
                                                    className="text-[13px] text-white/70 hover:text-white transition-colors duration-200"
                                                >
                                                    {item.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h4 className="text-white text-[15px] font-semibold mb-5">Company</h4>
                                <ul className="flex flex-col gap-4">
                                    {companyLinks.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link} className="text-[13px] text-white/70 hover:text-white transition-colors duration-200">
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="relative max-w-[1240px] mx-auto px-8 md:px-16 z-10">
                    <div className="border-t border-white/10" />
                </div>
                <div className="relative max-w-[1240px] mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/60 z-10">
                    <span>© 2026 Dollar Traq</span>
                    <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;