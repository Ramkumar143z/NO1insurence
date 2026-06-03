"use client";

import { motion } from "framer-motion";
import {
  Shield, CheckCircle, CalendarCheck, MessageCircle, Phone
} from "lucide-react";
import { getWhatsAppLink, PHONE_NUMBER } from "@/lib/utils";
import type { ServiceData } from "@/data/services";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function ServiceHero({ service }: { service: ServiceData }) {
  const { heroConfig } = service;

  const scrollToLeadSection = () => {
    document.getElementById("lead-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden pt-20 lg:pt-24 pb-6 lg:pb-8"
      style={{ backgroundColor: heroConfig.bgColor }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, ${heroConfig.accent} 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${heroConfig.gradientTo} 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, ${heroConfig.accent} 0%, transparent 50%)
          `,
        }}
      />

      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02]">
        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${service.slug}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={heroConfig.accent} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${service.slug})`} />
        </svg>
      </div>

      <div className="container-custom relative z-10 py-6 lg:py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-1.5 shadow-sm">
            <Shield className="w-3.5 h-3.5" style={{ color: heroConfig.accent }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: heroConfig.accent }}>
              {service.category} &mdash; {heroConfig.theme}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-3xl xl:text-4xl font-heading font-bold leading-tight">
            <span className="text-dark-navy">{service.title}. </span>
            <span style={{ color: heroConfig.accent }}>{service.tagline}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm md:text-base text-muted leading-relaxed max-w-2xl mx-auto">
            {service.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {service.benefits.slice(0, 3).map((b) => (
              <div key={b} className="flex items-start gap-2 bg-white/60 rounded-xl p-3 border border-gray-100/50">
                <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: heroConfig.accent + "15" }}>
                  <CheckCircle className="w-3 h-3" style={{ color: heroConfig.accent }} />
                </div>
                <span className="text-xs text-text leading-snug">{b}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-3 pt-2">
            <p className="text-xs font-semibold text-dark-navy uppercase tracking-wider">Why choose us</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {heroConfig.trustItems.slice(0, 4).map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: heroConfig.accent + "12" }}>
                    <CheckCircle className="w-2.5 h-2.5" style={{ color: heroConfig.accent }} />
                  </div>
                  <span className="text-sm text-text">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={scrollToLeadSection}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: heroConfig.accent }}
            >
              <CalendarCheck className="w-4 h-4" />
              Get Free Quote
            </button>
            <a
              href={getWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-text px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
