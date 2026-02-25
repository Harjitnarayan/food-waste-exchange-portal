"use client";
import React from "react";
import FoodListingCard from "./FoodListingCard";
import type { FoodListing } from "@/lib/types";

interface ListingFeedProps {
    listings: FoodListing[];
    showClaimButton?: boolean;
    onClaim?: (listingId: string) => void;
    emptyMessage?: string;
}

export default function ListingFeed({
    listings,
    showClaimButton = false,
    onClaim,
    emptyMessage = "No food listings available right now.",
}: ListingFeedProps) {
    if (listings.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 py-16 text-center">
                <span className="mb-4 text-5xl">🍃</span>
                <p className="text-lg font-medium text-slate-400">{emptyMessage}</p>
                <p className="mt-1 text-sm text-slate-500">Check back soon for new listings</p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing, i) => (
                <div key={listing.id} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                    <FoodListingCard
                        listing={listing}
                        showClaimButton={showClaimButton}
                        onClaim={onClaim}
                    />
                </div>
            ))}
        </div>
    );
}
