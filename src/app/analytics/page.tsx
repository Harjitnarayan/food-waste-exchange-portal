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
            <div className="mb-8 animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-900">Impact Analytics</h1>
                <p className="mt-1 text-gray-500">
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
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                    <h3 className="mb-6 text-lg font-bold text-gray-900">Carbon Impact Breakdown</h3>
                    <div className="space-y-4">
                        {[
                            {
                                label: "Food Production Emissions Saved",
                                value: (stats.totalCO2Offset * 0.4).toFixed(0),
                                pct: 40,
                                color: "bg-eco-500",
                                trackColor: "bg-eco-100",
                            },
                            {
                                label: "Methane from Landfill Prevented",
                                value: (stats.totalCO2Offset * 0.35).toFixed(0),
                                pct: 35,
                                color: "bg-emerald-400",
                                trackColor: "bg-emerald-100",
                            },
                            {
                                label: "Transportation Emissions Saved",
                                value: (stats.totalCO2Offset * 0.15).toFixed(0),
                                pct: 15,
                                color: "bg-teal-400",
                                trackColor: "bg-teal-100",
                            },
                            {
                                label: "Water & Energy Conservation",
                                value: (stats.totalCO2Offset * 0.1).toFixed(0),
                                pct: 10,
                                color: "bg-cyan-400",
                                trackColor: "bg-cyan-100",
                            },
                        ].map((item) => (
                            <div key={item.label}>
                                <div className="mb-1 flex items-center justify-between text-sm">
                                    <span className="text-gray-500">{item.label}</span>
                                    <span className="font-semibold text-gray-900">{Number(item.value).toLocaleString()} kg</span>
                                </div>
                                <div className={`h-2.5 overflow-hidden rounded-full ${item.trackColor}`}>
                                    <div
                                        className={`h-full rounded-full ${item.color} transition-all duration-1000`}
                                        style={{ width: `${item.pct}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-xl bg-eco-50 border border-eco-100 p-4">
                        <p className="text-sm text-eco-700">
                            <span className="font-bold">💡 Did you know?</span> Each rescued meal prevents approximately
                            <span className="font-bold"> 1.5 kg of CO₂</span> equivalent from entering the atmosphere through
                            reduced methane emissions from landfill decomposition.
                        </p>
                    </div>
                </div>

                {/* Top Food Types */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                    <h3 className="mb-6 text-lg font-bold text-gray-900">Top Food Categories</h3>
                    <div className="space-y-4">
                        {topFoodTypes.map(([type, qty], i) => (
                            <div key={type} className="flex items-center gap-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-eco-50 text-sm font-bold text-eco-700 border border-eco-100">
                                    {i + 1}
                                </span>
                                <div className="flex-1">
                                    <div className="mb-1 flex items-center justify-between text-sm">
                                        <span className="font-medium text-gray-900">{type}</span>
                                        <span className="text-gray-500">{qty} units</span>
                                    </div>
                                    <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
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
                    <div className="mt-8 border-t border-gray-100 pt-6">
                        <h4 className="mb-4 text-sm font-semibold text-gray-700">Monthly Summary</h4>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-center">
                                <p className="text-xl font-bold text-eco-600">{stats.totalListings.toLocaleString()}</p>
                                <p className="text-xs text-gray-400">Total Listings</p>
                            </div>
                            <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-center">
                                <p className="text-xl font-bold text-emerald-600">{stats.totalClaimed.toLocaleString()}</p>
                                <p className="text-xs text-gray-400">Claimed</p>
                            </div>
                            <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-center">
                                <p className="text-xl font-bold text-amber-600">
                                    {((stats.totalClaimed / stats.totalListings) * 100).toFixed(0)}%
                                </p>
                                <p className="text-xs text-gray-400">Success Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Claims */}
            <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <h3 className="mb-6 text-lg font-bold text-gray-900">Recent Claims</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-100 text-left text-xs text-gray-400">
                                <th className="pb-3 pr-4 font-medium">Food Type</th>
                                <th className="pb-3 pr-4 font-medium">Quantity</th>
                                <th className="pb-3 pr-4 font-medium">Donor</th>
                                <th className="pb-3 pr-4 font-medium">Status</th>
                                <th className="pb-3 font-medium">CO₂ Saved</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {mockListings.slice(0, 5).map((listing) => (
                                <tr key={listing.id} className="text-gray-600 transition-colors hover:bg-gray-50/50">
                                    <td className="py-3 pr-4 font-medium text-gray-900">{listing.foodType}</td>
                                    <td className="py-3 pr-4">{listing.quantity} {listing.unit === "KG" ? "kg" : "plates"}</td>
                                    <td className="py-3 pr-4 text-gray-500">{listing.donor?.orgName}</td>
                                    <td className="py-3 pr-4">
                                        <span
                                            className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ${listing.status === "CLAIMED"
                                                ? "bg-eco-50 text-eco-700 border border-eco-100"
                                                : "bg-amber-50 text-amber-700 border border-amber-100"
                                                }`}
                                        >
                                            {listing.status === "CLAIMED" ? (
                                                <>
                                                    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                    Claimed
                                                </>
                                            ) : "Available"}
                                        </span>
                                    </td>
                                    <td className="py-3 font-medium text-eco-600">{(listing.quantity * 1.5).toFixed(1)} kg</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
