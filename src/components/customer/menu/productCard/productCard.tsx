"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Plus, Coffee } from "lucide-react";
import { Product } from "@/lib/data/products";

const formatRupiah = (value: number) =>
    `Rp ${value.toLocaleString("id-ID")}`;

const ProductCard = ({ product }: { product: Product }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="group rounded-3xl border border-black/10 bg-white overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_16px_40px_rgba(0,0,0,0.09)] hover:-translate-y-1">
            {/* Photo */}
            <div className="relative aspect-square overflow-hidden bg-black/[0.03]">
                {!imageError ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        onError={() => setImageError(true)}
                        className="object-cover w-full h-full grayscale contrast-125 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
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

                    <button
                        type="button"
                        aria-label={`Add ${product.name} to cart`}
                        className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-black text-white hover:scale-110 active:scale-95 transition-transform duration-200 cursor-pointer"
                    >
                        <Plus strokeWidth={1.5} className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;