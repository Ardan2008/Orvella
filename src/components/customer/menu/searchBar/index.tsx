"use client";

import { Search, X } from "lucide-react";

type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <div className="group relative w-full md:max-w-xs">
            <Search
                strokeWidth={1.5}
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/30 transition-colors duration-200 group-focus-within:text-black/60"
            />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Cari menu…"
                className="w-full rounded-full border border-black/10 bg-white py-2.5 pl-11 pr-9 text-sm text-black placeholder:text-black/30 shadow-sm outline-none transition-all duration-200 focus:border-black/30 focus:shadow-[0_4px_16px_-4px_rgba(0,0,0,0.12)]"
            />
            {value.length > 0 && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Bersihkan pencarian"
                    className="absolute right-3 top-1/2 flex h-5 w-5 -translate-y-1/2 items-center justify-center rounded-full text-black/30 transition-colors duration-150 hover:bg-black/5 hover:text-black cursor-pointer"
                >
                    <X strokeWidth={1.5} className="h-3.5 w-3.5" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;