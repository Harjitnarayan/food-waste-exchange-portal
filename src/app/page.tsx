import Link from "next/link";
import React from "react";

export default function HomePage() {
    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-eco-950/50 via-slate-950 to-slate-950" />
                <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-eco-500/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 sm:pt-32">
                    <div className="mx-auto max-w-3xl text-center">
                        {/* Badge */}
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-eco-500/20 bg-eco-500/10 px-4 py-1.5 text-sm font-medium text-eco-400">
                            <span className="h-2 w-2 rounded-full bg-eco-400 animate-pulse" />
                            Reducing food waste across India
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
                            Rescue Surplus Food,{" "}
                            <span className="text-gradient">Save the Planet</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
                            Connect hotels, wedding venues, and hostels with local NGOs.
                            Every meal saved prevents <span className="font-semibold text-eco-400">1.5 kg of CO₂</span> from entering our atmosphere.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/auth/register"
                                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-eco-600 to-eco-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-eco-500/25 transition-all hover:shadow-eco-500/40 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
                            >
                                🚀 Start Donating
                            </Link>
                            <Link
                                href="/ngo"
                                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:border-slate-600 sm:w-auto"
                            >
                                🤝 Join as NGO
                            </Link>
                        </div>
                    </div>

                    {/* Stats bar */}
                    <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
                        {[
                            { label: "Meals Rescued", value: "12,847", icon: "🍽️" },
                            { label: "CO₂ Prevented", value: "19.3T", icon: "🌍" },
                            { label: "Active Donors", value: "234", icon: "🏢" },
                            { label: "Partner NGOs", value: "89", icon: "🤝" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-5 text-center transition-all hover:border-eco-500/30 hover:bg-eco-500/5"
                            >
                                <div className="mb-2 text-2xl">{stat.icon}</div>
                                <p className="text-2xl font-bold text-white">{stat.value}</p>
                                <p className="mt-1 text-xs text-slate-500">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="border-t border-slate-800 bg-slate-900/30 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            How It Works
                        </h2>
                        <p className="mt-4 text-slate-400">
                            Three simple steps to make a difference
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 sm:grid-cols-3">
                        {[
                            {
                                step: "01",
                                icon: "📸",
                                title: "Post Surplus",
                                desc: "Donors list excess food with photos, quantity, and preparation time. Our system auto-calculates food safety windows.",
                            },
                            {
                                step: "02",
                                icon: "📍",
                                title: "Discover Nearby",
                                desc: "NGOs see a real-time feed and map of available food within 10km. Sort by distance, freshness, or quantity.",
                            },
                            {
                                step: "03",
                                icon: "🤝",
                                title: "Claim & Collect",
                                desc: "Claim food with one tap. A unique QR code is generated for secure, verified handshakes at pickup.",
                            },
                        ].map((item) => (
                            <div
                                key={item.step}
                                className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all hover:border-eco-500/30 hover:bg-eco-500/5"
                            >
                                <div className="absolute -top-4 left-8 rounded-full bg-eco-500 px-3 py-1 text-xs font-bold text-white">
                                    Step {item.step}
                                </div>
                                <div className="mb-4 text-4xl">{item.icon}</div>
                                <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="border-t border-slate-800 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Built for <span className="text-gradient">Impact</span>
                        </h2>
                        <p className="mt-4 text-slate-400">
                            Every feature designed to maximize food rescue and minimize waste
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: "⏱️", title: "Smart Expiry Tracking", desc: "6-hour dynamic countdown with green/yellow/red safety indicators. Listings auto-hide when expired." },
                            { icon: "🗺️", title: "Live Map View", desc: "See available food on an interactive map with 10km radius filtering based on your location." },
                            { icon: "📱", title: "QR Digital Handshake", desc: "Secure claim verification via unique QR codes. No paperwork, no confusion." },
                            { icon: "⚡", title: "Real-Time Updates", desc: "Claims sync instantly across all clients. No stale data, no double claims." },
                            { icon: "📊", title: "Impact Analytics", desc: "Track meals rescued and CO₂ offset (1.5 kg per meal) with beautiful dashboards." },
                            { icon: "📲", title: "PWA Ready", desc: "Install on any device. Works offline-first, optimized for busy kitchen environments." },
                        ].map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all hover:border-eco-500/20 hover:shadow-lg hover:shadow-eco-500/5"
                            >
                                <div className="mb-3 text-3xl">{feature.icon}</div>
                                <h3 className="mb-2 text-base font-bold text-white">{feature.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="border-t border-slate-800">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
                    <div className="eco-glow mx-auto max-w-3xl rounded-3xl border border-eco-500/20 bg-gradient-to-br from-eco-950/80 to-slate-900 p-12 text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl">
                            Ready to make a difference?
                        </h2>
                        <p className="mx-auto mt-4 max-w-lg text-slate-400">
                            Join hundreds of donors and NGOs already using FoodXchange to rescue meals and reduce carbon emissions.
                        </p>
                        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/auth/register"
                                className="w-full rounded-2xl bg-gradient-to-r from-eco-600 to-eco-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-eco-500/25 transition-all hover:shadow-eco-500/40 sm:w-auto"
                            >
                                Join the Movement
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
