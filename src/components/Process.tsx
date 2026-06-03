"use client";

import { motion } from "framer-motion";
import { MessageCircle, Search, FileCheck, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Consultation",
    desc: "Schedule a free consultation with our expert advisors to discuss your needs.",
  },
  {
    step: 2,
    icon: Search,
    title: "Requirement Analysis",
    desc: "We analyze your financial situation, goals, and risk profile thoroughly.",
  },
  {
    step: 3,
    icon: FileCheck,
    title: "Policy / Investment Selection",
    desc: "Choose from curated insurance and investment plans tailored for you.",
  },
  {
    step: 4,
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    desc: "We provide continuous support, reviews, and claim assistance whenever needed.",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
            How It Works
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Simple 4-step process to get started with your financial journey
          </p>
        </motion.div>

        <div className="hidden md:grid md:grid-cols-4 gap-8 relative">
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-green to-primary" />
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <step.icon className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-green border-4 border-gray-50/50 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step.step}</span>
                </div>
              </div>
              <h3 className="text-lg font-heading font-bold text-dark-navy mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="flex md:hidden gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 pb-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex-shrink-0 w-[220px] snap-start bg-white rounded-2xl border border-border/60 p-5 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center shadow-lg shadow-primary/20">
                  <Icon className="w-6 h-6 text-white" />
                  <div className="absolute -top-0.5 -right-0.5 w-6 h-6 rounded-full bg-green border-2 border-white flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-sm font-heading font-bold text-dark-navy mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
