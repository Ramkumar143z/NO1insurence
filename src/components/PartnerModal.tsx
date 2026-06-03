"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Star, Users, Award } from "lucide-react";

const partnerDetails: Record<string, {
  name: string;
  fullName: string;
  desc: string;
  founded: string;
  rating: string;
  customers: string;
  type: string;
  highlights: string[];
}> = {
  LIC: {
    name: "LIC",
    fullName: "Life Insurance Corporation of India",
    desc: "LIC is India's largest and most trusted insurance company, established by an Act of Parliament. With over 290 million policyholders, LIC is the bedrock of insurance in India, known for its financial strength and reliable claim settlement.",
    founded: "1956",
    rating: "AAA",
    customers: "29+ Crore",
    type: "Life Insurance",
    highlights: [
      "India's largest insurer with 70%+ market share",
      "Assets under management of over ₹50 lakh crore",
      "Settles over 2.5 crore claims annually",
      "Present in every corner of India",
      "Multiple award-winning company",
    ],
  },
  "TATA AIA": {
    name: "TATA AIA",
    fullName: "TATA AIA Life Insurance",
    desc: "TATA AIA Life Insurance is a joint venture between Tata Sons and AIA Group, combining the Tata Group's trust and legacy with AIA's global insurance expertise. Known for innovative products and excellent customer service.",
    founded: "2001",
    rating: "AAA",
    customers: "50+ Lakh",
    type: "Life Insurance",
    highlights: [
      "Joint venture with AIA Group - Asia's largest life insurer",
      "Part of the prestigious Tata Group",
      "Innovative product range with digital-first approach",
      "Excellent claim settlement ratio",
      "Strong financial ratings from all agencies",
    ],
  },
  "TATA AIG": {
    name: "TATA AIG",
    fullName: "TATA AIG Insurance",
    desc: "TATA AIG General Insurance is a joint venture between Tata Group and American International Group (AIG). They offer a wide range of general insurance products including motor, health, travel, and home insurance.",
    founded: "2001",
    rating: "AAA",
    customers: "40+ Lakh",
    type: "General Insurance",
    highlights: [
      "Joint venture between Tata Group and AIG",
      "Wide network of cashless garages and hospitals",
      "Fast and hassle-free claim settlement",
      "Innovative digital insurance solutions",
      "Strong financial backing from both parent groups",
    ],
  },
  "New India Assurance": {
    name: "New India Assurance",
    fullName: "The New India Assurance Company Limited",
    desc: "New India Assurance is India's largest general insurance company, owned by the Government of India. With operations in 28 countries, it has a truly global presence and is known for its reliable claim settlement.",
    founded: "1919",
    rating: "AAA",
    customers: "11+ Crore",
    type: "General Insurance",
    highlights: [
      "India's largest public sector general insurer",
      "Global presence in 28 countries",
      "Over 100 years of trust and service",
      "Massive network of 1,000+ offices",
      "Trusted by both individuals and corporates",
    ],
  },
  "Star Health": {
    name: "Star Health",
    fullName: "Star Health Insurance",
    desc: "Star Health is India's first standalone health insurance company and the largest health insurer in the country. Specialized exclusively in health insurance, they offer comprehensive health coverage with a vast network of hospitals.",
    founded: "2006",
    rating: "AA+",
    customers: "2+ Crore",
    type: "Health Insurance",
    highlights: [
      "India's largest standalone health insurer",
      "Exclusive focus on health insurance products",
      "Network of 12,000+ cashless hospitals",
      "Innovative health insurance solutions",
      "High claim settlement ratio in health segment",
    ],
  },
};

export default function PartnerModal({
  partner,
  onClose,
}: {
  partner: string | null;
  onClose: () => void;
}) {
  const details = partner ? partnerDetails[partner] : null;

  return (
    <AnimatePresence>
      {details && (
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
            <div className="relative gradient-primary p-6 rounded-t-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">{details.fullName}</h3>
              <p className="text-white/70 text-sm mt-1">{details.type}</p>
            </div>

            <div className="p-6 space-y-5">
              <p className="text-sm text-text leading-relaxed">{details.desc}</p>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <Award className="w-4 h-4 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted">Rating</p>
                  <p className="text-sm font-bold text-primary">{details.rating}</p>
                </div>
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <Star className="w-4 h-4 text-green mx-auto mb-1" />
                  <p className="text-xs text-muted">Established</p>
                  <p className="text-sm font-bold text-green">{details.founded}</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-3 text-center">
                  <Users className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                  <p className="text-xs text-muted">Customers</p>
                  <p className="text-sm font-bold text-purple-600">{details.customers}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-3 text-center">
                  <ShieldCheck className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                  <p className="text-xs text-muted">Type</p>
                  <p className="text-sm font-bold text-amber-600">{details.type}</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-heading font-bold text-dark-navy mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  {details.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
