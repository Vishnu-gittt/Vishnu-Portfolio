"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Mail, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/65 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-editorial-bg border border-editorial-border shadow-2xl z-10 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-editorial-border bg-editorial-card/60 shrink-0">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-editorial-accent" />
              <span className="font-mono text-xs font-bold tracking-widest text-editorial-text uppercase">
                VISHNU VARTHAN N — OFFICIAL RESUME
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-editorial-muted hover:text-editorial-text hover:bg-editorial-card transition-colors rounded-sm"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Container */}
          <div className="p-6 md:p-8 space-y-8 overflow-y-auto font-sans">
            {/* Candidate Header Summary */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-editorial-border pb-6 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase text-editorial-text tracking-tight">
                  VISHNU VARTHAN N
                </h2>
                <p className="text-sm font-mono font-bold tracking-widest text-editorial-accent uppercase mt-1">
                  DATA SCIENCE STUDENT & AI DEVELOPER
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-editorial-muted mt-3">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-editorial-accent" />
                    Chennai, India
                  </span>
                  <a
                    href="https://linkedin.com/in/vishnu-varthan-n-310840309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-editorial-text transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-editorial-accent" />
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Vishnu-gittt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-editorial-text transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-editorial-accent" />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="text-left md:text-right">
                <span className="text-xs font-mono font-bold tracking-wider text-editorial-muted uppercase block">
                  CORE FOCUS
                </span>
                <span className="text-sm font-display font-bold text-editorial-text">
                  Machine Learning, Generative AI & Automation
                </span>
              </div>
            </div>

            {/* Objective */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
                CAREER SUMMARY
              </h3>
              <p className="text-sm text-editorial-muted leading-relaxed">
                Data Science and AI Automation professional skilled in Python, SQL, Power BI, machine learning, and frontend development. Experienced in data analysis, dashboard development, and AI applications, with strong proficiency in Generative AI, LLMs, RAG, and workflow automation. Focused on delivering data-driven solutions and intelligent automation systems that solve real-world business challenges.
              </p>
            </div>

            {/* Professional Experience */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
                PROFESSIONAL EXPERIENCE
              </h3>
              
              <div className="space-y-3">
                <div className="p-4 border border-editorial-border bg-editorial-card/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-bold text-sm uppercase text-editorial-text">
                      Data Analyst Intern — Vytcdc Company
                    </h4>
                    <span className="font-mono text-xs text-editorial-accent font-bold">Dec 2025 – Jan 2026</span>
                  </div>
                  <p className="text-xs text-editorial-muted mt-2 leading-relaxed">
                    Cleaned and preprocessed data and ran SQL analysis to identify trends. Built Power BI dashboards and KPI reports to track performance metrics.
                  </p>
                </div>

                <div className="p-4 border border-editorial-border bg-editorial-card/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h4 className="font-bold text-sm uppercase text-editorial-text">
                      Power BI Dashboard Contributor — Dept. of Data Science
                    </h4>
                    <span className="font-mono text-xs text-editorial-accent font-bold">Mar 2025 – Jan 2026</span>
                  </div>
                  <p className="text-xs text-editorial-muted mt-2 leading-relaxed">
                    Contributed to the department&apos;s Power BI dashboard covering budget tracking, financial analysis and reporting insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Projects */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
                KEY PROJECTS
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 border border-editorial-border bg-editorial-card/40">
                  <h4 className="font-bold text-sm uppercase text-editorial-text">GitHub Repository Analyzer (RAG)</h4>
                  <p className="text-xs text-editorial-muted mt-1">Built a RAG-based web application to retrieve and analyze GitHub repository information using LLM technologies.</p>
                </div>

                <div className="p-4 border border-editorial-border bg-editorial-card/40">
                  <h4 className="font-bold text-sm uppercase text-editorial-text">Animated Portfolio Website</h4>
                  <p className="text-xs text-editorial-muted mt-1">Developed a responsive, animated personal portfolio using Next.js, React, and Tailwind CSS to showcase projects.</p>
                </div>

                <div className="p-4 border border-editorial-border bg-editorial-card/40">
                  <h4 className="font-bold text-sm uppercase text-editorial-text">VishFit AI – AI Fitness Web App</h4>
                  <p className="text-xs text-editorial-muted mt-1">Developed an AI-powered fitness website during SIMATS Software Hackathon integrating frontend and AI concepts.</p>
                </div>

                <div className="p-4 border border-editorial-border bg-editorial-card/40">
                  <h4 className="font-bold text-sm uppercase text-editorial-text">Department Website – D.G. Vaishnav College</h4>
                  <p className="text-xs text-editorial-muted mt-1">Designed and developed a responsive website for the Department of Data Science to present departmental resources.</p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Education */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
                  EDUCATION
                </h3>
                <div className="p-4 border border-editorial-border bg-editorial-card/40">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="font-bold text-sm uppercase text-editorial-text">
                      Bachelor&apos;s in Data Science
                    </h4>
                    <span className="text-xs font-mono font-bold tracking-wider text-editorial-accent uppercase">
                      DG VAISHNAV COLLEGE
                    </span>
                  </div>
                  <p className="text-xs text-editorial-muted mt-1">
                    Student Secretary, Department of Data Science. Specialization in Data Science, Analytics, and AI.
                  </p>
                  <p className="text-xs text-editorial-muted mt-2 pt-2 border-t border-editorial-border/60">
                    <span className="font-semibold text-editorial-text">Schooling:</span> Kolaperumal Senior Secondary School (CS Stream).
                  </p>
                </div>
              </div>

              {/* Certifications & Achievements */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
                  ACHIEVEMENTS & CERTIFICATIONS
                </h3>
                <div className="p-4 border border-editorial-border bg-editorial-card/40 space-y-2 text-xs">
                  <p className="text-editorial-text font-semibold">✓ Smart India Hackathon (SIH) — 3rd Place (National Initiative)</p>
                  <p className="text-editorial-text font-semibold">✓ NPTEL — Introduction to Machine Learning</p>
                  <p className="text-editorial-text font-semibold">✓ Data Analyst Internship Certificate – Vytcdc</p>
                  <p className="text-editorial-text font-semibold">✓ Certificate of Appreciation – Power BI Dashboard Development</p>
                  <p className="text-editorial-text font-semibold">✓ International Conference Paper Presentation – Cybersecurity</p>
                </div>
              </div>
            </div>

            {/* Technical Skills List */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
                SKILLS & TOOLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "SQL", "R", "Pandas", "NumPy", "Statistical Analysis",
                  "Machine Learning", "TensorFlow", "Generative AI", "Prompt Engineering",
                  "RAG", "LangChain", "LangGraph", "Hugging Face", "Vector Databases",
                  "AI Agents", "MCP", "n8n", "Workflow Automation",
                  "HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Node.js",
                  "Power BI", "Excel", "Matplotlib", "Seaborn",
                  "MySQL", "PostgreSQL", "Git", "GitHub", "VS Code"
                ].map((sk) => (
                  <span key={sk} className="text-xs font-mono px-3 py-1 bg-editorial-dark text-editorial-bg uppercase font-medium">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions — Links directly to canonical /Vishnu Varthan N - Resume.pdf */}
            <div className="pt-6 border-t border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="mailto:vishnuvarthan6074@gmail.com"
                className="text-xs font-bold tracking-widest uppercase text-editorial-text hover:text-editorial-accent transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>EMAIL: VISHNUVARTHAN6074@GMAIL.COM</span>
              </a>

              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <a
                  href="/Vishnu%20Varthan%20N%20-%20Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-editorial-card border border-editorial-border text-editorial-text px-5 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-editorial-text hover:text-editorial-bg transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VIEW RESUME (PDF)</span>
                </a>

                <a
                  href="/Vishnu%20Varthan%20N%20-%20Resume.pdf"
                  download="Vishnu Varthan N - Resume.pdf"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-editorial-accent text-white px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-editorial-accentHover transition-colors shadow-md group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
