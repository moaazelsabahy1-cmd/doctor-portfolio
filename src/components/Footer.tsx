import Link from "next/link";
import { profile } from "@/content/profile";
import { t } from "@/content/messages";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const m = t(locale);
  return (
    <footer className="mt-24 border-t border-[var(--line)] bg-[var(--bg-elev)]">
      <div className="gold-rule" />
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-2xl">{profile.shortName[locale]}</p>
          <p className="mt-2 text-sm text-[var(--muted)]">{profile.academicTitle[locale]}</p>
          <p className="text-sm text-[var(--muted)]">{profile.affiliation[locale]}</p>
        </div>
        <div className="text-sm">
          <p>
            <a className="hover:text-[var(--accent)]" href={`mailto:${profile.emails[0]}`}>
              {profile.emails[0]}
            </a>
          </p>
          <p className="mt-2">
            <a href={profile.phones[0].href}>{profile.phones[0].display}</a>
          </p>
          <p className="mt-2">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
        <div className="text-sm text-[var(--muted)]">
          <p>{m.footer.trainingNote}</p>
          <p className="mt-4">
            <Link href={localizedPath(locale, "/cv")} className="text-[var(--accent)]">
              {m.nav.cv}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
