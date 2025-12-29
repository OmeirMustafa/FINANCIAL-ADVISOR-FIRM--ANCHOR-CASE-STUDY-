"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { H1, H2, H3, P } from "@/components/ui/Typography";
import { ShieldCheck, TrendingUp, Users, Scale, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";
import { Schema } from "@/components/seo/Schema"; // Assume this is created
import { useRef } from "react";
import { HeroMetrics } from "@/components/case-study/HeroMetrics";
import { ProcessGrid } from "@/components/case-study/ProcessGrid";
import { Watermark } from "@/components/case-study/Watermark";

// Fade Up Animation Variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [-50, 0]);

  return (
    <main className="flex min-h-screen flex-col pt-20 bg-[#0F172A]">
      <Schema />
      <Header />
      <Watermark />

      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center min-h-[90vh] bg-[#0F172A] text-white overflow-hidden">
        {/* Metric Banner for Case Study */}
        <HeroMetrics />

        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0F172A] to-[#0F172A] opacity-80 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] z-0" />

        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              For Post-Exit Tech Founders ($5M+)
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-white">
              You've exited. <br />
              <span className="text-amber-500 italic">Now the real tax fight begins.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-lg leading-relaxed">
              40% of your exit proceeds could vanish to taxes. And your stock-heavy portfolio is exposed. We stop the bleeding and secure your liquidity.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" withArrow href="#audit" className="shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-shadow duration-300 bg-amber-600 hover:bg-amber-700 text-white border-none">
                Book Exit Tax Audit
              </Button>
              <span className="text-xs text-slate-500 self-center sm:self-auto pt-2 block sm:hidden">Save 20-30% on potential tax drag</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-x-8 gap-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-500" />
                <span>QSBS Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-500" />
                <span>Concentration De-Risking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-amber-500" />
                <span>Estate Freezing</span>
              </div>
            </motion.div>
            <p className="text-[10px] text-slate-600 mt-2 uppercase tracking-widest opacity-50">Not Investment Advice</p>
          </motion.div>

          {/* Hero Visual - Abstract chart/dashboard feel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative h-full min-h-[600px] w-full"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="relative z-10 bg-slate-900/50 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-2xl max-w-md mx-auto transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <p className="text-slate-400 text-xs uppercase">Projected Tax Savings</p>
                  <p className="text-3xl font-serif text-white">
                    $<CountUp end={1420000} prefix="" separator="," duration={2.5} />
                  </p>
                </div>
                <TrendingUp className="text-emerald-400" />
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-800 rounded-full w-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5, delay: 0.8 }} className="h-full bg-emerald-500/80 rounded-full" />
                </div>
                <div className="h-2 bg-slate-800 rounded-full w-3/4 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 1.5, delay: 1 }} className="h-full bg-amber-500/80 rounded-full" />
                </div>
                <div className="h-2 bg-slate-800 rounded-full w-1/2 overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} transition={{ duration: 1.5, delay: 1.2 }} className="h-full bg-blue-500/80 rounded-full" />
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between text-xs text-slate-500">
                <span>Pre-Planning</span>
                <span>Post-Planning</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PAIN/SERVICES SECTION */}
      <Section id="services" className="bg-slate-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-50 text-red-600 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <H3 className="text-slate-900">Tax Drag Minimization</H3>
              <P className="text-slate-600 text-sm">
                Federal + State + NIIT can wipe out 50%+ of your win. We deploy QSBS stacking, CRTs, and Opportunity Zones to keep equity in your pocket during and after the liquidity event.
              </P>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-50 text-amber-600 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <H3 className="text-slate-900">Concentration De-Risking</H3>
              <P className="text-slate-600 text-sm">
                Holding 90% of your net worth in your former company's stock is a wealth-killer. We use Exchange Funds and options strategies to diversify without triggering an immediate tax event.
              </P>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6 p-8 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <H3 className="text-slate-900">Virtual Family Office</H3>
              <P className="text-slate-600 text-sm">
                You need more than investment advice. We act as your personal CFO—handling bill pay, alternative investments, and multi-generational trust structures so you can build your next venture.
              </P>
            </motion.div>
          </motion.div>

          <div className="mt-20 text-center">
            <Button variant="ghost" className="text-slate-900 hover:bg-slate-100" withArrow href="#audit">
              Get Your Free Stress-Test &rarr; See portfolio risks in 48 hrs
            </Button>
          </div>
        </Container>
      </Section>

      {/* TRUST / PHILOSOPHY SECTION */}
      <Section background="primary" id="philosophy" className="text-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] relative bg-slate-800 rounded-xl overflow-hidden border border-white/10">
              {/* Abstract visualization of a network or diversified portfolio */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-serif text-amber-500 mb-2 font-bold">
                    <CountUp end={100} suffix="%" duration={3} />
                  </p>
                  <p className="text-sm uppercase tracking-widest text-slate-400">Fiduciary Standard</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 text-amber-500 font-medium tracking-wide uppercase text-sm">
              <Scale size={16} />
              The Fiduciary Standard
            </div>
            <H2 className="text-white">Built for Founders, <br />Not Retail Investors.</H2>
            <P className="text-slate-300">
              Retail advisors put you in a 60/40 bucket. We build custom Indexing strategies that factor in your illiquid private holdings.
            </P>
            <P className="text-slate-300">
              We are legally bound to act in your best interest. No commission products. No hidden kickbacks. Just pure, unconflicted advice to protect your hard-earned exit.
            </P>

            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10 mt-8">
              <div>
                <p className="text-4xl font-serif text-white mb-1"><CountUp end={24} duration={2.5} />+</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-white mb-1">$<CountUp end={500} suffix="M" duration={2.5} />+</p>
                <p className="text-xs uppercase tracking-wider text-slate-500">Assets Advised</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROCESS SECTION (The Animated Timeline) */}
      <Section id="process" className="bg-slate-50 overflow-hidden">
        <Container size="md" className="text-center mb-16">
          <H2 className="text-slate-900">From Chaos to Clarity.</H2>
          <P className="text-slate-600">A structured approach to securing your financial future.</P>
        </Container>

        <Container ref={targetRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 transform md:-translate-x-1/2">
            <motion.div style={{ height: "100%", originY: 0, scaleY: scrollYProgress }} className="w-full bg-amber-500" />
          </div>

          <div className="space-y-24">
            {[
              { title: "Exit Tax Audit", subtitle: "15 min call", desc: "We review your cap table, stock options, and recent liquidity events to identify immediate tax liabilities and savings opportunities.", icon: "01" },
              { title: "Custom Stress-Test Model", subtitle: "Delivered in 48 hrs", desc: "We stress-test your current portfolio against a dot-com style crash and provide a diversification roadmap.", icon: "02" },
              { title: "Tax-Optimized Implementation", subtitle: "Execution", desc: "We implement the strategy only if you approve. We handle the paperwork, transfers, and coordination with your CPA.", icon: "03" }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon/Dot */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 text-amber-500 flex items-center justify-center font-bold z-10 border-4 border-slate-50 shadow-sm">
                  {step.icon}
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:border-amber-500/30 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">{step.subtitle}</span>
                    <h4 className="text-xl font-serif font-bold text-slate-900 mb-4">{step.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CASE STUDY PROCESS GRID */}
      <ProcessGrid />

      {/* CTA SECTION */}
      <Section id="audit" className="text-center bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5 z-0" />
        <Container size="md" className="space-y-8 relative z-10">
          <H2 className="text-white mb-2">Stop the Tax Bleeding.</H2>
          <P className="text-slate-400 max-w-xl mx-auto">
            You've done the hard part. Let us handle the defense. Book your confidential Exit Tax Audit today.
          </P>
          <div className="pt-4">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white min-w-[200px]" withArrow>
              Book Exit Tax Audit
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-8">
            * Save 20-30% on potential taxes. No obligation.
          </p>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
