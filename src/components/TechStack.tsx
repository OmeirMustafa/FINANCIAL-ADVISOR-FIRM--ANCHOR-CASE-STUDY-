"use client";

import { Code2 } from "lucide-react";

export function TechStack() {
    return (
        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-navy-800/50 rounded-full border border-white/5 hover:border-gold-500/30 transition-colors backdrop-blur-sm cursor-help active:scale-95 duration-200">
            <Code2 size={16} className="text-gold-500" />
            <span className="text-xs font-medium text-slate-400 tracking-wide">
                Built with <span className="text-slate-200 font-semibold">Next.js 15</span> • Framer Motion • Tailwind
            </span>
        </div>
    );
}
