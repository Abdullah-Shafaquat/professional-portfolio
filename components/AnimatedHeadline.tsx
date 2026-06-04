"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  "AI Developer",
  "Full Stack Engineer",
  "Next.js Specialist",
  "TypeScript Developer",
];

export default function AnimatedHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="inline-flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2 min-h-[1.4em]">
      <span className="text-muted-foreground">I&apos;m a</span>
      <span className="relative inline-block min-w-[200px] sm:min-w-[260px] text-left">
        <AnimatePresence mode="wait">
          <motion.span
            key={ROLES[index]}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="gradient-text font-semibold absolute left-0 top-0 whitespace-nowrap"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
        <span className="invisible font-semibold whitespace-nowrap">{ROLES[0]}</span>
      </span>
    </span>
  );
}
