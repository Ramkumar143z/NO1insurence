"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Heart, TrendingUp, Calculator, Home, ArrowRight,
  Shield, Users, CheckCircle2, Lock, HeadphonesIcon, Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const floatingCards = [
  { icon: Shield, label: "Life\nInsurance", color: "text-blue-500", top: "5%", left: "0%" },
  { icon: Heart, label: "Health\nInsurance", color: "text-green-500", top: "15%", right: "0%" },
  { icon: TrendingUp, label: "Mutual Funds", color: "text-purple-500", top: "50%", left: "-10%" },
  { icon: Calculator, label: "Tax Planning", color: "text-amber-500", top: "45%", right: "-5%" },
  { icon: Home, label: "Home Loans", color: "text-rose-500", bottom: "15%", right: "10%" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-20 pb-8 lg:pt-20 lg:pb-10 bg-[#0a1128] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-4">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-2 lg:pt-4"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full p-1.5 pr-5 mb-5 backdrop-blur-md shadow-lg">
              <div className="bg-green-500/20 p-1.5 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-white/90 text-sm font-medium">Trusted by 5000+ Families</span>
              {/* Avatars */}
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gray-600 border border-[#0a1128] overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill className="object-cover" unoptimized />
                  </div>
                ))}
                <div className="w-6 h-6 rounded-full bg-white/10 border border-[#0a1128] flex items-center justify-center text-[10px] text-white font-medium">
                  +
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-[28px] sm:text-5xl lg:text-[52px] leading-[1.15] font-heading font-bold text-white mb-3 lg:mb-4 tracking-tight">
              Protect Your Family.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                Grow Your Wealth.
              </span>
              <br />
              Plan Your Future.
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base lg:text-lg text-white/70 mb-4 lg:mb-6 max-w-lg leading-relaxed">
              Comprehensive insurance, smart investments, and financial planning solutions under one roof.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white px-7 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-600/25"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link href="/#calculators" suppressHydrationWarning className="group flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors shadow-lg">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <span className="block text-sm font-semibold text-white">Calculators</span>
                  <span className="block text-xs text-white/60">Plan your finances</span>
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Right Content - Visual (desktop only) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex relative h-[450px] items-center justify-center"
          >
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-[260px] h-[260px] rounded-full border border-white/5" />
              <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5 border-dashed" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative mb-5">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                <div className="relative w-44 h-52 bg-gradient-to-b from-blue-300 to-blue-600 rounded-[2rem] shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center p-[2px] overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%)" }}>
                  <div className="w-full h-full bg-[#0d1b3e] flex items-center justify-center" style={{ clipPath: "polygon(50% 0%, 100% 15%, 100% 70%, 50% 100%, 0% 70%, 0% 15%)" }}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-transparent flex items-center justify-center">
                       <Users className="w-20 h-20 text-blue-200 drop-shadow-xl" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-56 h-20 -mt-14">
                <div className="absolute bottom-0 w-full h-16 bg-blue-900/50 rounded-[100%] border border-blue-500/30 blur-[2px]" />
                <div className="absolute bottom-2 w-56 left-4 h-14 bg-blue-800/80 rounded-[100%] border border-blue-400/40" />
                <div className="absolute bottom-4 w-48 left-8 h-12 bg-blue-500 rounded-[100%] border-t border-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
              </div>
            </div>
            {floatingCards.map((card, idx) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="absolute z-20"
                style={{ top: card.top, left: card.left, right: card.right, bottom: card.bottom }}
              >
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-2xl">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-inner">
                    <card.icon className={`w-4 h-4 ${card.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-white whitespace-pre-line leading-tight">
                    {card.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Data Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="space-y-4 relative z-30"
        >

          {/* Trust Features Bar */}
          <div className="bg-white rounded-xl lg:rounded-2xl p-3 lg:py-4 lg:px-6 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 lg:divide-x lg:divide-gray-100 items-center">
              <div className="flex items-center gap-2 lg:gap-2.5 lg:pl-0">
                <ShieldCheck className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs lg:text-[13px] font-bold text-dark-navy leading-tight">IRDAI Certified</div>
                  <div className="text-[10px] lg:text-[11px] text-muted">Licensed & Trusted</div>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-2.5 lg:pl-4">
                <Lock className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs lg:text-[13px] font-bold text-dark-navy leading-tight">Secure & Safe</div>
                  <div className="text-[10px] lg:text-[11px] text-muted">Your data is protected</div>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-2.5 lg:pl-4">
                <Users className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs lg:text-[13px] font-bold text-dark-navy leading-tight">Expert Advisors</div>
                  <div className="text-[10px] lg:text-[11px] text-muted">Certified professionals</div>
                </div>
              </div>
              <div className="flex items-center gap-2 lg:gap-2.5 lg:pl-4">
                <HeadphonesIcon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 shrink-0" />
                <div>
                  <div className="text-xs lg:text-[13px] font-bold text-dark-navy leading-tight">24/7 Support</div>
                  <div className="text-[10px] lg:text-[11px] text-muted">We&apos;re here to help</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
