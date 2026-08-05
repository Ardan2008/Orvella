"use client";

import { useState } from "react";

const LanguageToggle = () => {
    const [lang, setLang] = useState<"EN" | "ID">("EN");

    return (
        <div className="relative inline-flex items-center rounded-full border border-black/10 bg-white p-1 shrink-0">
            {/* Sliding indicator */}
            <div
                className={`absolute top-1 bottom-1 w-9 rounded-full bg-black transition-transform duration-300 ease-out ${
                    lang === "ID" ? "translate-x-9" : "translate-x-0"
                }`}
            />

            <button
                type="button"
                onClick={() => setLang("EN")}
                aria-label="Switch to English"
                className={`relative z-10 w-9 py-1.5 text-[11px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                    lang === "EN" ? "text-white" : "text-black/40"
                }`}
            >
                EN
            </button>
            <button
                type="button"
                onClick={() => setLang("ID")}
                aria-label="Ganti ke Bahasa Indonesia"
                className={`relative z-10 w-9 py-1.5 text-[11px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                    lang === "ID" ? "text-white" : "text-black/40"
                }`}
            >
                ID
            </button>
        </div>
    );
};

export default LanguageToggle;