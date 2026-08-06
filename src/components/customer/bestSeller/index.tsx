"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Star, Sparkles } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import { products } from "@/lib/data/products";

const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

// Ambil 4 produk dengan rating tertinggi dari data asli sebagai "Best Seller"
const bestSellerProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

const BestSeller = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const goToMenu = () => {
        setIsLoading(true);

        setTimeout(() => {
            router.push("/menu");
        }, 1500); // durasi sama seperti loading di halaman login
    };

    return (
        <section id="best-seller" className="relative bg-white text-black">
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

                {/* Header */}
                <div className="flex items-end justify-between max-w-xl">
                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase text-black/50">
                            Fan Favorites
                        </span>
                        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                            <BlurReveal>Best</BlurReveal>{" "}
                            <BlurReveal delay={0.1}>
                                <span className="italic">Seller</span>
                            </BlurReveal>
                        </h2>
                    </div>
                </div>

                {/* Product grid */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10">
                    {bestSellerProducts.map((product, index) => {
                        // 2 item pertama (baris pertama di layar mobile 2-kolom)
                        // dianggap above the fold -> dimuat prioritas tinggi
                        const isPriority = index < 2;
                        const isBestSeller = product.rating >= 4.8;

                        return (
                            <div
                                key={product.id}
                                className="group bg-white flex flex-col"
                            >
                                {/* Photo */}
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        priority={isPriority}
                                        loading={isPriority ? "eager" : "lazy"}
                                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                    />

                                    {/* Rating badge floating on photo */}
                                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-black shadow-sm">
                                        <Star className="h-3 w-3 fill-black text-black" />
                                        {product.rating.toFixed(1)}
                                    </span>

                                    {/* Best seller ribbon */}
                                    {isBestSeller && (
                                        <span className="best-seller-badge absolute top-3 right-3 inline-flex items-center gap-1 overflow-hidden rounded-full bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FAFAF9] shadow-[0_4px_14px_rgba(0,0,0,0.35)] ring-1 ring-[#FAFAF9]/40">
                                            <Sparkles
                                                strokeWidth={0}
                                                className="relative z-10 h-3 w-3 fill-[#FAFAF9]"
                                            />
                                            <span className="relative z-10">Best Seller</span>
                                            <span className="best-seller-shine pointer-events-none absolute inset-0" />
                                        </span>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="flex flex-1 flex-col px-5 py-6">
                                    <h3 className="font-serif text-lg leading-snug">
                                        <BlurReveal delay={index * 0.1}>
                                            {product.name}
                                        </BlurReveal>
                                    </h3>

                                    <div className="mt-2 flex items-center justify-between">
                                        <span className="text-sm text-black/70">
                                            {formatRupiah(product.price)}
                                        </span>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={goToMenu}
                                        className="mt-6 w-full border border-black py-2.5 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
                                    >
                                        View Menu
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* View full menu */}
                <div className="mt-16 flex justify-center">
                    <button
                        type="button"
                        onClick={goToMenu}
                        className="border border-black px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
                    >
                        View Full Menu
                    </button>
                </div>
            </div>

            {/* Loading Overlay — sama persis dengan yang di halaman login */}
            {isLoading && (
                <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm">
                    <div className="relative flex flex-col items-center gap-8">

                        {/* Dual-ring spinner with a breathing center dot */}
                        <div className="relative h-16 w-16">
                            <div className="absolute inset-0 rounded-full border-[3px] border-black/10" />
                            <div className="best-seller-spin-cw absolute inset-0 rounded-full border-[3px] border-transparent border-t-black border-r-black" />
                            <div className="best-seller-spin-ccw absolute inset-1.5 rounded-full border-2 border-transparent border-b-black/40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="best-seller-pulse-dot h-2 w-2 rounded-full bg-black" />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] tracking-[0.35em] uppercase text-black">
                                Orvella
                            </span>
                        </div>

                        {/* Indeterminate progress line */}
                        <div className="h-px w-40 overflow-hidden bg-black/10">
                            <div className="best-seller-progress-slide h-full w-1/3 bg-black" />
                        </div>
                    </div>
                </div>
            )}

            {/* Global style: dipakai plain <style> (bukan styled-jsx) karena styled-jsx
               tidak konsisten men-scope class untuk elemen yang dirender kondisional
               di bawah Turbopack. Nama class dibuat unik (prefix best-seller-) supaya
               tidak bentrok dengan komponen lain di halaman. */}
            <style>{`
                @keyframes bestSellerSpinCW {
                    to {
                        transform: rotate(360deg);
                    }
                }
                .best-seller-spin-cw {
                    animation: bestSellerSpinCW 1s linear infinite;
                }

                @keyframes bestSellerSpinCCW {
                    to {
                        transform: rotate(-360deg);
                    }
                }
                .best-seller-spin-ccw {
                    animation: bestSellerSpinCCW 1.6s linear infinite;
                }

                @keyframes bestSellerPulseDot {
                    0%, 100% {
                        transform: scale(0.85);
                        opacity: 0.6;
                    }
                    50% {
                        transform: scale(1.25);
                        opacity: 1;
                    }
                }
                .best-seller-pulse-dot {
                    animation: bestSellerPulseDot 1.1s ease-in-out infinite;
                }

                @keyframes bestSellerProgressSlide {
                    0% {
                        transform: translateX(-120%);
                    }
                    100% {
                        transform: translateX(320%);
                    }
                }
                .best-seller-progress-slide {
                    animation: bestSellerProgressSlide 2.4s cubic-bezier(0.45, 0, 0.15, 1) infinite;
                }

                /* Badge Best Seller: ikon bintang dibiarkan diam (tidak ada animasi
                   scale/rotate). Satu-satunya efek yang tersisa adalah kilau (shine)
                   yang menyapu secara halus. */
                .best-seller-shine {
                    background: linear-gradient(
                        115deg,
                        transparent 30%,
                        rgba(255, 255, 255, 0.55) 48%,
                        rgba(255, 255, 255, 0.55) 52%,
                        transparent 70%
                    );
                    transform: translateX(-140%);
                    animation: bestSellerShine 3.2s ease-in-out infinite;
                }

                @keyframes bestSellerShine {
                    0% {
                        transform: translateX(-140%);
                    }
                    50%,
                    100% {
                        transform: translateX(140%);
                    }
                }
            `}</style>
        </section>
    );
};

export default BestSeller;