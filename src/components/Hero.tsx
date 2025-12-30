"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { HeroMetrics } from "./case-study/HeroMetrics"; // Assuming this exists or I will create simplified

export function Hero() {
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
                        <span className="text-gold-500 italic">Now the real tax fight begins.</span>
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
                    <div className="relative z-10 bg-navy-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                        <div className="flex justify-between items-start mb-10">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">Projected Tax Savings</p>
                                <p className="text-4xl font-serif text-white">
                                    $<CountUp end={1420000} separator="," duration={2.5} />
                                </p>
                            </div>
                            <TrendingUp className="text-emerald-400 w-8 h-8" />
                        </div>

                        {/* Simple Bars */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-full bg-navy-900 h-2 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5 }} className="h-full bg-emerald-500" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4 opacity-50">
                                <div className="w-full bg-navy-900 h-2 rounded-full overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-gold-500" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-between text-xs text-slate-500 font-mono">
                            <span>PRE-PLANNING</span>
                            <span>POST-PLANNING</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
