"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export function TechStackBadge() {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-full border border-amber-500/20 hover:border-amber-500/40 transition-colors cursor-default mb-8"
        >
            <Code2 size={16} className="text-amber-500" />
            <span className="text-xs font-medium text-slate-400 tracking-wide">
                Built with <span className="text-slate-200">Next.js 15</span> • <span className="text-slate-200">Framer Motion</span> • <span className="text-slate-200">Tailwind CSS</span>
            </span>
        </motion.div>
    );
}
