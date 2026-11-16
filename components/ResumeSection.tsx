"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, Download } from "lucide-react";

export default function ResumeSection({ onOpenResume }: { onOpenResume: () => void }) {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="resume" className="py-16 sm:py-20 md:py-28 px-4 xs:px-6 md:px-12 bg-editorial-card border-b border-editorial-border relative overflow-hidden">
      {/* Background Subtle Typography */}
      <div className="absolute right-0 bottom-0 text-[14vw] font-display font-extrabold text-editorial-text/5 select-none pointer-events-none leading-none">
        INTELLIGENCE
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-4 sm:space-y-6"
          >
            <span className="text-[11px] xs:text-xs font-bold tracking-widest uppercase text-editorial-accent block">
              06 — RESUME & COLLABORATION
            </span>

            <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase tracking-tight text-editorial-text leading-[0.95]">
              LET'S BUILD<br />
              <span className="text-editorial-accent">SOMETHING INTELLIGENT.</span>
            </h2>

            <p className="text-base xs:text-lg md:text-2xl font-display font-medium text-editorial-muted max-w-2xl pt-1 sm:pt-2">
              Interested in AI, data and intelligent automation? Explore my work or get in touch.
            </p>
          </motion.div>

          {/* Right Action Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 justify-center w-full"
          >
            <a
              href="/Vishnu%20Varthan%20N%20-%20Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-editorial-text text-editorial-bg hover:bg-editorial-accent active:bg-editorial-accent px-6 py-4 sm:py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300 group shadow-lg min-h-[50px]"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW RESUME</span>
            </a>

            <a
              href="/Vishnu%20Varthan%20N%20-%20Resume.pdf"
              download="Vishnu Varthan N - Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-3 bg-transparent text-editorial-text border border-editorial-text hover:bg-editorial-text hover:text-editorial-bg active:bg-editorial-text active:text-editorial-bg px-6 py-4 sm:py-5 text-xs font-bold tracking-widest uppercase transition-all duration-300 group shadow-sm min-h-[50px]"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              onClick={scrollToContact}
              className="w-full inline-flex items-center justify-center gap-2 text-editorial-muted hover:text-editorial-text py-2 text-xs font-mono tracking-widest uppercase transition-colors min-h-[44px]"
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
