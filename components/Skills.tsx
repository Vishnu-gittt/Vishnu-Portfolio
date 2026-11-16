"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "PROGRAMMING & LANGUAGES",
    skills: [
      { name: "PYTHON", level: "Data Science & Automation" },
      { name: "SQL", level: "Relational Queries & Schemas" },
      { name: "R", level: "Statistical Computing" },
      { name: "NEXT.JS", level: "React Framework & Full-Stack" },
    ],
  },
  {
    category: "DATA VISUALIZATION & BI",
    skills: [
      { name: "POWER BI", level: "DAX & KPI Dashboards" },
      { name: "EXCEL", level: "Data Analysis & Spreadsheets" },
      { name: "MYSQL", level: "Database Management" },
      { name: "DATA ANALYSIS", level: "Data Cleaning & Reporting" },
    ],
  },
  {
    category: "AI & WORKFLOW AUTOMATION",
    skills: [
      { name: "RAG", level: "Retrieval-Augmented Generation" },
      { name: "MCP", level: "Model Context Protocol & Tools" },
      { name: "PROMPT ENGINEERING", level: "LLM Systems & Pipelines" },
      { name: "WORKFLOW AUTOMATION", level: "Process Optimization & Agents" },
    ],
  },
  {
    category: "WEB DEVELOPMENT & TOOLS",
    skills: [
      { name: "HTML5 & CSS3", level: "Responsive Web Layouts" },
      { name: "REACT", level: "Interactive Frontend Applications" },
      { name: "GITHUB", level: "Version Control & Repositories" },
      { name: "VS CODE / CANVA", level: "Development & Design Tools" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-editorial-bg border-b border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-editorial-border pb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-editorial-accent block mb-2">
              04 — COMPETENCIES
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-editorial-text">
              SKILLS & STACK
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-editorial-muted uppercase mt-4 md:mt-0">
            TECHNICAL TOOLKIT FROM OFFICIAL RESUME
          </p>
        </div>

        {/* Editorial Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 border-b border-editorial-border pb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent" />
                <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-muted">
                  {cat.category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 border border-editorial-border bg-editorial-card/50 hover:bg-editorial-text hover:text-editorial-bg transition-all duration-300 group"
                  >
                    <span className="block text-xl md:text-2xl font-display font-bold tracking-tight uppercase group-hover:text-editorial-bg transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-editorial-muted group-hover:text-editorial-bg/70 uppercase tracking-wider block mt-1">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
