"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

export function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={clsx(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-navy-900/90 backdrop-blur-md py-4 border-white/5 shadow-lg" : "bg-transparent py-6"
        )}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
                    Anchor<span className="text-gold-500">.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {["Services", "Philosophy", "Process"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold-400 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTAs */}
                <div className="flex items-center gap-6">
                    <Link href="/login" className="hidden md:block text-xs font-medium text-slate-400 hover:text-white transition-colors">
                        Client Login
                    </Link>
                    <Link
                        href="#audit"
                        className="text-xs md:text-sm font-bold tracking-wider text-white border border-white/20 px-5 py-2.5 rounded-sm hover:border-gold-500 hover:text-gold-400 transition-all duration-300"
                    >
                        PRIVATE CONSULTATION
                    </Link>
                </div>
            </div>
        </header>
    );
}
