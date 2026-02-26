import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "FoodXchange — Reduce Food Waste, Feed Communities",
    description: "Connect bulk food donors with NGOs to reduce methane emissions from food waste. Every meal rescued counts.",
    manifest: "/manifest.json",
    keywords: ["food waste", "food donation", "NGO", "sustainability", "carbon offset"],
    icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
    themeColor: "#ffffff",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
                    crossOrigin=""
                />
            </head>
            <body className="flex min-h-screen flex-col bg-white">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
