"use client";
import Link from "next/link";
import React from "react";
import ImageMarquee from "@/components/ImageMarquee";

/* Unsplash images – free for commercial use */
const marqueeImagesRow1 = [
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80", alt: "Gourmet food spread" },
    { src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80", alt: "Fresh produce" },
    { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", alt: "Healthy salad bowl" },
    { src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80", alt: "Wood-fired pizza" },
    { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&q=80", alt: "Grilled skewers" },
    { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80", alt: "Colorful veggies" },
    { src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80", alt: "Fresh fruits" },
    { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&q=80", alt: "Breakfast plate" },
];

const marqueeImagesRow2 = [
    { src: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&q=80", alt: "Biryani rice" },
    { src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&q=80", alt: "Sweet pastries" },
    { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80", alt: "Dal lentils" },
    { src: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&q=80", alt: "Fresh pasta" },
    { src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80", alt: "Fruit market" },
    { src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=500&q=80", alt: "Community kitchen" },
    { src: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500&q=80", alt: "Dinner table" },
    { src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500&q=80", alt: "Plated dish" },
];

export default function HomePage() {
    return (
        <div className="relative overflow-hidden">
            {/* ─── Hero Section ─── */}
            <section className="relative overflow-hidden hero-gradient">
                {/* Floating decorative blobs */}
                <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-eco-200/40 blur-3xl animate-float" />
                <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-amber-200/30 blur-3xl animate-float-delay" />
                <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-eco-100/50 blur-3xl animate-float-slow" />

                <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 sm:pt-28">
                    {/* Text content centered */}
                    <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
                        {/* Badge */}
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-eco-200 bg-eco-50 px-4 py-1.5 text-sm font-medium text-eco-700">
                            <span className="h-2 w-2 rounded-full bg-eco-500 animate-pulse" />
                            Reducing food waste across India
                        </div>

                        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-6xl sm:leading-[1.1]">
                            Rescue Surplus Food,{" "}
                            <span className="text-gradient">Save the Planet</span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl">
                            Connect hotels, wedding venues, and hostels with local NGOs.
                            Every meal saved prevents{" "}
                            <span className="font-semibold text-eco-600">1.5 kg of CO₂</span>{" "}
                            from entering our atmosphere.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/auth/register"
                                className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-eco-600 to-eco-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-eco-500/25 transition-all duration-300 hover:shadow-eco-500/40 hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
                            >
                                <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                Start Donating
                            </Link>
                            <Link
                                href="/ngo"
                                className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-700 transition-all duration-300 hover:border-eco-300 hover:bg-eco-50 hover:text-eco-700 sm:w-auto"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Join as NGO
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Auto-scrolling food image marquee */}
                <div className="mt-16 space-y-4 pb-8">
                    <ImageMarquee
                        images={marqueeImagesRow1}
                        speed={0.8}
                        direction="left"
                        imageWidth={300}
                        imageHeight={200}
                        gap={16}
                        borderRadius={16}
                        pauseOnHover={true}
                    />
                    <ImageMarquee
                        images={marqueeImagesRow2}
                        speed={0.6}
                        direction="right"
                        imageWidth={260}
                        imageHeight={170}
                        gap={16}
                        borderRadius={16}
                        pauseOnHover={true}
                    />
                </div>

                {/* Stats bar */}
                <div className="relative mx-auto max-w-4xl px-4 pb-20 sm:px-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        {[
                            { label: "Meals Rescued", value: "12,847", color: "text-eco-600" },
                            { label: "CO₂ Prevented", value: "19.3T", color: "text-blue-600" },
                            { label: "Active Donors", value: "234", color: "text-amber-600" },
                            { label: "Partner NGOs", value: "89", color: "text-purple-600" },
                        ].map((stat, i) => (
                            <div
                                key={stat.label}
                                className="group animate-fade-in-up rounded-2xl border border-gray-100 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-eco-200 hover:-translate-y-1"
                                style={{ animationDelay: `${800 + i * 100}ms` }}
                            >
                                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                <p className="mt-1 text-xs font-medium text-gray-400">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── How It Works ─── */}
            <section className="relative border-t border-gray-100 bg-gray-50/50 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            How It Works
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Three simple steps to make a difference
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 sm:grid-cols-3">
                        {[
                            {
                                step: "01",
                                title: "Post Surplus",
                                desc: "Donors list excess food with photos, quantity, and preparation time. Our system auto-calculates food safety windows.",
                                icon: (
                                    <svg className="h-8 w-8 text-eco-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                                    </svg>
                                ),
                                image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80",
                            },
                            {
                                step: "02",
                                title: "Discover Nearby",
                                desc: "NGOs see a real-time feed and map of available food within 10km. Sort by distance, freshness, or quantity.",
                                icon: (
                                    <svg className="h-8 w-8 text-eco-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                ),
                                image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80",
                            },
                            {
                                step: "03",
                                title: "Claim & Collect",
                                desc: "Claim food with one tap. A unique QR code is generated for secure, verified handshakes at pickup.",
                                icon: (
                                    <svg className="h-8 w-8 text-eco-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&q=80",
                            },
                        ].map((item, i) => (
                            <div
                                key={item.step}
                                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up"
                                style={{ animationDelay: `${i * 200}ms` }}
                            >
                                {/* Image header */}
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                                    <div className="absolute left-4 top-4 rounded-full bg-eco-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                                        Step {item.step}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-eco-50 transition-colors group-hover:bg-eco-100">
                                        {item.icon}
                                    </div>
                                    <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Features ─── */}
            <section className="border-t border-gray-100 py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            Built for <span className="text-gradient">Impact</span>
                        </h2>
                        <p className="mt-4 text-gray-500">
                            Every feature designed to maximize food rescue and minimize waste
                        </p>
                    </div>

                    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Smart Expiry Tracking",
                                desc: "6-hour dynamic countdown with green/yellow/red safety indicators. Listings auto-hide when expired.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                gradient: "from-emerald-500 to-teal-500",
                            },
                            {
                                title: "Live Map View",
                                desc: "See available food on an interactive map with 10km radius filtering based on your location.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                                    </svg>
                                ),
                                gradient: "from-blue-500 to-cyan-500",
                            },
                            {
                                title: "QR Digital Handshake",
                                desc: "Secure claim verification via unique QR codes. No paperwork, no confusion.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
                                    </svg>
                                ),
                                gradient: "from-violet-500 to-purple-500",
                            },
                            {
                                title: "Real-Time Updates",
                                desc: "Claims sync instantly across all clients. No stale data, no double claims.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                ),
                                gradient: "from-amber-500 to-orange-500",
                            },
                            {
                                title: "Impact Analytics",
                                desc: "Track meals rescued and CO₂ offset (1.5 kg per meal) with beautiful dashboards.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                    </svg>
                                ),
                                gradient: "from-rose-500 to-pink-500",
                            },
                            {
                                title: "PWA Ready",
                                desc: "Install on any device. Works offline-first, optimized for busy kitchen environments.",
                                icon: (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                    </svg>
                                ),
                                gradient: "from-eco-500 to-emerald-500",
                            },
                        ].map((feature, i) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-200 animate-fade-in-up"
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                                    {feature.icon}
                                </div>
                                <h3 className="mb-2 text-base font-bold text-gray-900">{feature.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA Section ─── */}
            <section className="border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
                    <div className="relative overflow-hidden mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-eco-600 via-eco-500 to-emerald-500 p-12 text-center shadow-2xl shadow-eco-500/20 animated-gradient">
                        {/* Decorative circles */}
                        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                        <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                        <h2 className="relative text-3xl font-bold text-white sm:text-4xl">
                            Ready to make a difference?
                        </h2>
                        <p className="relative mx-auto mt-4 max-w-lg text-eco-100">
                            Join hundreds of donors and NGOs already using FoodXchange to rescue meals and reduce carbon emissions.
                        </p>
                        <div className="relative mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                            <Link
                                href="/auth/register"
                                className="w-full rounded-2xl bg-white px-8 py-4 text-lg font-bold text-eco-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
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
