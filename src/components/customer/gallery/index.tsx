import Image from "next/image";
import { BlurReveal } from "@/components/ui/blur-reveal";

const items = [
    {
        title: "Cafe Interior",
        src: "/gallery/interior.png",
        className: "col-span-2 row-span-2",
        sizes: "(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) 50vw, 548px",
    },
    {
        title: "Brewing Process",
        src: "/gallery/brewing.png",
        className: "col-span-2 row-span-1",
        sizes: "(max-width: 768px) calc(100vw - 48px), (max-width: 1200px) 50vw, 548px",
    },
    {
        title: "Coffee Products",
        src: "/gallery/product.png",
        className: "col-span-1 row-span-1",
        sizes: "(max-width: 768px) calc(50vw - 28px), (max-width: 1200px) 25vw, 270px",
    },
    {
        title: "Barista at Work",
        src: "/gallery/barista.png",
        className: "col-span-1 row-span-1",
        sizes: "(max-width: 768px) calc(50vw - 28px), (max-width: 1200px) 25vw, 270px",
    },
];

const Gallery = () => {
    return (
        <section className="relative bg-white text-black">
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

                {/* Header */}
                <div className="max-w-xl">
                    <span className="text-xs tracking-[0.3em] uppercase text-black/50">
                        Gallery
                    </span>
                    <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                        <BlurReveal>Inside</BlurReveal>{" "}
                        <BlurReveal delay={0.1}>
                            <span className="italic">Orvella</span>
                        </BlurReveal>
                    </h2>
                </div>

                {/* Bento grid */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-2">
                    {items.map(({ title, src, className, sizes }) => (
                        <div
                            key={title}
                            className={`group relative overflow-hidden ${className}`}
                        >
                            <Image
                                src={src}
                                alt={title}
                                fill
                                sizes={sizes}
                                className="object-cover grayscale contrast-125 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <span className="absolute bottom-4 left-4 text-xs tracking-[0.2em] uppercase text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;