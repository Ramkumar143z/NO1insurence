"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Which life insurance plan is best for my family?",
    answer:
      "The best plan depends on your age, income, dependents, and financial goals. We recommend term insurance for maximum coverage at affordable premiums. Our advisors can help you compare plans from LIC, TATA AIA, and other top providers to find the perfect fit.",
  },
  {
    question: "What documents are needed for health insurance?",
    answer:
      "Basic documents include Aadhaar card, PAN card, address proof, income proof, and medical history records. For family floater plans, documents for all members are required. We guide you through the entire documentation process.",
  },
  {
    question: "How do I choose the right mutual fund?",
    answer:
      "Consider your investment horizon, risk tolerance, and financial goals. We analyze your profile and recommend a diversified portfolio of equity, debt, or hybrid funds. Regular portfolio reviews ensure your investments stay aligned with your goals.",
  },
  {
    question: "Can I save tax through insurance?",
    answer:
      "Yes, premiums paid for life insurance policies (up to ₹1.5 lakh under Section 80C) and health insurance premiums (up to ₹25,000 under Section 80D, ₹50,000 for senior citizens) are tax-deductible. ULIPs and capital gain bonds also offer tax benefits.",
  },
  {
    question: "What is the home loan interest rate?",
    answer:
      "Home loan interest rates vary by lender and your credit profile. We have tie-ups with leading banks and housing finance companies. Our advisors help you compare rates and get pre-approved to find the most competitive offer.",
  },
  {
    question: "How does the claim process work?",
    answer:
      "We provide end-to-end claim assistance. For insurance claims, we help with documentation, filing, and follow-up. Our team ensures a smooth and hassle-free claim settlement process, keeping you informed at every step.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            Frequently Asked Questions
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Have questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking for? Contact us directly.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl border border-border overflow-hidden"
            >
              <button
                suppressHydrationWarning
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 lg:p-5 text-left hover:bg-gray-50 transition-colors min-h-[52px]"
              >
                <span className="text-sm font-semibold text-text pr-4 leading-snug">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-4 h-4 text-primary shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-muted shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
