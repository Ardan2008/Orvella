"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LanguageToggle from "./languageToggle";

const MobileMenu = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  return (
    <div className="md:hidden">
      {/* Language Toggle */}
      <LanguageToggle />
      
      <button
        type="button"
        onClick={handleLoginClick}
        className="
          inline-flex items-center gap-2 pl-5 pr-4 py-2 rounded-full
          text-sm font-medium text-white
          bg-black hover:bg-black/85
          transition-colors duration-200 active:scale-95 cursor-pointer
        "
      >
        <span>Login</span>

        <svg id="Arrow - Right" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.75 11.7257L4.75 11.7257" stroke="#FAFAF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M13.6997 5.70124C13.6997 5.70124 19.7497 8.96224 19.7497 11.7242C19.7497 14.4882 13.6997 17.7502 13.6997 17.7502" stroke="#FAFAF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>

      {/* Lazy Loading Overlay */}
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

            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] tracking-[0.35em] uppercase text-black">
                Orvella
              </span>
            </div>

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
    </div>
  );
};

export default MobileMenu;