"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export type SortValue = "recommended" | "price-asc" | "price-desc" | "rating-desc";

const sortOptions: { label: string; value: SortValue }[] = [
    { label: "Recommended", value: "recommended" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
    { label: "Rating: Highest", value: "rating-desc" },
];

type SortDropdownProps = {
    value: SortValue;
    onChange: (value: SortValue) => void;
};

const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const activeLabel = sortOptions.find((opt) => opt.value === value)?.label ?? "Sort";

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative shrink-0">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-xs text-black shadow-sm hover:border-black/30 transition-colors duration-200 cursor-pointer"
            >
                <span className="text-black/40">Sort:</span>
                <span className="font-medium">{activeLabel}</span>
                <ChevronDown
                    strokeWidth={1.5}
                    className={`h-3.5 w-3.5 text-black/50 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            <div
                className={`absolute right-0 mt-2 w-52 rounded-2xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.1)] p-1.5 transition-all duration-200 ease-out origin-top-right z-20 ${
                    open
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                }`}
            >
                {sortOptions.map((opt) => (
                    <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                            onChange(opt.value);
                            setOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm transition-colors duration-150 cursor-pointer ${
                            value === opt.value
                                ? "bg-black text-white font-medium"
                                : "text-black/60 hover:bg-black/[0.05] hover:text-black"
                        }`}
                    >
                        {opt.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SortDropdown;