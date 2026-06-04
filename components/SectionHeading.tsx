"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  id,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 sm:mb-16 scroll-mt-28 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {/* <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
        Section
      </p> */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      <div
        className={`w-16 h-px bg-foreground/30 ${align === "center" ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`text-muted-foreground mt-5 max-w-2xl text-base sm:text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
