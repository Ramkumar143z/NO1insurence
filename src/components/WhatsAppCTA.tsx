"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhatsAppCTA() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(87,160,71,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
            Need Expert Financial Guidance?
          </h2>
          <p className="text-white/70 text-lg mb-10">
            Talk to our advisors and get personalized recommendations for your
            insurance, investment, and financial planning needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-black/10 transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:shadow-xl hover:shadow-green/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              Book Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
