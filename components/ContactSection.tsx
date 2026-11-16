"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-editorial-bg border-b border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-editorial-border pb-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-editorial-accent block mb-2">
              07 — REACH OUT
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-editorial-text">
              LET'S CONNECT.
            </h2>
          </div>
          <p className="text-xs font-mono tracking-widest text-editorial-muted uppercase mt-4 md:mt-0">
            OPEN FOR OPPORTUNITIES, DATA ANALYTICS & AI AUTOMATION
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Direct Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-xl md:text-2xl font-display font-medium text-editorial-text leading-relaxed">
              Have a Data Science project, Power BI dashboard requirement, or AI automation opportunity? Reach out directly.
            </p>

            <div className="space-y-4 pt-2">
              {/* Email */}
              <a
                href="mailto:vishnuvarthan6074@gmail.com"
                className="flex items-center gap-4 p-4 border border-editorial-border bg-editorial-card/50 hover:border-editorial-text transition-colors group"
              >
                <div className="w-10 h-10 bg-editorial-text text-editorial-bg flex items-center justify-center group-hover:bg-editorial-accent transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-editorial-muted uppercase tracking-wider block">
                    DIRECT EMAIL
                  </span>
                  <span className="text-sm font-bold text-editorial-text group-hover:text-editorial-accent transition-colors truncate block">
                    vishnuvarthan6074@gmail.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 border border-editorial-border bg-editorial-card/50">
                <div className="w-10 h-10 bg-editorial-text text-editorial-bg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-editorial-muted uppercase tracking-wider block">
                    LOCATION
                  </span>
                  <span className="text-sm font-bold text-editorial-text block">
                    Chennai, Tamil Nadu
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/vishnu-varthan-n-310840309"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-editorial-border bg-editorial-card/50 hover:border-editorial-text transition-colors group"
              >
                <div className="w-10 h-10 bg-editorial-text text-editorial-bg flex items-center justify-center group-hover:bg-editorial-accent transition-colors shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-editorial-muted uppercase tracking-wider block">
                    LINKEDIN PROFILE
                  </span>
                  <span className="text-sm font-bold text-editorial-text group-hover:text-editorial-accent transition-colors truncate block">
                    linkedin.com/in/vishnu-varthan-n-310840309
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Vishnu-gittt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-editorial-border bg-editorial-card/50 hover:border-editorial-text transition-colors group"
              >
                <div className="w-10 h-10 bg-editorial-text text-editorial-bg flex items-center justify-center group-hover:bg-editorial-accent transition-colors shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-editorial-muted uppercase tracking-wider block">
                    GITHUB PROFILE
                  </span>
                  <span className="text-sm font-bold text-editorial-text group-hover:text-editorial-accent transition-colors truncate block">
                    github.com/Vishnu-gittt
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 p-8 md:p-10 border border-editorial-border bg-editorial-card/40 relative"
          >
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-editorial-accent mb-6">
              SEND A DIRECT MESSAGE
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border border-editorial-accent bg-editorial-bg text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-editorial-accent mx-auto" />
                <h4 className="text-2xl font-display font-bold uppercase text-editorial-text">
                  MESSAGE SENT
                </h4>
                <p className="text-sm text-editorial-muted">
                  Thank you for connecting! Vishnu will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-editorial-text block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 bg-editorial-bg border border-editorial-border text-editorial-text placeholder:text-editorial-muted/60 focus:outline-none focus:border-editorial-text text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-editorial-text block">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 bg-editorial-bg border border-editorial-border text-editorial-text placeholder:text-editorial-muted/60 focus:outline-none focus:border-editorial-text text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-editorial-text block">
                    PROJECT INQUIRY / MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, Power BI requirement, AI automation or message..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 bg-editorial-bg border border-editorial-border text-editorial-text placeholder:text-editorial-muted/60 focus:outline-none focus:border-editorial-text text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-editorial-text text-editorial-bg hover:bg-editorial-accent py-4 text-xs font-bold tracking-widest uppercase transition-colors group shadow-md"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
