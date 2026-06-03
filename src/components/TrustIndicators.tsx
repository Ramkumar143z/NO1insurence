"use client";

import { motion } from "framer-motion";
import {
  Users,
  FileCheck,
  HeadphonesIcon,
  Clock,
  Briefcase,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: FileCheck,
    value: 50,
    suffix: "+",
    label: "Insurance Solutions",
  },
  {
    icon: Briefcase,
    value: 1000,
    suffix: "+",
    label: "Financial Planning Support",
  },
  {
    icon: HeadphonesIcon,
    value: 98,
    suffix: "%",
    label: "Claim Assistance",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Fast Response",
  },
  {
    icon: ShieldCheck,
    value: 15,
    suffix: "+",
    label: "Professional Advisors",
  },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustIndicators() {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/5 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-2xl lg:text-3xl font-heading font-bold text-dark-navy">
                <Counter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
