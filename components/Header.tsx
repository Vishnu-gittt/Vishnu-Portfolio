"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "RESUME", href: "#resume" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header({ onOpenResume }: { onOpenResume: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#resume") {
      onOpenResume();
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F5F0]/90 backdrop-blur-md border-b border-editorial-border py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Stylish Monogram V Logo + Name */}
          <a
            href="#"
            className="flex items-center gap-3 group font-semibold text-xs md:text-sm tracking-widest text-editorial-text uppercase"
          >
            {/* Custom Editorial 'V' Monogram Emblem */}
            <div className="w-8 h-8 md:w-9 md:h-9 bg-editorial-text text-editorial-bg flex items-center justify-center group-hover:bg-editorial-accent transition-all duration-300 shadow-sm shrink-0">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-editorial-bg stroke-current"
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="font-extrabold tracking-wider group-hover:text-editorial-accent transition-colors">
                VISHNU VARTHAN N
              </span>
              <span className="text-editorial-muted hidden sm:inline">/</span>
              <span className="text-editorial-muted text-[10px] md:text-xs tracking-wider hidden sm:inline">
                DATA SCIENCE & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-xs font-semibold tracking-widest text-editorial-text hover:text-editorial-accent transition-colors uppercase relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-editorial-accent hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Connect Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-editorial-text text-editorial-bg px-5 py-2.5 hover:bg-editorial-accent transition-all duration-300 shadow-sm"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-editorial-text hover:text-editorial-accent transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 bg-editorial-bg border-b border-editorial-border px-8 py-10 flex flex-col justify-between lg:hidden"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-2xl font-display font-bold tracking-tight text-editorial-text hover:text-editorial-accent transition-colors uppercase border-b border-editorial-border/40 pb-4"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase bg-editorial-text text-editorial-bg py-4 hover:bg-editorial-accent transition-colors"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-editorial-muted mt-6">
                © 2026 VISHNU VARTHAN N — DATA SCIENCE & AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
