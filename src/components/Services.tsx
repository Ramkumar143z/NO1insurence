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
    color: "from-blue-500 to-blue-600",
    icon: ShieldCheck,
    services: [
      { name: "Life Insurance", icon: UserCheck, desc: "Secure your family's future", slug: "life-insurance" },
      { name: "Health Insurance", icon: Heart, desc: "Comprehensive health coverage", slug: "health-insurance" },
      { name: "Vehicle Insurance", icon: Car, desc: "Car & two-wheeler protection", slug: "vehicle-insurance" },
      { name: "General Insurance", icon: FileText, desc: "Complete asset protection", slug: "general-insurance" },
      { name: "Term Insurance", icon: ShieldCheck, desc: "Pure protection plans", slug: "term-insurance" },
    ],
  },
  {
    title: "Investment Solutions",
    color: "from-green-500 to-green-600",
    icon: TrendingUp,
    services: [
      { name: "ULIP", icon: BarChart3, desc: "Wealth with insurance", slug: "ulip" },
      { name: "Mutual Funds", icon: PieChart, desc: "Diversified portfolio growth", slug: "mutual-funds" },
      { name: "Corporate Bonds", icon: Landmark, desc: "Fixed income investments", slug: "corporate-bonds" },
      { name: "Capital Gain Bonds", icon: Award, desc: "Tax saving investments", slug: "capital-gain-bonds" },
    ],
  },
  {
    title: "Financial Solutions",
    color: "from-amber-500 to-amber-600",
    icon: Calculator,
    services: [
      { name: "Tax Planning", icon: Calculator, desc: "Smart tax strategies", slug: "tax-planning" },
      { name: "Financial Planning", icon: BarChart3, desc: "Holistic financial roadmap", slug: "financial-planning" },
      { name: "Wealth Management", icon: TrendingUp, desc: "Grow & preserve wealth", slug: "wealth-management" },
      { name: "Financial Advisory", icon: HandshakeIcon, desc: "Expert guidance", slug: "financial-advisory" },
      { name: "Home Loans", icon: Home, desc: "Dream home financing", slug: "home-loans" },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
            Complete Financial Solutions
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Everything you need under one roof — from insurance to investments,
            tax planning to home loans.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-border p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark-navy mb-6">
                  {category.title}
                </h3>
                <div className="space-y-2 lg:space-y-3 flex-1">
                  {category.services.map((service) => (
                    <Link
                      key={service.name}
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-3 p-3 lg:p-3 rounded-xl hover:bg-gray-50 transition-colors group/item min-h-[52px] lg:min-h-0"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0 group-hover/item:bg-primary/10 transition-colors">
                        <service.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-text">{service.name}</p>
                        <p className="text-xs text-muted hidden sm:block">{service.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="mt-6 flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors group/btn"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
