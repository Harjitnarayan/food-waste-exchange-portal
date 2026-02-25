"use client";
import React, { useEffect, useState } from "react";
import type { FoodListing } from "@/lib/types";

interface MapViewProps {
    listings: FoodListing[];
    centerLat: number;
    centerLng: number;
    radiusKm?: number;
    onClaim?: (listingId: string) => void;
}

export default function MapView({
    listings,
    centerLat,
    centerLng,
    radiusKm = 10,
    onClaim,
}: MapViewProps) {
    const [mapReady, setMapReady] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [L, setL] = useState<any>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [ReactLeaflet, setReactLeaflet] = useState<any>(null);

    useEffect(() => {
        // Dynamically import leaflet on client only
        Promise.all([import("leaflet"), import("react-leaflet")])
            .then(([leaflet, rl]) => {
                // Fix default icon issue
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                delete (leaflet.Icon.Default.prototype as any)._getIconUrl;
                leaflet.Icon.Default.mergeOptions({
                    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
                    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
                    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
                });
                setL(leaflet);
                setReactLeaflet(rl);
                setMapReady(true);
            })
            .catch(console.error);
    }, []);

    if (!mapReady || !L || !ReactLeaflet) {
        return (
            <div className="flex h-[500px] items-center justify-center rounded-2xl border border-slate-700 bg-slate-800/50">
                <div className="flex flex-col items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-eco-400 border-t-transparent" />
                    <p className="text-sm text-slate-400">Loading map...</p>
                </div>
            </div>
        );
    }

    const { MapContainer, TileLayer, Marker, Popup, Circle } = ReactLeaflet;

    const ecoIcon = new L.DivIcon({
        html: `<div style="background: #059669; border: 3px solid #fff; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 2px 8px rgba(0,0,0,.3);">🍽️</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        className: "",
    });

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
            <MapContainer
                center={[centerLat, centerLng]}
                zoom={12}
                className="h-[500px] w-full"
                style={{ background: "#1e293b" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* 10km radius circle */}
                <Circle
                    center={[centerLat, centerLng]}
                    radius={radiusKm * 1000}
                    pathOptions={{
                        color: "#059669",
                        fillColor: "#059669",
                        fillOpacity: 0.08,
                        weight: 2,
                        dashArray: "8, 8",
                    }}
                />
                {/* Food listing markers */}
                {listings.map((listing) => (
                    <Marker
                        key={listing.id}
                        position={[listing.latitude, listing.longitude]}
                        icon={ecoIcon}
                    >
                        <Popup>
                            <div className="min-w-[200px] p-1">
                                <h4 className="text-sm font-bold text-slate-900">{listing.foodType}</h4>
                                <p className="text-xs text-slate-600">{listing.donor?.orgName}</p>
                                <p className="mt-1 text-xs text-slate-500">
                                    {listing.quantity} {listing.unit === "KG" ? "kg" : "plates"}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">{listing.address}</p>
                                {listing.status === "AVAILABLE" && onClaim && (
                                    <button
                                        onClick={() => onClaim(listing.id)}
                                        className="mt-2 w-full rounded-lg bg-emerald-600 py-1.5 text-xs font-semibold text-white hover:bg-emerald-500"
                                    >
                                        🤝 Claim
                                    </button>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
