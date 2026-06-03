"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle,
  MessageCircle,
} from "lucide-react";
import { submitLeadForm, type ActionResult } from "@/lib/actions";
import { useActionState } from "react";
import { getWhatsAppLink, PHONE_NUMBER, SECONDARY_PHONE_NUMBER, EMAIL, ADDRESS, WEBSITE } from "@/lib/utils";

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

export default function ContactPage() {
  const [state, formAction, pending] = useActionState<ActionResult | null, FormData>(
    submitLeadForm,
    null
  );

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
                Contact Us
              </h1>
              <p className="text-lg text-white/70">
                Ready to secure your financial future? Reach out to us today.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-dark-navy mb-2">
                  Get In Touch
                </h2>
                <p className="text-muted mb-8">
                  Fill in the form and our team will get back to you within 24 hours.
                </p>

                <form action={formAction} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">Full Name *</label>
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
                      <label className="block text-sm font-medium text-text mb-1.5">Phone Number *</label>
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
                    <label className="block text-sm font-medium text-text mb-1.5">Email Address *</label>
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
                    <label className="block text-sm font-medium text-text mb-1.5">Service Interested In *</label>
                    <select
                      suppressHydrationWarning
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">Message</label>
                    <textarea
                      suppressHydrationWarning
                      name="message"
                      rows={4}
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
                        <p className="text-green-600">Our advisor will contact you shortly.</p>
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="bg-gray-50/50 rounded-2xl border border-border p-6 space-y-5">
                  <h3 className="text-lg font-heading font-bold text-dark-navy">Contact Information</h3>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">Phone</p>
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-primary transition-colors">
                          {PHONE_NUMBER}
                        </a>
                        <a href={`tel:${SECONDARY_PHONE_NUMBER.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-primary transition-colors">
                          {SECONDARY_PHONE_NUMBER}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-sm text-muted hover:text-primary transition-colors">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">Address</p>
                      <p className="text-sm text-muted leading-relaxed">{ADDRESS}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text">Business Hours</p>
                      <p className="text-sm text-muted">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-sm text-muted">Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink("Financial Services")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green text-white rounded-2xl p-5 hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="font-semibold">Chat on WhatsApp</p>
                    <p className="text-sm text-white/80">Quick response guaranteed</p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 border-t border-border">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-heading font-bold text-dark-navy mb-4">
                Visit Our Office
              </h2>
              <p className="text-muted">
                Meet our advisors at our office in Selvapuram, Coimbatore.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
              <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-border h-full flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark-navy mb-3">Head Office</h3>
                <p className="text-muted leading-relaxed mb-6">
                  {ADDRESS}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=S.S.+Flats,+106,+NSK+Street,+Selvapuram,+Coimbatore+-+641026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-primary/25"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
              <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border h-[400px] shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.216654942921!2d76.9419163!3d10.9934444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a7a9a16fbd%3A0x8e83f069f9c7f66a!2sSelvapuram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
