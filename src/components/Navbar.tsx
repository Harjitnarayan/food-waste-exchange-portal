"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/donor", label: "Donor Dashboard" },
    { href: "/ngo", label: "NGO Feed" },
    { href: "/analytics", label: "Impact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 text-lg shadow-lg shadow-eco-500/25">
                        🌿
                    </div>
                    <span className="text-lg font-bold text-white">
                        Food<span className="text-eco-400">Xchange</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${isActive
                                        ? "bg-eco-500/15 text-eco-400"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Auth buttons (desktop) */}
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/auth/login"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/register"
                        className="rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-eco-500/25 transition-all hover:shadow-eco-500/40"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-800 md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="animate-slide-up border-t border-slate-800 bg-slate-950 px-4 pb-4 md:hidden">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block rounded-lg px-4 py-3 text-base font-medium transition-all ${isActive
                                        ? "bg-eco-500/15 text-eco-400"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="mt-3 flex gap-3 border-t border-slate-800 pt-3">
                        <Link
                            href="/auth/login"
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 rounded-xl border border-slate-700 py-3 text-center text-sm font-medium text-slate-300 hover:bg-slate-800"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/auth/register"
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 rounded-xl bg-eco-600 py-3 text-center text-sm font-semibold text-white hover:bg-eco-500"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
