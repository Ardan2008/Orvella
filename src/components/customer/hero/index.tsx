"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BlurReveal } from "@/components/ui/blur-reveal";

const PRODUCT_IMAGE_SRC = "/p.png";
const PRODUCT_IMAGE_ALT = "Orvella Coffee Product";

const Hero = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleExplore = () => {
        setIsLoading(true);
        setTimeout(() => {
            router.push("/menu");
        }, 1500);
    };

    return (
        <section className="relative w-full min-h-screen bg-white text-black overflow-hidden flex flex-col px-6 md:px-16 py-10 md:py-12">

            <span
                aria-hidden="true"
                className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                text-[20vw] md:text-[16vw] font-black tracking-tighter text-black/3 whitespace-nowrap z-0"
            >
                ORVELLA
            </span>

            {/* Baris utama: teks kiri - produk tengah - teks kanan */}
            <div className="relative z-10 flex flex-col md:flex-row -mt-15 items-center justify-center w-full max-w-6xl mx-auto flex-1 pt-4 md:pt-0 mb-6 md:mb-0">
                <h1 
                className="order-2 md:order-1 md:-mr-8 lg:-mr-12 text-center md:text-right text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none shrink-0"
                style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                    <BlurReveal>Orvella</BlurReveal>
                </h1>

                <div className="order-1 md:order-2 relative flex justify-center shrink-0">
                    <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-50 sm:w-65 md:w-[320px] lg:w-95 aspect-square rounded-full bg-black/10 blur-3xl" />
                    <Image
                        src={PRODUCT_IMAGE_SRC}
                        alt={PRODUCT_IMAGE_ALT}
                        width={900}
                        height={1125}
                        sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 440px, 520px"
                        className="object-contain drop-shadow-2xl w-70 sm:w-90 md:w-110 lg:w-130 h-auto"
                        priority
                    />
                </div>

                <h1 
                className="order-3 md:-ml-8 lg:-ml-12 text-center md:text-left text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none shrink-0"
                style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                    <BlurReveal delay={0.15}>Coffee</BlurReveal>
                </h1>
            </div>

            {/* Deskripsi + CTA — rata kiri */}
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <div className="max-w-sm text-left">

                    <p className="text-black text-base md:text-lg">
                        <BlurReveal delay={0.3}>
                            Formulated from the best choice beans, Orvella Coffee presents
                            clean, rich, consistent taste in every sip —
                            created for those who appreciate the details in a cup of coffee.
                        </BlurReveal>
                    </p>

                    <button
                        type="button"
                        onClick={handleExplore}
                        className="mt-8 px-8 py-3 border-2 border-black text-black font-semibold uppercase tracking-wide text-sm
                        inline-flex items-center gap-2 cursor-pointer
                        transition-colors duration-300 hover:bg-black hover:text-white"
                    >
                        Explore
                        <svg id="Arrow - Right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.75 11.7257L4.75 11.7257" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M13.6997 5.70124C13.6997 5.70124 19.7497 8.96224 19.7497 11.7242C19.7497 14.4882 13.6997 17.7502 13.6997 17.7502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Loading Overlay — same style used across the site */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative flex flex-col items-center gap-8">
                        <div className="relative h-16 w-16">
                            <div className="absolute inset-0 rounded-full border-[3px] border-black/10" />
                            <div className="spin-cw absolute inset-0 rounded-full border-[3px] border-transparent border-t-black border-r-black" />
                            <div className="spin-ccw absolute inset-1.5 rounded-full border-2 border-transparent border-b-black/40" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="pulse-dot h-2 w-2 rounded-full bg-black" />
                            </div>
                        </div>

                        <span className="text-[10px] tracking-[0.35em] uppercase text-black">
                            Orvella
                        </span>

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

export default Hero;