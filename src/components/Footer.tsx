import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-100 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 shadow-lg shadow-eco-500/20">
                                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold text-gray-900">
                                Food<span className="text-eco-600">Xchange</span>
                            </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            Connecting surplus food with those who need it. Every meal saved is a step towards a sustainable future.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900">Platform</h4>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/donor" className="text-sm text-gray-500 hover:text-eco-600 transition-colors duration-200">Donor Dashboard</Link></li>
                            <li><Link href="/ngo" className="text-sm text-gray-500 hover:text-eco-600 transition-colors duration-200">NGO Feed</Link></li>
                            <li><Link href="/analytics" className="text-sm text-gray-500 hover:text-eco-600 transition-colors duration-200">Impact Analytics</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900">Resources</h4>
                        <ul className="mt-3 space-y-2">
                            <li><span className="text-sm text-gray-500 hover:text-eco-600 transition-colors duration-200 cursor-pointer">Food Safety Guide</span></li>
                            <li><span className="text-sm text-gray-500 hover:text-eco-600 transition-colors duration-200 cursor-pointer">NGO Registration</span></li>
                            <li><span className="text-sm text-gray-500 hover:text-eco-600 transition-colors duration-200 cursor-pointer">API Documentation</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900">Contact</h4>
                        <ul className="mt-3 space-y-2">
                            <li><span className="text-sm text-gray-500">hello@foodxchange.org</span></li>
                            <li><span className="text-sm text-gray-500">+91 11 2345 6789</span></li>
                            <li><span className="text-sm text-gray-500">New Delhi, India</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:flex-row">
                    <p className="text-xs text-gray-400">
                        © 2026 FoodXchange Portal. Reducing food waste, one meal at a time.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-xs text-gray-400 hover:text-eco-600 cursor-pointer transition-colors duration-200">Privacy</span>
                        <span className="text-xs text-gray-400 hover:text-eco-600 cursor-pointer transition-colors duration-200">Terms</span>
                        <span className="text-xs text-gray-400 hover:text-eco-600 cursor-pointer transition-colors duration-200">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
