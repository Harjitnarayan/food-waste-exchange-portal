"use client";
import React, { useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import ListingFeed from "@/components/ListingFeed";
import SafetyBadge from "@/components/SafetyBadge";
import { useGeolocation, getDistanceKm } from "@/hooks/useGeolocation";
import { getAvailableListings } from "@/lib/mock-data";
import type { FoodListing } from "@/lib/types";

// Dynamic import MapView to avoid SSR issues with Leaflet
const MapView = dynamic(() => import("@/components/MapView"), {
    ssr: false,
    loading: () => (
        <div className="flex h-[500px] items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-eco-500 border-t-transparent" />
        </div>
    ),
});

export default function NGODashboard() {
    const { latitude, longitude, loading: geoLoading } = useGeolocation();
    const [view, setView] = useState<"list" | "map">("list");
    const [claimedIds, setClaimedIds] = useState<Set<string>>(new Set());

    const allListings = useMemo(() => getAvailableListings(), []);

    // Filter by 10km radius and sort by distance
    const nearbyListings = useMemo(() => {
        if (!latitude || !longitude) return allListings;
        return allListings
            .map((l) => ({
                ...l,
                distance: getDistanceKm(latitude, longitude, l.latitude, l.longitude),
            }))
            .filter((l) => l.distance <= 10)
            .sort((a, b) => a.distance - b.distance);
    }, [allListings, latitude, longitude]);

    const handleClaim = useCallback((listingId: string) => {
        setClaimedIds((prev) => {
            const next = new Set(prev);
            next.add(listingId);
            return next;
        });
        // In production, this would call the API to update the listing status
        alert(`✅ Food claimed! A QR code has been generated for pickup verification.\n\nListing ID: ${listingId}`);
    }, []);

    const displayListings: FoodListing[] = nearbyListings.map((l) =>
        claimedIds.has(l.id)
            ? {
                ...l,
                status: "CLAIMED" as const,
                claim: {
                    id: `claim-${l.id}`,
                    listingId: l.id,
                    ngoId: "ngo-1",
                    qrCode: `FWX-${l.id}-${Date.now()}`,
                    claimedAt: new Date().toISOString(),
                },
            }
            : l
    );

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
                <h1 className="text-3xl font-bold text-gray-900">Available Food Nearby</h1>
                <p className="mt-1 text-gray-500">
                    {geoLoading
                        ? "Detecting your location..."
                        : `Showing food within 10km · ${nearbyListings.length} listing${nearbyListings.length !== 1 ? "s" : ""} found`}
                </p>
            </div>

            {/* View Toggle */}
            <div className="mb-6 flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <button
                    onClick={() => setView("list")}
                    className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${view === "list"
                        ? "bg-eco-50 text-eco-700 border border-eco-200 shadow-sm"
                        : "text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700 hover:bg-gray-50"
                        }`}
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                    List View
                </button>
                <button
                    onClick={() => setView("map")}
                    className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${view === "map"
                        ? "bg-eco-50 text-eco-700 border border-eco-200 shadow-sm"
                        : "text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700 hover:bg-gray-50"
                        }`}
                >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Map View
                </button>
                <div className="ml-auto flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Safe</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" /> Expiring</span>
                    <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500" /> Urgent</span>
                </div>
            </div>

            {/* Content */}
            {view === "list" ? (
                <ListingFeed
                    listings={displayListings}
                    showClaimButton={true}
                    onClaim={handleClaim}
                    emptyMessage="No food available within 10km right now"
                />
            ) : (
                <MapView
                    listings={displayListings}
                    centerLat={latitude || 28.6139}
                    centerLng={longitude || 77.209}
                    radiusKm={10}
                    onClaim={handleClaim}
                />
            )}
        </div>
    );
}
