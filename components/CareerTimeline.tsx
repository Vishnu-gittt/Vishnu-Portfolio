"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, CheckCircle2, FileSpreadsheet } from "lucide-react";

const timelineData = [
  {
    period: "DEC 2025 — JAN 2026",
    type: "PROFESSIONAL INTERNSHIP",
    title: "Data Analyst Intern",
    organization: "Vytcdc Company",
    icon: Briefcase,
    desc: "Cleaned and preprocessed data and ran SQL analysis to identify trends. Built Power BI dashboards and KPI reports to track performance metrics.",
    highlights: ["Data Cleaning Analysis", "SQL Querying", "Power BI Dashboards", "Performance Metrics"],
  },
  {
    period: "MAR 2025 — JAN 2026",
    type: "DEPARTMENT INITIATIVE",
    title: "Power BI Dashboard Contributor",
    organization: "Dept. of Data Science, D.G. Vaishnav College",
    icon: FileSpreadsheet,
    desc: "Contributed to the department's Power BI dashboard covering budget tracking, financial analysis and reporting insights.",
    highlights: ["Power BI", "Budget Tracking", "Financial Analysis", "Reporting Insights"],
  },
  {
    period: "ACADEMIC",
    type: "DEGREE PROGRAM (STUDENT SECRETARY)",
    title: "Bachelor's Degree in Data Science",
    organization: "D.G. Vaishnav College, Chennai",
    icon: GraduationCap,
    desc: "Specialized in Data Science, Analytics, and AI. Served as Student Secretary for the Department of Data Science.",
    highlights: ["Data Science & Analytics", "AI & ML", "Student Secretary", "Kolaperumal Alum"],
  },
];

const certifications = [
  {
    title: "Smart India Hackathon (SIH) — 3rd Place",
    issuer: "College-Level Competition (National Initiative)",
    category: "HACKATHON & INNOVATION",
  },
  {
    title: "NPTEL — Introduction to Machine Learning",
    issuer: "NPTEL Online Certification",
    category: "MACHINE LEARNING",
  },
  {
    title: "Data Analyst Internship Completion Certificate",
    issuer: "Vytcdc Company",
    category: "DATA ANALYTICS",
  },
  {
    title: "Certificate of Appreciation — Power BI Dashboard",
    issuer: "Power BI Development Recognition",
    category: "BUSINESS INTELLIGENCE",
  },
  {
    title: "International Conference Paper Presentation",
    issuer: "Cybersecurity Research Forum",
    category: "RESEARCH & CYBERSECURITY",
  },
];

export default function CareerTimeline() {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 px-4 xs:px-6 md:px-12 bg-editorial-bg border-b border-editorial-border">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-editorial-border pb-4 sm:pb-6">
          <div>
            <span className="text-[11px] xs:text-xs font-bold tracking-widest uppercase text-editorial-accent block mb-1.5 sm:mb-2">
              05 — BACKGROUND
            </span>
            <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-tight text-editorial-text">
              EXPERIENCE &<br />EDUCATION
            </h2>
          </div>
          <p className="text-[11px] xs:text-xs font-mono tracking-widest text-editorial-muted uppercase mt-3 md:mt-0">
            OFFICIAL RESUME MILESTONES & CERTIFICATIONS
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-editorial-border ml-2 xs:ml-4 sm:ml-6 md:ml-32 pl-5 xs:pl-6 sm:pl-8 md:pl-12 space-y-8 sm:space-y-12">
          {timelineData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Dot on the timeline line */}
              <div className="absolute -left-[27px] xs:-left-[31px] sm:-left-[41px] md:-left-[57px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-editorial-bg border-2 border-editorial-text group-hover:border-editorial-accent group-hover:bg-editorial-accent transition-colors rounded-full" />

              {/* Date tag floating left on desktop, stacked on mobile */}
              <div className="md:absolute md:-left-[200px] md:top-1.5 mb-2.5 md:mb-0">
                <span className="font-mono text-[10px] xs:text-xs font-bold tracking-wider sm:tracking-widest text-editorial-accent uppercase bg-editorial-card border border-editorial-border px-2.5 sm:px-3 py-1 inline-block shadow-sm">
                  {item.period}
                </span>
              </div>

              {/* Content Box */}
              <div className="p-4 xs:p-5 sm:p-6 md:p-8 border border-editorial-border bg-editorial-card/40 hover:bg-editorial-card transition-colors shadow-sm">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <item.icon className="w-4 h-4 text-editorial-accent shrink-0" />
                  <span className="text-[10px] xs:text-xs font-mono font-bold tracking-wider uppercase text-editorial-muted">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-xl xs:text-2xl md:text-3xl font-display font-bold uppercase text-editorial-text">
                  {item.title}
                </h3>
                <p className="text-[11px] xs:text-xs font-bold tracking-wider uppercase text-editorial-accent mt-0.5 sm:mt-1">
                  {item.organization}
                </p>

                <p className="text-xs xs:text-sm md:text-base text-editorial-muted mt-3 sm:mt-4 font-sans leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-editorial-border/60 flex flex-wrap gap-1.5 sm:gap-2">
                  {item.highlights.map((hl) => (
                    <span
                      key={hl}
                      className="text-[10px] xs:text-[11px] font-mono uppercase tracking-wider text-editorial-text bg-editorial-bg border border-editorial-border px-2 sm:px-2.5 py-1"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Showcase Block */}
        <div className="pt-6 sm:pt-8 border-t border-editorial-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 sm:mb-8 pb-3 border-b border-editorial-border">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-editorial-accent shrink-0" />
              <h3 className="text-[11px] xs:text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent">
                OFFICIAL CERTIFICATIONS & ACADEMIC RECOGNITIONS
              </h3>
            </div>
            <span className="text-[11px] xs:text-xs font-mono text-editorial-muted">05 CREDENTIALS</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
            {certifications.map((cert, cIdx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: cIdx * 0.05 }}
                whileHover={{ y: -3, borderColor: "#121212" }}
                className="p-4 sm:p-5 border border-editorial-border bg-editorial-card/50 hover:bg-editorial-card transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] xs:text-[10px] font-mono font-bold tracking-widest uppercase text-editorial-accent block mb-1.5 sm:mb-2">
                    {cert.category}
                  </span>
                  <h4 className="text-sm xs:text-base font-display font-bold uppercase text-editorial-text group-hover:text-editorial-accent transition-colors leading-snug mb-1.5 sm:mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-[11px] xs:text-xs text-editorial-muted font-mono">
                    {cert.issuer}
                  </p>
                </div>
                <div className="mt-3.5 sm:mt-4 pt-2.5 sm:pt-3 border-t border-editorial-border/60 flex items-center gap-2 text-[11px] xs:text-xs font-mono text-editorial-accent">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>VERIFIED CREDENTIAL</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
