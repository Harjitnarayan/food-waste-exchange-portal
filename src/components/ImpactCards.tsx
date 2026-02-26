"use client";
import React from "react";

interface ImpactCardsProps {
    totalMealsRescued: number;
    totalCO2Offset: number;
    totalDonors: number;
    totalNGOs: number;
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    return (
        <span className="animate-count-up tabular-nums">
            {value.toLocaleString()}{suffix}
        </span>
    );
}

export default function ImpactCards({
    totalMealsRescued,
    totalCO2Offset,
    totalDonors,
    totalNGOs,
}: ImpactCardsProps) {
    const cards = [
        {
            title: "Meals Rescued",
            value: totalMealsRescued,
            suffix: "",
            icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M16.5 8.25V6.75a4.5 4.5 0 10-9 0v1.5" />
                </svg>
            ),
            gradient: "from-eco-50 to-emerald-50",
            border: "border-eco-200",
            iconBg: "bg-eco-100",
            color: "text-eco-700",
            iconColor: "text-eco-600",
        },
        {
            title: "CO₂ Offset",
            value: totalCO2Offset,
            suffix: " kg",
            icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            ),
            gradient: "from-blue-50 to-cyan-50",
            border: "border-blue-200",
            iconBg: "bg-blue-100",
            color: "text-blue-700",
            iconColor: "text-blue-600",
        },
        {
            title: "Active Donors",
            value: totalDonors,
            suffix: "",
            icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
            ),
            gradient: "from-amber-50 to-orange-50",
            border: "border-amber-200",
            iconBg: "bg-amber-100",
            color: "text-amber-700",
            iconColor: "text-amber-600",
        },
        {
            title: "Partner NGOs",
            value: totalNGOs,
            suffix: "",
            icon: (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            ),
            gradient: "from-purple-50 to-pink-50",
            border: "border-purple-200",
            iconBg: "bg-purple-100",
            color: "text-purple-700",
            iconColor: "text-purple-600",
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
                <div
                    key={card.title}
                    className={`group relative overflow-hidden rounded-2xl border ${card.border} bg-gradient-to-br ${card.gradient} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in-up`}
                    style={{ animationDelay: `${i * 100}ms` }}
                >
                    <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${card.iconBg} ${card.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                        {card.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-500">{card.title}</p>
                    <p className={`mt-1 text-3xl font-bold ${card.color}`}>
                        <AnimatedNumber value={card.value} suffix={card.suffix} />
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400">
                        <svg className="h-3.5 w-3.5 text-eco-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span>Growing daily</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
