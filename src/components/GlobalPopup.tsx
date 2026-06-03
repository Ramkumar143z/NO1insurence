"use client";

import { useState, useEffect } from "react";
import QuoteModal from "./QuoteModal";

export default function GlobalPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return <QuoteModal open={open} onClose={() => setOpen(false)} />;
}
