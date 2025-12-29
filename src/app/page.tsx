import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Footer } from "@/components/Footer";
import { generateSchema } from "@/lib/schema";
import Script from "next/script";

export default function Home() {
    const schema = generateSchema();

    return (
        <>
            <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Nav />
            <main className="flex-grow">
                <Hero />
                <ProcessSteps />
                {/* Simplified Services Section for Rebuild */}
                <section id="philosophy" className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-serif text-navy-900 mb-6">Built for Founders, <br />Not Retail Investors.</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                Retail advisors put you in a 60/40 bucket. We build custom Indexing strategies that factor in your illiquid private holdings.
                            </p>
                            <ul className="space-y-4">
                                {["Fiduciary Standard", "Fee-Only Structure", "No Commissions"].map(item => (
                                    <li key={item} className="flex items-center gap-3 text-navy-900 font-medium">
                                        <div className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center text-white text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-100 h-[400px] rounded-lg border border-slate-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-navy-900/5 pattern-grid-lg" />
                            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded shadow-lg">
                                <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Portfolio Efficiency</p>
                                <div className="flex items-end gap-4 h-24">
                                    <div className="w-1/3 bg-slate-300 h-[60%] rounded-t" />
                                    <div className="w-1/3 bg-gold-400 h-[85%] rounded-t relative">
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-navy-900 text-white text-[10px] px-2 py-1 rounded">You</div>
                                    </div>
                                    <div className="w-1/3 bg-slate-300 h-[40%] rounded-t" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
