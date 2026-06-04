"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Featured", href: "#featured-projects" },
  { name: "Projects", href: "#all-projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Handle scroll background effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Smooth scroll with offset for fixed header
  const scrollToSection = (elementId: string) => {
    const target = document.getElementById(elementId);
    if (!target) {
      console.warn(`Element with id "${elementId}" not found`);
      return;
    }

    // Get header height dynamically
    const headerHeight = headerRef.current?.offsetHeight || 70;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = targetPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    // Close mobile menu first
    setIsOpen(false);

    // Delay scroll until menu close animation finishes and DOM updates
    setTimeout(() => {
      scrollToSection(id);
      // Update URL without causing jump
      window.history.replaceState(null, "", href);
    }, 150); // Slight delay matches animation exit duration
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="section-container py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2.5 shrink-0"
          >
            <div className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-base sm:hidden">
            Abdullah
            </span>
            <span className="font-semibold text-lg tracking-tight hidden sm:inline">
              Muhammad Abdullah
            </span>
          </motion.a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * index }}
                className="px-2.5 xl:px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/50 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-4 pb-6 mt-3 border-t border-border bg-background/95 backdrop-blur-md flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 text-base"
                  >
                    {item.name}
                  </a>
                ))}
                {/* Add Hire Me button inside mobile menu for consistency */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                  className="mt-2 mx-4 px-4 py-3 text-center font-medium bg-primary text-primary-foreground rounded-lg"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}