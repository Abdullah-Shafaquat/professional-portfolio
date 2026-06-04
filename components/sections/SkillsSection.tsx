"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { Badge, Code2, Bot, Database, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function SkillsSection() {
  const getIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Code2 className="text-foreground" size={24} />;
      case "backend":
        return <Database className="text-foreground" size={24} />;
      case "ai":
        return <Bot className="text-foreground" size={24} />;
      case "programming":
        return <Code2 className="text-foreground" size={24} />;
      case "tools":
        return <Zap className="text-foreground" size={24} />;
      default:
        return <Code2 size={24} />;
    }
  };

  const getLevelWidth = (level: string) => {
    if (level === "Advanced") return "100%";
    if (level === "Intermediate") return "70%";
    return "40%";
  };

  const getLevelDots = (level: string) => {
    if (level === "Advanced") return 3;
    if (level === "Intermediate") return 2;
    return 1;
  };

  return (
    <section id="skills" className="section-padding bg-card/30 scroll-mt-28">
      <div className="section-container">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and expertise in web development, AI, and programming."
        />

        <div className="grid gap-12 lg:gap-16">
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                {getIcon(category)}
                <h3 className="text-xl sm:text-2xl font-bold capitalize">{category}</h3>
                <span className="px-3 py-1 rounded-full text-xs sm:text-sm bg-muted text-muted-foreground border border-border">
                  {skillList.length} skills
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {skillList.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="card-surface-hover p-5 sm:p-6"
                  >
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="text-2xl shrink-0">{skill.icon}</div>
                        <div className="min-w-0">
                          <h4 className="font-semibold text-base sm:text-lg truncate">
                            {skill.name}
                          </h4>
                          <span className="text-sm text-muted-foreground capitalize">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < getLevelDots(skill.level) ? "bg-foreground" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between text-xs sm:text-sm mb-2 text-muted-foreground">
                        <span>Proficiency</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: getLevelWidth(skill.level) }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-foreground"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <Badge className="text-xs text-muted-foreground" size={14} />
                      <span className="text-xs text-muted-foreground">
                        {skill.level === "Advanced"
                          ? "Expert level"
                          : skill.level === "Intermediate"
                            ? "Good experience"
                            : "Learning actively"}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 card-surface-hover p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">Technology Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "JavaScript",
              "Python",
              "FastAPI",
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "Git",
              "JWT",
              "Neon",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-muted rounded-lg p-3 sm:p-4 text-center border border-border hover:border-foreground/20 transition-colors cursor-default"
              >
                <div className="font-medium text-xs sm:text-sm">{tech}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
