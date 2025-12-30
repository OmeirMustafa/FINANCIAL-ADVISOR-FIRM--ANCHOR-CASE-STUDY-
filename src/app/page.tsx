"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, Lock, MousePointer2, LayoutTemplate, ArrowRight } from "lucide-react";
import { AnalysisCard } from "@/components/case-study/AnalysisCard";
import { StrategySection } from "@/components/case-study/StrategySection";
import { DemoFrame } from "@/components/case-study/DemoFrame";

export default function CaseStudyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* 1. HERO */}
            <section className="relative py-32 bg-navy-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="max-w-6xl mx-auto px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-3 py-1 rounded-full border border-gold-500/30 text-gold-500 text-xs font-bold tracking-widest uppercase mb-8">
                            Conceptual Strategic Redesign
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                            Building Trust in <br /> High-Stakes Wealth Management.
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-10">
                            A strategic redesign of a boutique RIA website, moving from "generic capability listing" to a risk-aware, conversion-focused asset for UHNW tech founders.
                        </p>

                        <div className="flex gap-4">
                            <Link
                                href="/demo"
                                className="inline-flex items-center gap-2 bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-sm hover:bg-gold-400 transition-all hover:translate-x-1 shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                            >
                                View Live Demo <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. BUSINESS CONTEXT & CONSTRAINTS */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">The Business Reality</span>
                        <h2 className="text-3xl font-serif text-navy-900 mb-6">Trust &gt; Aesthetics.</h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            In the wealth management sector, a website is not a brochure—it is a risk assessment surface for prospective clients.
                            High-net-worth individuals (HNWIs) do not "shop" for advisors; they vet them for competence, safety, and alignment.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Traditional advisory sites fail by prioritizing generic corporate imagery over specific value propositions, creating "cognitive drift"
                            that leads to high bounce rates among sophisticated leads.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-sm border border-slate-100">
                        <h3 className="text-lg font-bold text-navy-900 mb-6">Critical Constraints</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4">
                                <Lock className="text-gold-600 shrink-0" size={20} />
                                <div>
                                    <p className="font-bold text-navy-900 text-sm">SEC Compliance (Rule 206(4)-1)</p>
                                    <p className="text-slate-500 text-xs mt-1">Cannot promise specific returns. No misleading testimonials. Strict disclaimer requirements.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <AlertCircle className="text-gold-600 shrink-0" size={20} />
                                <div>
                                    <p className="font-bold text-navy-900 text-sm">Zero-Hype Tolerance</p>
                                    <p className="text-slate-500 text-xs mt-1">Target audience (Tech Founders) is allergic to marketing fluff. Tone must be analytical and restrained.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 3. STRATEGIC DIAGNOSIS */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="mb-16 max-w-2xl">
                        <span className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2 block">The Diagnosis</span>
                        <h2 className="text-4xl font-serif text-navy-900 mb-4">Why the old model fails.</h2>
                        <p className="text-slate-600">
                            Analysis of traditional RIA sites reveals three critical failure points where user confidence erodes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <AnalysisCard
                            icon={MousePointer2}
                            title="Generic Positioning"
                            problem="Headlines like 'Comprehensive Wealth Management' create zero distinct value for specialist needs."
                            consequence="High bounce rate from niche leads (e.g., Founders) who don't feel understood."
                            delay={0}
                        />
                        <AnalysisCard
                            icon={LayoutTemplate}
                            title="Visual Noise"
                            problem="Stock photography and cluttered navigation dilute authority markers."
                            consequence="Perception of the firm as 'retail-grade' rather than 'institutional-grade'."
                            delay={0.2}
                        />
                        <AnalysisCard
                            icon={AlertCircle}
                            title="Passive CTAs"
                            problem="'Contact Us' forms create friction. They demand high commitment with unclear value exchange."
                            consequence="Lost conversion opportunities from hesitant but interested prospects."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* 4. STRATEGIC REDESIGN DECISIONS */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-serif text-navy-900 mb-6">Strategic Redesign Decisions</h2>
                        <p className="text-slate-600">
                            A shift from "Displaying Services" to "Solving Pains". Every design choice was vetted against business risk and conversion probability.
                        </p>
                    </div>

                    <StrategySection
                        number="01"
                        title="Outcome-First Hero"
                        what="Replaced generic welcome text with a specific pain-point hook: 'Tax Drag' and 'Liquidity Preservation'."
                        why="Founders react to risk. By identifying their specific financial anxiety immediately, we establish authority before they scroll."
                        risk="Mitigates the risk of being perceived as a 'generalist' advisor who doesn't understand complex equity structures."
                    />

                    <StrategySection
                        number="02"
                        title="High-Contrast Aesthetics"
                        what="Adopted a strict Navy/White/Gold palette with increased white space and strict typographical hierarchy."
                        why="Clarity equals confidence. In finance, readability and order signal operational competence."
                        risk="Reduces cognitive load, lowering the 'perceived risk' of engaging with the firm."
                        isReverse
                    />

                    <StrategySection
                        number="03"
                        title="Low-Friction Bridge CTA"
                        what="Introduced an 'Exit Tax Audit' as the primary conversion mechanism instead of a generic consultation."
                        why="It offers specific, low-commitment value. It frames the interaction as an analysis, not a sales pitch."
                        risk="Increases lead readiness by filtering for prospects who have specific, solveable problems."
                    />
                </div>
            </section>

            {/* 5. EXPECTED IMPACT */}
            <section className="py-24 bg-navy-900 text-white">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-serif mb-6">Projected Impact</h2>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                By aligning the digital experience with the psychological needs of the target persona, the redesign creates a
                                more efficient funnel for high-quality leads.
                            </p>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/30">
                                        <ArrowRight size={16} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Reduced Hesitation</h4>
                                        <p className="text-sm text-slate-400">Clear niche signaling prevents "am I in the right place?" doubt.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center shrink-0 border border-gold-500/30">
                                        <ArrowRight size={16} className="text-gold-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">Higher Lead Quality</h4>
                                        <p className="text-sm text-slate-400">Self-selection through specific "Tech Founder" copy filters out irrelevant retail clients.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-navy-800 p-8 rounded-sm border border-white/5">
                            <h3 className="font-serif text-xl border-b border-white/10 pb-4 mb-4">Success Metrics</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-300">Conversion Readiness</span>
                                        <span className="text-gold-500">High</span>
                                    </div>
                                    <div className="h-1 bg-navy-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-gold-500" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-slate-300">Brand Authority</span>
                                        <span className="text-emerald-500">Established</span>
                                    </div>
                                    <div className="h-1 bg-navy-700 rounded-full overflow-hidden">
                                        <div className="h-full w-[92%] bg-emerald-500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. EMBEDDED DEMO */}
            <DemoFrame />

            {/* 7. POSITIONING */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-2xl mx-auto px-8">
                    <h2 className="text-3xl font-serif text-navy-900 mb-6">Design is a Risk Management Tool.</h2>
                    <p className="text-slate-600 leading-relaxed mb-8">
                        This case study demonstrates that for high-stakes industries, design is not about decoration.
                        It is about reducing friction, mitigating perceptual risk, and accelerating trust.
                    </p>
                    <div className="inline-block px-8 py-4 border border-navy-900 text-navy-900 font-bold uppercase tracking-widest text-xs">
                        End of Strategic Analysis
                    </div>
                </div>
            </section>
        </main>
    );
}
