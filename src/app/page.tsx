import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Container } from "../components/ui/Container";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { H1, H2, H3, P } from "../components/ui/Typography";
import { ShieldCheck, TrendingUp, Users, ArrowRight, BookOpen, Scale } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center min-h-[85vh] bg-primary text-primary-foreground overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1e293b] via-primary to-primary opacity-60 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0" />

        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Accepting New Private Clients
            </div>

            <H1 className="text-white">
              Preserving your legacy for the <span className="text-secondary italic">next generation.</span>
            </H1>

            <P className="text-primary-foreground/80 text-lg md:text-xl max-w-lg">
              We provide fiduciary wealth management and strategic planning for families who value capital preservation over speculation.
            </P>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" withArrow href="#contact">
                Schedule a Private Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" href="#process">
                How We Work
              </Button>
            </div>

            {/* Trust Anchors */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-x-8 gap-y-3 text-sm text-primary-foreground/70 animate-fade-in delay-200">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/80" />
                <span>Independent Fiduciary</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/80" />
                <span>Fee-Only Structure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary/80" />
                <span>Comprehensive Planning</span>
              </div>
            </div>
          </div>

          {/* Abstract Visual Representation of Stability */}
          <div className="hidden lg:block relative h-full min-h-[500px] w-full delay-300 animate-fade-in opacity-0 fill-mode-forwards">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-secondary/5 backdrop-blur-3xl rounded-full" />
          </div>
        </Container>
      </section>

      {/* SERVICES SECTION */}
      <Section id="services">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-6 p-8 rounded-sm bg-muted/30 border border-transparent hover:border-secondary/20 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <H3>Wealth Preservation</H3>
              <P className="text-sm">
                Protect what you have accomplished. We build resilient portfolios designed to withstand volatility, ensuring your lifestyle remains secure regardless of economic cycles.
              </P>
            </div>

            <div className="space-y-6 p-8 rounded-sm bg-muted/30 border border-transparent hover:border-secondary/20 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <H3>Strategic Growth</H3>
              <P className="text-sm">
                Grow without unnecessary risk. Your portfolio is custom-engineered to meet your specific liquidity needs and long-term goals, avoiding trendy speculation.
              </P>
            </div>

            <div className="space-y-6 p-8 rounded-sm bg-muted/30 border border-transparent hover:border-secondary/20 transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/5 text-primary">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <H3>Legacy Planning</H3>
              <P className="text-sm">
                Pass on more than just assets. We structure tax-efficient wealth transfer strategies to ensure your values and resources empower the next generation.
              </P>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <p className="text-muted-foreground mb-4 text-sm font-medium">Unsure which strategy aligns with your goals?</p>
            <Button variant="ghost" className="text-primary hover:bg-primary/5" withArrow href="#philosophy">
              Understand Our Philosophy
            </Button>
          </div>
        </Container>
      </Section>

      {/* TRUST / PHILOSOPHY SECTION */}
      <Section background="muted" id="philosophy">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/5] relative bg-zinc-200 rounded-sm overflow-hidden">
              {/* Placeholder for high-end office or abstract architectural photo */}
              <div className="absolute inset-0 bg-neutral-300" />
              <div className="absolute inset-0 flex items-center justify-center text-neutral-500 font-serif italic text-lg">
                [Refined Architectural Imagery]
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 text-secondary font-medium tracking-wide uppercase text-sm">
              <Scale size={16} />
              The Fiduciary Standard
            </div>
            <H2>Unconflicted advice. <br />Transparent fees. <br />Your interests first.</H2>
            <P>
              We are legally bound to act in your best interest at all times. Unlike broker-dealers who may sell proprietary products, we operate as an independent Registered Investment Advisor (RIA).
            </P>
            <P>
              Our compensation comes solely from our clients, not from third-party commissions. This alignment ensures that when we recommend a strategy, it is because it is right for you—not because it pays us a fee.
            </P>

            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-black/5 mt-8">
              <div>
                <p className="text-4xl font-serif text-primary mb-1">20+</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-primary mb-1">100%</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Fiduciary Focus</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROCESS SECTION */}
      <Section id="process">
        <Container size="md" className="text-center mb-16">
          <H2>A clear path to peace of mind.</H2>
          <P>We do not believe in high-pressure sales. Our onboarding process is designed to give you clarity before you commit a single dollar.</P>
        </Container>

        <Container>
          <div className="relative border-l border-primary/10 ml-6 md:ml-0 md:border-none md:grid md:grid-cols-3 md:gap-12">
            {[
              { title: "1. The Discovery Call", desc: "A 30-minute conversation to assess your current situation and determine if we are the right partners for your goals." },
              { title: "2. The Strategy Map", desc: "We build a comprehensive financial model stressing-testing your portfolio against various market conditions." },
              { title: "3. Implementation", desc: "Only when you are confident in the plan do we begin the transfer and stewardship of your assets." }
            ].map((step, i) => (
              <div key={i} className="mb-12 ml-8 md:ml-0 md:mb-0 relative group">
                <span className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-primary/10" />
                <span className="absolute -left-[35px] md:left-0 md:-top-[5px] w-3 h-3 rounded-full bg-secondary ring-4 ring-white" />

                <h4 className="text-lg font-bold font-serif text-primary mt-6 mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ SECTION */}
      <Section background="muted" id="faq">
        <Container size="md">
          <H2 className="text-center mb-12">Common questions for new clients.</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { q: "Are you a fiduciary?", a: "Yes. We are legally and ethically bound to put your interests first, 100% of the time. We do not sell products or accept commissions." },
              { q: "What is your fee structure?", a: "We operate on a transparent fee-only basis, calculated as a percentage of assets under management. This aligns our incentives with your growth." },
              { q: "Do you have a minimum?", a: "To deliver our comprehensive level of service, we typically work with families who have $1M+ in investable assets." },
              { q: "Where are my assets held?", a: "Your assets are held by an independent third-party custodian (such as Schwab or Fidelity) for your safety and peace of mind." }
            ].map((faq, i) => (
              <div key={i} className="bg-background p-6 rounded-sm border border-transparent hover:border-secondary/20 transition-colors">
                <h4 className="font-serif font-bold text-lg text-primary mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section background="primary" id="contact" className="text-center">
        <Container size="md" className="space-y-8">
          <H2 className="text-white mb-2">Ready to secure your future?</H2>
          <P className="text-primary-foreground/70 max-w-xl mx-auto">
            Take the first step towards financial clarity. Schedule a complimentary, confidential consultation with our senior advisors.
          </P>
          <div className="pt-4">
            <Button size="lg" variant="secondary" className="min-w-[200px]" withArrow>
              Request Consultation
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/40 mt-8">
            * Minimum investable assets of $1M recommended for our core private client services.
          </p>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
