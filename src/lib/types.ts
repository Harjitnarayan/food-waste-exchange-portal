// Types for the Food Waste Exchange Portal

export type Role = "DONOR" | "NGO";
export type Unit = "KG" | "PLATES";
export type ListingStatus = "AVAILABLE" | "CLAIMED" | "EXPIRED";
export type SafetyStatus = "green" | "yellow" | "red" | "expired";

export interface User {
    id: string;
    email: string;
    name: string;
    role: Role;
    phone?: string;
    orgName?: string;
    latitude?: number;
    longitude?: number;
    createdAt: string;
}

export interface FoodListing {
    id: string;
    donorId: string;
    foodType: string;
    quantity: number;
    unit: Unit;
    prepTime: string; // ISO date string
    photoUrl?: string;
    status: ListingStatus;
    address?: string;
    latitude: number;
    longitude: number;
    notes?: string;
    createdAt: string;
    donor?: User;
    claim?: Claim;
}

export interface Claim {
    id: string;
    listingId: string;
    ngoId: string;
    qrCode: string;
    claimedAt: string;
    ngo?: User;
}

export interface ImpactStats {
    totalMealsRescued: number;
    totalCO2Offset: number; // in kg
    totalDonors: number;
    totalNGOs: number;
    totalListings: number;
    totalClaimed: number;
}
