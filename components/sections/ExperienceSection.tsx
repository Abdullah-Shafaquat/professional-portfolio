"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { personalInfo } from "@/data/personal";
import { Calendar, MapPin, Building, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding scroll-mt-28">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="Professional journey and work experience in web development and AI technologies."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-surface-hover p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-muted rounded-full flex items-center justify-center border border-border">
                    <Building className="text-foreground" size={24} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Building className="size-4 shrink-0" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="size-4 shrink-0" />
                        <span>{exp.duration}</span>
                      </div>
                      <a
                        href={personalInfo.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-foreground transition-colors group"
                      >
                        <MapPin className="size-4 shrink-0 text-violet-400 group-hover:text-violet-300" />
                        <span className="line-clamp-2 sm:line-clamp-none">{personalInfo.location}</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: achIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle
                            className="text-foreground mt-0.5 shrink-0"
                            size={18}
                          />
                          <span className="text-muted-foreground text-sm sm:text-base">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-muted text-foreground rounded-full text-xs sm:text-sm border border-border"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-surface-hover p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">
              Skills Development Journey
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "Web Development",
                  period: "2024 - Present",
                  description:
                    "Mastered modern web technologies including Next.js, React, TypeScript, and Tailwind CSS.",
                  skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
                },
                {
                  title: "AI & Machine Learning",
                  period: "2024 - Present",
                  description:
                    "Developed expertise in AI chatbots, prompt engineering, and LLM workflows.",
                  skills: ["AI Chatbots", "Prompt Engineering", "LLM Workflows"],
                },
                {
                  title: "Backend Development",
                  period: "2024 - Present",
                  description:
                    "Built REST APIs with FastAPI, implemented authentication, and worked with Neon database.",
                  skills: ["FastAPI", "REST APIs", "JWT", "Neon Database"],
                },
                {
                  title: "Python Development",
                  period: "2023 - Present",
                  description:
                    "Created applications with Streamlit, implemented encryption systems, and data processing tools.",
                  skills: ["Python", "Streamlit", "Data Processing"],
                },
              ].map((journey, index) => (
                <motion.div
                  key={journey.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 sm:p-6 bg-muted rounded-lg border border-border"
                >
                  <h4 className="font-semibold mb-2">{journey.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{journey.period}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {journey.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {journey.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-background text-foreground rounded text-xs border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
