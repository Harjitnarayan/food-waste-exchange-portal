import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2.5">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-600 text-lg">
                                🌿
                            </div>
                            <span className="text-lg font-bold text-white">
                                Food<span className="text-eco-400">Xchange</span>
                            </span>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                            Connecting surplus food with those who need it. Every meal saved is a step towards a sustainable future.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-white">Platform</h4>
                        <ul className="mt-3 space-y-2">
                            <li><Link href="/donor" className="text-sm text-slate-400 hover:text-eco-400 transition-colors">Donor Dashboard</Link></li>
                            <li><Link href="/ngo" className="text-sm text-slate-400 hover:text-eco-400 transition-colors">NGO Feed</Link></li>
                            <li><Link href="/analytics" className="text-sm text-slate-400 hover:text-eco-400 transition-colors">Impact Analytics</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Resources</h4>
                        <ul className="mt-3 space-y-2">
                            <li><span className="text-sm text-slate-400">Food Safety Guide</span></li>
                            <li><span className="text-sm text-slate-400">NGO Registration</span></li>
                            <li><span className="text-sm text-slate-400">API Documentation</span></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Contact</h4>
                        <ul className="mt-3 space-y-2">
                            <li><span className="text-sm text-slate-400">hello@foodxchange.org</span></li>
                            <li><span className="text-sm text-slate-400">+91 11 2345 6789</span></li>
                            <li><span className="text-sm text-slate-400">New Delhi, India</span></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
                    <p className="text-xs text-slate-600">
                        © 2026 FoodXchange Portal. Reducing food waste, one meal at a time.
                    </p>
                    <div className="flex gap-4">
                        <span className="text-xs text-slate-600 hover:text-slate-400 cursor-pointer">Privacy</span>
                        <span className="text-xs text-slate-600 hover:text-slate-400 cursor-pointer">Terms</span>
                        <span className="text-xs text-slate-600 hover:text-slate-400 cursor-pointer">Cookies</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
