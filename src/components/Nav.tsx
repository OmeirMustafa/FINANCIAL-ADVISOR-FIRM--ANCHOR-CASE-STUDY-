"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled ? "bg-navy-900/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl" : "bg-transparent py-6"
            )}>
                <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight z-50 relative flex-shrink-0">
                        Anchor<span className="text-gold-500">.</span>
                    </Link>

                    {/* Desktop Nav - Centered */}
                    <div className="hidden md:flex flex-1 justify-center">
                        <nav className="flex items-center gap-8 lg:gap-12 bg-white/5 backdrop-blur-md px-8 py-2 rounded-full border border-white/10 shadow-lg">
                            {["Services", "Philosophy", "Process"].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-sm font-medium text-slate-200 hover:text-white transition-all relative group tracking-wide hover:scale-105"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gold-500 transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* CTAs */}
                    <div className="hidden md:flex items-center gap-6 flex-shrink-0">
                        <Link href="/login" className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest hover:underline decoration-gold-500/50 underline-offset-4">
                            Client Login
                        </Link>
                        <Link
                            href="#audit"
                            className="bg-gold-500 text-navy-900 text-xs md:text-sm font-bold tracking-wider px-6 py-2.5 rounded-sm hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Book Consultation
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white z-50 relative"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <div className="space-y-2">
                            <span className={clsx("block w-8 h-0.5 bg-gold-500 transition-transform duration-300", mobileMenuOpen && "rotate-45 translate-y-2.5")} />
                            <span className={clsx("block w-8 h-0.5 bg-white transition-opacity duration-300", mobileMenuOpen && "opacity-0")} />
                            <span className={clsx("block w-8 h-0.5 bg-gold-500 transition-transform duration-300", mobileMenuOpen && "-rotate-45 -translate-y-2.5")} />
                        </div>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={clsx(
                "fixed inset-0 bg-navy-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
                mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <nav className="flex flex-col items-center gap-8">
                    {["Services", "Philosophy", "Process"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-3xl font-serif text-white hover:text-gold-500 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <div className="h-px w-12 bg-white/10 my-4" />
                    <Link
                        href="#audit"
                        className="text-lg font-bold text-gold-500 border border-gold-500 px-8 py-3 rounded-sm hover:bg-gold-500 hover:text-navy-900 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Book Consultation
                    </Link>
                </nav>
            </div>
        </>
    );
}
