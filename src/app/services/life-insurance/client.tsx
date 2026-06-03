"use client";

import { getService } from "@/data/services";
import ServicePage from "@/components/ServicePage";

export default function ServicePageClient() {
  const service = getService("life-insurance");
  if (!service) return null;
  return <ServicePage service={service} />;
}
