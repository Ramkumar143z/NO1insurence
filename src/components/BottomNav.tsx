"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, ShieldCheck, TrendingUp, Phone, Menu } from "lucide-react";

const items = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Insurance", icon: ShieldCheck, href: "/services#insurance" },
  { label: "Investments", icon: TrendingUp, href: "/services#investments" },
  { label: "Contact", icon: Phone, href: "/contact" },
  { label: "Menu", icon: Menu, href: "/services" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe">
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/80 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around py-1.5">
          {items.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors min-w-[52px] ${
                  isActive
                    ? "text-primary"
                    : "text-muted hover:text-text"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className={`text-[10px] font-medium leading-tight ${isActive ? "font-semibold" : ""}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
