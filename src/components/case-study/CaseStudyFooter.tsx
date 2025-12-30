"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CaseStudyFooter() {
    return (
        <footer className="bg-navy-900 border-t border-white/5 py-12 text-slate-400 text-sm">
            <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <span className="font-bold text-white tracking-widest uppercase text-xs block mb-1">Strategic Case Study</span>
                    <p>© {new Date().getFullYear()} Financial UX Strategy</p>
                </div>

                <div className="flex items-center gap-8">
                    <Link href="#" className="hover:text-gold-500 transition-colors flex items-center gap-1">
                        Portfolio Home <ArrowUpRight size={14} />
                    </Link>
                    <Link href="https://www.linkedin.com" className="hover:text-gold-500 transition-colors flex items-center gap-1">
                        LinkedIn <ArrowUpRight size={14} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
