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
                <div className={clsx(
                    "mx-auto transition-all duration-500 ease-in-out border-4 border-navy-900 rounded-xl overflow-hidden shadow-2xl bg-white relative",
                    device === "desktop" ? "w-full max-w-6xl h-[600px] md:h-[800px]" : "w-full max-w-[375px] h-[750px]"
                )}>
                    <div className="absolute top-0 w-full h-8 bg-navy-900 flex items-center px-4 gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <div className="mx-auto text-[10px] text-slate-400 font-mono">anchor-capital.com</div>
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
