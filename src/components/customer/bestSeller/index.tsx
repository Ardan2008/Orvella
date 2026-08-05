"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const goToMenu = () => {
        setIsLoading(true);

        setTimeout(() => {
            router.push("/menu");
        }, 1500); // durasi sama seperti loading di halaman login
    };

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
                                    onClick={goToMenu}
                                    className="mt-6 w-full border border-black py-2.5 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
                                >
                                    View Menu
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View full menu */}
                <div className="mt-16 flex justify-center">
                    <button
                        type="button"
                        onClick={goToMenu}
                        className="border border-black px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
                    >
                        View Full Menu
                    </button>
                </div>
            </div>

            {/* Loading Overlay — sama persis dengan yang di halaman login */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative flex flex-col items-center gap-8">

                        {/* Dual-ring spinner with a breathing center dot */}
                        <div className="relative h-16 w-16">
                            <div className="absolute inset-0 rounded-full border-[3px] border-black/10" />
                            <div className="spin-cw absolute inset-0 rounded-full border-[3px] border-transparent border-t-black border-r-black" />
                            <div className="spin-ccw absolute inset-1.5 rounded-full border-2 border-transparent border-b-black/40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="pulse-dot h-2 w-2 rounded-full bg-black" />
                            </div>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-[10px] tracking-[0.35em] uppercase text-black">
                                Orvella
                            </span>
                        </div>

                        {/* Indeterminate progress line */}
                        <div className="h-px w-40 overflow-hidden bg-black/10">
                            <div className="progress-slide h-full w-1/3 bg-black" />
                        </div>
                    </div>

                    <style jsx>{`
                        @keyframes spinCW {
                            to {
                                transform: rotate(360deg);
                            }
                        }
                        .spin-cw {
                            animation: spinCW 1s linear infinite;
                        }

                        @keyframes spinCCW {
                            to {
                                transform: rotate(-360deg);
                            }
                        }
                        .spin-ccw {
                            animation: spinCCW 1.6s linear infinite;
                        }

                        @keyframes pulseDot {
                            0%, 100% {
                                transform: scale(0.85);
                                opacity: 0.6;
                            }
                            50% {
                                transform: scale(1.25);
                                opacity: 1;
                            }
                        }
                        .pulse-dot {
                            animation: pulseDot 1.1s ease-in-out infinite;
                        }

                        @keyframes progressSlide {
                            0% {
                                transform: translateX(-120%);
                            }
                            100% {
                                transform: translateX(320%);
                            }
                        }
                        .progress-slide {
                            animation: progressSlide 2.4s cubic-bezier(0.45, 0, 0.15, 1) infinite;
                        }
                    `}</style>
                </div>
            )}
        </section>
    );
};

export default BestSeller;