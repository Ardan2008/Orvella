import Image from "next/image";
import { BlurReveal } from "@/components/ui/blur-reveal";

const About = () => {
    return (
        <section className="relative bg-white text-black overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
                <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">

                    {/* Sisi Gambar */}
                    <div className="group relative mx-auto max-w-sm md:max-w-none">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-full border border-black/10 shadow-[0_0_0_1px_rgba(0,0,0,0.03)]">
                            <Image
                                src="/about/about.png"
                                alt="Suasana Orvella Coffee"
                                className="h-full w-full object-cover grayscale contrast-125 transition-all duration-500 ease-out group-hover:grayscale-0"
                                width={1920}
                                height={1080}
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
                        </div>
                    </div>

                    {/* Sisi Teks */}
                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase text-black/50">
                            About
                        </span>

                        <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                            <BlurReveal>Orvella</BlurReveal>{" "}
                            <BlurReveal delay={0.1}>
                                <span className="italic">Coffee</span>
                            </BlurReveal>
                        </h2>

                        <p className="mt-6 text-black/70 leading-relaxed max-w-md">
                            <BlurReveal delay={0.2}>
                                Orvella Coffee is a coffee shop that offers a premium coffee experience featuring select beans, professional preparation, and excellent service within a comfortable atmosphere.
                            </BlurReveal>
                        </p>

                        {/* Visi */}
                        <div className="mt-10 border-t border-black/10 pt-6">
                            <h3 className="text-xs tracking-[0.3em] uppercase text-black/50">
                                Visi
                            </h3>
                            <p className="mt-3 font-serif text-xl leading-snug max-w-md">
                                <BlurReveal>
                                    To become the premier coffee shop, recognized for product quality and customer comfort.
                                </BlurReveal>
                            </p>
                        </div>

                        {/* Misi — disusun seperti daftar menu kopi */}
                        <div className="mt-10 border-t border-black/10 pt-6">
                            <h3 className="text-xs tracking-[0.3em] uppercase text-black/50">
                                Misi
                            </h3>
                            <ul className="mt-4">
                                <li className="flex gap-4 items-baseline border-b border-black/10 py-4">
                                    <span className="font-serif text-lg text-black/30 shrink-0">01</span>
                                    <span className="text-black/80">
                                        <BlurReveal>
                                            Serving quality coffee made with the finest ingredients
                                        </BlurReveal>
                                    </span>
                                </li>
                                <li className="flex gap-4 items-baseline border-b border-black/10 py-4">
                                    <span className="font-serif text-lg text-black/30 shrink-0">02</span>
                                    <span className="text-black/80">
                                        <BlurReveal delay={0.1}>
                                            Providing friendly and professional service
                                        </BlurReveal>
                                    </span>
                                </li>
                                <li className="flex gap-4 items-baseline py-4">
                                    <span className="font-serif text-lg text-black/30 shrink-0">03</span>
                                    <span className="text-black/80">
                                        <BlurReveal delay={0.2}>
                                            Creating a comfortable atmosphere for customers
                                        </BlurReveal>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;