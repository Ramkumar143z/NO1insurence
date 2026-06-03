"use client";

import { motion } from "framer-motion";
import {
  Compass,
  ShieldCheck,
  Handshake,
  Target,
  PiggyBank,
  HeadphonesIcon,
  Home,
  TrendingUp,
} from "lucide-react";

const points = [
  {
    icon: Compass,
    title: "Expert Financial Guidance",
    desc: "15+ years of experience in insurance and financial advisory",
  },
  {
    icon: ShieldCheck,
    title: "Multiple Insurance Options",
    desc: "Compare and choose from India's top insurance providers",
  },
  {
    icon: Handshake,
    title: "Trusted Insurance Partners",
    desc: "Partnered with LIC, TATA AIA, TATA AIG, and more",
  },
  {
    icon: Target,
    title: "Personalized Financial Planning",
    desc: "Customized plans tailored to your unique financial goals",
  },
  {
    icon: PiggyBank,
    title: "Tax Saving Strategies",
    desc: "Optimize your taxes with smart investment planning",
  },
  {
    icon: HeadphonesIcon,
    title: "Fast Claim Support",
    desc: "End-to-end claim assistance for hassle-free settlements",
  },
  {
    icon: Home,
    title: "Home Loan Assistance",
    desc: "Expert guidance for your dream home financing",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Wealth Creation",
    desc: "Build sustainable wealth for a secure financial future",
  },
];

export default function WhyChooseUs() {
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
            Why Choose No1 Insurance?
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We combine expertise, trust, and personalized service to deliver the
            best financial outcomes for our clients.
          </p>
        </motion.div>

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                <point.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-heading font-bold text-dark-navy mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex sm:hidden gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 pb-2">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-[240px] snap-start bg-white rounded-2xl border border-border/60 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-sm font-heading font-bold text-dark-navy mb-1.5">{point.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{point.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
