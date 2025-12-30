import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Footer } from "@/components/Footer";
import { TaxCalculator } from "@/components/demo/TaxCalculator";
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
                <section id="philosophy" className="py-32 bg-slate-50">
                    <div className="max-w-6xl mx-auto px-6 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-24">
                            <h2 className="text-4xl md:text-5xl font-serif text-navy-900 leading-tight">
                                Built for Founders, <br />
                                <span className="text-gold-600">Not Retail Investors.</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed pt-2">
                                Retail advisors put you in a 60/40 bucket. We build custom Indexing strategies that factor in your illiquid private holdings,
                                creating a true total-wealth hedge.
                            </p>
                        </div>

                        {/* Interactive Calculator */}
                        <div className="w-full transform hover:scale-[1.01] transition-transform duration-500">
                            <TaxCalculator />
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}
