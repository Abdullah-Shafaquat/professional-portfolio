import { projects } from "@/data/projects";
import { normalizeCategory, type ProjectCategory } from "@/lib/categories";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
};

const FEATURED_IDS = new Set([projects.featured.id, "ai-todo-ai"]);

export function getAllProjects(): ProjectItem[] {
  return projects.getAll().map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    category: normalizeCategory(String(p.category)),
    technologies: p.technologies ?? [],
    liveUrl: p.liveUrl,
    githubUrl: "githubUrl" in p ? p.githubUrl : undefined,
    image: "image" in p ? p.image : undefined,
    featured: "featured" in p && Boolean(p.featured),
  }));
}

export function filterProjects(
  list: ProjectItem[],
  category: ProjectCategory | "all",
  search: string
): ProjectItem[] {
  const q = search.trim().toLowerCase();

  return list.filter((project) => {
    if (category === "all" && FEATURED_IDS.has(project.id)) {
      return false;
    }

    if (category !== "all" && project.category !== category) {
      return false;
    }

    if (!q) return true;

    return (
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q))
    );
  });
}

export function getCategoryCounts(list: ProjectItem[]): Record<string, number> {
  return {
    all: list.filter((p) => !FEATURED_IDS.has(p.id)).length,
    ai: list.filter((p) => p.category === "ai").length,
    nextjs: list.filter((p) => p.category === "nextjs").length,
    typescript: list.filter((p) => p.category === "typescript").length,
    python: list.filter((p) => p.category === "python").length,
  };
}
