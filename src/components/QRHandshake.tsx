"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

interface QRHandshakeProps {
    qrCode: string;
    listingId: string;
    foodType: string;
}

export default function QRHandshake({ qrCode, listingId, foodType }: QRHandshakeProps) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 rounded-lg bg-eco-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-eco-500 hover:shadow-lg hover:shadow-eco-500/25 active:scale-95"
            >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                View QR Code
            </button>

            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="mx-4 w-full max-w-sm animate-slide-up rounded-2xl border border-slate-700 bg-slate-800 p-8 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="mb-2 text-center text-xl font-bold text-white">
                            Digital Handshake
                        </h3>
                        <p className="mb-6 text-center text-sm text-slate-400">
                            Scan this QR code to confirm pickup of <span className="font-medium text-eco-400">{foodType}</span>
                        </p>
                        <div className="mx-auto flex w-fit rounded-2xl bg-white p-4">
                            <QRCodeSVG
                                value={qrCode}
                                size={200}
                                level="H"
                                fgColor="#064e3b"
                                bgColor="#ffffff"
                            />
                        </div>
                        <p className="mt-4 text-center text-xs font-mono text-slate-500 break-all">
                            {qrCode}
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 w-full rounded-xl bg-slate-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
