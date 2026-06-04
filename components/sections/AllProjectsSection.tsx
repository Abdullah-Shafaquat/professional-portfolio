"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { PROJECT_CATEGORIES, type ProjectCategory } from "@/lib/categories";
import {
  filterProjects,
  getAllProjects,
  getCategoryCounts,
} from "@/lib/projects-utils";

const FILTER_TABS: { id: "all" | ProjectCategory; name: string }[] = [
  { id: "all", name: "All" },
  { id: "ai", name: "AI & Full Stack" },
  { id: "nextjs", name: "Next.js" },
  { id: "typescript", name: "TypeScript" },
  { id: "python", name: "Python" },
];

const INITIAL_VISIBLE = 6;

const ACTIVE_TAB_STYLES: Record<string, string> = {
  all: "bg-primary text-primary-foreground border-primary",
  ai: "bg-violet-500 text-white border-violet-500",
  nextjs: "bg-white text-black border-white",
  typescript: "bg-blue-500 text-white border-blue-500",
  python: "bg-amber-500 text-black border-amber-500",
};

export default function AllProjectsSection() {
  const allProjects = useMemo(() => getAllProjects(), []);
  const counts = useMemo(() => getCategoryCounts(allProjects), [allProjects]);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | ProjectCategory>("all");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredProjects = useMemo(
    () => filterProjects(allProjects, activeTab, searchQuery),
    [allProjects, activeTab, searchQuery]
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  function selectTab(tabId: "all" | ProjectCategory) {
    setActiveTab(tabId);
    setVisibleCount(INITIAL_VISIBLE);
  }

  return (
    <section id="all-projects" className="section-padding bg-card/30 scroll-mt-28">
      <div className="section-container">
        <SectionHeading
          title="All Projects"
          subtitle="Browse by category — color badges show AI, Next.js, TypeScript, or Python at a glance."
        />

        <div className="mb-8 sm:mb-10 space-y-5">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10"
              size={18}
            />
            <input
              type="search"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(INITIAL_VISIBLE);
              }}
              className="relative z-0 w-full pl-11 pr-4 py-3.5 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-foreground/15 text-sm sm:text-base"
            />
          </div>

          <div
            className="relative z-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="projects-grid"
                  onClick={() => selectTab(tab.id)}
                  className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? ACTIVE_TAB_STYLES[tab.id]
                      : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted/50"
                  }`}
                >
                  {tab.name}
                  <span className="ml-1.5 opacity-80">({counts[tab.id]})</span>
                </button>
              );
            })}
          </div>

          <p className="text-sm text-muted-foreground">
            Showing:{" "}
            <span className="text-foreground font-medium">
              {activeTab === "all"
                ? "All Projects"
                : PROJECT_CATEGORIES[activeTab].label}
            </span>
            {" · "}
            {filteredProjects.length} result{filteredProjects.length !== 1 ? "s" : ""}
          </p>

          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            {(Object.keys(PROJECT_CATEGORIES) as ProjectCategory[]).map((cat) => (
              <span key={cat} className="inline-flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    cat === "ai"
                      ? "bg-violet-500"
                      : cat === "nextjs"
                        ? "bg-white"
                        : cat === "typescript"
                          ? "bg-blue-500"
                          : "bg-amber-500"
                  }`}
                />
                {PROJECT_CATEGORIES[cat].label}
              </span>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">
            No projects found in this category.
          </p>
        ) : (
          <div
            id="projects-grid"
            role="tabpanel"
            key={`grid-${activeTab}-${searchQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + INITIAL_VISIBLE)}
              className="btn-secondary px-8"
            >
              View More Projects
            </button>
          </div>
        )}

        {/* {filteredProjects.length > 0 && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            Displaying {visibleProjects.length} of {filteredProjects.length} projects
          </p>
        )} */}
      </div>
    </section>
  );
}
