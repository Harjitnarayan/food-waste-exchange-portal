"use client";
import { useState, useEffect, useCallback } from "react";
import type { SafetyStatus } from "@/lib/types";

const EXPIRY_HOURS = 6;
const GREEN_THRESHOLD = 3 * 60 * 60 * 1000;  // 3 hours in ms
const YELLOW_THRESHOLD = 1 * 60 * 60 * 1000;  // 1 hour in ms

interface ExpiryState {
    timeLeftMs: number;
    status: SafetyStatus;
    formatted: string;
    isExpired: boolean;
    percentage: number; // 0-100 how much time has elapsed
}

function formatTimeLeft(ms: number): string {
    if (ms <= 0) return "Expired";
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
        return `${hours}h ${minutes.toString().padStart(2, "0")}m`;
    }
    return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
}

function getStatus(ms: number): SafetyStatus {
    if (ms <= 0) return "expired";
    if (ms > GREEN_THRESHOLD) return "green";
    if (ms > YELLOW_THRESHOLD) return "yellow";
    return "red";
}

export function useExpiryTimer(prepTime: string | Date): ExpiryState {
    const calcState = useCallback((): ExpiryState => {
        const prep = new Date(prepTime).getTime();
        const expiryTime = prep + EXPIRY_HOURS * 60 * 60 * 1000;
        const now = Date.now();
        const timeLeftMs = Math.max(0, expiryTime - now);
        const totalDuration = EXPIRY_HOURS * 60 * 60 * 1000;
        const elapsed = totalDuration - timeLeftMs;
        const percentage = Math.min(100, (elapsed / totalDuration) * 100);

        return {
            timeLeftMs,
            status: getStatus(timeLeftMs),
            formatted: formatTimeLeft(timeLeftMs),
            isExpired: timeLeftMs <= 0,
            percentage,
        };
    }, [prepTime]);

    const [state, setState] = useState<ExpiryState>(calcState);

    useEffect(() => {
        setState(calcState());
        const interval = setInterval(() => {
            const newState = calcState();
            setState(newState);
            if (newState.isExpired) clearInterval(interval);
        }, 1000);
        return () => clearInterval(interval);
    }, [calcState]);

    return state;
}
