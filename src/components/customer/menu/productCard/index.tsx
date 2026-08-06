"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Plus, Minus, Coffee, Sparkles } from "lucide-react";
import { Product } from "@/lib/data/products";

const formatRupiah = (value: number) => `Rp ${value.toLocaleString("id-ID")}`;

type ProductCardProps = {
    product: Product;
    index: number;
    quantity: number;
    isWishlisted: boolean;
    onAdd: () => void;
    onIncrement: () => void;
    onDecrement: () => void;
    onToggleWishlist: () => void;
};

const ProductCard = ({
    product,
    index,
    quantity,
    isWishlisted,
    onAdd,
    onIncrement,
    onDecrement,
    onToggleWishlist,
}: ProductCardProps) => {
    const [imageError, setImageError] = useState(false);
    const isBestSeller = product.rating >= 4.8;

    const isPriority = index < 4;

    return (
        <div
            style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
            className="card-in group rounded-3xl border border-black/10 bg-white overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1"
        >
            {/* Photo */}
            <div className="relative aspect-square overflow-hidden bg-black/3">
                {!imageError ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                        priority={isPriority}
                        loading={isPriority ? "eager" : "lazy"}
                        onError={() => setImageError(true)}
                        className="object-cover w-full h-full transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-black/20">
                        <Coffee strokeWidth={1} className="h-10 w-10" />
                        <span className="text-[10px] tracking-[0.2em] uppercase">
                            Orvella
                        </span>
                    </div>
                )}

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
                            className="best-seller-sparkle relative z-10 h-3 w-3 fill-[#FAFAF9]"
                        />
                        <span className="relative z-10">Best Seller</span>
                        <span className="best-seller-shine pointer-events-none absolute inset-0" />
                    </span>
                )}

            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="font-serif text-lg leading-snug text-black">
                    {product.name}
                </h3>

                <p className="mt-1.5 text-xs text-black/45 leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-black">
                        {formatRupiah(product.price)}
                    </span>

                    {quantity === 0 ? (
                        <button
                            type="button"
                            onClick={onAdd}
                            aria-label={`Add ${product.name} to cart`}
                            className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-black text-white hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
                        >
                            <Plus strokeWidth={1.5} className="h-4 w-4" />
                        </button>
                    ) : (
                        <div className="stepper-in inline-flex items-center gap-2.5 rounded-full bg-black px-1 py-1 text-white">
                            <button
                                type="button"
                                onClick={onDecrement}
                                aria-label="Kurangi jumlah"
                                className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-150 hover:bg-white/15 active:scale-90 cursor-pointer"
                            >
                                <Minus strokeWidth={1.5} className="h-3.5 w-3.5" />
                            </button>
                            <span className="min-w-4 text-center text-xs font-medium tabular-nums">
                                {quantity}
                            </span>
                            <button
                                type="button"
                                onClick={onIncrement}
                                aria-label="Tambah jumlah"
                                className="flex h-7 w-7 items-center justify-center rounded-full transition-colors duration-150 hover:bg-white/15 active:scale-90 cursor-pointer"
                            >
                                <Plus strokeWidth={1.5} className="h-3.5 w-3.5" />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .best-seller-badge {
                    animation: bestSellerPulse 1.8s ease-in-out infinite;
                    transform-origin: center;
                }

                @keyframes bestSellerPulse {
                    0%,
                    100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.08);
                    }
                }

                .best-seller-sparkle {
                    animation: bestSellerSpin 2.4s linear infinite;
                    transform-origin: center;
                }

                @keyframes bestSellerSpin {
                    0%,
                    70% {
                        transform: rotate(0deg) scale(1);
                    }
                    80% {
                        transform: rotate(180deg) scale(1.3);
                    }
                    100% {
                        transform: rotate(360deg) scale(1);
                    }
                }

                .best-seller-shine {
                    background: linear-gradient(
                        115deg,
                        transparent 30%,
                        rgba(255, 255, 255, 0.55) 48%,
                        rgba(255, 255, 255, 0.55) 52%,
                        transparent 70%
                    );
                    transform: translateX(-140%);
                    animation: bestSellerShine 2.4s ease-in-out infinite;
                }

                @keyframes bestSellerShine {
                    0% {
                        transform: translateX(-140%);
                    }
                    45%,
                    100% {
                        transform: translateX(140%);
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductCard;