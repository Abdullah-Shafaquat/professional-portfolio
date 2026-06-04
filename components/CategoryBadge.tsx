import { getCategoryConfig, normalizeCategory } from "@/lib/categories";

interface CategoryBadgeProps {
  category: string;
  size?: "sm" | "md";
  className?: string;
}

export default function CategoryBadge({
  category,
  size = "sm",
  className = "",
}: CategoryBadgeProps) {
  const config = getCategoryConfig(category);
  const normalized = normalizeCategory(category);

  return (
    <span
      data-category={normalized}
      className={`inline-flex items-center font-semibold uppercase tracking-wider border rounded-full ${
        size === "sm" ? "px-2.5 py-1 text-[10px] sm:text-xs" : "px-3 py-1.5 text-xs sm:text-sm"
      } ${config.badgeClass} ${className}`}
    >
      {config.label}
    </span>
  );
}
