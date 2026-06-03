"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Target, Eye, Compass, Handshake,
  Users, Award, TrendingUp, CheckCircle,
  Phone, MessageCircle, CalendarCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import QuoteModal from "@/components/QuoteModal";
import { useState } from "react";
import { getWhatsAppLink, PHONE_NUMBER } from "@/lib/utils";

const values = [
  { icon: ShieldCheck, title: "Trust", desc: "Built on decades of integrity and transparent dealings." },
  { icon: Handshake, title: "Reliability", desc: "We deliver on our promises, every single time." },
  { icon: Target, title: "Commitment", desc: "Dedicated to your financial well-being and success." },
  { icon: TrendingUp, title: "Growth", desc: "Helping clients build and preserve wealth over time." },
  { icon: Users, title: "Relationships", desc: "Long-term partnerships built on mutual respect." },
  { icon: Award, title: "Excellence", desc: "Striving for the highest standards in everything we do." },
];

const partners = [
  { name: "LIC", full: "Life Insurance Corporation of India", image: "/images/partners/lic.png" },
  { name: "TATA AIA", full: "TATA AIA Life Insurance", image: "/images/partners/tata_aia.png" },
  { name: "TATA AIG", full: "TATA AIG Insurance", image: "/images/partners/tata_aig.png" },
  { name: "New India Assurance", full: "The New India Assurance Company Limited", image: "/images/partners/nia.png" },
  { name: "Star Health", full: "Star Health Insurance", image: "/images/partners/star_health.png" },
];

export default function AboutPage() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <main>
        <section className="relative min-h-[30vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 gradient-hero" />
          <div className="container-custom relative z-10 py-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                About No1 Insurance
              </h1>
              <p className="text-lg text-white/70">
                Serving families and individuals with trusted insurance, investment and financial planning solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-6">
                  Who We Are
                </h2>
                <p className="text-text leading-relaxed mb-4">
                  No1 Insurance by SD Financial Solution is a premier insurance and financial advisory
                  company based in Selvapuram, Coimbatore, Tamil Nadu. With over 15 years of industry experience, we have helped
                  thousands of individuals, families, and businesses secure their financial future.
                </p>
                <p className="text-text leading-relaxed mb-4">
                  We are not just insurance agents — we are financial partners who understand that every
                  client has unique needs, goals, and aspirations. Our team of certified advisors works
                  tirelessly to deliver personalized solutions that make a real difference.
                </p>
                <p className="text-text leading-relaxed">
                  From life insurance to wealth management, tax planning to home loans, we provide
                  end-to-end financial solutions with transparency, integrity, and unwavering commitment
                  to our clients&apos; best interests.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white">
                  <p className="text-3xl font-heading font-bold">15+</p>
                  <p className="text-sm text-white/70">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-green to-green-dark rounded-2xl p-6 text-white">
                  <p className="text-3xl font-heading font-bold">5000+</p>
                  <p className="text-sm text-white/70">Happy Clients</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white">
                  <p className="text-3xl font-heading font-bold">50+</p>
                  <p className="text-sm text-white/70">Insurance Solutions</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                  <p className="text-3xl font-heading font-bold">15+</p>
                  <p className="text-sm text-white/70">Trusted Partners</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-border p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark-navy mb-4">Our Vision</h3>
                <p className="text-text leading-relaxed">
                  To be India&apos;s most trusted financial advisory firm, empowering every Indian to
                  achieve financial security and prosperity through expert guidance, innovative solutions,
                  and unwavering commitment to excellence.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl border border-border p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark-navy mb-4">Our Mission</h3>
                <p className="text-text leading-relaxed">
                  To provide comprehensive, transparent, and personalized financial solutions that protect
                  families, grow wealth, and secure futures — all under one roof with the highest standards
                  of integrity and professionalism.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
                Our Core Values
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-dark-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-muted">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50/50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
                Our Trusted Partners
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                We partner with India&apos;s most respected financial institutions
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-all"
                >
                  <div className="h-16 flex items-center justify-center mb-3">
                    <div className="relative w-full h-full mix-blend-multiply">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-sm font-heading font-bold text-dark-navy">{p.name}</h3>
                  <p className="text-xs text-muted mt-1">{p.full}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
                Why Choose No1 Insurance?
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
              {[
                "15+ years of trusted financial advisory experience",
                "Complete financial solutions under one roof",
                "Tie-ups with India's top insurance companies",
                "Personalized plans tailored to your needs",
                "Transparent process with no hidden charges",
                "End-to-end claim and support assistance",
                "Expert guidance on tax saving strategies",
                "Long-term relationships built on trust",
                "Dedicated relationship manager for every client",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50"
                >
                  <CheckCircle className="w-5 h-5 text-green shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 gradient-primary" />
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Let&apos;s Start Your Financial Journey
              </h2>
              <p className="text-white/70 mb-8">
                Get in touch with us today for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3.5 rounded-xl text-sm font-semibold hover:shadow-xl transition-all"
                >
                  <CalendarCheck className="w-4 h-4" />
                  Get Free Consultation
                </button>
                <a
                  href={getWhatsAppLink("Financial Services")}
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
          <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
        </section>
      </main>
    </>
  );
}
