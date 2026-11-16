"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-editorial-dark text-editorial-bg border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-editorial-bg text-editorial-dark flex items-center justify-center font-bold text-xs tracking-tighter shrink-0">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-editorial-dark stroke-current"
            >
              <path
                d="M6 8L16 25L26 8"
                stroke="currentColor"
                strokeWidth="3.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
              <path
                d="M12 8L16 16L20 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
            </svg>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
            <span className="font-display font-extrabold tracking-tight text-base uppercase text-white">
              VISHNU VARTHAN N
            </span>
            <span className="hidden sm:inline text-neutral-600">/</span>
            <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
              DATA SCIENCE × AI
            </span>
          </div>
        </div>

        <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest text-center">
          © 2026 VISHNU VARTHAN N. ALL RIGHTS RESERVED.
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white uppercase tracking-widest transition-colors"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
