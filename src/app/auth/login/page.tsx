"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Demo: simulate auth
        setTimeout(() => {
            setLoading(false);
            alert("Demo mode: Auth requires a live Supabase instance. Explore the app via the nav links!");
        }, 1000);
    };

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-eco-500 to-eco-600 text-2xl shadow-lg shadow-eco-500/25">
                        🌿
                    </div>
                    <h1 className="text-2xl font-bold text-white">Welcome back</h1>
                    <p className="mt-2 text-sm text-slate-400">Sign in to your FoodXchange account</p>
                </div>

                <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
                    <div className="mb-5">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-all focus:border-eco-500 focus:ring-2 focus:ring-eco-500/20"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-300">
                            Password
                        </label>
                        <input
                            id="password"
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
                        disabled={loading}
                        className="w-full rounded-xl bg-gradient-to-r from-eco-600 to-eco-500 py-3.5 text-base font-bold text-white shadow-lg shadow-eco-500/25 transition-all hover:shadow-eco-500/40 disabled:opacity-50"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center gap-2">
                                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                                </svg>
                                Signing in...
                            </span>
                        ) : (
                            "Sign In"
                        )}
                    </button>

                    <p className="mt-6 text-center text-sm text-slate-400">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/register" className="font-medium text-eco-400 hover:text-eco-300">
                            Create one
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
