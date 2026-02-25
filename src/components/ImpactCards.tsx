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
            icon: "🍽️",
            gradient: "from-eco-500/20 to-emerald-500/10",
            border: "border-eco-500/20",
            color: "text-eco-400",
        },
        {
            title: "CO₂ Offset",
            value: totalCO2Offset,
            suffix: " kg",
            icon: "🌍",
            gradient: "from-blue-500/20 to-cyan-500/10",
            border: "border-blue-500/20",
            color: "text-blue-400",
        },
        {
            title: "Active Donors",
            value: totalDonors,
            suffix: "",
            icon: "🏢",
            gradient: "from-amber-500/20 to-orange-500/10",
            border: "border-amber-500/20",
            color: "text-amber-400",
        },
        {
            title: "Partner NGOs",
            value: totalNGOs,
            suffix: "",
            icon: "🤝",
            gradient: "from-purple-500/20 to-pink-500/10",
            border: "border-purple-500/20",
            color: "text-purple-400",
        },
    ];

    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
                <div
                    key={card.title}
                    className={`group relative overflow-hidden rounded-2xl border ${card.border} bg-gradient-to-br ${card.gradient} p-6 backdrop-blur-sm transition-all hover:scale-[1.02] hover:shadow-xl`}
                >
                    <div className="absolute -right-4 -top-4 text-6xl opacity-10 transition-transform group-hover:scale-110">
                        {card.icon}
                    </div>
                    <p className="text-sm font-medium text-slate-400">{card.title}</p>
                    <p className={`mt-2 text-3xl font-bold ${card.color}`}>
                        <AnimatedNumber value={card.value} suffix={card.suffix} />
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
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
