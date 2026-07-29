"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { BlurReveal } from "@/components/ui/blur-reveal";

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
                        <p className="mt-4 text-sm text-black/70 leading-relaxed max-w-[220px]">
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
                            <li className="flex justify-between max-w-[200px]">
                                <span className="text-black/60">Mon – Fri</span>
                                <span>08:00 – 22:00</span>
                            </li>
                            <li className="flex justify-between max-w-[200px]">
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
                            <a
                                href="https://instagram.com/orvellacoffee"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="h-10 w-10 flex items-center justify-center rounded-full border border-black/30 text-black/70 transition-colors duration-300 hover:bg-black hover:text-white"
                            >
                                <InstagramIcon className="h-4 w-4" />
                            </a>
                            <a
                                href="https://tiktok.com/@orvellacoffee"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="h-10 w-10 flex items-center justify-center rounded-full border border-black/30 text-black/70 transition-colors duration-300 hover:bg-black hover:text-white"
                            >
                                <TiktokIcon className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;