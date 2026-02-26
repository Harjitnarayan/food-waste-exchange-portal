"use client";
import React from "react";
import { useExpiryTimer } from "@/hooks/useExpiryTimer";

interface SafetyBadgeProps {
    prepTime: string | Date;
    size?: "sm" | "md" | "lg";
}

const statusConfig = {
    green: {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200",
        dot: "bg-emerald-500",
        label: "Safe",
    },
    yellow: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200",
        dot: "bg-amber-500",
        label: "Expiring Soon",
    },
    red: {
        bg: "bg-red-50",
        text: "text-red-700",
        border: "border-red-200",
        dot: "bg-red-500",
        label: "Urgent",
    },
    expired: {
        bg: "bg-gray-50",
        text: "text-gray-500",
        border: "border-gray-200",
        dot: "bg-gray-400",
        label: "Expired",
    },
};

const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
};

export default function SafetyBadge({ prepTime, size = "md" }: SafetyBadgeProps) {
    const { status, formatted } = useExpiryTimer(prepTime);
    const config = statusConfig[status];

    return (
        <div
            className={`inline-flex items-center gap-2 rounded-full border ${config.bg} ${config.border} ${config.text} ${sizeClasses[size]} font-medium shadow-sm backdrop-blur-sm`}
        >
            <span className={`h-2 w-2 rounded-full ${config.dot} ${status === "red" ? "animate-pulse" : ""}`} />
            <span>{formatted}</span>
            <span className="opacity-40">·</span>
            <span className="opacity-80">{config.label}</span>
        </div>
    );
}
