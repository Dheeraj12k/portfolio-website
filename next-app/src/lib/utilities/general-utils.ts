import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiBaseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : process.env.NEXT_PUBLIC_API_URL ??
      `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api`;

export const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

