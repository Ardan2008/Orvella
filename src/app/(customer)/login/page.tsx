"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    // Form Inputs
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Touched States
    const [usernameTouched, setUsernameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    // Error Messages
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // Modals & States
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Validation Functions
    const validateUsername = (val: string) => {
        if (!val) {
            return "Username is required";
        }
        if (val.length < 3) {
            return "Username must be at least 3 characters";
        }
        if (val.length > 30) {
            return "Username must not exceed 30 characters";
        }
        const regex = /^[a-zA-Z0-9_]+$/;
        if (!regex.test(val)) {
            return "Username can only contain letters, numbers, or underscores";
        }
        return "";
    };

    const validatePassword = (val: string) => {
        if (!val) {
            return "Password is required";
        }
        if (val.length < 8) {
            return "Password must be at least 8 characters";
        }
        if (val.length > 64) {
            return "Password must not exceed 64 characters";
        }
        return "";
    };

    // Change Handlers
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setUsername(val);
        if (usernameTouched) {
            setUsernameError(validateUsername(val));
        }
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setPassword(val);
        if (passwordTouched) {
            setPasswordError(validatePassword(val));
        }
    };

    // Blur Handlers (validate immediately when focus is lost)
    const handleUsernameBlur = () => {
        setUsernameTouched(true);
        setUsernameError(validateUsername(username));
    };

    const handlePasswordBlur = () => {
        setPasswordTouched(true);
        setPasswordError(validatePassword(password));
    };

    // Submit Handler
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mark both fields as touched
        setUsernameTouched(true);
        setPasswordTouched(true);

        // Run full validation
        const uError = validateUsername(username);
        const pError = validatePassword(password);

        if (uError || pError) {
            setUsernameError(uError);
            setPasswordError(pError);
            return;
        }

        // If inputs are valid, show confirmation modal
        setShowConfirmModal(true);
    };

    // Confirm Submission
    const handleConfirmYes = () => {
        setShowConfirmModal(false);
        setIsLoading(true);

        // Simulated lazy loading
        setTimeout(() => {
            setIsLoading(false);

            // Mock database validation
            const lowerUser = username.toLowerCase();
            if (lowerUser === "admin" && password === "admin1234") {
                router.push("/");
            } else if (lowerUser === "owner" && password === "owner1234") {
                router.push("/");
            } else {
                setShowErrorModal(true);
            }
        }, 1500); // 1.5 seconds loading duration
    };

    // Continue as Customer — reuses the exact same lazy loading overlay
    // as Sign In, then always navigates to "/" (no credentials to check).
    const handleContinueAsCustomer = () => {
        setIsLoading(true);

        setTimeout(() => {
            router.push("/");
        }, 1500); // same duration as the Sign In flow, for a consistent feel
    };

    return (
        <main className="relative min-h-screen bg-white text-black md:grid md:grid-cols-2">

            {/* Left — visual side, hidden on small screens */}
            <div className="relative hidden md:block overflow-hidden bg-black">
                <Image
                    src="/gallery/product.png"
                    alt="Orvella Coffee interior"
                    fill
                    className="object-cover grayscale contrast-125 opacity-70"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

                <div className="relative flex h-full flex-col justify-between p-12">
                    <Link
                        href="/"
                        className="inline-flex w-fit items-center gap-2 text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white transition-colors"
                    >
                        <ArrowLeft strokeWidth={1.5} className="h-4 w-4" />
                        Back to site
                    </Link>

                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase text-white/50">
                            Orvella Coffee
                        </span>
                        <h2 className="mt-4 font-serif text-4xl lg:text-5xl leading-tight text-white max-w-sm">
                            Every login starts with a <span className="italic">good brew.</span>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right — form side */}
            <div className="flex items-center justify-center px-6 py-16 md:py-0">
                <div className="w-full max-w-sm">

                    {/* Mobile-only back link */}
                    <Link
                        href="/"
                        className="mb-10 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-black/40 hover:text-black transition-colors md:hidden"
                    >
                        <ArrowLeft strokeWidth={1.5} className="h-4 w-4" />
                        Back to site
                    </Link>

                    <h1 className="mt-4 font-serif text-4xl leading-tight">
                        Welcome
                    </h1>
                    <p className="mt-3 text-sm text-black/50">
                        Sign in to continue your orders as a customer
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5">
                        {/* Username */}
                        <div>
                            <div className={`flex items-center gap-3 border-b py-3 transition-colors ${
                                usernameError && usernameTouched
                                    ? "border-red-500 focus-within:border-red-600"
                                    : "border-black/20 focus-within:border-black"
                            }`}>
                                <User
                                    strokeWidth={1.5}
                                    className={`h-4 w-4 shrink-0 transition-colors ${
                                        usernameError && usernameTouched ? "text-red-500" : "text-black/40"
                                    }`}
                                />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={handleUsernameChange}
                                    onBlur={handleUsernameBlur}
                                    className="w-full bg-transparent text-sm placeholder:text-black/40 focus:outline-none"
                                />
                            </div>
                            {usernameError && usernameTouched && (
                                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                                    <span className="text-[10px]">•</span> {usernameError}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <div className={`flex items-center gap-3 border-b py-3 transition-colors ${
                                passwordError && passwordTouched
                                    ? "border-red-500 focus-within:border-red-600"
                                    : "border-black/20 focus-within:border-black"
                            }`}>
                                <Lock
                                    strokeWidth={1.5}
                                    className={`h-4 w-4 shrink-0 transition-colors ${
                                        passwordError && passwordTouched ? "text-red-500" : "text-black/40"
                                    }`}
                                />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onBlur={handlePasswordBlur}
                                    className="w-full bg-transparent text-sm placeholder:text-black/40 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="shrink-0 text-black/40 hover:text-black transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff strokeWidth={1.5} className="h-4 w-4" />
                                    ) : (
                                        <Eye strokeWidth={1.5} className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                            {passwordError && passwordTouched && (
                                <p className="text-xs text-red-500 mt-1.5 flex items-center gap-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                                    <span className="text-[10px]">•</span> {passwordError}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3.5 text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black/80 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-4">
                        <span className="h-px flex-1 bg-black/20" />
                        <span className="text-[12px] tracking-[0.3em] uppercase text-black/30">
                            or
                        </span>
                        <span className="h-px flex-1 bg-black/20" />
                    </div>

                    <button
                        type="button"
                        onClick={handleContinueAsCustomer}
                        className="block w-full border border-black py-3.5 text-center text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer"
                    >
                        Continue as Customer
                    </button>
                </div>
            </div>

            {/* Custom Modals & Loading Overlays */}

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md transition-opacity duration-300">
                    <div className="w-full max-w-md bg-white border border-black/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in-95 duration-200">
                        <h3 className="font-serif text-2xl tracking-wide text-black">Confirm Sign In</h3>
                        <p className="mt-4 text-sm text-black/60 font-sans leading-relaxed">
                            Are you sure the inputs are correct?
                        </p>
                        <div className="mt-8 flex justify-end gap-4">
                            <button
                                type="button"
                                onClick={() => setShowConfirmModal(false)}
                                className="border border-black/20 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black hover:bg-black/5 transition-colors cursor-pointer"
                            >
                                No
                            </button>
                            <button
                                type="button"
                                onClick={handleConfirmYes}
                                className="bg-black text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-black/80 transition-colors cursor-pointer"
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Error Modal */}
            {showErrorModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md transition-opacity duration-300">
                    <div className="w-full max-w-md bg-white border border-black/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in-95 duration-200">
                        <h3 className="font-serif text-2xl tracking-wide text-red-600">Authentication Failed</h3>
                        <p className="mt-4 text-sm text-black/60 font-sans leading-relaxed">
                            Invalid username or password, please check again.
                        </p>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="button"
                                onClick={() => setShowErrorModal(false)}
                                className="bg-black text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-black/80 transition-colors cursor-pointer"
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Lazy Loading Overlay — shared by both Sign In and Continue as Customer.
                Fresh, minimal dual-ring spinner. Same black/white palette as before,
                no coffee imagery. */}
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative flex flex-col items-center gap-8">

                        {/* Dual-ring spinner with a breathing center dot */}
                        <div className="relative h-16 w-16">
                            <div className="absolute inset-0 rounded-full border-[3px] border-black/10" />
                            <div className="spin-cw absolute inset-0 rounded-full border-[3px] border-transparent border-t-black border-r-black" />
                            <div className="spin-ccw absolute inset-[6px] rounded-full border-2 border-transparent border-b-black/40" />
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

        </main>
    );
}