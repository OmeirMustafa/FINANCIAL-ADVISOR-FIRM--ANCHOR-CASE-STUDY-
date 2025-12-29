"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, PieChart, ShieldCheck } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Exit Tax Audit",
        time: "15-Min Call",
        desc: "We analyze your cap table and recent liquidity events to capture immediate tax savings (QSBS, charitable trusts)."
    },
    {
        icon: PieChart,
        title: "Stress-Test Model",
        time: "48-Hour Turnaround",
        desc: "We simulate a 2000-style dot-com crash on your portfolio to expose concentration risks hidden in your stock options."
    },
    {
        icon: ShieldCheck,
        title: "Implementation",
        time: "Execution",
        desc: "We handle the paperwork, trust formation, and asset transfers. You stay focused on your next venture."
    }
];

export function ProcessSteps() {
    return (
        <section id="process" className="py-24 bg-navy-900 border-t border-white/5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">From Chaos to Clarity.</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Most withdrawals trigger a tax event. We built a deployment engine that protects your principal.
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-navy-800 via-gold-500/50 to-navy-800 z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="relative z-10 group"
                        >
                            <div className="bg-navy-900 border border-white/10 p-8 rounded-sm hover:border-gold-500/30 hover:bg-navy-800/50 transition-all duration-500 h-full">
                                {/* Icon */}
                                <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center border border-white/10 mb-8 mx-auto group-hover:scale-110 group-hover:border-gold-500 transition-all duration-300 shadow-xl">
                                    <step.icon className="text-gold-500 w-6 h-6" />
                                </div>

                                <div className="text-center">
                                    <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{step.time}</span>
                                    <h3 className="text-xl font-serif text-white mb-4">{step.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
