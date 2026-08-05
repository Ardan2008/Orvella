"use client";

import { useMemo, useState } from "react";
import { products, ProductCategory } from "@/lib/data/products";
import FilterSidebar, { PriceRangeValue } from "@/components/customer/menu/filterSidebar/filterSidebar";
import SortDropdown, { SortValue } from "@/components/customer/menu/sortDropdown/sortDropdown";
import ProductGrid from "@/components/customer/menu/productGrid/productGrid";

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
    const [category, setCategory] = useState<ProductCategory | "All">("All");
    const [priceRange, setPriceRange] = useState<PriceRangeValue>("all");
    const [sort, setSort] = useState<SortValue>("recommended");

    const filteredProducts = useMemo(() => {
        let result = products.filter((p) => {
            const categoryMatch = category === "All" || p.category === category;
            const priceMatch = matchesPriceRange(p.price, priceRange);
            return categoryMatch && priceMatch;
        });

        if (sort === "price-asc") {
            result = [...result].sort((a, b) => a.price - b.price);
        } else if (sort === "price-desc") {
            result = [...result].sort((a, b) => b.price - a.price);
        } else if (sort === "rating-desc") {
            result = [...result].sort((a, b) => b.rating - a.rating);
        }

        return result;
    }, [category, priceRange, sort]);

    const handleReset = () => {
        setCategory("All");
        setPriceRange("all");
        setSort("recommended");
    };

    return (
        <main className="max-w-7xl mx-auto px-6 py-10 md:py-16 bg-[#FAFAF9]">
            <div className="mb-12">
                <span className="text-xs tracking-[0.3em] uppercase text-black/40">
                    Orvella Coffee
                </span>
                <h1 className="mt-2 font-serif text-4xl md:text-5xl italic text-black">
                    Our Menu
                </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                <FilterSidebar
                    activeCategory={category}
                    onCategoryChange={setCategory}
                    activePriceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    onReset={handleReset}
                />

                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs text-black/40">
                            {filteredProducts.length} item{filteredProducts.length !== 1 ? "s" : ""}
                        </span>
                        <SortDropdown value={sort} onChange={setSort} />
                    </div>

                    <ProductGrid products={filteredProducts} />
                </div>
            </div>
        </main>
    );
};

export default MenuContent;