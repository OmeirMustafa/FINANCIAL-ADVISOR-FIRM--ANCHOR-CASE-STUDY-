"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DollarSign, ArrowRight, RefreshCcw } from "lucide-react";
import CountUp from "react-countup";

export function TaxCalculator() {
    const [valuation, setValuation] = useState(5000000);
    const [costBasis, setCostBasis] = useState(50000);
    const [state, setState] = useState("CA");
    const [qsbsEligible, setQsbsEligible] = useState(true);

    // Constants
    const FED_TAX_RATE = 0.238; // 20% Cap Gains + 3.8% NIIT
    const STATE_RATES: Record<string, number> = {
        CA: 0.133,
        NY: 0.109,
        TX: 0.0,
        FL: 0.0,
        MA: 0.05
    };

    // Calculations
    const gain = valuation - costBasis;
    const fedTax = qsbsEligible ? 0 : gain * FED_TAX_RATE;
    const stateTaxRate = STATE_RATES[state] || 0;
    const stateTax = gain * stateTaxRate;
    const totalTax = fedTax + stateTax;
    const netProceeds = valuation - totalTax;

    // Comparison (Without Planning)
    const stdFedTax = gain * FED_TAX_RATE;
    const stdTax = stdFedTax + stateTax;
    const savings = stdTax - totalTax;

    return (
        <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto border border-white/10 relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Input Section */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-serif text-white mb-2">Exit Tax Simulator</h3>
                        <p className="text-slate-400 text-sm">Estimate your liability before the LOI.</p>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Exit Valuation</label>
                            <div className="relative">
                                <DollarSign size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gold-500" />
                                <input
                                    type="range"
                                    min="1000000"
                                    max="50000000"
                                    step="100000"
                                    value={valuation}
                                    onChange={(e) => setValuation(Number(e.target.value))}
                                    className="w-full h-2 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-gold-500 mb-4"
                                />
                                <div className="bg-navy-900 border border-white/10 rounded px-4 py-2 text-white font-mono text-lg w-full pl-10 focus-within:border-gold-500 transition-colors">
                                    {valuation.toLocaleString()}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">State</label>
                                <select
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="w-full bg-navy-900 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-gold-500 transition-colors"
                                >
                                    {Object.keys(STATE_RATES).map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <div className="flex items-center gap-3 pt-6">
                                <input
                                    type="checkbox"
                                    checked={qsbsEligible}
                                    onChange={(e) => setQsbsEligible(e.target.checked)}
                                    className="w-5 h-5 rounded border-white/20 bg-navy-900 text-gold-500 focus:ring-gold-500 accent-gold-500"
                                />
                                <label className="text-sm text-slate-300">QSBS Strategy Applied?</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Section */}
                <div className="bg-navy-950/50 rounded-lg p-6 border border-white/5 flex flex-col justify-center relative">
                    <div className="mb-6">
                        <span className="text-xs uppercase tracking-widest text-slate-500 block mb-1">Estimated Net Proceeds</span>
                        <div className="text-4xl md:text-5xl font-serif text-white">
                            $<CountUp end={netProceeds} separator="," duration={1} preserveValue />
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">Federal Tax</span>
                            <span className="text-white font-mono text-red-400">-${fedTax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-400">State Tax ({state})</span>
                            <span className="text-white font-mono text-red-400">-${stateTax.toLocaleString()}</span>
                        </div>
                        <div className="h-px bg-white/10 my-2" />
                        <div className="flex justify-between text-sm font-bold">
                            <span className="text-gold-500">Anchor Strategy Savings</span>
                            <span className="text-emerald-400 font-mono">+${savings.toLocaleString()}</span>
                        </div>
                    </div>

                    <button className="w-full bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold py-3 rounded-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center justify-center gap-2 group">
                        Get Full Analysis <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}
