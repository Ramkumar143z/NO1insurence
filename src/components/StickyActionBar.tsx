"use client";

import { Phone, MessageCircle, CalendarCheck, ChevronRight } from "lucide-react";
import { getWhatsAppLink, PHONE_NUMBER } from "@/lib/utils";

export default function StickyActionBar() {
  return (
    <div className="lg:hidden fixed bottom-[72px] left-0 right-0 z-40 px-4 pb-2 pointer-events-none">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-gray-100/80 p-2 pointer-events-auto">
        <div className="flex items-center gap-2">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Call</span>
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="text-[10px] font-semibold">WhatsApp</span>
          </a>
          <a
            href="/contact"
            className="flex-1 flex flex-col items-center gap-0.5 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors shadow-sm"
          >
            <CalendarCheck className="w-4 h-4" />
            <span className="text-[10px] font-semibold">Quote</span>
          </a>
          <a
            href="/contact"
            className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-dark-navy text-white hover:bg-dark-navy/90 transition-colors shadow-sm"
          >
            <span className="text-[10px] font-semibold">Consult</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
