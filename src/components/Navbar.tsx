"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { profile } from "@/content/profile";
import { t } from "@/content/messages";
import { localeStorageKey, localizedPath, type Locale } from "@/lib/i18n";

const primary = ["/", "/about", "/expertise", "/academic", "/research", "/international"] as const;
const more = [
  { path: "/training", key: "training" as const },
  { path: "/cv", key: "cv" as const },
];

export function Navbar({ locale }: { locale: Locale }) {
  const m = t(locale);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (next: Locale) => {
    try {
      localStorage.setItem(localeStorageKey, next);
    } catch {
      /* ignore */
    }
    const current = window.location.pathname;
    const map: Record<string, string> = {
      "/": "/",
      "/ar": "/",
      "/ar/": "/",
    };
    let target = map[current];
    if (!target) {
      const stripped = current.replace(/^\/ar/, "") || "/";
      target = stripped;
    }
    const href = localizedPath(next, target);
    window.location.href = href.endsWith("/") ? href : `${href}/`;
  };

  const labels: Record<(typeof primary)[number], string> = {
    "/": m.nav.home,
    "/about": m.nav.about,
    "/expertise": m.nav.expertise,
    "/academic": m.nav.academic,
    "/research": m.nav.research,
    "/international": m.nav.international,
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "nav-glass border-b border-[var(--line)]" : "bg-transparent"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
      >
        {m.nav.skip}
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href={localizedPath(locale, "/")} className="font-display text-lg tracking-wide text-gold-soft md:text-xl">
          {profile.shortName[locale]}
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {primary.map((path) => (
            <Link
              key={path}
              href={localizedPath(locale, path)}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {labels[path]}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm text-[var(--muted)]"
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
            >
              {m.nav.more}
              <ChevronDown size={14} />
            </button>
            {moreOpen ? (
              <div className="absolute start-0 top-full mt-2 min-w-52 rounded-lg border border-[var(--line)] bg-[var(--bg-elev)] p-2 shadow-xl">
                {more.map((item) => (
                  <Link
                    key={item.path}
                    href={localizedPath(locale, item.path)}
                    className="block rounded px-3 py-2 text-sm hover:bg-[var(--bg)]"
                    onClick={() => setMoreOpen(false)}
                  >
                    {m.nav[item.key]}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link href={localizedPath(locale, "/contact")} className="text-sm text-[var(--muted)] hover:text-[var(--text)]">
            {m.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-[var(--line)] px-2 py-1 text-xs">
            <button type="button" className={locale === "en" ? "text-[var(--accent)]" : "opacity-60"} onClick={() => switchLocale("en")}>
              EN
            </button>
            <span className="opacity-40">|</span>
            <button type="button" className={locale === "ar" ? "text-[var(--accent)]" : "opacity-60"} onClick={() => switchLocale("ar")}>
              عربي
            </button>
          </div>
          {mounted ? (
            <button
              type="button"
              aria-label={theme === "dark" ? m.common.themeLight : m.common.themeDark}
              className="rounded-full border border-[var(--line)] p-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          ) : (
            <span className="h-8 w-8" />
          )}
          <button type="button" className="lg:hidden" aria-label={open ? m.common.close : m.common.menu} onClick={() => setOpen((v) => !v)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-[var(--line)] bg-[var(--bg-elev)] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {primary.map((path) => (
              <Link key={path} href={localizedPath(locale, path)} onClick={() => setOpen(false)}>
                {labels[path]}
              </Link>
            ))}
            {more.map((item) => (
              <Link key={item.path} href={localizedPath(locale, item.path)} onClick={() => setOpen(false)}>
                {m.nav[item.key]}
              </Link>
            ))}
            <Link href={localizedPath(locale, "/contact")} onClick={() => setOpen(false)}>
              {m.nav.contact}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
