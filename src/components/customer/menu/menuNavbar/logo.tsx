"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = () => {
        setIsLoading(true);

        setTimeout(() => {
            router.push("/");
        }, 1500);
    };

    return (
        <>
            <button
                type="button"
                onClick={handleClick}
                className="flex justify-start items-center cursor-pointer"
            >
                <span
                    className="text-2xl md:text-3xl font-bold tracking-wider text-black italic"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                    Orvella
                </span>
            </button>

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
        </>
    );
};

export default Logo;