"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, Github, Code, CheckCircle, Sparkles } from "lucide-react";

export interface ProjectData {
  number: string;
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  architecture?: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  imageBg: string; // Gradient / styling pattern for visual preview fallback
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-editorial-bg border border-editorial-border shadow-2xl z-10 overflow-hidden my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-editorial-border bg-editorial-card/60">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-widest text-editorial-accent">
                PROJECT {project.number}
              </span>
              <span className="text-editorial-muted text-xs">/</span>
              <span className="text-xs font-bold tracking-wider uppercase text-editorial-muted">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-editorial-text hover:text-editorial-accent transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 md:p-10 max-h-[80vh] overflow-y-auto space-y-8">
            {/* Visual Hero Box inside modal */}
            <div className={`w-full h-56 md:h-72 ${project.imageBg} border border-editorial-border flex flex-col justify-between p-6 relative overflow-hidden`}>
              {project.imageUrl && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} detailed visual`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover object-top filter brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 pointer-events-none" />
                </div>
              )}
              <div className="absolute top-0 right-0 p-8 text-white/10 font-display font-extrabold text-8xl pointer-events-none z-10">
                {project.number}
              </div>
              <span className="inline-block text-xs font-mono tracking-widest uppercase bg-editorial-text text-editorial-bg px-3 py-1 self-start z-10 shadow-sm">
                {project.category}
              </span>
              <div className="z-10 bg-editorial-bg/90 backdrop-blur-md p-4 border border-editorial-border/60 max-w-xl shadow-lg">
                <h2 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-editorial-text">
                  {project.title}
                </h2>
                <p className="text-xs md:text-sm font-sans font-medium text-editorial-muted mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-editorial-accent">
                OVERVIEW
              </h3>
              <p className="text-base md:text-lg text-editorial-text leading-relaxed font-sans">
                {project.longDescription}
              </p>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest uppercase text-editorial-accent">
                  KEY HIGHLIGHTS & ARCHITECTURE
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 border border-editorial-border/60 bg-editorial-card/40">
                      <CheckCircle className="w-4 h-4 text-editorial-accent shrink-0 mt-0.5" />
                      <span className="text-xs font-sans text-editorial-text font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technology Tags */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-editorial-accent">
                TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-semibold px-3 py-1.5 bg-editorial-dark text-editorial-bg uppercase tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-6 border-t border-editorial-border flex flex-wrap items-center gap-4">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-editorial-text text-editorial-bg px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-editorial-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 bg-editorial-card text-editorial-muted px-6 py-3 text-xs font-bold tracking-widest uppercase border border-editorial-border">
                  <Code className="w-4 h-4" />
                  <span>REPO AVAILABLE ON REQUEST</span>
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-editorial-text text-editorial-text px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-editorial-text hover:text-editorial-bg transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>LIVE DEMO</span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 border border-editorial-border text-editorial-muted px-6 py-3 text-xs font-bold tracking-widest uppercase">
                  <Sparkles className="w-4 h-4 text-editorial-accent" />
                  <span>PRODUCTION DEPLOYED</span>
                </span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
