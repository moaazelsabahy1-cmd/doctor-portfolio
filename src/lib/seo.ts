import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { t } from "@/content/messages";
import { localizedPath, siteUrl, type Locale } from "@/lib/i18n";

const pathByKey = {
  home: "/",
  about: "/about",
  expertise: "/expertise",
  academic: "/academic",
  research: "/research",
  international: "/international",
  training: "/training",
  cv: "/cv",
  contact: "/contact",
} as const;

export type PageKey = keyof typeof pathByKey;

function abs(path: string) {
  return new URL(path, siteUrl).toString();
}

export function pageMetadata(locale: Locale, key: PageKey): Metadata {
  const m = t(locale);
  const titleMap: Record<PageKey, string> = {
    home: m.seo.homeTitle,
    about: m.seo.aboutTitle,
    expertise: m.seo.expertiseTitle,
    academic: m.seo.academicTitle,
    research: m.seo.researchTitle,
    international: m.seo.intlTitle,
    training: m.seo.trainingTitle,
    cv: m.seo.cvTitle,
    contact: m.seo.contactTitle,
  };
  const descMap: Record<PageKey, string> = {
    home: m.seo.homeDesc,
    about: m.seo.aboutDesc,
    expertise: m.seo.expertiseDesc,
    academic: m.seo.academicDesc,
    research: m.seo.researchDesc,
    international: m.seo.intlDesc,
    training: m.seo.trainingDesc,
    cv: m.seo.cvDesc,
    contact: m.seo.contactDesc,
  };
  const path = pathByKey[key];
  const en = localizedPath("en", path);
  const ar = localizedPath("ar", path);
  const canonical = locale === "ar" ? ar : en;

  return {
    title: titleMap[key],
    description: descMap[key],
    alternates: {
      canonical: abs(canonical),
      languages: {
        en: abs(en),
        ar: abs(ar),
        "x-default": abs(en),
      },
    },
    openGraph: {
      title: titleMap[key],
      description: descMap[key],
      url: abs(canonical),
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "profile",
      images: [{ url: abs(profile.portraitSrc), alt: profile.fullName[locale] }],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: profile.fullName.en,
    honorificPrefix: "Prof. Dr.",
    jobTitle: profile.academicTitle.en,
    email: profile.emails.map((e) => `mailto:${e}`),
    telephone: profile.phones.map((p) => p.href.replace("tel:", "")),
    url: siteUrl,
    image: abs(profile.portraitSrc),
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "Tanta University",
      url: profile.universityUrl,
    },
    sameAs: [profile.linkedin, profile.universityUrl],
  };
}
