"use client";
import React from "react";
import SafetyBadge from "./SafetyBadge";
import QRHandshake from "./QRHandshake";
import { useExpiryTimer } from "@/hooks/useExpiryTimer";
import type { FoodListing } from "@/lib/types";

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
            className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl ${isClaimed
                    ? "border-eco-500/30 bg-eco-950/30"
                    : "border-slate-700/50 bg-slate-800/50 hover:border-slate-600/50"
                }`}
        >
            {/* Photo Header */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl">
                        {listing.foodType.toLowerCase().includes("biryani") ? "🍛" :
                            listing.foodType.toLowerCase().includes("sweet") ? "🍬" :
                                listing.foodType.toLowerCase().includes("dal") ? "🍲" :
                                    listing.foodType.toLowerCase().includes("paneer") ? "🧀" :
                                        listing.foodType.toLowerCase().includes("pasta") ? "🍝" :
                                            listing.foodType.toLowerCase().includes("fruit") ? "🍎" : "🍽️"}
                    </span>
                </div>
                {/* Status badge overlay */}
                <div className="absolute left-3 top-3">
                    <SafetyBadge prepTime={listing.prepTime} size="sm" />
                </div>
                {isClaimed && (
                    <div className="absolute right-3 top-3 rounded-full bg-eco-500 px-3 py-1 text-xs font-bold text-white">
                        ✓ Claimed
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <div className="mb-3 flex items-start justify-between">
                    <h3 className="text-lg font-bold text-white">{listing.foodType}</h3>
                    <span className="shrink-0 rounded-lg bg-slate-700/50 px-2.5 py-1 text-sm font-semibold text-eco-400">
                        {listing.quantity} {listing.unit === "KG" ? "kg" : "plates"}
                    </span>
                </div>

                {listing.donor && (
                    <p className="mb-2 flex items-center gap-1.5 text-sm text-slate-400">
                        <svg className="h-4 w-4 text-eco-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {listing.donor.orgName || listing.donor.name}
                    </p>
                )}

                {listing.address && (
                    <p className="mb-3 flex items-start gap-1.5 text-xs text-slate-500">
                        <svg className="mt-0.5 h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {listing.address}
                    </p>
                )}

                {listing.notes && (
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">
                        {listing.notes}
                    </p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-3">
                    {showClaimButton && !isClaimed && (
                        <button
                            onClick={() => onClaim?.(listing.id)}
                            className="flex-1 rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 py-3 text-center text-sm font-bold text-white shadow-lg shadow-eco-500/25 transition-all hover:shadow-eco-500/40 active:scale-[0.98]"
                        >
                            🤝 Claim This Food
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
