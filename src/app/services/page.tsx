"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Heart, Car, FileText, UserCheck,
  TrendingUp, PieChart, Landmark, Award,
  Calculator, BarChart3, HandshakeIcon, Home,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const serviceCategories = [
  {
    title: "Insurance Solutions",
    description: "Comprehensive insurance coverage for life, health, vehicle, and assets.",
    gradient: "from-blue-500 to-blue-600",
    services: [
      { name: "Life Insurance", slug: "life-insurance", icon: ShieldCheck, desc: "Secure your family's future" },
      { name: "Health Insurance", slug: "health-insurance", icon: Heart, desc: "Comprehensive health coverage" },
      { name: "Vehicle Insurance", slug: "vehicle-insurance", icon: Car, desc: "Car & two-wheeler protection" },
      { name: "General Insurance", slug: "general-insurance", icon: FileText, desc: "Complete asset protection" },
      { name: "Term Insurance", slug: "term-insurance", icon: UserCheck, desc: "Pure protection plans" },
    ],
  },
  {
    title: "Investment Solutions",
    description: "Grow your wealth with smart investment options tailored to your goals.",
    gradient: "from-green-500 to-green-600",
    services: [
      { name: "ULIP", slug: "ulip", icon: BarChart3, desc: "Wealth with insurance" },
      { name: "Mutual Funds", slug: "mutual-funds", icon: PieChart, desc: "Diversified portfolio growth" },
      { name: "Corporate Bonds", slug: "corporate-bonds", icon: Landmark, desc: "Fixed income investments" },
      { name: "Capital Gain Bonds", slug: "capital-gain-bonds", icon: Award, desc: "Tax saving investments" },
    ],
  },
  {
    title: "Financial Solutions",
    description: "Expert financial planning, wealth management, and tax advisory services.",
    gradient: "from-amber-500 to-amber-600",
    services: [
      { name: "Tax Planning", slug: "tax-planning", icon: Calculator, desc: "Smart tax strategies" },
      { name: "Financial Planning", slug: "financial-planning", icon: BarChart3, desc: "Holistic financial roadmap" },
      { name: "Wealth Management", slug: "wealth-management", icon: TrendingUp, desc: "Grow & preserve wealth" },
      { name: "Financial Advisory", slug: "financial-advisory", icon: HandshakeIcon, desc: "Expert guidance" },
    ],
  },
  {
    title: "Loan Solutions",
    description: "Hassle-free home loans with competitive interest rates and expert guidance.",
    gradient: "from-rose-500 to-rose-600",
    services: [
      { name: "Home Loans", slug: "home-loans", icon: Home, desc: "Dream home financing" },
    ],
  },
];



export default function ServicesPage() {
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
                Our Services
              </h1>
              <p className="text-lg text-white/70">
                Comprehensive insurance, investment, and financial solutions under one roof
              </p>
            </motion.div>
          </div>
        </section>

        {serviceCategories.map((cat, idx) => (
          <section key={cat.title} className={`py-16 lg:py-20 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} items-center justify-center mb-4`}>
                  {cat.title === "Insurance Solutions" ? <ShieldCheck className="w-5 h-5 text-white" /> :
                   cat.title === "Investment Solutions" ? <TrendingUp className="w-5 h-5 text-white" /> :
                   cat.title === "Financial Solutions" ? <Calculator className="w-5 h-5 text-white" /> :
                   <Home className="w-5 h-5 text-white" />}
                </div>
                <h2 className="text-3xl font-heading font-bold text-dark-navy mb-2">{cat.title}</h2>
                <p className="text-muted">{cat.description}</p>
              </motion.div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {cat.services.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <motion.div
                      key={svc.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={`/services/${svc.slug}`}
                        className="block bg-white rounded-2xl border border-border p-5 hover:shadow-lg hover:-translate-y-1 transition-all group h-full"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-sm font-heading font-bold text-dark-navy mb-1">{svc.name}</h3>
                        <p className="text-xs text-muted mb-3">{svc.desc}</p>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                          Learn More <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
}
