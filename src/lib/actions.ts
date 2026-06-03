"use server";

import { validateLeadForm, validateQuoteForm } from "./schemas";

export type ActionResult = {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
};

export async function submitLeadForm(
  prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  await new Promise((r) => setTimeout(r, 800));

  const data = {
    name: (formData.get("name") as string) || "",
    phone: (formData.get("phone") as string) || "",
    email: (formData.get("email") as string) || "",
    service: (formData.get("service") as string) || "",
    message: (formData.get("message") as string) || "",
  };

  const errors = validateLeadForm(data);
  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  console.log("Lead captured:", data);
  return {
    success: true,
    message: "Our advisor will contact you shortly.",
  };
}

export async function submitQuoteRequest(
  prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  await new Promise((r) => setTimeout(r, 600));

  const data = {
    name: (formData.get("name") as string) || "",
    phone: (formData.get("phone") as string) || "",
    email: (formData.get("email") as string) || "",
    service: (formData.get("service") as string) || "",
    preferredTime: (formData.get("preferredTime") as string) || "",
  };

  const errors = validateQuoteForm(data);
  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  console.log("Quote request:", data);
  return {
    success: true,
    message: "Our advisor will contact you shortly.",
  };
}
