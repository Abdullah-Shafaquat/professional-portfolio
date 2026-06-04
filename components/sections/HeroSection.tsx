"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail, MapPin, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/data/personal";
import AnimatedHeadline from "@/components/AnimatedHeadline";
import { fadeUp, scaleIn } from "@/lib/animations";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden scroll-mt-28"
    >
      {/* Background effects (unchanged) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_0%_14%)_0%,hsl(0_0%_0%)_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_20%/0.12)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_20%/0.12)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]" />
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10 py-12 sm:py-16 lg:py-20">
        {/* Grid: column order swaps on mobile */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-16 items-start">
          
          {/* Left side text content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/80 text-foreground text-sm border border-border mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open to internships & remote roles
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.55 }}
              className="text-muted-foreground text-sm sm:text-base mb-3 uppercase tracking-[0.2em]"
            >
              Muhammad Abdullah
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-5 text-balance"
            >
              Building{" "}
              <span className="gradient-text">intelligent</span>
              <br />
              web experiences
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55 }}
              className="text-lg sm:text-xl mb-6"
            >
              <AnimatedHeadline />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.55 }}
              className="text-muted-foreground text-base sm:text-lg mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.shortBio}
            </motion.p>

            <motion.a
              href={personalInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="inline-flex items-start gap-3 p-4 mb-8 max-w-xl mx-auto lg:mx-0 rounded-xl border border-border bg-muted/40 hover:bg-muted/70 hover:border-foreground/20 transition-all text-left group"
            >
              <span className="w-10 h-10 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 group-hover:border-violet-500/40">
                <MapPin size={20} className="text-violet-400" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Location
                </span>
                <span className="block text-sm sm:text-base text-foreground leading-snug">
                  {personalInfo.location}
                </span>
                <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-violet-300 group-hover:text-violet-200">
                  <ExternalLink size={14} />
                  Google Maps par kholo
                </span>
              </span>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
            >
              <motion.button
                type="button"
                onClick={() => onNavigate("contact")}
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={18} />
                Hire Me
              </motion.button>
              <motion.a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FileDown size={18} />
                Resume
              </motion.a>
              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </motion.a>
              <motion.a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side image - fully responsive */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect - responsive sizing */}
              <motion.div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-blue-500/20 blur-2xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Profile Image - responsive square dimensions */}
              <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[352px] md:h-[352px] rounded-[1.75rem] overflow-hidden border-2 border-border shadow-2xl mx-auto lg:mx-0">
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, 352px"
                  className="object-cover object-top"
                />
              </div>

              {/* Projects Counter - repositioned for responsiveness */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-card/90 backdrop-blur-md border border-border shadow-xl"
              >
                <p className="font-bold text-base sm:text-lg">
                  {personalInfo.projectsCompleted}
                </p>
                <p className="text-muted-foreground text-[10px] sm:text-xs whitespace-nowrap">
                  Projects Built
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll button */}
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => onNavigate("about")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}