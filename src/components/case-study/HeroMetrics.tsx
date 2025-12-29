"use client";

import { motion } from "framer-motion";
import { TrendingUp, MousePointerClick, Users } from "lucide-react";

export function HeroMetrics() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-24 left-0 right-0 z-30 flex justify-center pointer-events-none"
        >
            <div className="bg-slate-900/40 backdrop-blur-md border border-amber-500/30 rounded-full px-6 py-2 flex items-center gap-6 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                <div className="flex items-center gap-2">
                    <div className="bg-amber-500/20 p-1 rounded-full"><MousePointerClick size={14} className="text-amber-500" /></div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">CTA Clicks</span>
                        <span className="text-sm font-bold text-white leading-none">47% &#8593;</span>
                    </div>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                    <div className="bg-emerald-500/20 p-1 rounded-full"><TrendingUp size={14} className="text-emerald-500" /></div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Bounce Rate</span>
                        <span className="text-sm font-bold text-white leading-none">23% &#8595;</span>
                    </div>
                </div>
                <div className="w-[1px] h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                    <div className="bg-blue-500/20 p-1 rounded-full"><Users size={14} className="text-blue-500" /></div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Bookings</span>
                        <span className="text-sm font-bold text-white leading-none">3x Vol</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
