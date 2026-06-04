"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ContactDetailRow from "@/components/ContactDetailRow";
import { Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "@/data/personal";
import SectionHeading from "@/components/SectionHeading";
import Toast, { type ToastType } from "@/components/Toast";
import { validateContactForm } from "@/lib/validation";
import { fadeUp, viewportOnce } from "@/lib/animations";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateContactForm(formData);
    if (!validation.valid) {
      setErrors(validation.errors);
      setToast({ message: "Please fix the errors below.", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.error || "Failed to send message");
      }

      setFormData({ name: "", email: "", message: "" });
      setToast({
        message: "Message sent! I'll get back to you soon.",
        type: "success",
      });
    } catch (err) {
      setToast({
        message:
          err instanceof Error ? err.message : "Failed to send. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding scroll-mt-28">
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open for AI Developer, Full Stack, and Frontend internships — including international remote roles."
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <div className="card-surface-hover p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
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
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="card-surface-hover p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all ${
                    errors.name ? "border-red-500/60" : "border-border"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/15 transition-all ${
                    errors.email ? "border-red-500/60" : "border-border"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/15 resize-none transition-all ${
                    errors.message ? "border-red-500/60" : "border-border"
                  }`}
                  placeholder="Tell me about the role or project..."
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}
