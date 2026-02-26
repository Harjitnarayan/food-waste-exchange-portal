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
        <nav className="sticky top-0 z-40 border-b border-gray-100 bg-white/80 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 shadow-lg shadow-eco-500/25 transition-transform duration-300 group-hover:scale-110">
                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                        Food<span className="text-eco-600">Xchange</span>
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
                                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                                    ? "bg-eco-50 text-eco-700"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-eco-500" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Auth buttons (desktop) */}
                <div className="hidden items-center gap-3 md:flex">
                    <Link
                        href="/auth/login"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-gray-500 transition-all duration-300 hover:text-gray-900"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/auth/register"
                        className="rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-eco-500/20 transition-all duration-300 hover:shadow-eco-500/30 hover:scale-[1.03]"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors md:hidden"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {mobileOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="border-t border-gray-100 bg-white px-4 pb-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${isActive
                                    ? "bg-eco-50 text-eco-700"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <div className="mt-3 flex gap-3 border-t border-gray-100 pt-3">
                        <Link
                            href="/auth/login"
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 rounded-xl border-2 border-gray-200 py-3 text-center text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/auth/register"
                            onClick={() => setMobileOpen(false)}
                            className="flex-1 rounded-xl bg-eco-600 py-3 text-center text-sm font-semibold text-white hover:bg-eco-500 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
