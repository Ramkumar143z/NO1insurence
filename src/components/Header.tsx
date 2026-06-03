"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER, getWhatsAppLink } from "@/lib/utils";

const serviceSlugs: Record<string, string> = {
  "Life Insurance": "/services/life-insurance",
  "Health Insurance": "/services/health-insurance",
  "Vehicle Insurance": "/services/vehicle-insurance",
  "Mutual Funds": "/services/mutual-funds",
  "Corporate Bonds": "/services/corporate-bonds",
  "Capital Gain Bonds": "/services/capital-gain-bonds",
  "Tax Planning": "/services/tax-planning",
  "Financial Planning": "/services/financial-planning",
  "Home Loans": "/services/home-loans",
};

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Insurance",
    href: "/services",
    dropdown: [
      "Life Insurance",
      "Health Insurance",
      "Vehicle Insurance",
    ],
  },
  {
    label: "Investments",
    href: "/services",
    dropdown: ["Mutual Funds", "Corporate Bonds", "Capital Gain Bonds"],
  },
  { 
    label: "Planning & Loans", 
    href: "/services", 
    dropdown: ["Tax Planning", "Financial Planning", "Home Loans"] 
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    setIsTouchDevice("ontouchstart" in window);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const startCloseTimer = useCallback(() => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, [clearCloseTimer]);

  const openDropdown = useCallback(
    (label: string) => {
      clearCloseTimer();
      setActiveDropdown(label);
    },
    [clearCloseTimer]
  );

  const closeDropdown = useCallback(() => {
    startCloseTimer();
  }, [startCloseTimer]);

  useEffect(() => {
    if (!isTouchDevice) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isTouchDevice]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownMouseEnter = (label: string) => {
    if (isTouchDevice) return;
    openDropdown(label);
  };

  const handleDropdownMouseLeave = () => {
    if (isTouchDevice) return;
    closeDropdown();
  };

  const handleNavItemClick = (item: (typeof navItems)[number]) => {
    if (!isTouchDevice) return;
    if (item.dropdown) {
      if (mobileDropdownOpen === item.label) {
        setMobileDropdownOpen(null);
      } else {
        setMobileDropdownOpen(item.label);
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="No1 Insurance Logo" 
                width={200} 
                height={70} 
                className="h-12 sm:h-14 w-auto object-contain" 
                priority 
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" role="navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                style={{ zIndex: activeDropdown === item.label ? 60 : 1 }}
              >
                {item.dropdown ? (
                  <div
                    className="inline-block"
                    onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      suppressHydrationWarning
                      type="button"
                      onClick={() => handleNavItemClick(item)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        activeDropdown === item.label
                          ? "text-primary bg-blue-50"
                          : "text-text hover:text-primary hover:bg-blue-50"
                      }`}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <div
                          onMouseEnter={() => openDropdown(item.label)}
                          onMouseLeave={handleDropdownMouseLeave}
                          className="absolute top-full left-0 pt-2"
                          style={{ zIndex: 70 }}
                        >
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.97 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className="w-56 bg-white rounded-xl shadow-xl border border-border py-2 overflow-hidden"
                            role="menu"
                          >
                            {item.dropdown.map((d) => {
                              const slug = serviceSlugs[d];
                              return slug ? (
                                <Link
                                  key={d}
                                  href={slug}
                                  className="block px-4 py-2.5 text-sm text-text hover:text-primary hover:bg-blue-50 transition-colors"
                                  role="menuitem"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {d}
                                </Link>
                              ) : null;
                            })}
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex px-3 py-2 text-sm font-medium text-text hover:text-primary rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 text-primary transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 text-green-600 transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="hidden sm:flex lg:flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>{PHONE_NUMBER}</span>
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Free Consultation
            </Link>
            <button
              suppressHydrationWarning
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => {
                setIsOpen(!isOpen);
                setMobileDropdownOpen(null);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                  setMobileDropdownOpen(null);
                }
              }}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-text" />
              ) : (
                <Menu className="w-6 h-6 text-text" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-white overflow-hidden shadow-lg"
            style={{ zIndex: 50 }}
          >
            <div className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <button
                        suppressHydrationWarning
                        type="button"
                        onClick={() =>
                          setMobileDropdownOpen(
                            mobileDropdownOpen === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-primary rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileDropdownOpen === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 space-y-0.5 pb-1">
                              {item.dropdown.map((d) => {
                                const slug = serviceSlugs[d];
                                return slug ? (
                                  <Link
                                    key={d}
                                    href={slug}
                                    className="block px-3 py-2 text-sm text-text hover:text-primary rounded-lg hover:bg-blue-50 transition-colors"
                                    onClick={handleNavClick}
                                  >
                                    {d}
                                  </Link>
                                ) : null;
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium text-text hover:text-primary rounded-lg hover:bg-blue-50 transition-colors"
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-border">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all"
                  onClick={handleNavClick}
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
