"use client";
import React from "react";
import { useExpiryTimer } from "@/hooks/useExpiryTimer";

interface SafetyBadgeProps {
    prepTime: string | Date;
    size?: "sm" | "md" | "lg";
}

const statusConfig = {
    green: {
        bg: "bg-emerald-500/20",
        text: "text-emerald-400",
        border: "border-emerald-500/30",
        dot: "bg-emerald-400",
        label: "Safe",
    },
    yellow: {
        bg: "bg-amber-500/20",
        text: "text-amber-400",
        border: "border-amber-500/30",
        dot: "bg-amber-400",
        label: "Expiring Soon",
    },
    red: {
        bg: "bg-red-500/20",
        text: "text-red-400",
        border: "border-red-500/30",
        dot: "bg-red-400",
        label: "Urgent",
    },
    expired: {
        bg: "bg-slate-500/20",
        text: "text-slate-400",
        border: "border-slate-500/30",
        dot: "bg-slate-400",
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
            className={`inline-flex items-center gap-2 rounded-full border ${config.bg} ${config.border} ${config.text} ${sizeClasses[size]} font-medium`}
        >
            <span className={`h-2 w-2 rounded-full ${config.dot} ${status === "red" ? "animate-pulse" : ""}`} />
            <span>{formatted}</span>
            <span className="opacity-60">·</span>
            <span className="opacity-80">{config.label}</span>
        </div>
    );
}
