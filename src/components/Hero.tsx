"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { HeroMetrics } from "./case-study/HeroMetrics"; // Assuming this exists or I will create simplified

export function Hero() {
    const [valuation, setValuation] = useState(5000000);
    const savings = valuation * 0.17; // Mock logic: 17% savings diff

    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-20">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[#1E293B] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-500 text-xs font-bold tracking-widest uppercase mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                        For Post-Exit Tech Founders ($5M+)
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight">
                        You've exited. <br />
                        <span className="text-gradient-gold italic">Now the real tax fight begins.</span>
                    </h1>

                    {/* Body Text - Fixed Spacing mt-12 */}
                    <p className="mt-12 text-lg text-slate-200 leading-[1.6] max-w-lg font-light">
                        40% of your exit proceeds could vanish to taxes. And your stock-heavy portfolio is exposed. We stop the bleeding and secure your liquidity.
                    </p>

                    {/* CTA - Fixed "Buried" Issue */}
                    <div className="relative mt-12 group inline-block">
                        <div className="absolute -inset-1 bg-gold-500/20 rounded-md blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <Link
                            href="#audit"
                            className="relative -top-6 bg-gold-500 text-navy-900 text-base font-bold px-8 py-4 rounded-sm shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 w-fit"
                        >
                            Book Exit Tax Audit
                            <span className="text-lg">→</span>
                        </Link>
                    </div>

                    {/* Trust Anchors */}
                    <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
                        {["QSBS Optimization", "Concentration De-Risking", "Estate Freezing"].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-gold-500" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Visual - Chart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden lg:block relative"
                >
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gold-500/20 rounded-xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                        <div className="relative z-10 glass-card p-8 rounded-xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">

                            {/* Header / Input */}
                            <div className="mb-8">
                                <label className="text-xs uppercase tracking-widest text-slate-400 mb-2 block">Exit Valuation (Drag to Simulate)</label>
                                <div className="flex items-center gap-4 mb-4">
                                    <input
                                        type="range"
                                        min="2000000"
                                        max="50000000"
                                        step="1000000"
                                        value={valuation}
                                        onChange={(e) => setValuation(Number(e.target.value))}
                                        className="w-full h-1 bg-navy-900 rounded-lg appearance-none cursor-pointer accent-gold-500 hover:accent-gold-400 transition-all"
                                    />
                                    <span className="text-white font-mono text-sm">${(valuation / 1000000).toFixed(0)}M</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Projected Tax Savings</p>
                                    <p className="text-4xl font-serif text-white">
                                        $<CountUp end={savings} separator="," duration={1} key={savings} />
                                    </p>
                                </div>
                                <TrendingUp className="text-emerald-400 w-8 h-8" />
                            </div>

                            {/* Simple Bars */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider">
                                        <span>Without Strategy (Tax: ~37%)</span>
                                        <span>${(valuation * 0.37).toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-navy-900 h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(valuation * 0.37 / (valuation * 0.4)) * 100}%` }} // Simplified visual logic
                                            transition={{ duration: 0.5 }}
                                            className="h-full bg-red-500/50"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] text-slate-500 uppercase tracking-wider">
                                        <span className="text-emerald-400">With Anchor (~20%)</span>
                                        <span className="text-white">${((valuation * 0.37) - savings).toLocaleString()}</span>
                                    </div>
                                    <div className="w-full bg-navy-900 h-2 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(((valuation * 0.37) - savings) / (valuation * 0.4)) * 100}%` }}
                                            transition={{ duration: 0.5 }}
                                            className="h-full bg-emerald-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-xs text-slate-500 font-mono">
                                <span>QSBS ELIGIBLE</span>
                                <span className="text-gold-500">TRUST STRUCTURED</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
