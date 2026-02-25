"use client";
import { useState, useEffect } from "react";

interface GeolocationState {
    latitude: number | null;
    longitude: number | null;
    error: string | null;
    loading: boolean;
}

export function useGeolocation(): GeolocationState {
    const [state, setState] = useState<GeolocationState>({
        latitude: null,
        longitude: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setState({
                latitude: 28.6139, // Default: New Delhi
                longitude: 77.209,
                error: "Geolocation not supported. Using default location.",
                loading: false,
            });
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                    loading: false,
                });
            },
            (err) => {
                setState({
                    latitude: 28.6139, // Default: New Delhi
                    longitude: 77.209,
                    error: err.message + " Using default location.",
                    loading: false,
                });
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    }, []);

    return state;
}

// Haversine distance in km
export function getDistanceKm(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
): number {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
