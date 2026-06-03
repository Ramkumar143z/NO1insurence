"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, ChevronRight, Phone, MessageCircle, CalendarCheck,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ServiceData } from "@/data/services";
import { getRelatedServices } from "@/data/services";
import { getWhatsAppLink, PHONE_NUMBER } from "@/lib/utils";
import ServiceHero from "./ServiceHero";
import LeadForm from "./LeadForm";
import QuoteModal from "./QuoteModal";

function BenefitsSection({ service }: { service: ServiceData }) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
            Benefits of {service.title}
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-3 lg:p-4 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors min-h-[48px] lg:min-h-0"
            >
              <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green shrink-0 mt-0.5" />
              <span className="text-sm text-text">{b}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ service }: { service: ServiceData }) {
  return (
    <section className="py-16 lg:py-20 bg-gray-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
            What We Offer
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-border p-5 lg:p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-3">
                <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-primary" />
              </div>
              <h3 className="text-sm lg:text-base font-heading font-bold text-dark-navy mb-1 lg:mb-2">{f.title}</h3>
              <p className="text-xs lg:text-sm text-muted">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUsSection({ service }: { service: ServiceData }) {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
            Why Choose Us for {service.title}
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {service.whyUs.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-3 lg:p-4 rounded-xl bg-gray-50 min-h-[48px] lg:min-h-0"
            >
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-green/10 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-green" />
              </div>
              <span className="text-sm text-text">{w}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ service }: { service: ServiceData }) {
  return (
    <section className="py-16 lg:py-20 bg-gray-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
            How It Works
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-green to-primary" />
          {service.process.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-14 h-14 lg:w-20 lg:h-20 mx-auto mb-3 lg:mb-4 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-heading font-bold text-sm lg:text-xl">{p.step}</span>
              </div>
              <h3 className="text-sm lg:text-base font-heading font-bold text-dark-navy mb-1 lg:mb-2">{p.title}</h3>
              <p className="text-xs lg:text-sm text-muted">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection({ service }: { service: ServiceData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-3">
          {service.faqs.map((faq, i) => (
            <div key={i} className="bg-gray-50 rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-semibold text-text pr-4">{faq.q}</span>
                <ChevronRight
                  className={`w-4 h-4 text-muted shrink-0 transition-transform ${
                    openIndex === i ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-sm text-muted">{faq.a}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ service }: { service: ServiceData }) {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(87,160,71,0.15),transparent_50%)]" />
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 mb-8">
            Get expert guidance on {service.title}. Our advisors are here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setQuoteOpen(true)}
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-xl text-sm font-semibold hover:shadow-xl transition-all"
            >
              <CalendarCheck className="w-4 h-4" />
              Get Free Quote
            </button>
            <a
              href={getWhatsAppLink(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3.5 rounded-xl text-sm font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} defaultService={service.title} />
    </section>
  );
}

function RelatedSection({ service }: { service: ServiceData }) {
  const related = getRelatedServices(service.slug);
  if (related.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
            Related Services
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {related.map((r: ServiceData) => {
            const Icon = r.icon;
            return (
              <Link
                key={r.slug}
                href={`/services/${r.slug}`}
                className="bg-white rounded-2xl border border-border p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-heading font-bold text-dark-navy mb-1">{r.title}</h3>
                <p className="text-xs text-muted">{r.tagline}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LeadSection({ service }: { service: ServiceData }) {
  return (
    <section id="lead-section" className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
                Get Expert Consultation
              </h2>
              <p className="text-muted mb-6">
                Fill in your details and our {service.title} expert will call you back
                within 24 hours with personalized recommendations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <span className="text-sm text-text">Free personalized consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <span className="text-sm text-text">Compare best plans & rates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green" />
                  </div>
                  <span className="text-sm text-text">No obligation, no hidden charges</span>
                </div>
              </div>
            </motion.div>
          </div>
          <LeadForm defaultService={service.title} />
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ service }: { service: ServiceData }) {
  return (
    <>
      <ServiceHero service={service} />
      <BenefitsSection service={service} />
      <FeaturesSection service={service} />
      <WhyUsSection service={service} />
      <ProcessSection service={service} />
      <FAQSection service={service} />
      <LeadSection service={service} />
      <CTASection service={service} />
      <RelatedSection service={service} />
    </>
  );
}
