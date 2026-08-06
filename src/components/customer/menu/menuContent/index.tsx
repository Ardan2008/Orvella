"use client";

import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { products, Product, ProductCategory } from "@/lib/data/products";
import FilterSidebar, { PriceRangeValue } from "@/components/customer/menu/filterSidebar";
import SortDropdown, { SortValue } from "@/components/customer/menu/sortDropdown";
import ProductGrid from "@/components/customer/menu/productGrid";
import SearchBar from "@/components/customer/menu/searchBar";
import CartBar from "@/components/customer/menu/cartBar";
import { useMenuSearch } from "@/context/menuSearchContext";

const priceRangeLabels: Record<PriceRangeValue, string> = {
    all: "All",
    "under-20": "Under 20K",
    "20-25": "20K – 25K",
    "25-30": "25K – 30K",
    "above-30": "Above 30K",
};

const matchesPriceRange = (price: number, range: PriceRangeValue) => {
    switch (range) {
        case "under-20":
            return price < 20000;
        case "20-25":
            return price >= 20000 && price <= 25000;
        case "25-30":
            return price > 25000 && price <= 30000;
        case "above-30":
            return price > 30000;
        default:
            return true;
    }
};

const MenuContent = () => {
    const { query, setQuery } = useMenuSearch();

    const [category, setCategory] = useState<ProductCategory | "All">("All");
    const [priceRange, setPriceRange] = useState<PriceRangeValue>("all");
    const [sort, setSort] = useState<SortValue>("recommended");
    const [onlyTopRated, setOnlyTopRated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [cart, setCart] = useState<Record<string, number>>({});
    const [wishlist, setWishlist] = useState<Set<string>>(new Set());

    // Brief initial load feel so the grid never "pops" on first paint
    useEffect(() => {
        const timer = window.setTimeout(() => setIsLoading(false), 450);
        return () => window.clearTimeout(timer);
    }, []);

    const filteredProducts = useMemo(() => {
        let result = products.filter((p: Product) => {
            const categoryMatch = category === "All" || p.category === category;
            const priceMatch = matchesPriceRange(p.price, priceRange);
            const ratingMatch = !onlyTopRated || p.rating >= 4.5;
            const queryMatch =
                query.trim().length === 0 ||
                p.name.toLowerCase().includes(query.trim().toLowerCase());
            return categoryMatch && priceMatch && ratingMatch && queryMatch;
        });

        if (sort === "price-asc") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sort === "price-desc") {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sort === "rating-desc") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [category, priceRange, sort, query, onlyTopRated]);

    const categoryCounts = useMemo(() => {
        const base = products.filter(
            (p) => matchesPriceRange(p.price, priceRange) && (!onlyTopRated || p.rating >= 4.5)
        );
        const counts: Partial<Record<ProductCategory | "All", number>> = {
            All: base.length,
        };
        for (const p of base) {
            counts[p.category] = (counts[p.category] ?? 0) + 1;
        }
        return counts;
    }, [priceRange, onlyTopRated]);

    const activeFilterCount =
        (category !== "All" ? 1 : 0) +
        (priceRange !== "all" ? 1 : 0) +
        (onlyTopRated ? 1 : 0);

    const handleReset = () => {
        setCategory("All");
        setPriceRange("all");
        setSort("recommended");
        setOnlyTopRated(false);
    };

    const handleAdd = (id: string) =>
        setCart((prev) => ({ ...prev, [id]: 1 }));

    const handleIncrement = (id: string) =>
        setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

    const handleDecrement = (id: string) =>
        setCart((prev) => {
            const next = { ...prev };
            const current = (next[id] ?? 0) - 1;
            if (current <= 0) {
                delete next[id];
            } else {
                next[id] = current;
            }
            return next;
        });

    const handleToggleWishlist = (id: string) =>
        setWishlist((prev) => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });

    const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
    const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
        const product = products.find((p) => p.id === id);
        return product ? sum + product.price * qty : sum;
    }, 0);

    return (
        <main className="w-full max-w-7xl mx-auto px-6 py-10 md:py-16 pb-32 bg-[#FAFAF9]">
            <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                    <span className="text-xs tracking-[0.3em] uppercase text-black/40">
                        Orvella Coffee
                    </span>
                    <h1 className="mt-2 font-serif text-4xl md:text-5xl italic text-black">
                        Our Menu
                    </h1>
                </div>
                <SearchBar value={query} onChange={setQuery} />
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                <FilterSidebar
                    activeCategory={category}
                    onCategoryChange={setCategory}
                    activePriceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    onlyTopRated={onlyTopRated}
                    onToggleTopRated={() => setOnlyTopRated((v) => !v)}
                    categoryCounts={categoryCounts}
                    activeFilterCount={activeFilterCount}
                    onReset={handleReset}
                />

                <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4 shrink-0">
                        <span className="text-xs text-black/40">
                            {filteredProducts.length} item{filteredProducts.length !== 1 ? "s" : ""}
                        </span>
                        <SortDropdown value={sort} onChange={setSort} />
                    </div>

                    {/* Active filter chips */}
                    {activeFilterCount > 0 && (
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            {category !== "All" && (
                                <FilterChip label={category} onClear={() => setCategory("All")} />
                            )}
                            {priceRange !== "all" && (
                                <FilterChip
                                    label={priceRangeLabels[priceRange]}
                                    onClear={() => setPriceRange("all")}
                                />
                            )}
                            {onlyTopRated && (
                                <FilterChip label="4.5+ rating" onClear={() => setOnlyTopRated(false)} />
                            )}
                        </div>
                    )}

                    <div className="flex-1 flex flex-col min-h-130">
                        <ProductGrid
                            products={filteredProducts}
                            isLoading={isLoading}
                            cart={cart}
                            wishlist={wishlist}
                            onAdd={handleAdd}
                            onIncrement={handleIncrement}
                            onDecrement={handleDecrement}
                            onToggleWishlist={handleToggleWishlist}
                        />
                    </div>
                </div>
            </div>

            <CartBar itemCount={cartItemCount} total={cartTotal} />
        </main>
    );
};

const FilterChip = ({ label, onClear }: { label: string; onClear: () => void }) => (
    <button
        type="button"
        onClick={onClear}
        className="inline-flex items-center gap-1.5 rounded-full bg-black/5 pl-3 pr-2 py-1.5 text-xs font-medium text-black/70 transition-colors duration-150 hover:bg-black/10 cursor-pointer"
    >
        {label}
        <X strokeWidth={1.5} className="h-3 w-3" />
    </button>
);

export default MenuContent;