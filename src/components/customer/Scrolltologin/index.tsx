"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowDown, Loader2 } from "lucide-react";

const FADE_DURATION = 300;
const LOADING_DURATION = 1100;
const EXIT_FADE = 350;
const SLIDE_UP_DURATION = 450;

const ScrollToLogin = () => {
    const router = useRouter();
    const [leaving, setLeaving] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const hasTriggered = useRef(false);
    const settleTimeout = useRef<number | null>(null);

    useEffect(() => {
        // Prefetch /login as soon as this mounts, so by the time the
        // sequence finishes, the route is already ready to render
        // instantly — no flash back to the landing page while it loads.
        router.prefetch("/login");
    }, [router]);

    useEffect(() => {
        const MIN_SCROLL_BEFORE_ARM = 200; // px
        const SETTLE_CONFIRM = 220; // ms

        const isAtBottom = () =>
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2;

        const startSequence = () => {
            if (hasTriggered.current) return;
            hasTriggered.current = true;

            setLeaving(true);

            window.setTimeout(() => {
                setShowLoading(true);
            }, FADE_DURATION);

            window.setTimeout(() => {
                setShowLoading(false);
            }, FADE_DURATION + LOADING_DURATION);

            window.setTimeout(() => {
                setSlideUp(true);
            }, FADE_DURATION + LOADING_DURATION + EXIT_FADE);

            window.setTimeout(() => {
                const navigate = () => router.replace("/login");

                if (
                    typeof document !== "undefined" &&
                    "startViewTransition" in document
                ) {
                    document.startViewTransition(navigate);
                } else {
                    navigate();
                }
            }, FADE_DURATION + LOADING_DURATION + EXIT_FADE + SLIDE_UP_DURATION);
        };

        const handleScroll = () => {
            if (hasTriggered.current) return;

            if (window.scrollY < MIN_SCROLL_BEFORE_ARM) return;

            if (isAtBottom()) {
                if (settleTimeout.current) return;
                settleTimeout.current = window.setTimeout(() => {
                    settleTimeout.current = null;
                    if (isAtBottom()) {
                        startSequence();
                    }
                }, SETTLE_CONFIRM);
            } else if (settleTimeout.current) {
                window.clearTimeout(settleTimeout.current);
                settleTimeout.current = null;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (settleTimeout.current) {
                window.clearTimeout(settleTimeout.current);
            }
        };
    }, [router]);

    return (
        <>
            {/* Extra Scroll Space — the pulsing arrow that marks "keep going to sign in" */}
            <div className="relative flex min-h-[50vh] items-center justify-center bg-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-black bg-transparent animate-bounce">
                    <ArrowDown
                        strokeWidth={2.5}
                        className="h-7 w-7 text-black"
                        aria-hidden="true"
                    />
                </div>
                <span className="sr-only">Keep scrolling to sign in</span>
            </div>

            {/* Full-screen transition into /login: vignette closes in first, then full white + loading, then fade-up exit */}
            <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
                <div
                    className={`absolute inset-0 transition-transform ease-in ${
                        slideUp ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    }`}
                    style={{
                        transitionDuration: `${SLIDE_UP_DURATION}ms`,
                        transitionProperty: "transform, opacity",
                    }}
                >
                    {/* Vignette shadow — darkens the edges first, like an iris closing in */}
                    <div
                        className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                            leaving ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            boxShadow: "inset 0 0 220px 100px rgba(250,250,249,0.95)",
                        }}
                    />

                    {/* Full white layer + loading state, fades in slightly after the vignette */}
                    <div
                        className={`absolute inset-0 bg-white transition-opacity ease-out ${
                            leaving ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ transitionDuration: `${FADE_DURATION}ms` }}
                    >
                        <div
                            className={`flex h-full w-full flex-col items-center justify-center gap-4 transition-opacity ease-in-out ${
                                showLoading ? "opacity-100" : "opacity-0"
                            }`}
                            style={{ transitionDuration: `${EXIT_FADE}ms` }}
                        >
                            <Loader2
                                strokeWidth={1.5}
                                className="h-8 w-8 text-black animate-spin"
                            />
                            <span className="text-xs tracking-[0.3em] uppercase text-black/70">
                                Taking you to login
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ScrollToLogin;