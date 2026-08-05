import Link from "next/link";
import Image from "next/image";
import { BlurReveal } from "@/components/ui/blur-reveal";

const products = [
    {
        name: "Caramel Latte",
        price: "Rp 25.000",
        image:
            "/bestSeller/01.png",
    },
    {
        name: "Cappuccino",
        price: "Rp 22.000",
        image:
            "/bestSeller/01.png",
    },
    {
        name: "Matcha Cream",
        price: "Rp 28.000",
        image:
            "/bestSeller/02.png",
    },
    {
        name: "Chocolate Mocha",
        price: "Rp 26.000",
        image:
            "/bestSeller/01.png",
    },
];

const BestSeller = () => {
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
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="group bg-white flex flex-col"
                        >
                            {/* Photo */}
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="object-cover grayscale contrast-125 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                                />
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
                                        {product.price}
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    className="mt-6 w-full border border-black py-2.5 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black hover:text-white"
                                >
                                    View Menu
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View full menu */}
                <div className="mt-16 flex justify-center">
                    <Link
                        href="/menu"
                        className="border border-black px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BestSeller;