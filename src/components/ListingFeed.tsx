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
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 py-16 text-center bg-gray-50/50">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-eco-50">
                    <svg className="h-8 w-8 text-eco-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <p className="text-lg font-medium text-gray-500">{emptyMessage}</p>
                <p className="mt-1 text-sm text-gray-400">Check back soon for new listings</p>
            </div>
        );
    }

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing, i) => (
                <div key={listing.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
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
