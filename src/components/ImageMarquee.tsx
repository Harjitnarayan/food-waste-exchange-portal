"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface MarqueeImage {
    src: string;
    alt: string;
}

interface ImageMarqueeProps {
    images: MarqueeImage[];
    speed?: number;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    imageWidth?: number;
    imageHeight?: number;
    gap?: number;
    borderRadius?: number;
}

export default function ImageMarquee({
    images,
    speed = 1,
    direction = "left",
    pauseOnHover = true,
    imageWidth = 280,
    imageHeight = 200,
    gap = 16,
    borderRadius = 16,
}: ImageMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<number>(0);
    const animFrameRef = useRef<number>(0);
    const isPausedRef = useRef(false);
    const [isHovered, setIsHovered] = useState(false);

    // Duplicate images enough times to fill the screen seamlessly
    const duplicatedImages = [...images, ...images, ...images, ...images];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const totalWidth = images.length * (imageWidth + gap);

        const animate = () => {
            if (!isPausedRef.current) {
                const dir = direction === "left" ? -1 : 1;
                scrollRef.current += speed * dir;

                // Reset position seamlessly when one full set has scrolled
                if (direction === "left" && scrollRef.current <= -totalWidth) {
                    scrollRef.current += totalWidth;
                } else if (direction === "right" && scrollRef.current >= 0) {
                    scrollRef.current -= totalWidth;
                }

                container.style.transform = `translateX(${scrollRef.current}px)`;
            }
            animFrameRef.current = requestAnimationFrame(animate);
        };

        // Start from 0 for left direction
        if (direction === "right") {
            scrollRef.current = -totalWidth;
        }

        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animFrameRef.current);
        };
    }, [images.length, imageWidth, gap, speed, direction]);

    const handleMouseEnter = () => {
        if (pauseOnHover) {
            isPausedRef.current = true;
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (pauseOnHover) {
            isPausedRef.current = false;
            setIsHovered(false);
        }
    };

    return (
        <div
            className="relative overflow-hidden"
            style={{ height: imageHeight + 20 }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Gradient edges for smooth fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

            <div
                ref={containerRef}
                className="flex items-center"
                style={{
                    gap: `${gap}px`,
                    willChange: "transform",
                    transition: isHovered ? "none" : undefined,
                }}
            >
                {duplicatedImages.map((img, i) => (
                    <div
                        key={`${img.alt}-${i}`}
                        className="group relative shrink-0 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:z-20"
                        style={{
                            width: imageWidth,
                            height: imageHeight,
                            borderRadius,
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                            draggable={false}
                            sizes={`${imageWidth}px`}
                        />
                        {/* Hover overlay with title */}
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            <p className="w-full p-3 text-center text-sm font-semibold text-white">
                                {img.alt}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
