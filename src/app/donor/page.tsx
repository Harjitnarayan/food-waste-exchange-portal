"use client";
import React, { useState } from "react";
import Link from "next/link";
import FoodListingCard from "@/components/FoodListingCard";
import ImpactCards from "@/components/ImpactCards";
import { getDonorListings } from "@/lib/mock-data";

export default function DonorDashboard() {
    const [listings] = useState(() => getDonorListings("donor-1"));

    const activeListings = listings.filter((l) => l.status === "AVAILABLE");
    const claimedListings = listings.filter((l) => l.status === "CLAIMED");
    const totalMeals = listings.reduce((acc, l) => acc + l.quantity, 0);

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            {/* Header */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white">Donor Dashboard</h1>
                    <p className="mt-1 text-slate-400">Grand Palace Hotel — Manage your food listings</p>
                </div>
                <Link
                    href="/donor/post"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-eco-500/25 transition-all hover:shadow-eco-500/40 active:scale-[0.98]"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Post Surplus Food
                </Link>
            </div>

            {/* Quick Stats */}
            <div className="mb-8">
                <ImpactCards
                    totalMealsRescued={totalMeals}
                    totalCO2Offset={totalMeals * 1.5}
                    totalDonors={1}
                    totalNGOs={claimedListings.length}
                />
            </div>

            {/* Active Listings */}
            <div className="mb-10">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                    <span className="h-2 w-2 rounded-full bg-eco-400 animate-pulse" />
                    Active Listings ({activeListings.length})
                </h2>
                {activeListings.length === 0 ? (
                    <div className="rounded-2xl border border-dashed border-slate-700 p-12 text-center">
                        <span className="mb-3 block text-4xl">📦</span>
                        <p className="text-slate-400">No active listings. Post surplus food to get started!</p>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {activeListings.map((listing) => (
                            <FoodListingCard key={listing.id} listing={listing} />
                        ))}
                    </div>
                )}
            </div>

            {/* Claimed History */}
            <div>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                    <span className="text-eco-400">✓</span>
                    Claimed ({claimedListings.length})
                </h2>
                {claimedListings.length === 0 ? (
                    <p className="text-sm text-slate-500">No claimed listings yet.</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {claimedListings.map((listing) => (
                            <FoodListingCard key={listing.id} listing={listing} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
