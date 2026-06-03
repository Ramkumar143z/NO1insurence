"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { PHONE_NUMBER, SECONDARY_PHONE_NUMBER, EMAIL, ADDRESS } from "@/lib/utils";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
            Get In Touch
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Ready to secure your financial future? Reach out to us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Full Name
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text mb-1.5">
                    Phone Number
                  </label>
                  <input
                    suppressHydrationWarning
                    type="tel"
                    placeholder="+91 9123521252"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Email Address
                </label>
                <input
                  suppressHydrationWarning
                  type="email"
                  placeholder="swathidivakar67@gmail.com"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Service Interested In
                </label>
                <select suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                  <option value="">Select a service</option>
                  <option>Life Insurance</option>
                  <option>Health Insurance</option>
                  <option>Vehicle Insurance</option>
                  <option>Mutual Funds</option>
                  <option>Corporate Bonds</option>
                  <option>Capital Gain Bonds</option>
                  <option>Tax Planning</option>
                  <option>Financial Planning</option>
                  <option>Home Loans</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-1.5">
                  Message
                </label>
                <textarea
                  suppressHydrationWarning
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                suppressHydrationWarning
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25 inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Enquiry
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
                  <p className="text-sm text-muted leading-relaxed">
                    {ADDRESS}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">Business Hours</p>
                  <p className="text-sm text-muted">
                    Mon - Sat: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border h-64 bg-gray-100 shadow-sm relative group">
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
              <a
                href="https://www.google.com/maps/search/?api=1&query=S.S.+Flats,+106,+NSK+Street,+Selvapuram,+Coimbatore+-+641026"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md hover:shadow-primary/25 flex items-center gap-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto translate-y-2 group-hover:translate-y-0"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
