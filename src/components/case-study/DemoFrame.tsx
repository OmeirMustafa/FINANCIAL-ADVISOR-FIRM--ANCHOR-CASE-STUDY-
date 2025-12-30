"use client";

import { useState } from "react";
import { Laptop, Smartphone, ExternalLink } from "lucide-react";
import { clsx } from "clsx";

export function DemoFrame() {
    const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

    return (
        <section className="py-24 bg-slate-100 border-y border-slate-200" id="demo">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2 block">Live Prototype</span>
                    <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6">Interactive Demo</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Fully functional React implementation of the strategic redesign. <br />
                        Note: This is a conceptual prototype running on production code.
                    </p>
                </div>

                {/* Controls */}
                <div className="flex justify-center flex-wrap gap-4 mb-8">
                    <button
                        onClick={() => setDevice("desktop")}
                        className={clsx(
                            "flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold transition-all",
                            device === "desktop" ? "bg-navy-900 text-white shadow-lg" : "bg-white text-slate-500 hover:text-navy-900"
                        )}
                    >
                        <Laptop size={16} /> Desktop View
                    </button>
                    <button
                        onClick={() => setDevice("mobile")}
                        className={clsx(
                            "flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold transition-all",
                            device === "mobile" ? "bg-navy-900 text-white shadow-lg" : "bg-white text-slate-500 hover:text-navy-900"
                        )}
                    >
                        <Smartphone size={16} /> Mobile View
                    </button>
                    <a
                        href="/demo"
                        target="_blank"
                        className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-bold bg-gold-400 text-navy-900 hover:bg-gold-500 transition-colors"
                    >
                        Open Full Screen <ExternalLink size={16} />
                    </a>
                </div>

                {/* Frame */}
                {/* Frame with Reflection */}
                <div className={clsx(
                    "mx-auto transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-xl overflow-hidden relative group",
                    device === "desktop" ? "w-full max-w-6xl h-[600px] md:h-[800px] shadow-2xl" : "w-full max-w-[375px] h-[750px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]"
                )}>
                    {/* Glass Reflection Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                    <div className="absolute top-0 w-full h-10 bg-navy-900 flex items-center px-4 gap-2 z-10 border-b border-white/5 shadow-sm">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] shadow-inner" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] shadow-inner" />
                            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840] shadow-inner" />
                        </div>
                        <div className="mx-auto bg-navy-950/50 px-32 py-1 rounded-md text-[10px] text-slate-400 font-mono border border-white/5 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            anchor-capital.com
                        </div>
                    </div>
                    <iframe
                        src="/demo"
                        className="w-full h-full pt-8 bg-white"
                        title="Interactive Demo"
                    />
                </div>
            </div>
        </section>
    );
}
