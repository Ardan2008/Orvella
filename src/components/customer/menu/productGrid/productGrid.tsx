import { Product } from "@/lib/data/products";
import ProductCard from "@/components/customer/menu/productCard/productCard";

const ProductGrid = ({ products }: { products: Product[] }) => {
    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center rounded-3xl border border-dashed border-black/15">
                <span className="font-serif text-xl italic text-black/70">
                    No items found
                </span>
                <p className="mt-2 text-sm text-black/40">
                    Try adjusting your filters to see more results.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;