"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight, FileText, Sparkles, Cpu, Download } from "lucide-react";

export default function Hero({ onOpenResume }: { onOpenResume: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<"walking" | "standing">("standing");
  const [currentFrame, setCurrentFrame] = useState<number>(0);

  // Scroll Progress across Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  });

  // Subtle Mouse Parallax (2-5px)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 6);
    mouseY.set((clientY / innerHeight - 0.5) * 6);
  };

  const titleY = useTransform(smoothProgress, [0, 1], ["0%", "-15%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  // Stage 1: Walk-in intro animation (Only when loaded fresh at the top of the page)
  // If user refreshes or deep-links to any other section, stage immediately remains 'standing'
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Synchronously check sessionStorage for last known scroll position (essential for Safari)
    let savedScroll = 0;
    try {
      savedScroll = Number(sessionStorage.getItem("portfolio_scroll_pos") || "0");
    } catch (e) {}

    const isScrolledOrHash =
      savedScroll > 40 ||
      window.scrollY > 40 ||
      Boolean(window.location.hash);

    if (isScrolledOrHash) {
      setStage("standing");
      return;
    }

    let interval: NodeJS.Timeout | null = null;
    let timer: NodeJS.Timeout | null = null;
    let cancelled = false;

    // Small rAF tick to let Safari and Chrome complete any asynchronous layout/scroll restoration
    const raf = requestAnimationFrame(() => {
      if (cancelled) return;

      let postRafSavedScroll = 0;
      try {
        postRafSavedScroll = Number(sessionStorage.getItem("portfolio_scroll_pos") || "0");
      } catch (e) {}

      if (postRafSavedScroll > 40 || window.scrollY > 40 || Boolean(window.location.hash)) {
        setStage("standing");
        return;
      }

      setStage("walking");

      // 1. Instant preload of all frames in background memory
      for (let i = 0; i < 53; i++) {
        const img = new window.Image();
        img.src = `/images/walking_frames/frame_${String(i).padStart(3, "0")}.webp`;
      }

      // 2. Exact frame interval (42.45ms)
      interval = setInterval(() => {
        setCurrentFrame((prev) => (prev + 1) % 53);
      }, 42.45);

      // 3. Stage transition timer
      timer = setTimeout(() => {
        setStage("standing");
        if (interval) clearInterval(interval);
      }, 2250);
    });

    // 4. Snap to standing immediately if user scrolls while walking intro is active
    const handleScrollSnap = () => {
      if (window.scrollY > 40) {
        setStage("standing");
        if (interval) clearInterval(interval);
        if (timer) clearTimeout(timer);
      }
    };
    window.addEventListener("scroll", handleScrollSnap, { passive: true });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (interval) clearInterval(interval);
      if (timer) clearTimeout(timer);
      window.removeEventListener("scroll", handleScrollSnap);
    };
  }, []);

  // Continuous scroll tracker to keep sessionStorage updated for instant reload recognition in Safari
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saveScroll = () => {
      try {
        sessionStorage.setItem("portfolio_scroll_pos", window.scrollY.toString());
      } catch (e) {}
    };

    window.addEventListener("scroll", saveScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);

    return () => {
      window.removeEventListener("scroll", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] sm:min-h-[105vh] md:min-h-[110vh] pt-20 xs:pt-24 sm:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 xs:px-6 md:px-12 flex flex-col justify-between overflow-hidden bg-editorial-bg bg-noise border-b border-editorial-border"
    >
      {/* BACKGROUND LAYER: Small Editorial Labels & Metadata */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-0">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 sm:gap-3 bg-editorial-card/80 border border-editorial-border/70 px-3 sm:px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-editorial-accent animate-pulse shrink-0" />
          <span className="text-[10px] xs:text-xs md:text-sm font-semibold tracking-wider sm:tracking-widest uppercase text-editorial-text/90 font-mono">
            DATA SCIENCE × ARTIFICIAL INTELLIGENCE
          </span>
        </motion.div>

        <motion.div
          style={{ x: mouseX, y: mouseY }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-2 text-xs font-mono tracking-widest text-editorial-muted uppercase"
        >
          <Cpu className="w-3.5 h-3.5 text-editorial-accent" />
          <span>PORTFOLIO / 2026</span>
        </motion.div>
      </div>

      {/* CENTERPIECE: MIDDLE TYPOGRAPHY LAYER + FOREGROUND TWO-STAGE SUBJECT */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative max-w-7xl mx-auto w-full my-3 sm:my-6 flex flex-col items-center justify-center min-h-[320px] xs:min-h-[360px] sm:min-h-[460px] md:min-h-[580px] lg:min-h-[620px]"
      >
        {/* MIDDLE LAYER: Large Bold Typography revealed from Left -> Right in linear sync with walking movement */}
        <motion.div
          style={{ y: titleY, x: mouseX }}
          className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-10"
        >
          <motion.div
            initial={false}
            animate={{
              clipPath: stage === "walking" ? ["inset(0 100% 0 0)", "inset(0 0% 0 0)"] : "inset(0 0% 0 0)",
              x: stage === "walking" ? ["-3%", "0%"] : "0%",
            }}
            transition={{
              duration: stage === "walking" ? 2.25 : 0,
              ease: "linear",
            }}
            className="w-full flex flex-col items-center justify-center gap-2 xs:gap-3 sm:gap-5 md:gap-6"
          >
            <h1
              style={{ letterSpacing: "-0.02em" }}
              className="text-[13vw] xs:text-[12vw] sm:text-[11vw] lg:text-[10vw] font-extrabold uppercase leading-none text-editorial-text/90 font-sans text-center whitespace-nowrap"
            >
              VISHNU
            </h1>
            <h1
              style={{ letterSpacing: "-0.02em" }}
              className="text-[13vw] xs:text-[12vw] sm:text-[11vw] lg:text-[10vw] font-extrabold uppercase leading-none text-editorial-text/90 font-sans text-center whitespace-nowrap"
            >
              VARTHAN N
            </h1>
          </motion.div>
        </motion.div>

        {/* FOREGROUND LAYER: Character walks smoothly on fresh top load, or rests standing */}
        <div className="relative w-full h-[280px] xs:h-[330px] sm:h-[440px] md:h-[540px] lg:h-[580px] flex items-end justify-center z-20 pointer-events-none">
          {/* Ambient Glow */}
          <div className="absolute bottom-6 w-36 xs:w-48 h-36 xs:h-48 rounded-full bg-editorial-accent/10 blur-3xl pointer-events-none" />

          {/* STAGE 1: WALKING VIDEO PASS (Only rendered when stage is walking on fresh top page load) */}
          {stage === "walking" && (
            <motion.div
              initial={{ x: "-40vw", opacity: 1 }}
              animate={{
                x: "30vw",
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                x: { duration: 2.25, ease: "linear" },
                opacity: { duration: 0.3, ease: "easeInOut" },
              }}
              style={{ willChange: "transform", transform: "translateZ(0)" }}
              className="absolute bottom-0 w-[180px] xs:w-[220px] sm:w-[300px] md:w-[400px] lg:w-[460px] h-full flex items-end justify-center pointer-events-auto"
            >
              <img
                src={`/images/walking_frames/frame_${String(currentFrame).padStart(3, "0")}.webp`}
                alt="Vishnu Varthan N walking animation"
                className="w-full h-full object-contain object-bottom filter drop-shadow-2xl pointer-events-none select-none"
              />
            </motion.div>
          )}

          {/* STAGE 2: DEFAULT STANDING IMAGE (/images/stand.png) SETTLED IN CENTER */}
          <motion.div
            initial={false}
            animate={{
              opacity: stage === "standing" ? 1 : 0,
              scale: stage === "standing" ? 1 : 0.98,
            }}
            transition={{
              duration: stage === "standing" ? 0.6 : 0,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute bottom-0 w-[190px] xs:w-[230px] sm:w-[320px] md:w-[420px] lg:w-[480px] h-full flex items-end justify-center pointer-events-auto"
          >
            <Image
              src="/images/stand.png"
              alt="Vishnu Varthan N standing image"
              fill
              sizes="(max-width: 640px) 230px, (max-width: 1024px) 340px, 480px"
              priority
              unoptimized
              className="object-contain object-bottom editorial-photo filter drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* FOOTER BAR: Role & Bio Text */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-end z-30 pt-2">
        {/* Left Role & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-7 space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-editorial-accent" />
            <h2 className="text-[11px] xs:text-xs md:text-sm font-bold tracking-widest uppercase text-editorial-accent font-mono">
              DATA SCIENCE & AI DEVELOPER
            </h2>
          </div>
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-display font-medium text-editorial-text leading-snug sm:leading-tight max-w-2xl">
            I build intelligent applications using machine learning, generative AI, LLMs, RAG and AI automation.
          </p>
        </motion.div>

        {/* Right CTA Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="md:col-span-5 flex flex-col xs:flex-row md:flex-col lg:flex-row gap-3 sm:gap-4 md:justify-end w-full"
        >
          <button
            onClick={scrollToProjects}
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-editorial-text text-editorial-bg hover:bg-editorial-accent active:bg-editorial-accent px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 group shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
          >
            <span>VIEW PROJECTS</span>
            <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </button>

          <a
            href="/Vishnu%20Varthan%20N%20-%20Resume.pdf"
            download="Vishnu Varthan N - Resume.pdf"
            className="w-full xs:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 bg-transparent text-editorial-text border border-editorial-text hover:bg-editorial-text hover:text-editorial-bg active:bg-editorial-text active:text-editorial-bg px-6 sm:px-8 py-3.5 sm:py-4 text-xs font-bold tracking-widest uppercase transition-all duration-300 group hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
