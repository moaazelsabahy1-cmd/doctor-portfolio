import { DocumentLang } from "@/components/DocumentLang";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Locale } from "@/lib/i18n";

export function SiteShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"} lang={locale === "ar" ? "ar" : "en"}>
      <DocumentLang locale={locale} />
      <Navbar locale={locale} />
      <main id="content">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
