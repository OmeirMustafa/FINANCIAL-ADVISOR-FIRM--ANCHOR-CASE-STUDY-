"use client";

import { motion } from "framer-motion";

export function HeroMetrics() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-0 w-full z-20 bg-gold-500/10 backdrop-blur-md border-b border-gold-500/20 py-2 hidden md:block"
        >
            <div className="max-w-6xl mx-auto px-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gold-500">
                <div className="flex gap-8">
                    <span>• Trust signals active</span>
                    <span>• Conversion logic: Primary</span>
                </div>
                <div className="flex gap-8">
                    <span>Avg Client Exit: $12M+</span>
                    <span>Fee Structure: Flat/AUM</span>
                </div>
            </div>
        </motion.div>
    );
}
