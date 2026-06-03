export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

export const WHATSAPP_NUMBER = "919123521252";
export const PHONE_NUMBER = "+91 9123521252";
export const SECONDARY_PHONE_NUMBER = "+91 9361426787";
export const EMAIL = "swathidivakar67@gmail.com";
export const WEBSITE = "www.no1insurance.in";
export const ADDRESS = "S.S. Flats, 106, NSK Street, Selvapuram, Coimbatore - 641026, Tamil Nadu, India";

export function getWhatsAppLink(serviceName?: string): string {
  const message = serviceName 
    ? `Hello No1 Insurance,\nI am interested in ${serviceName}.\nPlease contact me.`
    : `Hello No1 Insurance,\nI would like to know more about your services.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
