"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CaseStudyFooter() {
    return (
        <section className="bg-navy-950 py-24 border-t border-white/10 text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Ready to elevate your firm?</h2>
                <p className="text-slate-400 mb-12 max-w-xl mx-auto">
                    We build high-trust digital assets for financial firms that refuse to compete on "generic".
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <Link
                        href="#"
                        className="bg-gold-500 text-navy-900 font-bold px-8 py-4 rounded-sm hover:bg-white transition-all shadow-lg flex items-center gap-2"
                    >
                        Schedule Strategy Call <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="#demo"
                        className="text-white hover:text-gold-500 transition-colors font-medium text-sm tracking-wide"
                    >
                        Review Interactive Demo &uarr;
                    </Link>
                </div>
                <div className="mt-20 pt-12 border-t border-white/5 text-slate-600 text-xs uppercase tracking-widest">
                    &copy; 2025 Financial UX Strategy Check. All Rights Reserved.
                </div>
            </div>
        </section>
    );
}
