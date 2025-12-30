import { TechStack } from "./TechStack";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-navy-950 border-t border-white/5 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 md:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-sm">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <h4 className="text-2xl font-serif text-white mb-2">Anchor<span className="text-gold-500">.</span></h4>
                            <p className="text-slate-500">Wealth preservation for the post-exit founder.</p>
                        </div>
                        <div className="flex gap-4">
                            {/* Social Placeholders */}
                            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-navy-900 transition-colors cursor-pointer flex items-center justify-center text-slate-400">LN</div>
                            <div className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500 hover:text-navy-900 transition-colors cursor-pointer flex items-center justify-center text-slate-400">TW</div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Firm</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#philosophy" className="hover:text-gold-500 transition-colors">Our Philosophy</Link></li>
                            <li><Link href="#process" className="hover:text-gold-500 transition-colors">The Process</Link></li>
                            <li><Link href="#" className="hover:text-gold-500 transition-colors">Team</Link></li>
                            <li><Link href="#" className="hover:text-gold-500 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Services</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-gold-500 transition-colors">Exit Planning</Link></li>
                            <li><Link href="#" className="hover:text-gold-500 transition-colors">QSBS Optimization</Link></li>
                            <li><Link href="#" className="hover:text-gold-500 transition-colors">Estate Structuring</Link></li>
                            <li><Link href="#" className="hover:text-gold-500 transition-colors">Philanthropic Trusts</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Contact */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-xs">Contact</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>San Francisco, CA</li>
                            <li>(415) 555-0123</li>
                            <li>founders@anchor.capital</li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-white/5">
                            <TechStack />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-[10px] text-slate-500 uppercase tracking-wide">
                    <p className="max-w-2xl">
                        Anchor Capital Advisors LLC is a Registered Investment Advisor (RIA). Past performance is not indicative of future results.
                        Investments involve risk. Not legal or tax advice.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Form ADV Part 2A</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span>&copy; {new Date().getFullYear()} Anchor.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
