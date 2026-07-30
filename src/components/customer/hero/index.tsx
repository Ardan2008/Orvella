import Image from "next/image";
import { BlurReveal } from "@/components/ui/blur-reveal";

const PRODUCT_IMAGE_SRC = "/p.png";
const PRODUCT_IMAGE_ALT = "Orvella Coffee Product";

const Hero = () => {
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
                        className="mt-8 px-8 py-3 border-2 border-black text-black font-semibold uppercase tracking-wide text-sm
                        inline-flex items-center gap-2
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
        </section>
    );
};

export default Hero;