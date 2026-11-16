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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === "#resume") {
      onOpenResume();
      return;
    }
    // Small timeout to allow mobile menu unmount and scroll-lock release
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#F7F5F0]/95 backdrop-blur-md border-b border-editorial-border py-3 sm:py-4 shadow-sm"
            : "bg-transparent py-4 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 xl:px-12 flex items-center justify-between">
          {/* Stylish Monogram V Logo + Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3 group font-semibold text-xs md:text-sm tracking-widest text-editorial-text uppercase shrink-0"
            aria-label="Vishnu Varthan N - Home"
          >
            {/* Custom Editorial 'V' Monogram Emblem */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-editorial-text text-editorial-bg flex items-center justify-center group-hover:bg-editorial-accent transition-all duration-300 shadow-sm shrink-0">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 sm:w-5 sm:h-5 text-editorial-bg stroke-current"
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

            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
              <span className="font-extrabold tracking-wider group-hover:text-editorial-accent transition-colors text-xs sm:text-sm whitespace-nowrap">
                VISHNU VARTHAN N
              </span>
              <span className="text-editorial-muted hidden sm:inline">/</span>
              <span className="text-editorial-muted text-[10px] md:text-xs tracking-wider hidden sm:inline whitespace-nowrap">
                DATA SCIENCE & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-8" aria-label="Desktop Navigation">
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

          {/* Connect Action Button (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-editorial-text text-editorial-bg px-5 py-2.5 hover:bg-editorial-accent transition-all duration-300 shadow-sm"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle (44x44px minimum touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-editorial-text hover:text-editorial-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-editorial-accent"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
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
            id="mobile-navigation-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-x-0 bottom-0 top-[56px] xs:top-[64px] sm:top-[72px] z-40 bg-editorial-bg/95 backdrop-blur-xl border-b border-editorial-border px-6 py-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
          >
            <nav className="flex flex-col space-y-2 pt-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 }}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left py-3.5 text-xl xs:text-2xl font-display font-bold tracking-tight text-editorial-text hover:text-editorial-accent active:text-editorial-accent transition-colors uppercase border-b border-editorial-border/40 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-editorial-accent font-normal">
                    0{index + 1}
                  </span>
                </motion.button>
              ))}
            </nav>

            <div className="pt-6 pb-2">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full min-h-[48px] flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase bg-editorial-text text-editorial-bg py-4 hover:bg-editorial-accent active:bg-editorial-accent transition-colors shadow-sm"
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] font-mono tracking-wider text-editorial-muted mt-5 uppercase">
                © 2026 VISHNU VARTHAN N — DATA SCIENCE & AI
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
