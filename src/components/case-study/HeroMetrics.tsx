"use client";

import { motion } from "framer-motion";
import { TrendingUp, MousePointerClick, Users } from "lucide-react";

export function HeroMetrics() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-6 left-0 right-0 z-30 flex justify-center pointer-events-none"
        >
            <div className="bg-navy-900/60 backdrop-blur-md border border-gold-500/20 rounded-full px-6 py-2.5 flex items-center gap-6 shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="bg-gold-500/10 p-1.5 rounded-full"><MousePointerClick size={12} className="text-gold-500" /></div>
                    <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">CTA Clicks</span>
                        <span className="text-xs font-bold text-white leading-none">47% <span className="text-emerald-500">↑</span></span>
                    </div>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="flex items-center gap-3">
                    <div className="bg-emerald-500/10 p-1.5 rounded-full"><TrendingUp size={12} className="text-emerald-500" /></div>
                    <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Bounce Rate</span>
                        <span className="text-xs font-bold text-white leading-none">23% <span className="text-emerald-500">↓</span></span>
                    </div>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="flex items-center gap-3">
                    <div className="bg-blue-500/10 p-1.5 rounded-full"><Users size={12} className="text-blue-500" /></div>
                    <div className="flex flex-col">
                        <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Bookings</span>
                        <span className="text-xs font-bold text-white leading-none">3x Vol</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
