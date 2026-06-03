"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ShieldCheck,
  PiggyBank,
  TrendingUp,
  Home,
  Target,
  ArrowRight,
  IndianRupee,
} from "lucide-react";
import Link from "next/link";

const calculators = [
  {
    icon: ShieldCheck,
    title: "Life Insurance Calculator",
    desc: "Find the right coverage for your family",
    color: "from-blue-500 to-blue-600",
    amount: "₹1 Cr+",
    tag: "Coverage",
  },
  {
    icon: PiggyBank,
    title: "Tax Saving Calculator",
    desc: "Maximize your tax savings under 80C",
    color: "from-green-500 to-green-600",
    amount: "₹1.5 Lakh",
    tag: "Save",
  },
  {
    icon: TrendingUp,
    title: "SIP Calculator",
    desc: "Plan your monthly investments wisely",
    color: "from-purple-500 to-purple-600",
    amount: "₹1 Cr+",
    tag: "Returns",
  },
  {
    icon: Calculator,
    title: "Retirement Planner",
    desc: "Plan a comfortable retirement",
    color: "from-amber-500 to-amber-600",
    amount: "₹5 Cr+",
    tag: "Corpus",
  },
  {
    icon: Home,
    title: "EMI Calculator",
    desc: "Calculate your monthly loan payments",
    color: "from-rose-500 to-rose-600",
    amount: "₹50K/mo",
    tag: "EMI",
  },
  {
    icon: Target,
    title: "Goal Planning Calculator",
    desc: "Plan for your financial goals",
    color: "from-cyan-500 to-cyan-600",
    amount: "₹2 Cr+",
    tag: "Goal",
  },
];

export default function Calculators() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
            Financial Calculator Hub
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Plan your finances with confidence using our smart calculators
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc, index) => (
            <motion.div
              key={calc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${calc.color} opacity-5 rounded-bl-full`}
              />
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${calc.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <calc.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-xl font-heading font-bold text-dark-navy">
                    {calc.amount}
                  </p>
                  <p className="text-xs text-muted">{calc.tag}</p>
                </div>
              </div>
              <h3 className="text-base font-heading font-bold text-dark-navy mb-2">
                {calc.title}
              </h3>
              <p className="text-sm text-muted mb-4">{calc.desc}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all"
              >
                Calculate Now <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
