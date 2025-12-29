import { TechStack } from "./TechStack";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-navy-950 border-t border-white/5 pt-20 pb-12">
            <div className="max-w-6xl mx-auto px-8">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-serif text-white mb-2">Anchor<span className="text-gold-500">.</span></h4>
                        <p className="text-slate-500 text-sm">Wealth preservation for the post-exit founder.</p>
                    </div>
                    <TechStack />
                </div>

                <div className="border-t border-white/5 pt-12 text-center md:text-left">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[10px] text-slate-500 leading-relaxed uppercase tracking-wide">
                        <div>
                            <p className="mb-4">
                                Anchor Capital Advisors LLC is a Registered Investment Advisor (RIA) with the SEC.
                                Past performance is not indicative of future results. All investments involve risk, including loss of principal.
                            </p>
                            <p>
                                Not a legal or tax advice. Consult your own counsel.
                            </p>
                        </div>
                        <div className="flex flex-col md:items-end justify-end gap-2">
                            <Link href="#" className="hover:text-gold-500 transition-colors">Form ADV Part 2A</Link>
                            <Link href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
                            <p>&copy; {new Date().getFullYear()} Anchor Capital.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
