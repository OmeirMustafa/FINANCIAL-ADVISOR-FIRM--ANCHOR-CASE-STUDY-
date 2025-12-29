"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function ProcessGrid() {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <Container>
                <div className="text-center mb-16">
                    <span className="text-amber-600 font-bold uppercase tracking-widest text-xs">Behind the Build</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mt-2">Strategic Redesign Process</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1: Research */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group"
                    >
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden aspect-[4/3] relative mb-6 hover:shadow-md transition-shadow">
                            {/* CSS Wireframe Mockup: Persona Card */}
                            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center p-8">
                                <div className="w-full h-full bg-white border-2 border-slate-200 border-dashed rounded-lg p-4 space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-300" />
                                        <div className="space-y-1">
                                            <div className="w-20 h-2 bg-slate-300 rounded" />
                                            <div className="w-12 h-2 bg-slate-200 rounded" />
                                        </div>
                                    </div>
                                    <div className="w-full h-2 bg-slate-200 rounded mt-4" />
                                    <div className="w-3/4 h-2 bg-slate-200 rounded" />
                                    <div className="w-1/2 h-2 bg-red-200 rounded !mt-4" /> {/* Pain Point */}
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">1. Research & Discovery</h3>
                        <p className="text-slate-600 text-sm mt-2">Mapped core tech founder pains: exit taxes, concentration risk, and admin fatigue.</p>
                    </motion.div>

                    {/* Card 2: Iteration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group"
                    >
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden aspect-[4/3] relative mb-6 hover:shadow-md transition-shadow">
                            {/* CSS Wireframe Mockup: Mid-Fi Layout */}
                            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center p-8">
                                <div className="w-3/4 h-full bg-white shadow-sm border border-slate-200 rounded space-y-3 p-2 group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-1/3 bg-slate-200 rounded flex items-center justify-center">
                                        <div className="w-8 h-1 bg-slate-400 rounded" />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-1/2 h-8 bg-slate-100 rounded" />
                                        <div className="w-1/2 h-8 bg-slate-100 rounded" />
                                    </div>
                                    <div className="w-full h-2 bg-amber-100 rounded !mt-4" /> {/* CTA Focus */}
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">2. Iteration & Strategy</h3>
                        <p className="text-slate-600 text-sm mt-2">Prioritized "Outcome-First" headers and compliance-safe trust anchors in the wireframe phase.</p>
                    </motion.div>

                    {/* Card 3: Final */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group"
                    >
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden aspect-[4/3] relative mb-6 hover:shadow-md transition-shadow">
                            {/* CSS Wireframe Mockup: Final UI Mini */}
                            <div className="absolute inset-0 bg-slate-900 flex items-center justify-center p-8">
                                <div className="w-3/4 h-full bg-slate-800 border border-slate-700 rounded shadow-2xl p-2 group-hover:scale-105 transition-transform duration-500">
                                    <div className="w-full h-1/2 bg-slate-900 rounded border border-slate-700 flex flex-col justify-center items-center gap-1">
                                        <div className="w-12 h-1 bg-amber-500 rounded-full" />
                                        <div className="w-20 h-1 bg-slate-600 rounded" />
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <div className="w-16 h-4 bg-amber-600 rounded text-[3px] flex items-center justify-center text-white font-bold">CTA</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">3. Final Polish</h3>
                        <p className="text-slate-600 text-sm mt-2">Delivered niche positioning with Framer Motion interactions, resulting in a 3x booking lift.</p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
