"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
    Menu,
    X,
    ChevronDown,
    Truck,
    UserPlus,
    ShieldAlert,
    FileCheck2,
    Waypoints,
    CreditCard,
    FileSearch,
    Puzzle,
    LayoutGrid,
    Shield,
    Target,
    Radar,
    Archive,
    Workflow,
    PackageSearch,
    PackageCheck,
    Info,
    HelpCircle,
} from "lucide-react";
import gsap from "gsap";

interface NavLink {
    page: string;
    label: string;
    link: string;
    navigable?: boolean;
    matchPrefix?: string;
}

interface SubMenuItem {
    icon: React.ElementType;
    title: string;
    subtitle: string;
    link: string;
}

interface SubMenuGroup {
    heading?: string;
    items: SubMenuItem[];
}

interface SubMenuPromo {
    image: string;
    caption: string;
    ctaLabel: string;
    ctaLink: string;
}

interface SubMenuConfig {
    columns: 1 | 2;
    groups: SubMenuGroup[];
    promo?: SubMenuPromo;
}

interface HeaderProps {
    active_page?: string;
}

const NAV_LINKS: NavLink[] = [
    { page: "product", label: "Product", link: "/product" },
    { page: "ai-agents", label: "AI Agents", link: "/ai-agents" },
    {
        page: "solutions",
        label: "Solutions",
        link: "/solutions/freight-brokers",
        navigable: false,
        matchPrefix: "/solutions",
    },
    {
        page: "company",
        label: "Company",
        link: "/company/about",
        matchPrefix: "/company",
    },
    { page: "pricing", label: "Pricing", link: "/pricing" },
    { page: "compare", label: "Compare", link: "/compare" },

];

const PROMO: SubMenuPromo = {
    image: "/images/sub-menu.png",
    caption: "Bring five MC numbers. Leave with the truth.",
    ctaLabel: "Book a Demo",
    ctaLink: "/demo",
};

const PRODUCT_PROMO: SubMenuPromo = {
    image: "/images/sub-menu.png",
    caption: "Bring five MC numbers. Leave with the truth.",
    ctaLabel: "Book a Demo",
    ctaLink: "/demo",
};

const AI_AGENTS_PROMO: SubMenuPromo = {
    image: "/images/sub-menu-ai-agents.png",
    caption: "Five agents. One desk. Zero guesswork.",
    ctaLabel: "Book a Demo",
    ctaLink: "/demo",
};

const SOLUTIONS_PROMO: SubMenuPromo = {
    image: "/images/sub-menu-solutions.png",
    caption: "Built for every seat at the freight desk.",
    ctaLabel: "Book a Demo",
    ctaLink: "/demo",
};

const PRODUCT_SUBMENU: SubMenuGroup[] = [
    {
        heading: "Verify & Protect",
        items: [
            {
                icon: Truck,
                title: "Carrier Vetting & Trust Score",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/carrier-vetting",
            },
            {
                icon: UserPlus,
                title: "Carrier Onboarding",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/carrier-onboarding",
            },
            {
                icon: ShieldAlert,
                title: "Fraud Prevention",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/fraud-prevention",
            },
            {
                icon: FileCheck2,
                title: "COI Verification",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/coi-verification",
            },
        ],
    },
    {
        heading: "Move & Pay",
        items: [
            {
                icon: Waypoints,
                title: "Load Tracking",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/load-tracking",
            },
            {
                icon: CreditCard,
                title: "DT Pay",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/dt-pay",
            },
            {
                icon: FileSearch,
                title: "Platform Overview",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/platform-overview",
            },
            {
                icon: Puzzle,
                title: "Integrations",
                subtitle: "Owned FMCSA data. Seconds, not days",
                link: "/product/integrations",
            },
        ],
    },
];

const AI_AGENTS_SUBMENU: SubMenuGroup[] = [
    {
        items: [
            {
                icon: Shield,
                title: "Sentinel",
                subtitle: "Trust the carrier",
                link: "/ai-agents/sentinel",
            },
            {
                icon: Target,
                title: "Rate",
                subtitle: "Price the load",
                link: "/ai-agents/rate",
            },
            {
                icon: Radar,
                title: "Tracker",
                subtitle: "Follow the load",
                link: "/ai-agents/tracker",
            },
            {
                icon: Archive,
                title: "Vault",
                subtitle: "File the paper",
                link: "/ai-agents/vault",
            },
            {
                icon: Workflow,
                title: "Fleetra",
                subtitle: "Orchestrate the team",
                link: "/ai-agents/fleetra",
            },
        ],
    },
];

const SOLUTIONS_SUBMENU: SubMenuGroup[] = [
    {
        items: [
            {
                icon: Truck,
                title: "Freight Brokers",
                subtitle: "The core: vet, track, pay",
                link: "/solutions/freight-brokers",
            },
            {
                icon: PackageSearch,
                title: "3PLs & Forwarders",
                subtitle: "Scale compliance across desks",
                link: "/solutions/3pls-forwarders",
            },
            {
                icon: PackageCheck,
                title: "Shippers",
                subtitle: "Know who touches your freight",
                link: "/solutions/shippers",
            },
            {
                icon: Truck,
                title: "Carriers",
                subtitle: "Onboard once, get paid fast",
                link: "/solutions/carriers",
            },
        ],
    },
];

const COMPANY_SUBMENU: SubMenuGroup[] = [
    {
        items: [
            {
                icon: Info,
                title: "About",
                subtitle: "Built for the freight desk",
                link: "/company/about",
            },
            {
                icon: Shield,
                title: "Security & Trust",
                subtitle: "Human-in-the-loop by architecture",
                link: "/company/security-trust",
            },
            {
                icon: HelpCircle,
                title: "FAQ",
                subtitle: "Straight answers",
                link: "/company/faqs",
            },
        ],
    },
];

const SUBMENUS: Partial<Record<string, SubMenuConfig>> = {
    product: { columns: 2, groups: PRODUCT_SUBMENU, promo: PRODUCT_PROMO },
    "ai-agents": { columns: 1, groups: AI_AGENTS_SUBMENU, promo: AI_AGENTS_PROMO },
    solutions: { columns: 1, groups: SOLUTIONS_SUBMENU, promo: SOLUTIONS_PROMO },
   
    company: { columns: 1, groups: COMPANY_SUBMENU },
};

const APPLICATION_URL = process.env.NEXT_PUBLIC_APPLICATION_URL || "#";

const SCROLL_THRESHOLD = 24;

/** Shared render for a single submenu link row (icon + title + subtitle) */
const SubMenuRow: React.FC<{ item: SubMenuItem; onClick: () => void; compact?: boolean }> = ({
    item,
    onClick,
    compact,
}) => {
    const Icon = item.icon;
    return (
        <Link
            href={item.link}
            className="flex items-start gap-3 rounded-lg p-2.5 -mx-2.5 hover:bg-white transition-colors"
            onClick={onClick}
        >
            <span className="shrink-0 w-9 h-9 flex items-center justify-center">
                <Icon
                    width={compact ? 24 : 29}
                    height={compact ? 24 : 29}
                    strokeWidth={1.5}
                    className="text-gray-800"
                />
            </span>
            <span className="min-w-0">
                <span className="block text-[14.5px] font-semibold text-black leading-snug">
                    {item.title}
                </span>
                <span className="block text-[13px] text-gray-400 leading-snug mt-0.5">
                    {item.subtitle}
                </span>
            </span>
        </Link>
    );
};

/** Right-hand promo image panel shown alongside the link columns */
const SubMenuPromoPanel: React.FC<{ promo: SubMenuPromo; onClick: () => void }> = ({
    promo,
    onClick,
}) => (
    <div className="relative w-[220px] xl:w-[260px] shrink-0 rounded-xl overflow-hidden">
        <Image
            src={promo.image}
            alt=""
            fill
            sizes="260px"
            className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full min-h-[210px] p-4">
            <p className="text-white text-[14px] font-medium leading-snug mb-3">
                {promo.caption}
            </p>
            <Link href={promo.ctaLink} onClick={onClick}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium rounded-lg px-4 py-2 transition-colors">
                    {promo.ctaLabel}
                </button>
            </Link>
        </div>
    </div>
);

const Header: React.FC<HeaderProps> = ({ active_page }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
    const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const headerRef = useRef<HTMLElement | null>(null);
    const navRef = useRef<HTMLElement | null>(null);
    const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();

    const resolvedActivePage =
        active_page ??
        NAV_LINKS.find((_link) => {
            const prefix = _link.matchPrefix ?? _link.link;
            return pathname === prefix || pathname?.startsWith(`${prefix}/`);
        })?.page;

    const isSolid = isScrolled || mobileMenuOpen;

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
        const handleScroll = () => {
            setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
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

    const handleDesktopTriggerClick = (page: string) => {
        setOpenDesktopMenu((prev) => (prev === page ? null : page));
    };

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isSolid
                    ? "bg-white border-b border-gray-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                    : "bg-white/10 backdrop-blur-[51.7px] "
            }`}
            onMouseLeave={handleDesktopMouseLeave}
        >
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between h-[72px] px-4 sm:px-6 md:px-8 lg:px-10 relative">

                {/* Logo Area */}
                <Link href="/" className="shrink-0 flex items-center select-none">
                    <Image
                        src={
                            isSolid
                                ? "/images/dollar-traq-logo-cropped.png"
                                : "/images/dollar-traq-white-logo-cropped.png"
                        }
                        alt="Dollar Traq"
                        width={140}
                        height={45}
                        priority
                        className="w-[130px] md:w-[145px] h-auto object-contain transition-opacity duration-300"
                    />
                </Link>

                {/* Flat Navigation Block */}
                <nav
                    ref={navRef}
                    className={`hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-medium transition-colors duration-300 ${
                        isSolid ? "text-black" : "text-white"
                    }`}
                >
                    {NAV_LINKS.map((_link) => {
                        const submenu = SUBMENUS[_link.page];
                        const hasSubmenu = Boolean(submenu);
                        const isOpen = openDesktopMenu === _link.page;
                        const isActive = resolvedActivePage === _link.page;
                        const isNavigable = _link.navigable !== false;

                        const triggerClasses = `flex items-center gap-1 whitespace-nowrap transition-colors py-2 ${
                            isActive
                                ? isSolid
                                    ? "text-blue-600 font-semibold"
                                    : "text-blue-300 font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                                : isSolid
                                ? "hover:text-blue-600"
                                : "hover:text-white/80"
                        } ${!isNavigable ? "cursor-pointer select-none" : ""}`;

                        return (
                            <div
                                key={_link.page}
                                className="relative"
                                onMouseEnter={() => handleDesktopMouseEnter(_link.page)}
                            >
                                {isNavigable ? (
                                    <Link
                                        href={_link.link}
                                        className={triggerClasses}
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
                                ) : (
                                    <button
                                        type="button"
                                        className={triggerClasses}
                                        aria-haspopup={hasSubmenu}
                                        aria-expanded={hasSubmenu ? isOpen : undefined}
                                        onClick={() => handleDesktopTriggerClick(_link.page)}
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
                                    </button>
                                )}

                                {/* Desktop mega-menu dropdown */}
                                {submenu && (
                                    <div
                                        className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 origin-top ${
                                            isOpen
                                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                                : "opacity-0 -translate-y-1 pointer-events-none"
                                        }`}
                                    >
                                        <div
                                            className={`bg-[#FAF9F5] rounded-2xl shadow-xl border border-gray-100 p-6 flex gap-8 ${
                                                submenu.promo
                                                    ? submenu.columns === 2
                                                        ? "w-[92vw] max-w-[760px]"
                                                        : "w-[92vw] max-w-[560px]"
                                                    : "w-[92vw] max-w-[300px]"
                                            }`}
                                        >
                                            <div
                                                className={`grid gap-x-8 gap-y-1 flex-1 ${
                                                    submenu.columns === 2
                                                        ? "grid-cols-1 sm:grid-cols-2"
                                                        : "grid-cols-1"
                                                }`}
                                            >
                                                {submenu.groups.map((group, gIdx) => (
                                                    <div key={group.heading ?? `group-${gIdx}`}>
                                                        {group.heading && (
                                                            <p className="text-[12px] font-medium text-gray-400 mb-2 px-2.5">
                                                                {group.heading}
                                                            </p>
                                                        )}
                                                        <div className="flex flex-col">
                                                            {group.items.map((item) => (
                                                                <SubMenuRow
                                                                    key={item.title}
                                                                    item={item}
                                                                    onClick={() => setOpenDesktopMenu(null)}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {submenu.promo && (
                                                <SubMenuPromoPanel
                                                    promo={submenu.promo}
                                                    onClick={() => setOpenDesktopMenu(null)}
                                                />
                                            )}
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
                        className={`text-[15px] font-medium transition-colors px-1 ${
                            isSolid
                                ? "text-black hover:text-gray-600"
                                : "text-white hover:text-white/80"
                        }`}
                    >
                        Login
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
                        className={`p-2 -mr-2 rounded-md active:scale-95 transition-all ${
                            isSolid
                                ? "hover:bg-gray-50 text-gray-700"
                                : "hover:bg-white/10 text-white"
                        }`}
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
                            const submenu = SUBMENUS[_link.page];
                            const hasSubmenu = Boolean(submenu);
                            const isOpen = openMobileMenu === _link.page;
                            const isActive = resolvedActivePage === _link.page;
                            const isNavigable = _link.navigable !== false;

                            return (
                                <div key={`mobile_${_link.page}`}>
                                    <div className="flex items-center justify-between">
                                        {isNavigable ? (
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
                                        ) : (
                                            <span
                                                className={`flex-1 py-3 px-2 block ${
                                                    isActive ? "text-blue-600 font-semibold" : "text-gray-900"
                                                }`}
                                            >
                                                {_link.label}
                                            </span>
                                        )}
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

                                    {submenu && isOpen && (
                                        <div className="pl-2 pb-2 flex flex-col gap-1">
                                            {submenu.groups.map((group, gIdx) => (
                                                <div key={group.heading ?? `mobile-group-${gIdx}`} className="mb-1">
                                                    {group.heading && (
                                                        <p className="text-[11px] font-medium text-gray-400 mb-1 px-2.5 pt-2">
                                                            {group.heading}
                                                        </p>
                                                    )}
                                                    {group.items.map((item) => {
                                                        const Icon = item.icon;
                                                        return (
                                                            <Link
                                                                key={item.title}
                                                                href={item.link}
                                                                className="flex items-start gap-3 rounded-lg p-2.5 hover:bg-gray-50 transition-colors"
                                                                onClick={toggleMobileMenu}
                                                            >
                                                                <span className="shrink-0 w-8 h-8 flex items-center justify-center">
                                                                    <Icon
                                                                        width={22}
                                                                        height={22}
                                                                        strokeWidth={1.5}
                                                                        className="text-gray-800"
                                                                    />
                                                                </span>
                                                                <span className="min-w-0">
                                                                    <span className="block text-[14px] font-semibold text-black leading-snug">
                                                                        {item.title}
                                                                    </span>
                                                                    <span className="block text-[12.5px] text-gray-400 leading-snug mt-0.5">
                                                                        {item.subtitle}
                                                                    </span>
                                                                </span>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            ))}
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