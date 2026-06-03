"use client";

import { ShieldCheck, Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER, SECONDARY_PHONE_NUMBER, EMAIL, ADDRESS } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Insurance Partners", href: "/about" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks: { name: string; slug: string }[] = [
  { name: "Life Insurance", slug: "/services/life-insurance" },
  { name: "Health Insurance", slug: "/services/health-insurance" },
  { name: "Vehicle Insurance", slug: "/services/vehicle-insurance" },
  { name: "Mutual Funds", slug: "/services/mutual-funds" },
  { name: "Corporate Bonds", slug: "/services/corporate-bonds" },
  { name: "Capital Gain Bonds", slug: "/services/capital-gain-bonds" },
  { name: "Tax Planning", slug: "/services/tax-planning" },
  { name: "Financial Planning", slug: "/services/financial-planning" },
  { name: "Home Loans", slug: "/services/home-loans" },
];

const partners = [
  "LIC", 
  "TATA AIA Life Insurance", 
  "TATA AIG Insurance", 
  "The New India Assurance Company Limited", 
  "Star Health Insurance"
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="hidden md:block bg-dark-navy text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex items-center mb-6 bg-white/10 p-2 rounded-xl w-fit">
              <Image 
                src="/images/logo.png" 
                alt="No1 Insurance Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              NO1 Insurance by SD Financial Solution.
              <br />
              Your Welfare is Our Priority.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "linkedin", "instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social}
                  >
                    <span className="text-xs text-white/60 uppercase font-bold">
                      {social[0].toUpperCase()}
                    </span>
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-5 text-white/90">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-5 text-white/90">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={s.slug}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-sm mb-5 text-white/90">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {PHONE_NUMBER}
                  </a>
                  <a href={`tel:${SECONDARY_PHONE_NUMBER.replace(/\s/g, "")}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {SECONDARY_PHONE_NUMBER}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-sm text-white/50 hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-white/50 leading-relaxed">
                  {ADDRESS}
                </span>
              </li>
            </ul>

            <h3 className="font-heading font-bold text-sm mb-4 mt-8 text-white/90">
              Partner Companies
            </h3>
            <ul className="space-y-2">
              {partners.map((partner) => (
                <li key={partner}>
                  <span className="text-sm text-white/50">{partner}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} No1 Insurance by SD Financial Solution.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/40">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
          <button
            suppressHydrationWarning
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>
    </footer>
  );
}
