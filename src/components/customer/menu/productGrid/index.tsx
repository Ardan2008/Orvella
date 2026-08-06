"use client";

import { Product } from "@/lib/data/products";
import ProductCard from "@/components/customer/menu/productCard";

type ProductGridProps = {
    products: Product[];
    isLoading?: boolean;
    cart: Record<string, number>;
    wishlist: Set<string>;
    onAdd: (id: string) => void;
    onIncrement: (id: string) => void;
    onDecrement: (id: string) => void;
    onToggleWishlist: (id: string) => void;
};

const SkeletonCard = ({ delay }: { delay: number }) => (
    <div
        style={{ animationDelay: `${delay}ms` }}
        className="skeleton-in rounded-3xl border border-black/8 bg-white overflow-hidden"
    >
        <div className="aspect-square skeleton-pulse bg-black/5" />
        <div className="px-5 py-5 space-y-3">
            <div className="h-4 w-3/4 rounded-full skeleton-pulse bg-black/5" />
            <div className="h-3 w-full rounded-full skeleton-pulse bg-black/5" />
            <div className="flex items-center justify-between pt-2">
                <div className="h-3 w-16 rounded-full skeleton-pulse bg-black/5" />
                <div className="h-9 w-9 rounded-full skeleton-pulse bg-black/5" />
            </div>
        </div>
    </div>
);

const ProductGrid = ({
    products,
    isLoading,
    cart,
    wishlist,
    onAdd,
    onIncrement,
    onDecrement,
    onToggleWishlist,
}: ProductGridProps) => {
    // Always render the same grid wrapper (loading / empty / filled) so the
    // panel never changes width or "menciut" (shrinks) when switching states.
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {isLoading &&
                Array.from({ length: 6 }).map((_, i) => (
                    <SkeletonCard key={i} delay={i * 60} />
                ))}

            {!isLoading && products.length === 0 && (
                <div className="empty-in col-span-full flex min-h-47.5 w-full items-center justify-center rounded-3xl border border-black/10 bg-white shadow-sm">
                    <span className="text-sm font-medium text-black/30">
                        No items found
                    </span>
                </div>
            )}

            {!isLoading &&
                products.map((product, index) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                        quantity={cart[product.id] ?? 0}
                        isWishlisted={wishlist.has(product.id)}
                        onAdd={() => onAdd(product.id)}
                        onIncrement={() => onIncrement(product.id)}
                        onDecrement={() => onDecrement(product.id)}
                        onToggleWishlist={() => onToggleWishlist(product.id)}
                    />
                ))}
        </div>
    );
};

export default ProductGrid;