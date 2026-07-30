"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/animate-ui/components/radix/hover-card";


// Nomor wa
const message = encodeURIComponent(
  "Halo Orvella Coffee, saya ingin bertanya lebih lanjut. Terima kasih!"
);

// Template email
const emailSubject = encodeURIComponent("Pertanyaan Seputar Orvella Coffee");
const emailBody = encodeURIComponent(
  "Halo Orvella Coffee,\n\nSaya ingin bertanya lebih lanjut mengenai menu dan layanan yang tersedia.\n\nTerima kasih."
);

// Untuk memaksa membuka email client, tidak perlu mengisi subjek dan body karena sudah ada template suratnya
const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=hello@orvellacoffee.com&su=${emailSubject}&body=${emailBody}`;

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className={className}
        aria-hidden="true"
    >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
);

const TiktokIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
    >
        <path d="M16.5 3c.4 1.9 1.7 3.3 3.5 3.6v2.6c-1.3 0-2.5-.4-3.5-1.1v6.4c0 3-2.4 5.5-5.5 5.5S5.5 17.5 5.5 14.5 8 9 11 9c.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.1-.9-.1-1.6 0-2.9 1.3-2.9 2.9s1.3 2.9 2.9 2.9 2.9-1.3 2.9-2.9V3h2.6Z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="relative bg-white text-black">
            <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">

                {/* CTA row */}
                <div className="border-b border-black/10 pb-12">
                    <span className="text-xs tracking-[0.3em] uppercase text-black/60">
                        <BlurReveal delay={0.1} className="inline-block">
                            Get In Touch
                        </BlurReveal>
                    </span>
                    <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-lg">
                        <BlurReveal delay={0.1} className="inline-block">
                            Let&apos;s brew something <span className="italic">together.</span>
                        </BlurReveal>
                    </h2>
                </div>

                {/* Info grid */}
                <div className="grid gap-12 md:grid-cols-4 py-14">

                    {/* Brand */}
                    <div>
                        <h3 className="font-serif text-2xl italic">Orvella</h3>
                        <p className="mt-4 text-sm text-black/70 leading-relaxed max-w-55">
                            From bean to cup, every detail is crafted so a
                            coffee break feels like coming home.
                        </p>
                        <div className="mt-4 text-xs text-black/60">
                            <span>© {new Date().getFullYear()} Orvella Coffee. All rights reserved.</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xs tracking-[0.3em] uppercase text-black">
                            Contact
                        </h3>
                        <ul className="mt-5 space-y-4 text-sm text-black/80">
                            <li className="flex gap-3">
                                <MapPin strokeWidth={1.5} className="h-4 w-4 shrink-0 mt-0.5 text-black/60" />
                                <span>Jl. Gajah Mada No. 108, Malang, Indonesia</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone strokeWidth={1.5} className="h-4 w-4 shrink-0 text-black/60" />
                                <a
                                    href={`https://wa.me/6288217934130?text=${message}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black transition-colors"
                                >
                                    +62 882-1793-4130
                                </a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail strokeWidth={1.5} className="h-4 w-4 shrink-0 text-black/60" />
                                <a
                                    href={gmailComposeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black transition-colors"
                                >
                                    hello@orvellacoffee.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-xs tracking-[0.3em] uppercase text-black">
                            Opening Hours
                        </h3>
                        <ul className="mt-5 space-y-2 text-sm text-black/80">
                            <li className="flex justify-between max-w-50">
                                <span className="text-black/60">Mon – Fri</span>
                                <span>08:00 – 22:00</span>
                            </li>
                            <li className="flex justify-between max-w-50">
                                <span className="text-black/60">Sat – Sun</span>
                                <span>09:00 – 23:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-xs tracking-[0.3em] uppercase text-black">
                            Follow Us
                        </h3>
                        <div className="mt-5 flex items-center gap-3">
                            {/* Instagram HoverCard */}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <a
                                        href="https://instagram.com/orvellacoffee"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="h-10 w-10 flex items-center justify-center rounded-full border border-black/30 text-black/70 transition-colors duration-300 hover:bg-black hover:text-white"
                                    >
                                        <InstagramIcon className="h-4 w-4" />
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    side="top"
                                    align="center"
                                    className="w-80 p-5 rounded-2xl border border-black/10 bg-white/95 backdrop-blur-md shadow-2xl text-black"
                                >
                                    <div className="flex flex-col gap-4">
                                        {/* Header */}
                                        <div className="flex justify-between items-start">
                                            <div className="flex gap-3 items-center">
                                                <div className="h-12 w-12 rounded-full bg-linear-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-sm flex items-center justify-center">
                                                    <div className="relative bg-white p-px rounded-full h-full w-full overflow-hidden">
                                                        <Image
                                                            src="/logo.png"
                                                            alt="Orvella Coffee"
                                                            fill
                                                            className="rounded-full object-cover"
                                                            sizes="48px"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm leading-tight text-black flex items-center gap-1">
                                                        Orvella Coffee
                                                        <span className="w-3.5 h-3.5 bg-sky-500 text-white rounded-full flex items-center justify-center text-[8px] font-extrabold">✓</span>
                                                    </h4>
                                                    <span className="text-xs text-black/50">@orvellacoffee</span>
                                                </div>
                                            </div>
                                            <a 
                                                href="https://instagram.com/orvellacoffee"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#0095f6] hover:bg-[#1877f2] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                                            >
                                                Follow
                                            </a>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-xs text-black/80 leading-relaxed text-left">
                                            ☕ Crafting cozy moments & premium brews in Malang. Share your story with <span className="text-sky-600">#OrvellaMoment</span>
                                        </p>

                                        {/* Stats */}
                                        <div className="flex gap-5 border-t border-b border-black/5 py-2">
                                            <div className="text-xs flex gap-1">
                                                <span className="font-bold text-black">142</span>
                                                <span className="text-black/50">posts</span>
                                            </div>
                                            <div className="text-xs flex gap-1">
                                                <span className="font-bold text-black">12.4K</span>
                                                <span className="text-black/50">followers</span>
                                            </div>
                                            <div className="text-xs flex gap-1">
                                                <span className="font-bold text-black">320</span>
                                                <span className="text-black/50">following</span>
                                            </div>
                                        </div>

                                        {/* Recent Posts */}
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-[10px] text-left uppercase tracking-wider text-black/40 font-semibold">Recent Posts</span>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="aspect-square rounded-lg overflow-hidden border border-black/5 relative group cursor-pointer">
                                                    <Image
                                                        src="/gallery/product.png"
                                                        alt="Product"
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 33vw, 100px"
                                                    />
                                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <div className="aspect-square rounded-lg overflow-hidden border border-black/5 relative group cursor-pointer">
                                                    <Image
                                                        src="/gallery/brewing.png"
                                                        alt="Brewing"
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 33vw, 100px"
                                                    />
                                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                                <div className="aspect-square rounded-lg overflow-hidden border border-black/5 relative group cursor-pointer">
                                                    <Image
                                                        src="/gallery/interior.png"
                                                        alt="Interior"
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 33vw, 100px"
                                                    />
                                                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>

                            {/* TikTok HoverCard */}
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <a
                                        href="https://tiktok.com/@orvellacoffee"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="TikTok"
                                        className="h-10 w-10 flex items-center justify-center rounded-full border border-black/30 text-black/70 transition-colors duration-300 hover:bg-black hover:text-white"
                                    >
                                        <TiktokIcon className="h-4 w-4" />
                                    </a>
                                </HoverCardTrigger>
                                <HoverCardContent
                                    side="top"
                                    align="center"
                                    className="w-80 p-5 rounded-2xl border border-black/10 bg-white/95 backdrop-blur-md shadow-2xl text-black"
                                >
                                    <div className="flex flex-col gap-4">
                                        {/* Header */}
                                        <div className="flex justify-between items-start">
                                            <div className="flex gap-3 items-center">
                                                <div className="h-12 w-12 rounded-full p-0.5 flex items-center justify-center bg-black relative shadow-[1px_1.5px_0px_#00f2fe,-1px_-1.5px_0px_#fe0979] overflow-hidden">
                                                    <Image
                                                        src="/logo.png"
                                                        alt="Orvella Coffee"
                                                        fill
                                                        className="rounded-full object-cover border border-white/20"
                                                        sizes="48px"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-sm leading-tight text-black flex items-center gap-1">
                                                        Orvella Coffee
                                                        <span className="w-3.5 h-3.5 bg-sky-500 text-white rounded-full flex items-center justify-center text-[8px] font-extrabold">✓</span>
                                                    </h4>
                                                    <span className="text-xs text-black/50">@orvellacoffee</span>
                                                </div>
                                            </div>
                                            <a 
                                                href="https://tiktok.com/@orvellacoffee"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-[#fe2c55] hover:bg-[#e02447] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200"
                                            >
                                                Follow
                                            </a>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-xs text-black/80 leading-relaxed text-left">
                                            🎥 Behind the scenes, barista tips & satisfying coffee pours at Orvella Coffee. Follow for your daily dose of brew!
                                        </p>

                                        {/* Stats */}
                                        <div className="flex gap-5 border-t border-b border-black/5 py-2">
                                            <div className="text-xs flex gap-1">
                                                <span className="font-bold text-black">15</span>
                                                <span className="text-black/50">following</span>
                                            </div>
                                            <div className="text-xs flex gap-1">
                                                <span className="font-bold text-black">45.2K</span>
                                                <span className="text-black/50">followers</span>
                                            </div>
                                            <div className="text-xs flex gap-1">
                                                <span className="font-bold text-black">128.5K</span>
                                                <span className="text-black/50">likes</span>
                                            </div>
                                        </div>

                                        {/* Recent Videos */}
                                        <div className="flex flex-col gap-1.5">
                                            <span className="text-[10px] text-left uppercase tracking-wider text-black/40 font-semibold">Latest Videos</span>
                                            <div className="grid grid-cols-3 gap-2">
                                                <div className="aspect-3/4 rounded-lg overflow-hidden border border-black/5 relative group cursor-pointer">
                                                    <Image
                                                        src="/gallery/barista.png"
                                                        alt="Barista Video"
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 33vw, 100px"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="absolute bottom-1 left-1.5 flex items-center gap-0.5 text-[9px] font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z"/>
                                                        </svg>
                                                        <span>84.2K</span>
                                                    </div>
                                                </div>
                                                <div className="aspect-3/4 rounded-lg overflow-hidden border border-black/5 relative group cursor-pointer">
                                                    <Image
                                                        src="/gallery/brewing.png"
                                                        alt="Brewing Video"
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 33vw, 100px"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="absolute bottom-1 left-1.5 flex items-center gap-0.5 text-[9px] font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z"/>
                                                        </svg>
                                                        <span>53.1K</span>
                                                    </div>
                                                </div>
                                                <div className="aspect-3/4 rounded-lg overflow-hidden border border-black/5 relative group cursor-pointer">
                                                    <Image
                                                        src="/gallery/product.png"
                                                        alt="Product Video"
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 33vw, 100px"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="absolute bottom-1 left-1.5 flex items-center gap-0.5 text-[9px] font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                                        <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z"/>
                                                        </svg>
                                                        <span>121.7K</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;