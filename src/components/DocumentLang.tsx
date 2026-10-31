"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n";

export function DocumentLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "ar" ? "ar" : "en";
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.documentElement.lang="${locale === "ar" ? "ar" : "en"}";document.documentElement.dir="${locale === "ar" ? "rtl" : "ltr"}";`,
      }}
    />
  );
}
