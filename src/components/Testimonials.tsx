"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content:
      "No1 Insurance helped me secure my family's future with the perfect life insurance plan. Their expert guidance made the entire process seamless and transparent. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Salaried Professional",
    content:
      "I was looking for comprehensive health insurance and tax planning solutions. The team at No1 Insurance provided excellent advice that saved me money on taxes while getting great coverage.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Retired Professional",
    content:
      "Their wealth management services have been exceptional. My retirement corpus is now well-invested and growing steadily. The regular portfolio reviews give me great peace of mind.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Home Buyer",
    content:
      "Getting a home loan was so easy with No1 Insurance's guidance. They helped me compare options and get the best interest rates. Made my dream of owning a home come true!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (newIndex: number) => {
    setDirection(newIndex > current ? 1 : -1);
    setCurrent(newIndex);
  };

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
            What Our Clients Say
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Trusted by thousands of families and businesses across India
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute top-0 left-0 text-primary/10 pointer-events-none">
            <Quote className="w-16 lg:w-24 h-16 lg:h-24" />
          </div>
          <div className="relative z-10 min-h-[240px] lg:min-h-[280px] flex items-center">
            <div className="flex lg:hidden gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 w-full pb-4">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] snap-start bg-gray-50/80 rounded-2xl border border-border/60 p-6">
                  <p className="text-sm text-text leading-relaxed mb-5 italic">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {Array.from({ length: t.rating }).map((_, ri) => (
                      <Star key={ri} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="font-heading font-bold text-dark-navy text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block w-full">
              <div className="absolute top-0 left-0 text-primary/10">
                <Quote className="w-24 h-24" />
              </div>
              <div className="relative z-10 min-h-[280px] flex items-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="text-center px-4 w-full"
                  >
                    <p className="text-lg lg:text-xl text-text leading-relaxed mb-8 italic">
                      &ldquo;{testimonials[current].content}&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-1 mb-3">
                      {Array.from({ length: testimonials[current].rating }).map(
                        (_, i) => (
                          <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                        )
                      )}
                    </div>
                    <p className="font-heading font-bold text-dark-navy">
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-muted">{testimonials[current].role}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => navigate(current === 0 ? testimonials.length - 1 : current - 1)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors touch-target"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => navigate(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === current ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => navigate(current === testimonials.length - 1 ? 0 : current + 1)}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors touch-target"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
