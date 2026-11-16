"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Brain, Cpu, Database, Network, Sparkles } from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "Generative AI & LLMs",
    desc: "Custom prompt pipelines, fine-tuning, and stateful intelligent agents.",
  },
  {
    icon: Database,
    title: "RAG & Vector Search",
    desc: "High-precision semantic retrieval, hybrid search, and knowledge bases.",
  },
  {
    icon: Cpu,
    title: "Machine Learning & NLP",
    desc: "Predictive analytics, deep learning models, and automated NLP pipelines.",
  },
  {
    icon: Network,
    title: "Agentic AI & Automation",
    desc: "Multi-agent systems, workflow orchestration with LangGraph, and API tools.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-editorial-bg border-b border-editorial-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-editorial-border pb-6"
        >
          <div>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent block mb-2">
              01 — PERSPECTIVE
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-editorial-text">
              ABOUT ME
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-editorial-muted uppercase mt-4 md:mt-0">
            VISHNU VARTHAN N / DATA SCIENCE & AI
          </p>
        </motion.div>

        {/* Row 1: Perfectly Balanced Two-Column Layout (Bio on Left, Portrait on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bio Narrative & Key Badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="border-l-2 border-editorial-accent pl-6 py-1">
              <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium leading-snug text-editorial-text">
                I’m a Data Science student & AI developer passionate about building practical intelligent systems.
              </p>
            </div>

            <p className="text-base md:text-lg text-editorial-muted leading-relaxed font-sans">
              My work spans Machine Learning, Generative AI, RAG architectures, and autonomous multi-agent workflows. By bridging algorithmic rigor with clean software engineering, I turn complex models and unstructured data into reliable, production-ready applications.
            </p>

            {/* Quick Core Discipline Metrics in Clean Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-editorial-border">
              <div className="p-4 bg-editorial-card/60 border border-editorial-border/80 text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-display font-bold text-editorial-text">AI & ML</span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-editorial-muted uppercase mt-1 block">Core Discipline</span>
              </div>

              <div className="p-4 bg-editorial-card/60 border border-editorial-border/80 text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-display font-bold text-editorial-text">LLM/RAG</span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-editorial-muted uppercase mt-1 block">Architecture</span>
              </div>

              <div className="p-4 bg-editorial-card/60 border border-editorial-border/80 text-center sm:text-left">
                <span className="block text-2xl sm:text-3xl font-display font-bold text-editorial-text">AGENTIC</span>
                <span className="text-[10px] font-mono font-bold tracking-widest text-editorial-muted uppercase mt-1 block">Workflows</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Cutout Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative w-full h-[380px] sm:h-[440px] bg-editorial-card/50 border border-editorial-border overflow-hidden group shadow-sm"
          >
            <div className="absolute top-4 left-4 z-10 bg-editorial-text text-editorial-bg text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1">
              PORTRAIT / VISHNU VARTHAN N
            </div>

            <Image
              src="/images/vish.png"
              alt="Vishnu Varthan N portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top scale-100 group-hover:scale-[1.02] transition-transform duration-700 editorial-photo"
            />
          </motion.div>
        </div>

        {/* Row 2: Clean Full-Width 4 Focus Pillars Grid */}
        <div className="pt-4 border-t border-editorial-border">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-editorial-accent" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
              AREAS OF SPECIALIZATION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * idx }}
                whileHover={{ y: -3, borderColor: "#121212" }}
                className="p-5 border border-editorial-border/80 bg-editorial-card/40 transition-all duration-300 group hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <area.icon className="w-5 h-5 text-editorial-accent mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xs font-bold tracking-wider uppercase text-editorial-text mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs text-editorial-muted leading-relaxed font-sans">
                    {area.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
