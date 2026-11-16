"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

const projects: ProjectData[] = [
  {
    number: "01",
    id: "rag-codebase",
    title: "RAG CODEBASE",
    subtitle: "Advanced LLM & Multi-Hop Vector Retrieval Framework",
    category: "LLM & VECTOR RETRIEVAL",
    description: "An advanced Retrieval-Augmented Generation framework that indexes complex codebases and technical documentation for multi-hop semantic querying.",
    longDescription:
      "Engineered an enterprise-grade Retrieval-Augmented Generation (RAG) framework tailored for indexing large, complex code repositories and technical documentation. Utilizes semantic chunking, dense vector indexing with ChromaDB, and LangChain orchestration to execute multi-hop semantic queries, dependency graph traversal, and accurate citation-backed technical synthesis via OpenAI APIs and FastAPI endpoints.",
    technologies: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI"],
    features: [
      "Multi-hop semantic querying across hierarchical codebases & documentation",
      "Dense vector embeddings and indexing using ChromaDB",
      "Context reranking and citation-grounded technical synthesis",
      "High-throughput FastAPI microservice interface",
    ],
    githubUrl: "https://github.com/Vishnu-gittt",
    imageUrl: "/images/projects/rag-codebase.webp",
    imageBg: "bg-gradient-to-br from-indigo-100/80 via-stone-200 to-purple-200/50",
  },
  {
    number: "02",
    id: "vishift-ai",
    title: "VISHIFT AI",
    subtitle: "Personalized Intelligent Health & Fitness Application",
    category: "GENERATIVE AI & FITNESS",
    description: "A personalized intelligent health and fitness application leveraging generative AI models to curate dynamic workout routines and nutritional plans.",
    longDescription:
      "VISHIFT AI is an end-to-end intelligent fitness application engineered using deep learning models and generative AI workflows. Built with PyTorch, Python, React, and Node.js to evaluate individual biometric inputs, goals, and workout history, generating adaptive training schedules, nutritional recommendations, and real-time exercise telemetry.",
    technologies: ["Python", "PyTorch", "Generative AI", "React", "Node.js"],
    features: [
      "Dynamic workout routine generation tailored to user biometrics",
      "Intelligent nutritional planning & macro distribution algorithms",
      "Interactive modern dashboard with responsive telemetry charts",
      "Full-stack integration linking React frontend to PyTorch/Node.js pipelines",
    ],
    githubUrl: "https://github.com/Vishnu-gittt/VishFit-Ai",
    imageUrl: "/images/projects/vishift-ai.webp",
    imageBg: "bg-gradient-to-br from-emerald-100/80 via-stone-200 to-teal-200/50",
  },
  {
    number: "03",
    id: "ai-resume-screener",
    title: "AI RESUME SCREENER",
    subtitle: "Automated Candidate Assessment & Semantic Matching Pipeline",
    category: "NLP & PREDICTIVE ML",
    description: "An automated candidate assessment pipeline utilizing natural language processing and semantic similarity scoring to evaluate resumes against job requirements.",
    longDescription:
      "Architected an automated candidate screening platform utilizing Natural Language Processing (NLP) and vector similarity metrics. Parses unstructured resume PDFs, extracts key candidate competencies, and computes cosine similarity scores against job descriptions to provide automated applicant ranking and skill-gap reports.",
    technologies: ["NLP", "Semantic Search", "Cosine Similarity", "Resume Analysis", "Automated Screening", "Python"],
    features: [
      "Automated text extraction & NER for technical skills and experience",
      "Cosine similarity vector scoring matching candidates against job criteria",
      "Competency gap analysis & objective applicant ranking reports",
      "Streamlined candidate evaluation pipeline for recruitment workflows",
    ],
    githubUrl: "https://github.com/Vishnu-gittt",
    imageUrl: "/images/projects/ai-resume-screener.webp",
    imageBg: "bg-gradient-to-br from-rose-100/80 via-stone-200 to-amber-200/50",
  },
  {
    number: "04",
    id: "department-datascience-website",
    title: "DEPARTMENT OF DATA SCIENCE WEBSITE",
    subtitle: "Official Academic Department Platform & Resource Hub (DG Vaishnav College)",
    category: "WEB ARCHITECTURE & UI/UX",
    description: "Designed and developed the official website for the Department of Data Science at DG Vaishnav College, providing dynamic curriculum roadmaps, events, and academic resources.",
    longDescription:
      "Designed and developed the complete academic web platform for the Department of Data Science at DG Vaishnav College. Built with modern web architecture to provide seamless access to course curriculums, faculty directories, departmental announcements, student initiatives, and event registries in an editorial, high-performance UI.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    features: [
      "Interactive data science curriculum roadmaps & syllabus repository",
      "Department faculty profile directory & student project showcase",
      "Event announcement board & conference registration workflows",
      "High-performance responsive design with high-contrast accessibility",
    ],
    imageUrl: "/images/projects/department-datascience.webp",
    imageBg: "bg-gradient-to-br from-blue-100/80 via-stone-200 to-cyan-200/50",
  },
  {
    number: "05",
    id: "powerbi-business-dashboards",
    title: "POWER BI DASHBOARDS",
    subtitle: "Business Intelligence & Data Visualization Suite",
    category: "DATA ANALYTICS & POWER BI",
    description: "Interactive business intelligence dashboards and KPI visualizations built in Power BI to analyze operational data and generate business insights.",
    longDescription:
      "Developed comprehensive enterprise data analysis dashboards using Power BI, DAX modeling, and SQL data cleaning. Transformed complex datasets into executive decision-making visual reports with DAX measures, trend forecasting, and interactive KPI tracking.",
    technologies: ["Power BI", "SQL", "Excel", "DAX", "Data Analysis", "KPI Dashboards"],
    features: [
      "Interactive KPI metric visualizations & executive summaries",
      "DAX calculated measures for trend analysis & performance tracking",
      "Data cleaning and SQL querying pipelines",
      "Custom drill-through reporting & business intelligence insights",
    ],
    imageUrl: "/images/projects/powerbi-dashboards.webp",
    imageBg: "bg-gradient-to-br from-amber-100/80 via-stone-200 to-orange-200/60",
  },
  {
    number: "06",
    id: "fragrance-hub-ecommerce",
    title: "FRAGRANCE HUB E-COMMERCE",
    subtitle: "Modern Responsive Online Store Platform",
    category: "WEB DEVELOPMENT & UI/UX",
    description: "Modern, responsive perfume e-commerce web platform designed to deliver a luxurious online shopping experience with intuitive catalog navigation.",
    longDescription:
      "Developed Fragrance Hub, a modern, responsive perfume e-commerce platform using HTML, CSS, and JavaScript. Focused on luxury branding, intuitive product discovery, fast cross-device interactions, and seamless catalog browsing.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Canva", "UI/UX"],
    features: [
      "Responsive cross-device e-commerce layout design",
      "Interactive product catalog & filtering interface",
      "Clean UI component structure with smooth interactions",
      "User-friendly navigation & checkout layout preview",
    ],
    githubUrl: "https://github.com/Vishnu-gittt/Perfume-Project",
    imageUrl: "/images/projects/fragrance-hub.webp",
    imageBg: "bg-gradient-to-br from-slate-200 via-stone-300 to-zinc-300/80",
  },
];

export default function SelectedProjects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-editorial-bg border-b border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-editorial-border pb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-editorial-accent block mb-2">
              02 — WORKS
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-editorial-text">
              SELECTED<br />PROJECTS
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-editorial-muted uppercase mt-4 md:mt-0 max-w-xs text-left md:text-right">
            AI SYSTEMS, DATA SCIENCE & WEB ARCHITECTURE
          </p>
        </div>

        {/* Project List / Cards Grid */}
        <div className="space-y-16">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-editorial-border p-6 md:p-8 bg-editorial-bg hover:border-editorial-text transition-all duration-300 group"
            >
              {/* Visual Preview Box */}
              <div
                onClick={() => setSelectedProject(proj)}
                className={`lg:col-span-6 h-[260px] sm:h-[320px] md:h-[360px] ${proj.imageBg} border border-editorial-border relative overflow-hidden flex flex-col justify-between p-6 cursor-pointer group-hover:shadow-md transition-all`}
              >
                {/* Project Mockup Visual Background */}
                {proj.imageUrl && (
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={proj.imageUrl}
                      alt={`${proj.title} visual preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top filter brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 pointer-events-none" />
                  </div>
                )}

                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase bg-editorial-text text-editorial-bg px-3 py-1 shadow-sm">
                    {proj.category}
                  </span>
                  <span className="font-display font-bold text-4xl text-white/80 drop-shadow-md group-hover:text-editorial-accent transition-colors">
                    {proj.number}
                  </span>
                </div>

                <div className="z-10 bg-editorial-bg/90 backdrop-blur-md p-5 border border-editorial-border/60 transform group-hover:-translate-y-1 transition-transform shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase text-editorial-text">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-sans text-editorial-muted mt-1 font-medium">
                    {proj.subtitle}
                  </p>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-sm font-bold text-editorial-accent">
                      {proj.number}
                    </span>
                    <span className="text-xs font-mono tracking-wider uppercase text-editorial-muted">
                      / {proj.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase text-editorial-text group-hover:text-editorial-accent transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-sm md:text-base text-editorial-muted mt-3 leading-relaxed font-sans">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Tags & CTA */}
                <div className="space-y-6 pt-4 border-t border-editorial-border/60">
                  <div className="flex flex-wrap gap-2">
                    {proj.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-1 bg-editorial-card border border-editorial-border text-editorial-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-editorial-text hover:text-editorial-accent transition-colors group/btn"
                  >
                    <span>VIEW PROJECT DETAILS</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
