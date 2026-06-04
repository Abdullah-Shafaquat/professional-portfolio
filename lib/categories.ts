export type ProjectCategory = "ai" | "nextjs" | "typescript" | "python";

export const PROJECT_CATEGORIES: Record<
  ProjectCategory,
  {
    label: string;
    shortLabel: string;
    badgeClass: string;
    tabClass: string;
    gradient: string;
    glow: string;
    accent: string;
  }
> = {
  ai: {
    label: "AI & Full Stack",
    shortLabel: "AI",
    badgeClass:
      "bg-violet-500/20 text-violet-300 border-violet-500/40 ring-1 ring-violet-500/20",
    tabClass: "data-[active=true]:bg-violet-500 data-[active=true]:border-violet-500",
    gradient: "from-violet-600/40 via-fuchsia-600/20 to-violet-900/60",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.25)]",
    accent: "#8B5CF6",
  },
  nextjs: {
    label: "Next.js",
    shortLabel: "Next.js",
    badgeClass:
      "bg-white/15 text-white border-white/30 ring-1 ring-white/20",
    tabClass: "data-[active=true]:bg-white data-[active=true]:text-black data-[active=true]:border-white",
    gradient: "from-zinc-200/25 via-zinc-400/15 to-zinc-900/70",
    glow: "shadow-[0_0_40px_rgba(255,255,255,0.12)]",
    accent: "#FFFFFF",
  },
  typescript: {
    label: "TypeScript",
    shortLabel: "TS",
    badgeClass:
      "bg-blue-500/20 text-blue-300 border-blue-500/40 ring-1 ring-blue-500/20",
    tabClass: "data-[active=true]:bg-blue-500 data-[active=true]:border-blue-500",
    gradient: "from-blue-600/35 via-blue-500/15 to-slate-900/70",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.2)]",
    accent: "#3178C6",
  },
  python: {
    label: "Python",
    shortLabel: "Python",
    badgeClass:
      "bg-amber-500/20 text-amber-200 border-amber-500/40 ring-1 ring-amber-500/20",
    tabClass: "data-[active=true]:bg-amber-500 data-[active=true]:border-amber-500 data-[active=true]:text-black",
    gradient: "from-amber-500/30 via-blue-600/20 to-slate-900/70",
    glow: "shadow-[0_0_40px_rgba(245,158,11,0.18)]",
    accent: "#3776AB",
  },
};

export function normalizeCategory(category: string): ProjectCategory {
  if (category === "ai" || category === "nextjs" || category === "typescript" || category === "python") {
    return category;
  }
  return "python";
}

export function getCategoryConfig(category: string) {
  return PROJECT_CATEGORIES[normalizeCategory(category)];
}
