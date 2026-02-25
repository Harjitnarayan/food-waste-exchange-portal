"use client";
import React, { useState } from "react";
import Link from "next/link";
import type { Role } from "@/lib/types";

export default function RegisterPage() {
    const [role, setRole] = useState<Role | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [orgName, setOrgName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Demo mode: Auth requires a live Supabase instance. Explore the app via the nav links!");
        }, 1000);
    };

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
            <div className="w-full max-w-lg">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-500 to-eco-600 text-2xl shadow-lg shadow-eco-500/25">
                        🌿
                    </div>
                    <h1 className="text-2xl font-bold text-white">Join FoodXchange</h1>
                    <p className="mt-2 text-sm text-slate-400">Create your account and start making a difference</p>
                </div>

                <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                    {/* Role Selection */}
                    <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-slate-300">
                            I am a...
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setRole("DONOR")}
                                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all ${role === "DONOR"
                                        ? "border-eco-500 bg-eco-500/10 text-eco-400"
                                        : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600"
                                    }`}
                            >
                                <span className="text-3xl">🏢</span>
                                <span className="text-sm font-bold">Food Donor</span>
                                <span className="text-xs text-slate-500">Hotel, Wedding, Hostel</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("NGO")}
                                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all ${role === "NGO"
                                        ? "border-eco-500 bg-eco-500/10 text-eco-400"
                                        : "border-slate-700 bg-slate-800/50 text-slate-400 hover:border-slate-600"
                                    }`}
                            >
                                <span className="text-3xl">🤝</span>
                                <span className="text-sm font-bold">NGO</span>
                                <span className="text-xs text-slate-500">Food rescue org</span>
                            </button>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="orgName" className="mb-2 block text-sm font-medium text-slate-300">
                            Organization Name
                        </label>
                        <input
                            id="orgName"
                            type="text"
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            placeholder={role === "NGO" ? "e.g. Feeding Hope Foundation" : "e.g. Grand Palace Hotel"}
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="reg-email" className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                        <input
                            id="reg-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="reg-password" className="mb-2 block text-sm font-medium text-slate-300">Password</label>
                        <input
                            id="reg-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !role}
                        className="w-full rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 py-3.5 text-base font-bold text-white shadow-lg shadow-eco-500/25 transition-all hover:shadow-eco-500/40 disabled:opacity-50"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                                </svg>
                                Creating account...
                            </span>
                        ) : (
                            `Create ${role === "NGO" ? "NGO" : role === "DONOR" ? "Donor" : ""} Account`
                        )}
                    </button>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="font-medium text-eco-400 hover:text-eco-300">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
