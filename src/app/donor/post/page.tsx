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
                <div className="animate-slide-up mx-auto max-w-md text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-eco-500/20 text-4xl">
                        ✅
                    </div>
                    <h2 className="text-2xl font-bold text-white">Food Listed Successfully!</h2>
                    <p className="mt-3 text-slate-400">
                        Your surplus <span className="font-semibold text-eco-400">{foodType}</span> ({quantity} {unit.toLowerCase()}) is now visible to nearby NGOs.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                            href="/donor"
                            className="rounded-xl bg-eco-600 px-6 py-3 text-sm font-bold text-white hover:bg-eco-500"
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
                            className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-bold text-slate-300 hover:bg-slate-800"
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
            <div className="mb-8">
                <Link href="/donor" className="mb-4 inline-flex items-center gap-1 text-sm text-slate-400 hover:text-eco-400">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold text-white">Post Surplus Food</h1>
                <p className="mt-2 text-slate-400">Fill in the details to list your surplus food for nearby NGOs</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                {/* Photo Upload */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Photo</label>
                    <div
                        onClick={() => document.getElementById("photo-input")?.click()}
                        className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-dashed border-slate-700 transition-all hover:border-eco-500/50"
                    >
                        {photoPreview ? (
                            <div className="relative h-48">
                                <img src={photoPreview} alt="Food preview" className="h-full w-full object-cover" />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <span className="text-sm font-medium text-white">Change Photo</span>
                                </div>
                            </div>
                        ) : (
                            <div className="flex h-48 flex-col items-center justify-center text-slate-500">
                                <svg className="mb-2 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-sm font-medium">Click to upload a photo</p>
                                <p className="text-xs text-slate-600">PNG, JPG up to 5MB</p>
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
                    <label htmlFor="foodType" className="mb-2 block text-sm font-medium text-slate-300">
                        Food Type *
                    </label>
                    <input
                        id="foodType"
                        type="text"
                        value={foodType}
                        onChange={(e) => setFoodType(e.target.value)}
                        placeholder="e.g. Biryani & Raita, Wedding Sweets"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                        required
                    />
                </div>

                {/* Quantity & Unit */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="quantity" className="mb-2 block text-sm font-medium text-slate-300">
                            Quantity *
                        </label>
                        <input
                            id="quantity"
                            type="number"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="e.g. 50"
                            min="1"
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-300">Unit *</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                type="button"
                                onClick={() => setUnit("KG")}
                                className={`rounded-xl border py-3 text-sm font-bold transition-all ${unit === "KG"
                                        ? "border-eco-500 bg-eco-500/15 text-eco-400"
                                        : "border-slate-700 text-slate-400 hover:border-slate-600"
                                    }`}
                            >
                                Kilograms
                            </button>
                            <button
                                type="button"
                                onClick={() => setUnit("PLATES")}
                                className={`rounded-xl border py-3 text-sm font-bold transition-all ${unit === "PLATES"
                                        ? "border-eco-500 bg-eco-500/15 text-eco-400"
                                        : "border-slate-700 text-slate-400 hover:border-slate-600"
                                    }`}
                            >
                                Plates
                            </button>
                        </div>
                    </div>
                </div>

                {/* Preparation Time */}
                <div>
                    <label htmlFor="prepTime" className="mb-2 block text-sm font-medium text-slate-300">
                        Preparation Time *
                    </label>
                    <input
                        id="prepTime"
                        type="datetime-local"
                        value={prepTime}
                        onChange={(e) => setPrepTime(e.target.value)}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                        required
                    />
                    <p className="mt-1.5 text-xs text-slate-500">
                        ⏱️ A 6-hour safety window will start from this time
                    </p>
                </div>

                {/* Address */}
                <div>
                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-slate-300">
                        Pickup Address *
                    </label>
                    <input
                        id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Full address for NGO pickup"
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                        required
                    />
                </div>

                {/* Notes */}
                <div>
                    <label htmlFor="notes" className="mb-2 block text-sm font-medium text-slate-300">
                        Additional Notes
                    </label>
                    <textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Packed in steel containers, vegetarian only, includes beverages..."
                        rows={3}
                        className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20 resize-none"
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 py-4 text-lg font-bold text-white shadow-lg shadow-eco-500/25 transition-all hover:shadow-eco-500/40 active:scale-[0.98]"
                >
                    🍽️ Post Surplus Food
                </button>
            </form>
        </div>
    );
}
