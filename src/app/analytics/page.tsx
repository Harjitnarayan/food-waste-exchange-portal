"use client";
import React from "react";
import ImpactCards from "@/components/ImpactCards";
import { mockImpactStats, mockListings } from "@/lib/mock-data";

export default function AnalyticsPage() {
    const stats = mockImpactStats;
    const claimedListings = mockListings.filter((l) => l.status === "CLAIMED");

    // Aggregate by food type
    const foodTypeCounts: Record<string, number> = {};
    mockListings.forEach((l) => {
        foodTypeCounts[l.foodType] = (foodTypeCounts[l.foodType] || 0) + l.quantity;
    });
    const topFoodTypes = Object.entries(foodTypeCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    const maxQty = topFoodTypes[0]?.[1] || 1;

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white">Impact Analytics</h1>
                <p className="mt-1 text-slate-400">
                    Track the collective impact of food rescue operations
                </p>
            </div>

            {/* Impact Cards */}
            <div className="mb-10">
                <ImpactCards
                    totalMealsRescued={stats.totalMealsRescued}
                    totalCO2Offset={stats.totalCO2Offset}
                    totalDonors={stats.totalDonors}
                    totalNGOs={stats.totalNGOs}
                />
            </div>

            {/* Two Column Layout */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* CO₂ Impact Breakdown */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                    <h3 className="mb-6 text-lg font-bold text-white">Carbon Impact Breakdown</h3>
                    <div className="space-y-4">
                        {[
                            {
                                label: "Food Production Emissions Saved",
                                value: (stats.totalCO2Offset * 0.4).toFixed(0),
                                pct: 40,
                                color: "bg-eco-500",
                            },
                            {
                                label: "Methane from Landfill Prevented",
                                value: (stats.totalCO2Offset * 0.35).toFixed(0),
                                pct: 35,
                                color: "bg-emerald-400",
                            },
                            {
                                label: "Transportation Emissions Saved",
                                value: (stats.totalCO2Offset * 0.15).toFixed(0),
                                pct: 15,
                                color: "bg-teal-400",
                            },
                            {
                                label: "Water & Energy Conservation",
                                value: (stats.totalCO2Offset * 0.1).toFixed(0),
                                pct: 10,
                                color: "bg-cyan-400",
                            },
                        ].map((item) => (
                            <div key={item.label}>
                                <div className="mb-1 flex items-center justify-between text-sm">
                                    <span className="text-slate-400">{item.label}</span>
                                    <span className="font-semibold text-white">{Number(item.value).toLocaleString()} kg</span>
                                </div>
                                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                    <div
                                        className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                                        style={{ width: `${item.pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-xl bg-eco-500/10 p-4">
                        <p className="text-sm text-eco-400">
                            <span className="font-bold">💡 Did you know?</span> Each rescued meal prevents approximately
                            <span className="font-bold"> 1.5 kg of CO₂</span> equivalent from entering the atmosphere through
                            reduced methane emissions from landfill decomposition.
                        </p>
                    </div>
                </div>

                {/* Top Food Types */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                    <h3 className="mb-6 text-lg font-bold text-white">Top Food Categories</h3>
                    <div className="space-y-4">
                        {topFoodTypes.map(([type, qty], i) => (
                            <div key={type} className="flex items-center gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-sm font-bold text-slate-400">
                                    {i + 1}
                                </span>
                                <div className="flex-1">
                                    <div className="mb-1 flex items-center justify-between text-sm">
                                        <span className="font-medium text-white">{type}</span>
                                        <span className="text-slate-400">{qty} units</span>
                                    </div>
                                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-eco-600 to-eco-400 transition-all duration-1000"
                                            style={{ width: `${(qty / maxQty) * 100}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Monthly Summary */}
                    <div className="mt-8 border-t border-slate-800 pt-6">
                        <h4 className="mb-4 text-sm font-semibold text-slate-300">Monthly Summary</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-xl bg-slate-800/50 p-3 text-center">
                                <p className="text-xl font-bold text-eco-400">{stats.totalListings.toLocaleString()}</p>
                                <p className="text-xs text-slate-500">Total Listings</p>
                            </div>
                            <div className="rounded-xl bg-slate-800/50 p-3 text-center">
                                <p className="text-xl font-bold text-emerald-400">{stats.totalClaimed.toLocaleString()}</p>
                                <p className="text-xs text-slate-500">Claimed</p>
                            </div>
                            <div className="rounded-xl bg-slate-800/50 p-3 text-center">
                                <p className="text-xl font-bold text-amber-400">
                                    {((stats.totalClaimed / stats.totalListings) * 100).toFixed(0)}%
                                </p>
                                <p className="text-xs text-slate-500">Success Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Claims */}
            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="mb-6 text-lg font-bold text-white">Recent Claims</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-800 text-left text-xs text-slate-500">
                                <th className="pb-3 pr-4 font-medium">Food Type</th>
                                <th className="pb-3 pr-4 font-medium">Quantity</th>
                                <th className="pb-3 pr-4 font-medium">Donor</th>
                                <th className="pb-3 pr-4 font-medium">Status</th>
                                <th className="pb-3 font-medium">CO₂ Saved</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {mockListings.slice(0, 5).map((listing) => (
                                <tr key={listing.id} className="text-slate-300">
                                    <td className="py-3 pr-4 font-medium text-white">{listing.foodType}</td>
                                    <td className="py-3 pr-4">{listing.quantity} {listing.unit === "KG" ? "kg" : "plates"}</td>
                                    <td className="py-3 pr-4 text-slate-400">{listing.donor?.orgName}</td>
                                    <td className="py-3 pr-4">
                                        <span
                                            className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${listing.status === "CLAIMED"
                                                    ? "bg-eco-500/15 text-eco-400"
                                                    : "bg-amber-500/15 text-amber-400"
                                                }`}
                                        >
                                            {listing.status === "CLAIMED" ? "✓ Claimed" : "Available"}
                                        </span>
                                    </td>
                                    <td className="py-3 font-medium text-eco-400">{(listing.quantity * 1.5).toFixed(1)} kg</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
