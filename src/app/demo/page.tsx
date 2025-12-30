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
                <section id="philosophy" className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <h2 className="text-4xl font-serif text-navy-900 mb-6">Built for Founders, <br />Not Retail Investors.</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Retail advisors put you in a 60/40 bucket. We build custom Indexing strategies that factor in your illiquid private holdings.
                        </p>
                    </div>

                    {/* Interactive Calculator */}
                    <div className="w-full">
                        <TaxCalculator />
                    </div>

                </section>
            </main>
            <Footer />
        </>
    );
}
