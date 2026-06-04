"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Bot, Zap } from "lucide-react";
import { personalInfo } from "@/data/personal";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import AllProjectsSection from "@/components/sections/AllProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={scrollToSection} />

      <section className="section-padding pt-0 border-y border-border bg-card/20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: Code, value: personalInfo.projectsCompleted, label: "Projects" },
              { icon: Zap, value: personalInfo.yearsOfExperience, label: "Years Experience" },
              { icon: Bot, value: personalInfo.happyClients, label: "Happy Clients" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={viewportOnce}
                whileHover={{ y: -4 }}
                className="text-center p-6 sm:p-8 card-surface-hover"
              >
                <stat.icon className="text-foreground mx-auto mb-4" size={28} />
                <div className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <AllProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
