"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/personal";
import { Badge, MapPin, Mail, Briefcase } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactDetailRow from "@/components/ContactDetailRow";
import SectionHeading from "../SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding scroll-mt-28">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building intelligent, scalable applications that solve real-world problems."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-surface-hover p-6 sm:p-8"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Hello! I&apos;m {personalInfo.name}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I&apos;m a passionate AI & Full Stack Web Developer based in Koranghi, Karachi, Pakistan.
              I specialize in building intelligent, scalable web applications using modern technologies
              like Next.js, React, TypeScript, and Python.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a strong foundation in both frontend development and AI technologies, I create
              seamless user experiences powered by cutting-edge AI solutions. My approach combines
              technical excellence with creative problem-solving to deliver exceptional digital products.
            </p>

            <div className="space-y-5">
              <ContactDetailRow
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
                href={personalInfo.mapsUrl}
                external
                iconClassName="text-violet-400"
              />
              <ContactDetailRow
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <ContactDetailRow
                icon={FaWhatsapp}
                label="WhatsApp"
                value={personalInfo.whatsapp}
                href={personalInfo.whatsappUrl}
                external
                iconClassName="text-emerald-500"
              />
              <ContactDetailRow
                icon={Briefcase}
                label="Experience"
                value={personalInfo.yearsOfExperience}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-surface-hover p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-6">What I Do</h3>
              <div className="space-y-5">
                {[
                  {
                    title: "AI-Powered Applications",
                    description:
                      "Building intelligent applications with AI chatbots, LLM workflows, and machine learning integration.",
                  },
                  {
                    title: "Full Stack Development",
                    description:
                      "Creating complete web applications with Next.js, React, TypeScript, and backend technologies.",
                  },
                  {
                    title: "Modern UI/UX",
                    description:
                      "Designing responsive, accessible, and beautiful user interfaces with Tailwind CSS and modern design principles.",
                  },
                  {
                    title: "Performance Optimization",
                    description:
                      "Optimizing applications for fast loading times and excellent user experience.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <Badge className="text-foreground bg-muted mt-1 shrink-0" size={16} />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface-hover p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Core Values</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {["Innovation", "Quality", "Collaboration", "Continuous Learning"].map(
                  (value, index) => (
                    <motion.div
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-4 bg-muted rounded-lg border border-border"
                    >
                      <div className="font-medium text-sm sm:text-base">{value}</div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 card-surface-hover p-6 sm:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">My Approach</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "Understand",
                description:
                  "Deeply analyze requirements and user needs to build the right solution.",
              },
              {
                title: "Design",
                description:
                  "Create intuitive, accessible interfaces with modern design principles.",
              },
              {
                title: "Develop",
                description:
                  "Write clean, efficient code following best practices and standards.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-5 sm:p-6 bg-muted rounded-lg border border-border"
              >
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
