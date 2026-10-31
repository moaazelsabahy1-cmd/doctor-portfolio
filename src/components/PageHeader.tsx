import Link from "next/link";
import { t } from "@/content/messages";
import { localizedPath, type Locale } from "@/lib/i18n";

export function PageHeader({
  locale,
  title,
  subtitle,
  crumbs,
}: {
  locale: Locale;
  title: string;
  subtitle?: string;
  crumbs: { href: string; label: string }[];
}) {
  const m = t(locale);
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)] bg-navy-deep text-ivory">
      <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #2a9d8f33, transparent 40%), radial-gradient(circle at 80% 0%, #c4a35a33, transparent 35%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 lg:px-8">
        <nav aria-label={m.common.breadcrumbs} className="mb-6 text-xs tracking-[0.2em] uppercase text-gold-soft">
          <Link href={localizedPath(locale, "/")} className="opacity-80 hover:opacity-100">
            {m.nav.home}
          </Link>
          {crumbs.map((c) => (
            <span key={c.href}>
              <span className="mx-2 opacity-40">/</span>
              <Link href={c.href}>{c.label}</Link>
            </span>
          ))}
        </nav>
        <h1 className="font-display max-w-4xl text-4xl md:text-6xl">{title}</h1>
        {subtitle ? <p className="mt-4 max-w-2xl text-lg text-ivory/75">{subtitle}</p> : null}
      </div>
    </section>
  );
}
