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

                <div className="bg-slate-50 p-6 rounded-sm border-l-2 border-slate-200">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Risk Mitigation</span>
                    <p className="text-slate-700 text-sm leading-relaxed">{risk}</p>
                </div>
            </div>
        </div>
    );
}
