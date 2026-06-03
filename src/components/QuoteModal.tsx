"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import { validateQuoteForm } from "@/lib/schemas";
import type { QuoteFormData } from "@/lib/schemas";
import { submitQuoteRequest, type ActionResult } from "@/lib/actions";
import { useActionState } from "react";

const services = [
  "Life Insurance",
  "Health Insurance",
  "Vehicle Insurance",
  "Mutual Funds",
  "Corporate Bonds",
  "Capital Gain Bonds",
  "Tax Planning",
  "Financial Planning",
  "Home Loans",
  "Other",
];

export default function QuoteModal({
  open,
  onClose,
  defaultService = "",
}: {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}) {
  const [state, formAction, pending] = useActionState<ActionResult | null, FormData>(
    submitQuoteRequest,
    null
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-lg font-heading font-bold text-dark-navy">
                  Get a Free Quote
                </h3>
                <p className="text-sm text-muted mt-0.5">
                  Fill in your details and we&apos;ll get back to you
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form action={formAction} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Full Name *
                </label>
                <input
                  suppressHydrationWarning
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Phone Number *
                </label>
                <input
                  suppressHydrationWarning
                  name="phone"
                  type="tel"
                  placeholder="+91 9123521252"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Email *
                </label>
                <input
                  suppressHydrationWarning
                  name="email"
                  type="email"
                  placeholder="swathidivakar67@gmail.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Required Service *
                </label>
                <select
                  suppressHydrationWarning
                  name="service"
                  defaultValue={defaultService}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Preferred Contact Time
                </label>
                <select
                  suppressHydrationWarning
                  name="preferredTime"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="">Any time</option>
                  <option value="9AM - 12PM">9 AM - 12 PM</option>
                  <option value="12PM - 3PM">12 PM - 3 PM</option>
                  <option value="3PM - 6PM">3 PM - 6 PM</option>
                  <option value="6PM - 8PM">6 PM - 8 PM</option>
                </select>
              </div>

              {state?.errors && (
                <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 text-sm">
                  {Object.values(state.errors).map((err, i) => (
                    <p key={i}>{err}</p>
                  ))}
                </div>
              )}

              {state?.success && (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-sm flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="font-semibold">Thank you for contacting No1 Insurance.</p>
                    <p className="text-green-600">{state.message}</p>
                  </div>
                </div>
              )}

              <button
                suppressHydrationWarning
                type="submit"
                disabled={pending}
                className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
              >
                {pending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Get Free Quote
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
