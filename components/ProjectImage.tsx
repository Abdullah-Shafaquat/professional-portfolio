"use client";

import { useState } from "react";
import Image from "next/image";
import { Bot, Code2, FileCode, Layers } from "lucide-react";
import { getCategoryConfig, normalizeCategory, type ProjectCategory } from "@/lib/categories";

const CATEGORY_ICONS: Record<ProjectCategory, typeof Bot> = {
  ai: Bot,
  nextjs: Layers,
  typescript: FileCode,
  python: Code2,
};

interface ProjectImageProps {
  title: string;
  category: string;
  image?: string;
  featured?: boolean;
  className?: string;
  priority?: boolean;
}

export default function ProjectImage({
  title,
  category,
  image,
  featured = false,
  className = "",
  priority = false,
}: ProjectImageProps) {
  const [imgError, setImgError] = useState(false);
  const normalized = normalizeCategory(category);
  const config = getCategoryConfig(category);
  const Icon = CATEGORY_ICONS[normalized];
  const showImage = image && !imgError;

  return (
    <div
      className={`relative overflow-hidden bg-muted ${featured ? "min-h-[220px] sm:min-h-[280px] lg:min-h-full" : "h-44 sm:h-48"} ${className}`}
    >
      {showImage ? (
        <Image
          src={image}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          priority={priority}
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${config.gradient} flex items-center justify-center`}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, ${config.accent}40 0%, transparent 50%)`,
            }}
          />
          <Icon
            size={featured ? 72 : 48}
            className="text-foreground/15 relative z-10"
            strokeWidth={1.25}
          />
          <span className="absolute bottom-4 left-4 right-4 text-center text-lg sm:text-xl font-bold text-foreground/25 truncate z-10">
            {title}
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
