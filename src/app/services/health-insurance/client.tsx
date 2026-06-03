"use client";

import { getService } from "@/data/services";
import ServicePageLayout from "@/components/ServicePage";

export default function ServicePageClient() {
  const service = getService("health-insurance");
  if (!service) return null;
  return <ServicePageLayout service={service} />;
}
