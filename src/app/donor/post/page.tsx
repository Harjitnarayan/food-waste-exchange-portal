"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function PostSurplusPage() {
    const [foodType, setFoodType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState<"KG" | "PLATES">("KG");
    const [prepTime, setPrepTime] = useState("");
    const [address, setAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [photo, setPhoto] = useState<File | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPhoto(file);
            const reader = new FileReader();
            reader.onloadend = () => setPhotoPreview(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center px-4">
                <div className="animate-scale-in mx-auto max-w-md text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-eco-50">
                        <svg className="h-10 w-10 text-eco-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Food Listed Successfully!</h2>
                    <p className="mt-3 text-gray-500">
                        Your surplus <span className="font-semibold text-eco-600">{foodType}</span> ({quantity} {unit.toLowerCase()}) is now visible to nearby NGOs.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                            href="/donor"
                            className="rounded-xl bg-eco-600 px-6 py-3 text-sm font-bold text-white hover:bg-eco-500 transition-colors duration-300"
                        >
                            View Dashboard
                        </Link>
                        <button
                            onClick={() => {
                                setSubmitted(false);
                                setFoodType("");
                                setQuantity("");
                                setNotes("");
                                setPhoto(null);
                                setPhotoPreview(null);
                            }}
                            className="rounded-xl border-2 border-gray-200 px-6 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors duration-300"
                        >
                            Post Another
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
            <div className="mb-8 animate-fade-in">
                <Link href="/donor" className="mb-4 inline-flex items-center gap-1 text-sm text-gray-400 hover:text-eco-600 transition-colors duration-200">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold text-gray-900">Post Surplus Food</h1>
                <p className="mt-2 text-gray-500">Fill in the details to list your surplus food for nearby NGOs</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                {/* Photo Upload */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Photo</label>
                    <div
                        onClick={() => document.getElementById("photo-input")?.click()}
                        className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-gray-200 transition-all duration-300 hover:border-eco-400 hover:bg-eco-50/30"
                    >
                        {photoPreview ? (
                            <div className="relative h-48">
                                <img src={photoPreview} alt="Food preview" className="h-full w-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <span className="text-sm font-medium text-white">Change Photo</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-48 flex-col items-center justify-center text-gray-400">
                                <svg className="mb-2 h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-sm font-medium">Click to upload a photo</p>
                                <p className="text-xs text-gray-300">PNG, JPG up to 5MB</p>
                            </div>
                        )}
                    </div>
                    <input
                        id="photo-input"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handlePhotoChange}
                    />
                </div>

                {/* Food Type */}
                <div>
                    <label htmlFor="foodType" className="mb-2 block text-sm font-medium text-gray-700">
                        Food Type *
                    </label>
                    <input
                        id="foodType"
                        type="text"
                        value={foodType}
                        onChange={(e) => setFoodType(e.target.value)}
                        placeholder="e.g. Biryani & Raita, Wedding Sweets"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                        required
                    />
                </div>

                {/* Quantity & Unit */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="quantity" className="mb-2 block text-sm font-medium text-gray-700">
                            Quantity *
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="e.g. 50"
                            min="1"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Unit *</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => setUnit("KG")}
                                className={`rounded-xl border-2 py-3 text-sm font-bold transition-all duration-300 ${unit === "KG"
                                    ? "border-eco-500 bg-eco-50 text-eco-700"
                                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                                    }`}
                            >
                                Kilograms
                            </button>
                            <button
                                type="button"
                                onClick={() => setUnit("PLATES")}
                                className={`rounded-xl border-2 py-3 text-sm font-bold transition-all duration-300 ${unit === "PLATES"
                                    ? "border-eco-500 bg-eco-50 text-eco-700"
                                    : "border-gray-200 text-gray-500 hover:border-gray-300"
                                    }`}
                            >
                                Plates
                            </button>
                        </div>
                    </div>
                </div>

                {/* Preparation Time */}
                <div>
                    <label htmlFor="prepTime" className="mb-2 block text-sm font-medium text-gray-700">
                        Preparation Time *
                    </label>
                    <input
                        id="prepTime"
                        type="datetime-local"
                        value={prepTime}
                        onChange={(e) => setPrepTime(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                        required
                    />
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-gray-400">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        A 6-hour safety window will start from this time
                    </p>
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-700">
                        Pickup Address *
                    </label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Full address for NGO pickup"
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                        required
                    />
                </div>

                {/* Notes */}
                <div>
                    <label htmlFor="notes" className="mb-2 block text-sm font-medium text-gray-700">
                        Additional Notes
                    </label>
                    <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Packed in steel containers, vegetarian only, includes beverages..."
                        rows={3}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 resize-none"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 py-4 text-lg font-bold text-white shadow-lg shadow-eco-500/20 transition-all duration-300 hover:shadow-eco-500/30 hover:scale-[1.01] active:scale-[0.98]"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Post Surplus Food
                </button>
            </form>
        </div>
    );
}
