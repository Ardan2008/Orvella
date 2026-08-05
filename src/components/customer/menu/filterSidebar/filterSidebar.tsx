"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { ProductCategory } from "@/lib/data/products";

const categories: { label: string; value: ProductCategory | "All" }[] = [
    { label: "All", value: "All" },
    { label: "Coffee", value: "Coffee" },
    { label: "Non-Coffee", value: "Non-Coffee" },
    { label: "Food", value: "Food" },
];

export type PriceRangeValue = "all" | "under-20" | "20-25" | "25-30" | "above-30";

const priceRanges: { label: string; value: PriceRangeValue }[] = [
    { label: "All", value: "all" },
    { label: "Under 20K", value: "under-20" },
    { label: "20K – 25K", value: "20-25" },
    { label: "25K – 30K", value: "25-30" },
    { label: "Above 30K", value: "above-30" },
];

type FilterSidebarProps = {
    activeCategory: ProductCategory | "All";
    onCategoryChange: (category: ProductCategory | "All") => void;
    activePriceRange: PriceRangeValue;
    onPriceRangeChange: (range: PriceRangeValue) => void;
    onReset: () => void;
};

const FilterSidebar = ({
    activeCategory,
    onCategoryChange,
    activePriceRange,
    onPriceRangeChange,
    onReset,
}: FilterSidebarProps) => {
    const [isSpinning, setIsSpinning] = useState(false);

    const handleReset = () => {
        onReset();
        setIsSpinning(true);
        window.setTimeout(() => setIsSpinning(false), 800);
    };

    return (
        <aside className="w-full md:w-64 shrink-0">
            <div className="md:sticky md:top-28 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">

                {/* Header */}
                <div className="flex items-center justify-between mb-7">
                    <span className="font-serif text-lg italic text-black">
                        Filter
                    </span>
                    <button
                        type="button"
                        onClick={handleReset}
                        aria-label="Reset filters"
                        title="Reset filters"
                        className={`reset-btn group relative inline-flex items-center justify-center h-9 w-9 rounded-full border transition-all duration-300 cursor-pointer ${
                            isSpinning
                                ? "border-black bg-black text-white shadow-[0_0_0_1px_rgba(0,0,0,0.05),0_6px_16px_-4px_rgba(0,0,0,0.35)]"
                                : "border-black/10 text-black/50 hover:border-black hover:text-black hover:bg-black/[0.03] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.15)]"
                        }`}
                    >
                        {isSpinning && (
                            <>
                                <span className="ripple-ring absolute inset-0 rounded-full border border-black/60" />
                                <span className="ripple-ring ripple-ring-delay absolute inset-0 rounded-full border border-black/40" />
                            </>
                        )}
                        <RotateCcw
                            strokeWidth={1.5}
                            className={`h-4 w-4 relative z-10 transition-transform duration-300 ease-out ${
                                isSpinning ? "spin-once" : "group-hover:-rotate-45"
                            }`}
                        />
                    </button>
                </div>

                {/* Category */}
                <div>
                    <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-black/35 mb-3">
                        Category
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.value;
                            return (
                                <button
                                    key={cat.value}
                                    type="button"
                                    onClick={() => onCategoryChange(cat.value)}
                                    className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? "bg-black text-white shadow-sm"
                                            : "bg-black/[0.03] text-black/60 hover:bg-black/[0.07] hover:text-black"
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/[0.06] my-7" />

                {/* Price */}
                <div>
                    <h3 className="text-[10px] font-medium tracking-[0.25em] uppercase text-black/35 mb-3">
                        Price Range
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {priceRanges.map((range) => {
                            const isActive = activePriceRange === range.value;
                            return (
                                <button
                                    key={range.value}
                                    type="button"
                                    onClick={() => onPriceRangeChange(range.value)}
                                    className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? "bg-black text-white shadow-sm"
                                            : "bg-black/[0.03] text-black/60 hover:bg-black/[0.07] hover:text-black"
                                    }`}
                                >
                                    {range.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spinOnce {
                    from {
                        transform: rotate(0deg) scale(1);
                    }
                    50% {
                        transform: rotate(-360deg) scale(1.15);
                    }
                    to {
                        transform: rotate(-720deg) scale(1);
                    }
                }
                .spin-once {
                    animation: spinOnce 0.8s ease-in-out;
                }

                @keyframes rippleOut {
                    from {
                        transform: scale(1);
                        opacity: 0.6;
                    }
                    to {
                        transform: scale(1.9);
                        opacity: 0;
                    }
                }
                .ripple-ring {
                    animation: rippleOut 0.8s ease-out forwards;
                }
                .ripple-ring-delay {
                    animation-delay: 0.15s;
                }
            `}</style>
        </aside>
    );
};

export default FilterSidebar;