"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

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
        <div className={clsx("flex flex-col md:flex-row gap-12 md:gap-24 items-start mb-24 last:mb-0", isReverse && "md:flex-row-reverse")}>
            <div className="md:w-1/3">
                <span className="text-6xl md:text-8xl font-serif text-slate-100 font-bold opacity-50 block -mb-4 md:-mb-8 relative z-0">
                    {number}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-navy-900 relative z-10">{title}</h3>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What we changed</h4>
                        <p className="text-slate-700 leading-relaxed text-sm">{what}</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Why it works</h4>
                        <p className="text-slate-700 leading-relaxed text-sm">{why}</p>
                    </div>
                </div>

                <div className="glass-card p-6 border-l-2 border-gold-500 bg-navy-900/5 hover:bg-navy-900/10 transition-colors">
                    <h4 className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
                        Risk Mitigation
                    </h4>
                    <p className="text-navy-900 italic text-sm leading-relaxed">
                        "{risk}"
                    </p>
                </div>
            </div>
        </div>
    );
}
