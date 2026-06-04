"use client";

import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectImage from "@/components/ProjectImage";
import CategoryBadge from "@/components/CategoryBadge";
import { getCategoryConfig } from "@/lib/categories";
import type { ProjectItem } from "@/lib/projects-utils";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const config = getCategoryConfig(project.category);
  const hasGithub = Boolean(project.githubUrl);
  const hasliveUrl = Boolean(project.liveUrl);

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 ${config.glow}`}
    >
      <div className="relative">
        <ProjectImage
          title={project.title}
          category={project.category}
          image={project.image}
          featured={project.featured}
        />
        <div className="absolute top-3 left-3 z-10">
          <CategoryBadge category={project.category} />
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-2 tracking-tight">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2 mt-auto">
  {hasliveUrl && hasGithub ? (
    // Both buttons exist: Live Demo takes available space, GitHub fixed width
    <>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium inline-flex items-center justify-center gap-2"
      >
        <ExternalLink size={15} />
        Live Demo
      </a>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-2.5 border border-border rounded-lg hover:bg-muted transition-colors inline-flex items-center justify-center gap-2 text-sm font-medium"
        aria-label={`${project.title} on GitHub`}
      >
        <FaGithub size={16} />
        <span className="hidden sm:inline">GitHub</span>
      </a>
    </>
  ) : hasliveUrl ? (
    // Only Live Demo: takes full width
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium inline-flex items-center justify-center gap-2"
    >
      <ExternalLink size={15} />
      Live Demo
    </a>
  ) : hasGithub ? (
    // Only GitHub: takes full width
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full px-3 py-2.5 border border-border rounded-lg hover:bg-muted transition-colors inline-flex items-center justify-center gap-2 text-sm font-medium"
      aria-label={`${project.title} on GitHub`}
    >
      <FaGithub size={16} />
      <span className="hidden sm:inline">GitHub</span>
    </a>
  ) : null}
</div>
      </div>
    </article>
  );
}
