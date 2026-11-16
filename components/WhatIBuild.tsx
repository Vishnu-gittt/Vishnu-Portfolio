"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles, Database, Workflow } from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "MACHINE LEARNING",
    subtitle: "Predictive Modeling & Statistical Analytics",
    icon: Cpu,
    desc: "Designing end-to-end ML pipelines, feature transformation, classification, regression, and model evaluation using Scikit-Learn, PyTorch, and XGBoost.",
    tags: ["Supervised Learning", "Deep Neural Nets", "Classification & Clustering", "Model Evaluation"],
  },
  {
    number: "02",
    title: "GENERATIVE AI",
    subtitle: "Multimodal Generation & Fine-Tuning",
    icon: Sparkles,
    desc: "Leveraging state-of-the-art multimodal generative architectures for text, image, and dynamic content synthesis with custom prompt engineering.",
    tags: ["Multimodal Prompting", "Fine-Tuning", "Diffusion Models", "Structured Output"],
  },
  {
    number: "03",
    title: "LLM + RAG SYSTEMS",
    subtitle: "Enterprise Vector Retrieval & Knowledge Engines",
    icon: Database,
    desc: "Engineering high-precision Retrieval-Augmented Generation architectures with dense/sparse embeddings, vector stores, and cross-encoder reranking.",
    tags: ["ChromaDB & FAISS", "Semantic Search", "LangChain & LlamaIndex", "Chunking Strategies"],
  },
  {
    number: "04",
    title: "AI AUTOMATION / AGENTIC AI",
    subtitle: "Autonomous Agent Workflows & Tool Use",
    icon: Workflow,
    desc: "Orchestrating stateful autonomous agents, multi-agent collaboration, structured function calling, and automated workflow integrations using LangGraph.",
    tags: ["LangGraph Agents", "Tool Calling APIs", "State Management", "Autonomous Pipelines"],
  },
];

export default function WhatIBuild() {
  return (
    <section className="py-24 px-6 md:px-12 bg-editorial-dark text-editorial-bg border-b border-neutral-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-800 pb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-editorial-accent block mb-2">
              03 — TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-editorial-bg">
              WHAT I BUILD
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase mt-4 md:mt-0">
            SPECIALIZED CORE DISCIPLINES IN AI & DATA SCIENCE
          </p>
        </div>

        {/* 4 Large Editorial Grid Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 md:p-10 border border-neutral-800 bg-editorial-darkCard/80 hover:border-editorial-accent transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl md:text-4xl font-display font-extrabold text-neutral-600 group-hover:text-editorial-accent transition-colors">
                    {item.number}
                  </span>
                  <item.icon className="w-6 h-6 text-neutral-400 group-hover:text-editorial-accent transition-colors" />
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tight text-white group-hover:text-editorial-accent transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-mono tracking-wider text-editorial-accent uppercase mb-4">
                  {item.subtitle}
                </p>

                <p className="text-sm md:text-base text-neutral-300 leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-8 mt-8 border-t border-neutral-800/80 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-neutral-400 border border-neutral-700/60 px-2.5 py-1 uppercase tracking-wider bg-neutral-900/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
