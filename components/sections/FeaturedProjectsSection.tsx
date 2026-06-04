"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";
import ProjectImage from "@/components/ProjectImage";
import CategoryBadge from "@/components/CategoryBadge";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp, viewportOnce } from "@/lib/animations";
import { getCategoryConfig } from "@/lib/categories";

const featured = projects.featured;

export default function FeaturedProjectsSection() {
  const config = getCategoryConfig(featured.category);

  return (
    <section id="featured-projects" className="section-padding scroll-mt-28">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Flagship work combining AI, modern full-stack architecture, and production-ready UX."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={`overflow-hidden rounded-2xl border border-border bg-card ${config.glow}`}
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[240px] lg:min-h-[420px]">
              <ProjectImage
                title={featured.title}
                category={featured.category}
                image={featured.image}
                featured
                priority
                className="h-full min-h-[240px] lg:min-h-[420px] rounded-none"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-xs font-medium">
                  <Sparkles size={14} className="text-violet-400" />
                  Main Project
                </span>
                <CategoryBadge category={featured.category} size="md" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
                {featured.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base sm:text-lg">
                {featured.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {featured.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted rounded-full text-xs sm:text-sm border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </motion.a>
                {featured.githubUrl && (
                  <motion.a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaGithub size={16} />
                    GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
