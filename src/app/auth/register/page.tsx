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
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12 bg-gray-50/50">
            <div className="w-full max-w-lg animate-scale-in">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-500 to-eco-600 shadow-lg shadow-eco-500/20">
                        <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Join FoodXchange</h1>
                    <p className="mt-2 text-sm text-gray-500">Create your account and start making a difference</p>
                </div>

                <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                    {/* Role Selection */}
                    <div className="mb-6">
                        <label className="mb-3 block text-sm font-medium text-gray-700">
                            I am a...
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => setRole("DONOR")}
                                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all duration-300 ${role === "DONOR"
                                    ? "border-eco-500 bg-eco-50 text-eco-700"
                                    : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${role === "DONOR" ? "bg-eco-100" : "bg-gray-100"} transition-colors duration-300`}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                    </svg>
                                </div>
                                <span className="text-sm font-bold">Food Donor</span>
                                <span className="text-xs text-gray-400">Hotel, Wedding, Hostel</span>
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("NGO")}
                                className={`flex flex-col items-center gap-2 rounded-xl border-2 p-5 transition-all duration-300 ${role === "NGO"
                                    ? "border-eco-500 bg-eco-50 text-eco-700"
                                    : "border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:bg-gray-50"
                                    }`}
                            >
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${role === "NGO" ? "bg-eco-100" : "bg-gray-100"} transition-colors duration-300`}>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                </div>
                                <span className="text-sm font-bold">NGO</span>
                                <span className="text-xs text-gray-400">Food rescue org</span>
                            </button>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="orgName" className="mb-2 block text-sm font-medium text-gray-700">
                            Organization Name
                        </label>
                        <input
                            id="orgName"
                            type="text"
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            placeholder={role === "NGO" ? "e.g. Feeding Hope Foundation" : "e.g. Grand Palace Hotel"}
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="reg-email" className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                        <input
                            id="reg-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="reg-password" className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                        <input
                            id="reg-password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !role}
                        className="w-full rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 py-3.5 text-base font-bold text-white shadow-lg shadow-eco-500/20 transition-all duration-300 hover:shadow-eco-500/30 hover:scale-[1.01] disabled:opacity-50"
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

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="font-medium text-eco-600 hover:text-eco-500 transition-colors duration-200">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
