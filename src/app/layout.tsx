import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

import BottomNav from "@/components/BottomNav";
import ScrollToTop from "@/components/ScrollToTop";
import GlobalPopup from "@/components/GlobalPopup";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NO1 Insurance | Your Welfare is Our Priority",
  description:
    "Life Insurance, Health Insurance, Vehicle Insurance, Mutual Funds, Corporate Bonds, Tax Planning, Financial Planning and Home Loans under one roof in Selvapuram, Coimbatore.",
  keywords:
    "Insurance in Selvapuram Coimbatore, Life Insurance Advisor, Health Insurance Consultant, Mutual Fund Advisor, Tax Planning Services, Corporate Bonds, Capital Gain Bonds, Financial Advisor Tamil Nadu India",
  openGraph: {
    title: "NO1 Insurance | SD Financial Solution",
    description:
      "Your Welfare is Our Priority. Trusted insurance, investment, and financial planning solutions in Selvapuram, Coimbatore.",
    type: "website",
    locale: "en_IN",
    siteName: "NO1 Insurance",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "InsuranceAgency", "FinancialService"],
    name: "NO1 Insurance",
    alternateName: "SD Financial Solution",
    description: "Your Welfare is Our Priority. Serving families and individuals with trusted insurance, investment and financial planning solutions.",
    url: "https://www.no1insurance.in",
    telephone: "+919123521252",
    email: "swathidivakar67@gmail.com",
    areaServed: ["Selvapuram", "Coimbatore", "Tamil Nadu", "India"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "S.S. Flats, 106, NSK Street",
      addressLocality: "Selvapuram, Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641026",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person",
      name: "SD Financial Solution",
    },
    knowsAbout: [
      "Life Insurance",
      "Health Insurance",
      "Vehicle Insurance",
      "Mutual Funds",
      "Corporate Bonds",
      "Capital Gain Bonds",
      "Tax Planning",
      "Financial Planning",
      "Home Loans",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
    },
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased pb-[72px] lg:pb-0">
        <ScrollToTop />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <BottomNav />
        <GlobalPopup />
      </body>
    </html>
  );
}
