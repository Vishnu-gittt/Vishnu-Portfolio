"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, Download } from "lucide-react";

export default function ResumeSection({ onOpenResume }: { onOpenResume: () => void }) {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="resume" className="py-28 px-6 md:px-12 bg-editorial-card border-b border-editorial-border relative overflow-hidden">
      {/* Background Subtle Typography */}
      <div className="absolute right-0 bottom-0 text-[14vw] font-display font-extrabold text-editorial-text/5 select-none pointer-events-none leading-none">
        INTELLIGENCE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 space-y-6"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-editorial-accent block">
              06 — RESUME & COLLABORATION
            </span>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight text-editorial-text leading-[0.95]">
              LET'S BUILD<br />
              <span className="text-editorial-accent">SOMETHING INTELLIGENT.</span>
            </h2>

            <p className="text-lg md:text-2xl font-display font-medium text-editorial-muted max-w-2xl pt-2">
              Interested in AI, data and intelligent automation? Explore my work or get in touch.
            </p>
          </motion.div>

          {/* Right Action Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center"
          >
            <a
              href="/Vishnu%20Varthan%20N%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-editorial-text text-editorial-bg hover:bg-editorial-accent px-8 py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300 group shadow-lg"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </a>

            <a
              href="/Vishnu%20Varthan%20N%20-%20Resume.pdf"
              download="Vishnu Varthan N - Resume.pdf"
              className="inline-flex items-center justify-center gap-3 bg-transparent text-editorial-text border border-editorial-text hover:bg-editorial-text hover:text-editorial-bg px-8 py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300 group shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-3 text-editorial-muted hover:text-editorial-text px-4 py-2 text-xs font-mono tracking-widest uppercase transition-colors"
            >
              <span>CONTACT ME</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
