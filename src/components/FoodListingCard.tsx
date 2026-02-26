"use client";
import React from "react";
import SafetyBadge from "./SafetyBadge";
import QRHandshake from "./QRHandshake";
import { useExpiryTimer } from "@/hooks/useExpiryTimer";
import type { FoodListing } from "@/lib/types";

/* Unsplash food images keyed by type */
const foodImages: Record<string, string> = {
    biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
    sweet: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
    dal: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
    paneer: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
    fruit: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&q=80",
    rice: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44726?w=400&q=80",
    default: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
};

function getFoodImage(foodType: string): string {
    const lower = foodType.toLowerCase();
    for (const [key, url] of Object.entries(foodImages)) {
        if (key !== "default" && lower.includes(key)) return url;
    }
    return foodImages.default;
}

interface FoodListingCardProps {
    listing: FoodListing;
    showClaimButton?: boolean;
    onClaim?: (listingId: string) => void;
}

export default function FoodListingCard({
    listing,
    showClaimButton = false,
    onClaim,
}: FoodListingCardProps) {
    const { isExpired } = useExpiryTimer(listing.prepTime);

    if (isExpired && listing.status === "AVAILABLE") return null;

    const isClaimed = listing.status === "CLAIMED";

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${isClaimed
                ? "border-eco-200 bg-eco-50/50"
                : "border-gray-100 bg-white hover:border-gray-200 shadow-sm"
                }`}
        >
            {/* Photo Header – real food image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={getFoodImage(listing.foodType)}
                    alt={listing.foodType}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                {/* Status badge overlay */}
                <div className="absolute left-3 top-3">
                    <SafetyBadge prepTime={listing.prepTime} size="sm" />
                </div>
                {isClaimed && (
                    <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-eco-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        Claimed
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-900">{listing.foodType}</h3>
                    <span className="shrink-0 rounded-lg bg-eco-50 px-2.5 py-1 text-sm font-semibold text-eco-700 border border-eco-100">
                        {listing.quantity} {listing.unit === "KG" ? "kg" : "plates"}
                    </span>
                </div>

                {listing.donor && (
                    <p className="mb-2 flex items-center gap-1.5 text-sm text-gray-500">
                        <svg className="h-4 w-4 text-eco-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {listing.donor.orgName || listing.donor.name}
                    </p>
                )}

                {listing.address && (
                    <p className="mb-3 flex items-start gap-1.5 text-xs text-gray-400">
                        <svg className="mt-0.5 h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {listing.address}
                    </p>
                )}

                {listing.notes && (
                    <p className="mb-4 text-sm leading-relaxed text-gray-500">
                        {listing.notes}
                    </p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {showClaimButton && !isClaimed && (
                        <button
                            onClick={() => onClaim?.(listing.id)}
                            className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 py-3 text-sm font-bold text-white shadow-lg shadow-eco-500/20 transition-all duration-300 hover:shadow-eco-500/30 active:scale-[0.98]"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            Claim This Food
                        </button>
                    )}
                    {isClaimed && listing.claim && (
                        <QRHandshake
                            qrCode={listing.claim.qrCode}
                            listingId={listing.id}
                            foodType={listing.foodType}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
