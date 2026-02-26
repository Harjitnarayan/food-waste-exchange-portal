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
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Donor Dashboard</h1>
                    <p className="mt-1 text-gray-500">Grand Palace Hotel — Manage your food listings</p>
                </div>
                <Link
                    href="/donor/post"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-eco-500/20 transition-all duration-300 hover:shadow-eco-500/30 hover:scale-[1.03] active:scale-[0.98]"
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
            <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <span className="h-2 w-2 rounded-full bg-eco-500 animate-pulse" />
                    Active Listings ({activeListings.length})
                </h2>
                {activeListings.length === 0 ? (
                    <div className="rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center bg-gray-50/50">
                        <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-eco-50">
                            <svg className="h-7 w-7 text-eco-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                        </div>
                        <p className="text-gray-500">No active listings. Post surplus food to get started!</p>
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
            <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900">
                    <svg className="h-5 w-5 text-eco-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Claimed ({claimedListings.length})
                </h2>
                {claimedListings.length === 0 ? (
                    <p className="text-sm text-gray-400">No claimed listings yet.</p>
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
