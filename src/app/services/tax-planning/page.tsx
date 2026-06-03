import type { Metadata } from "next";
import { getService } from "@/data/services";
import ServicePageClient from "./client";

export function generateMetadata(): Metadata {
  const service = getService("tax-planning");
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    openGraph: { title: service.metaTitle, description: service.metaDesc },
  };
}

export default function Page() {
  return <ServicePageClient />;
}
