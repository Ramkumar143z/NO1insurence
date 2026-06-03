"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { submitLeadForm, type ActionResult } from "@/lib/actions";

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

export default function LeadForm({ defaultService = "" }: { defaultService?: string }) {
  const [state, formAction, pending] = useActionState<ActionResult | null, FormData>(
    submitLeadForm,
    null
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl border border-border p-6 lg:p-8 shadow-sm"
    >
      <h3 className="text-xl font-heading font-bold text-dark-navy mb-2">
        Get Free Consultation
      </h3>
      <p className="text-sm text-muted mb-6">
        Fill the form and our expert will call you back.
      </p>

      <form action={formAction} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-text mb-1.5">Name *</label>
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
            <label className="block text-sm font-medium text-text mb-1.5">Phone *</label>
            <input
              suppressHydrationWarning
              name="phone"
              type="tel"
              placeholder="+91 9123521252"
              required
              className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-text mb-1.5">Email *</label>
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
          <label className="block text-sm font-medium text-text mb-1.5">Service *</label>
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
          <label className="block text-sm font-medium text-text mb-1.5">Message</label>
          <textarea
            suppressHydrationWarning
            name="message"
            rows={3}
            placeholder="Tell us about your requirements..."
            className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
          />
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
              Submit Enquiry
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
