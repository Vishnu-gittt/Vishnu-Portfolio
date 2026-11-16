"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedProjects from "@/components/SelectedProjects";
import WhatIBuild from "@/components/WhatIBuild";
import Skills from "@/components/Skills";
import CareerTimeline from "@/components/CareerTimeline";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-editorial-bg text-editorial-text font-sans relative selection:bg-editorial-dark selection:text-editorial-bg w-full max-w-full overflow-x-hidden">
      {/* Top Fixed Header Navigation */}
      <Header onOpenResume={() => setResumeModalOpen(true)} />

      {/* Hero Section with Oversized Typography & Cutout Portrait */}
      <Hero onOpenResume={() => setResumeModalOpen(true)} />

      {/* About Section */}
      <About />

      {/* Selected Projects Showcase */}
      <SelectedProjects />

      {/* What I Build — Dark High-Contrast Section */}
      <WhatIBuild />

      {/* Skills & Technical Stack */}
      <Skills />

      {/* Career & Education Timeline */}
      <CareerTimeline />

      {/* Resume CTA Section */}
      <ResumeSection onOpenResume={() => setResumeModalOpen(true)} />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Global Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
