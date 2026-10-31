export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";
export const localeStorageKey = "locale";

export const routes = [
  "/",
  "/about",
  "/expertise",
  "/academic",
  "/research",
  "/international",
  "/training",
  "/cv",
  "/contact",
] as const;

export type AppPath = (typeof routes)[number];

export function localizedPath(locale: Locale, path: AppPath | string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withoutAr = clean.replace(/^\/ar(?=\/|$)/, "") || "/";
  const normalized = withoutAr === "" ? "/" : withoutAr;
  if (locale === "en") return normalized;
  if (normalized === "/") return "/ar/";
  return `/ar${normalized}`.replace(/\/?$/, "/");
}

export function stripLocale(pathname: string): string {
  const noSlash = pathname.replace(/\/$/, "") || "/";
  if (noSlash === "/ar") return "/";
  if (noSlash.startsWith("/ar/")) return noSlash.slice(3) || "/";
  return noSlash;
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://prof-dina-maria.example";
