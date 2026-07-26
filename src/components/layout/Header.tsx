"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    Menu,
    X,
    ChevronDown,
    Triangle,
    Diamond,
    AlertTriangle,
    FileText,
    Radar,
    Grid3x3,
    Link2,
    Shield,
    Circle,
    Info,
    HelpCircle,
} from "lucide-react";
import gsap from "gsap";

interface NavLink {
    page: string;
    label: string;
    link: string;
}

interface SubMenuItem {
    icon: React.ElementType;
    iconBg: string;
    iconColor: string;
    title: string;
    subtitle: string;
    link: string;
}

interface SubMenuConfig {
    columns: 1 | 2;
    items: SubMenuItem[];
}

interface HeaderProps {
    active_page?: string;
}

const NAV_LINKS: NavLink[] = [
    { page: "product", label: "Product", link: "/product" },
    { page: "ai-agents", label: "AI Agents", link: "/ai-agents" },
    { page: "solutions", label: "Solutions", link: "/solutions/freight-brokers" },
    { page: "pricing", label: "Pricing", link: "/pricing" },
    { page: "compare", label: "Compare", link: "/compare" },
    { page: "company", label: "Company", link: "/company/about" },
];

const PRODUCT_SUBMENU: SubMenuItem[] = [
    {
        icon: Triangle,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        title: "Carrier Vetting & Trust Score",
        subtitle: "Owned FMCSA data · seconds, not days",
        link: "/product/carrier-vetting",
    },
    {
        icon: Diamond,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        title: "Carrier Onboarding",
        subtitle: "KYC · liveness · CDL · Stripe Express",
        link: "/product/carrier-onboarding",
    },
    {
        icon: AlertTriangle,
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
        title: "Fraud Prevention",
        subtitle: "Double brokering & chameleon detection",
        link: "/product/fraud-prevention",
    },
    {
        icon: FileText,
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        title: "COI Verification",
        subtitle: "AI-read certificates, expiry watched",
        link: "/product/coi-verification",
    },
    {
        icon: Radar,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        title: "Load Tracking",
        subtitle: "ELD-live · late risk predicted early",
        link: "/product/load-tracking",
    },
    {
        icon: Grid3x3,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        title: "DT Pay",
        subtitle: "Conditional payment release · 1.2% flat",
        link: "/product/dt-pay",
    },
    {
        icon: Diamond,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-700",
        title: "Platform Overview",
        subtitle: "One OS, shared memory, full audit",
        link: "/product/platform-overview",
    },
    {
        icon: Link2,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        title: "Integrations",
        subtitle: "Inbox · ELD · TMS · Stripe · FMCSA",
        link: "/product/integrations",
    },
];

const AI_AGENTS_SUBMENU: SubMenuItem[] = [
    {
        icon: Diamond,
        iconBg: "bg-violet-50",
        iconColor: "text-violet-500",
        title: "Meet the 4+1",
        subtitle: "Sentinel · Rate · Tracker · Vault + Fleetra",
        link: "/ai-agents",
    },
    {
        icon: Shield,
        iconBg: "bg-red-50",
        iconColor: "text-red-500",
        title: "Sentinel",
        subtitle: "Trust the carrier",
        link: "/ai-agents/sentinel",
    },
    {
        icon: Triangle,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        title: "Rate",
        subtitle: "Price the load",
        link: "/ai-agents/rate",
    },
    {
        icon: Circle,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        title: "Tracker",
        subtitle: "Follow the load",
        link: "/ai-agents/tracker",
    },
    {
        icon: FileText,
        iconBg: "bg-indigo-50",
        iconColor: "text-indigo-600",
        title: "Vault",
        subtitle: "File the paper",
        link: "/ai-agents/vault",
    },
    {
        icon: Diamond,
        iconBg: "bg-violet-50",
        iconColor: "text-violet-500",
        title: "Fleetra",
        subtitle: "Orchestrate the team",
        link: "/ai-agents/fleetra",
    },
];

const SOLUTIONS_SUBMENU: SubMenuItem[] = [
    {
        icon: Diamond,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        title: "Freight Brokers",
        subtitle: "The core: vet, track, pay",
        link: "/solutions/freight-brokers",
    },
    {
        icon: Diamond,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        title: "3PLs & Forwarders",
        subtitle: "Scale compliance across desks",
        link: "/solutions/3pls-forwarders",
    },
    {
        icon: Diamond,
        iconBg: "bg-amber-50",
        iconColor: "text-amber-600",
        title: "Shippers",
        subtitle: "Know who touches your freight",
        link: "/solutions/shippers",
    },
    {
        icon: Diamond,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-700",
        title: "Carriers",
        subtitle: "Onboard once, get paid fast",
        link: "/solutions/carriers",
    },
];

const COMPANY_SUBMENU: SubMenuItem[] = [
    {
        icon: Info,
        iconBg: "bg-gray-100",
        iconColor: "text-gray-700",
        title: "About",
        subtitle: "Built by freight operators",
        link: "/company/about",
    },
    {
        icon: Shield,
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-600",
        title: "Security & Trust",
        subtitle: "Human-in-the-loop by architecture",
        link: "/company/security-trust",
    },
    {
        icon: HelpCircle,
        iconBg: "bg-blue-50",
        iconColor: "text-blue-600",
        title: "FAQ",
        subtitle: "Straight answers",
        link: "/company/faqs",
    },
];

const SUBMENUS: Partial<Record<string, SubMenuConfig>> = {
    product: { columns: 2, items: PRODUCT_SUBMENU },
    "ai-agents": { columns: 1, items: AI_AGENTS_SUBMENU },
    solutions: { columns: 1, items: SOLUTIONS_SUBMENU },
    company: { columns: 1, items: COMPANY_SUBMENU },
};

const APPLICATION_URL = process.env.NEXT_PUBLIC_APPLICATION_URL || "#";

const Header: React.FC<HeaderProps> = ({ active_page }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
    const headerRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();

    const resolvedActivePage =
        active_page ??
        NAV_LINKS.find(
            (_link) =>
                pathname === _link.link || pathname?.startsWith(`${_link.link}/`)
        )?.page;

    useEffect(() => {
        if (!headerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                headerRef.current,
                { y: -80, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
            );

            if (navRef.current) {
                gsap.fromTo(
                    navRef.current.children,
                    { y: -10, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.4,
                        stagger: 0.05,
                        delay: 0.2,
                        ease: "power2.out",
                    }
                );
            }
        }, headerRef);

        return () => ctx.revert();
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
                setOpenMobileMenu(null);
            } else {
                setOpenDesktopMenu(null);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
        setOpenMobileMenu(null);
    };

    const mobileMenuMountRef = (node: HTMLDivElement | null) => {
        if (node) {
            gsap.fromTo(
                node,
                { opacity: 0, height: 0 },
                { opacity: 1, height: "auto", duration: 0.3, ease: "power2.out" }
            );
        }
    };

    const handleDesktopMouseEnter = (page: string) => {
        if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        if (SUBMENUS[page]) setOpenDesktopMenu(page);
    };

    const handleDesktopMouseLeave = () => {
        closeTimeoutRef.current = setTimeout(() => setOpenDesktopMenu(null), 120);
    };

    const toggleMobileSubmenu = (page: string) => {
        setOpenMobileMenu((prev) => (prev === page ? null : page));
    };

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            onMouseLeave={handleDesktopMouseLeave}
        >
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between h-[72px] px-4 sm:px-6 md:px-8 lg:px-10 relative">

                {/* Logo Area */}
                <Link href="/" className="shrink-0 flex items-center select-none">
                    <Image
                        src="/images/dollar-traq-logo.png"
                        alt="DollarTraq"
                        width={140}
                        height={45}
                        priority
                        className="w-[130px] md:w-[145px] h-auto object-contain"
                    />
                </Link>

                {/* Flat Navigation Block */}
                <nav
                    ref={navRef}
                    className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium text-black"
                >
                    {NAV_LINKS.map((_link) => {
                        const hasSubmenu = Boolean(SUBMENUS[_link.page]);
                        const isOpen = openDesktopMenu === _link.page;
                        const isActive = resolvedActivePage === _link.page;
                        return (
                            <div
                                key={_link.page}
                                className="relative"
                                onMouseEnter={() => handleDesktopMouseEnter(_link.page)}
                            >
                                <Link
                                    href={_link.link}
                                    className={`flex items-center gap-1 whitespace-nowrap hover:text-blue-600 transition-colors py-2 ${
                                        isActive ? "text-blue-600 font-semibold" : ""
                                    }`}
                                    aria-haspopup={hasSubmenu}
                                    aria-expanded={hasSubmenu ? isOpen : undefined}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    {_link.label}
                                    {hasSubmenu && (
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-200 ${
                                                isOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    )}
                                </Link>

                                {/* Desktop mega-menu dropdown */}
                                {hasSubmenu && (
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 origin-top ${
                                            isOpen
                                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                                : "opacity-0 -translate-y-1 pointer-events-none"
                                        }`}
                                    >
                                        <div
                                            className={`w-[92vw] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 ${
                                                SUBMENUS[_link.page]!.columns === 2
                                                    ? "max-w-[640px] xl:max-w-[720px]"
                                                    : "max-w-[420px]"
                                            }`}
                                        >
                                            <div
                                                className={`grid gap-x-8 gap-y-1 ${
                                                    SUBMENUS[_link.page]!.columns === 2
                                                        ? "grid-cols-1 sm:grid-cols-2"
                                                        : "grid-cols-1"
                                                }`}
                                            >
                                                {SUBMENUS[_link.page]!.items.map((item) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <Link
                                                            key={item.title}
                                                            href={item.link}
                                                            className="flex items-start gap-3 rounded-lg p-2.5 -mx-2.5 hover:bg-gray-50 transition-colors"
                                                            onClick={() => setOpenDesktopMenu(null)}
                                                        >
                                                            <span
                                                                className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
                                                            >
                                                                <Icon size={18} />
                                                            </span>
                                                            <span className="min-w-0">
                                                                <span className="block text-[14.5px] font-semibold text-black leading-snug">
                                                                    {item.title}
                                                                </span>
                                                                <span className="block text-[13px] text-gray-500 leading-snug mt-0.5">
                                                                    {item.subtitle}
                                                                </span>
                                                            </span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </nav>

                {/* Main Action Terminals */}
                <div className="hidden lg:flex items-center gap-4 xl:gap-5">
                    <Link
                        href={APPLICATION_URL}
                        target="_blank"
                        className="text-[15px] font-medium text-black hover:text-gray-600 transition-colors px-1"
                    >
                        Login
                    </Link>

                    <Link href="/contact">
                        <button className="bg-[#0FBD55] hover:from-emerald-600 hover:to-emerald-700 active:scale-[0.98] text-white rounded-lg px-5 py-2.5 text-[14px] font-medium whitespace-nowrap transition-all shadow-sm">
                            Contact
                        </button>
                    </Link>

                    <Link href="/demo">
                        <button className="bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white rounded-lg px-5 py-2.5 text-[14px] font-medium whitespace-nowrap transition-all shadow-sm">
                            Demo
                        </button>
                    </Link>
                </div>

                {/* Responsive Mobile Toggle Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleMobileMenu}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileMenuOpen}
                        className="p-2 -mr-2 rounded-md hover:bg-gray-50 text-gray-700 active:scale-95 transition-all"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div
                    ref={mobileMenuMountRef}
                    className="lg:hidden bg-white w-full border-t border-gray-100 shadow-lg overflow-y-auto max-h-[calc(100vh-72px)]"
                >
                    <nav className="flex flex-col gap-1 p-4 text-black font-medium text-[15px]">
                        {NAV_LINKS.map((_link) => {
                            const hasSubmenu = Boolean(SUBMENUS[_link.page]);
                            const isOpen = openMobileMenu === _link.page;
                            const isActive = resolvedActivePage === _link.page;
                            return (
                                <div key={`mobile_${_link.page}`}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={_link.link}
                                            className={`flex-1 py-3 px-2 rounded-md hover:bg-gray-50 block transition-colors ${
                                                isActive ? "text-blue-600 font-semibold" : ""
                                            }`}
                                            onClick={toggleMobileMenu}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {_link.label}
                                        </Link>
                                        {hasSubmenu && (
                                            <button
                                                onClick={() => toggleMobileSubmenu(_link.page)}
                                                aria-label={`Toggle ${_link.label} submenu`}
                                                aria-expanded={isOpen}
                                                className="p-3 -ml-1 text-gray-500"
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform duration-200 ${
                                                        isOpen ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </button>
                                        )}
                                    </div>

                                    {hasSubmenu && isOpen && (
                                        <div className="pl-2 pb-2 flex flex-col gap-1">
                                            {SUBMENUS[_link.page]!.items.map((item) => {
                                                const Icon = item.icon;
                                                return (
                                                    <Link
                                                        key={item.title}
                                                        href={item.link}
                                                        className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-50 transition-colors"
                                                        onClick={toggleMobileMenu}
                                                    >
                                                        <span
                                                            className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${item.iconBg} ${item.iconColor}`}
                                                        >
                                                            <Icon size={16} />
                                                        </span>
                                                        <span className="min-w-0">
                                                            <span className="block text-[14px] font-semibold text-black leading-snug">
                                                                {item.title}
                                                            </span>
                                                            <span className="block text-[12.5px] text-gray-500 leading-snug mt-0.5">
                                                                {item.subtitle}
                                                            </span>
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                            <Link
                                href={APPLICATION_URL}
                                target="_blank"
                                className="py-2 px-2 text-center rounded-md hover:bg-gray-50 transition-colors text-[15px]"
                                onClick={toggleMobileMenu}
                            >
                                Login
                            </Link>

                            <Link href="/contact" onClick={toggleMobileMenu} className="w-full">
                                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg w-full py-3 font-medium transition-all">
                                    Contact
                                </button>
                            </Link>

                            <Link href="/demo" onClick={toggleMobileMenu} className="w-full">
                                <button className="bg-blue-600 text-white rounded-lg w-full py-3 font-medium transition-all">
                                    Demo
                                </button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;