"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Search, ExternalLink, Bot, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "../SectionHeading";

const CATEGORY_LABELS: Record<string, string> = {
  ai: "AI & Full Stack",
  nextjs: "Next.js",
  typescript: "TypeScript",
  python: "Python",
  github: "GitHub",
};

const FILTER_CATEGORIES = [
  { id: "all", name: "All" },
  { id: "ai", name: "AI & Full Stack" },
  { id: "nextjs", name: "Next.js" },
  { id: "typescript", name: "TypeScript" },
  { id: "python", name: "Python" },
] as const;

const INITIAL_VISIBLE = 6;
const featuredProject = projects.featured;

function sortProjects<T extends { id: string; category: string }>(list: T[]): T[] {
  return [...list].sort((a, b) => {
    if (a.id === featuredProject.id) return -1;
    if (b.id === featuredProject.id) return 1;
    const order = ["ai", "nextjs", "typescript", "python", "github"];
    return order.indexOf(a.category) - order.indexOf(b.category);
  });
}

export default function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const allProjects = useMemo(() => sortProjects(projects.getAll()), []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allProjects.length };
    FILTER_CATEGORIES.forEach(({ id }) => {
      if (id !== "all") {
        counts[id] = projects.getByCategory(id as "ai" | "nextjs" | "typescript" | "python").length;
      }
    });
    return counts;
  }, [allProjects.length]);

  const filteredProjects = useMemo(() => {
    const filtered = allProjects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
    return sortProjects(filtered);
  }, [allProjects, searchQuery, selectedCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(INITIAL_VISIBLE);
  };

  return (
    <section id="projects" className="section-padding bg-card/30 scroll-mt-28">
      <div className="section-container">
        <SectionHeading
          title="Projects"
          subtitle="Explore my latest work showcasing AI applications, full-stack development, and innovative solutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted text-foreground rounded-full border border-border text-sm font-medium">
              <Sparkles size={14} />
              Featured Project
            </div>
          </div>

          <div className="card-surface-hover overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col justify-center order-2 lg:order-1">
                <span className="inline-flex w-fit px-3 py-1 mb-4 bg-muted text-foreground rounded-full text-xs font-medium uppercase tracking-wider border border-border">
                  {CATEGORY_LABELS[featuredProject.category]}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-xs sm:text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] max-h-72 lg:max-h-none bg-muted rounded-xl border border-border flex items-center justify-center">
                  <Bot size={64} className="text-foreground/20 absolute" />
                  <div className="relative z-10 text-center px-4">
                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                      AI Assistant
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Powered by Next.js & FastAPI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-10 space-y-5"
        >
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              size={18}
            />
            <input
              type="text"
              placeholder="Search projects by name, tech, or description..."
              className="w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/30 text-sm sm:text-base transition-all"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-hide">
            {FILTER_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryChange(category.id)}
                className={`shrink-0 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
                }`}
              >
                {category.name}
                <span className="ml-1.5 opacity-70">({categoryCounts[category.id]})</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
              viewport={{ once: true }}
              className="group card-surface-hover overflow-hidden flex flex-col"
            >
              <div className="relative h-40 sm:h-44 bg-muted border-b border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.category === "ai" ? (
                    <Bot
                      size={40}
                      className="text-foreground/20 group-hover:text-foreground/40 transition-colors"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-foreground/15 group-hover:text-foreground/30 transition-colors">
                      {project.title.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-background/90 text-foreground rounded-md text-xs font-medium border border-border backdrop-blur-sm">
                  {CATEGORY_LABELS[project.category] ?? project.category}
                </span>
                {project.id === featuredProject.id && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-foreground text-background rounded-md text-xs font-medium">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-foreground transition-colors tracking-tight">
                  {project.title}
                </h3>
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
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 text-center text-sm font-medium inline-flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2.5 border border-border rounded-lg hover:bg-muted transition-all duration-300 inline-flex items-center justify-center hover:border-foreground/20"
                    aria-label="GitHub repository"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE)}
              className="btn-secondary px-8"
            >
              View More Projects
            </button>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects found matching your criteria.
          </p>
        )}

        {/* {filteredProjects.length > 0 && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            Showing {visibleProjects.length} of {filteredProjects.length} projects
          </p>
        )} */}
      </div>
    </section>
  );
}
