"use client";

import { motion } from "framer-motion";

interface StrategySectionProps {
    number: string;
    title: string;
    what: string;
    why: string;
    risk: string;
    isReverse?: boolean;
}

export function StrategySection({ number, title, what, why, risk, isReverse = false }: StrategySectionProps) {
    return (
        <div className={`flex flex-col md:flex-row gap-12 py-16 items-start border-t border-slate-100 ${isReverse ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/3 mt-4">
                <span className="text-6xl font-serif text-slate-100 font-bold block -mb-8 relative z-0">{number}</span>
                <h3 className="text-2xl font-bold text-navy-900 font-serif relative z-10 pl-4">{title}</h3>
            </div>

            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <div>
                        <span className="text-xs font-bold text-navy-900 uppercase tracking-widest block mb-2">The Shift (What)</span>
                        <p className="text-slate-600 leading-relaxed">{what}</p>
                    </div>
                    <div className="pt-4">
                        <span className="text-xs font-bold text-gold-600 uppercase tracking-widest block mb-2">Strategic Rationale (Why)</span>
                        <p className="text-slate-600 leading-relaxed">{why}</p>
                    </div>
                </motion.div>

                <div className="glass-card text-white p-8 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                            <span className="text-xs font-bold text-gold-500 uppercase tracking-widest">Risk Mitigation</span>
                        </div>
                        <p className="text-slate-200 text-sm leading-relaxed font-light border-l-2 border-gold-500/30 pl-4">{risk}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
