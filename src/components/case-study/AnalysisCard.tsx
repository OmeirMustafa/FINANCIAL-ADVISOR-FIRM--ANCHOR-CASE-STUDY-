"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnalysisCardProps {
    icon: LucideIcon;
    title: string;
    problem: string;
    consequence: string;
    delay?: number;
}

export function AnalysisCard({ icon: Icon, title, problem, consequence, delay = 0 }: AnalysisCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-50 text-red-600 rounded-full">
                    <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-navy-900 font-serif">{title}</h3>
            </div>

            <div className="space-y-4">
                <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">The Gap</span>
                    <p className="text-slate-700 leading-relaxed text-sm">{problem}</p>
                </div>
                <div>
                    <span className="text-xs font-bold text-red-500 uppercase tracking-widest block mb-1">Business Risk</span>
                    <p className="text-slate-600 leading-relaxed text-sm italic">"{consequence}"</p>
                </div>
            </div>
        </motion.div>
    );
}
