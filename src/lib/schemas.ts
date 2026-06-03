export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredTime: string;
}

export function validateLeadForm(data: LeadFormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.name || data.name.trim().length < 2)
    errors.name = "Name is required (min 2 characters)";
  if (!data.phone || !/^[+]?[\d\s()-]{10,15}$/.test(data.phone))
    errors.phone = "Valid phone number required";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Valid email required";
  if (!data.service) errors.service = "Please select a service";
  return errors;
}

export function validateQuoteForm(data: QuoteFormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.name || data.name.trim().length < 2)
    errors.name = "Name is required";
  if (!data.phone || !/^[+]?[\d\s()-]{10,15}$/.test(data.phone))
    errors.phone = "Valid phone number required";
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Valid email required";
  if (!data.service) errors.service = "Please select a service";
  return errors;
}
