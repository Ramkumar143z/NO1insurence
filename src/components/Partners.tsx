"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PartnerModal from "./PartnerModal";

import Image from "next/image";

const partners = [
  { name: "LIC", desc: "Life Insurance Corporation", image: "/images/partners/lic.png" },
  { name: "TATA AIA", desc: "Tata AIA Life Insurance", image: "/images/partners/tata_aia.png" },
  { name: "TATA AIG", desc: "Tata AIG Insurance", image: "/images/partners/tata_aig.png" },
  { name: "New India Assurance", desc: "The New India Assurance Co. Ltd.", image: "/images/partners/nia.png" },
  { name: "Star Health", desc: "Star Health Insurance", image: "/images/partners/star_health.png" },
];

export default function Partners() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-16 lg:py-20 bg-gray-50/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-navy mb-4">
            Trusted Insurance Partners
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We partner with India&apos;s most trusted insurance companies to bring you
            the best coverage at the most competitive rates.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="hidden lg:flex gap-8 animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                onClick={() => setSelected(partner.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelected(partner.name);
                  }
                }}
                className="flex-shrink-0 w-56 bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all group text-left cursor-pointer"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-300 mix-blend-multiply">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs font-semibold text-text text-center">{partner.name}</p>
                <p className="text-[10px] text-muted text-center mt-1">{partner.desc}</p>
              </div>
            ))}
          </div>
          <div className="flex lg:hidden gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 pb-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                onClick={() => setSelected(partner.name)}
                className="flex-shrink-0 w-[140px] snap-start bg-white rounded-2xl border border-border/60 p-4 hover:shadow-lg transition-all text-center cursor-pointer"
              >
                <div className="h-14 flex items-center justify-center mb-3">
                  <div className="relative w-full h-full mix-blend-multiply">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs font-semibold text-text">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PartnerModal partner={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
