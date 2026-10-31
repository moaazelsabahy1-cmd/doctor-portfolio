"use client";

import { useState } from "react";
import { Copy, Search } from "lucide-react";
import { publications, citationText, topicLabels } from "@/content/publications";
import { expertiseGroups } from "@/content/expertise";
import type { Locale } from "@/lib/i18n";
import { t } from "@/content/messages";
import { MotionItem, Stagger } from "@/components/Motion";

export function ExpertiseAccordion({ locale }: { locale: Locale }) {
  const m = t(locale); const [open, setOpen] = useState<string | null>(null);
  return <Stagger className="grid gap-3 md:grid-cols-2">{expertiseGroups.map((g, i) => (
    <MotionItem key={g.id}>
    <article className={`lux-card ${i === 0 ? "md:row-span-2" : ""}`}>
      <button className="flex w-full items-center justify-between text-start" onClick={() => setOpen(open === g.id ? null : g.id)} aria-expanded={open === g.id}>
        <span><span className="eyebrow">0{i + 1}</span><span className="mt-2 block font-display text-2xl">{g.title[locale]}</span></span>
        <span className="text-2xl text-[var(--accent)]">{open === g.id ? "−" : "+"}</span>
      </button>
      {open === g.id && <ul className="mt-5 space-y-3 border-t border-[var(--line)] pt-4 text-sm leading-7 text-[var(--muted)]">{g.items.map((item) => <li key={item.en}>• {item[locale]}</li>)}</ul>}
      {open !== g.id && <p className="mt-3 text-sm text-[var(--muted)]">{m.expertise.expand}</p>}
    </article>
    </MotionItem>
  ))}</Stagger>;
}

export function ResearchLibrary({ locale }: { locale: Locale }) {
  const m = t(locale); const [query, setQuery] = useState(""); const [topic, setTopic] = useState("all"); const [copied, setCopied] = useState("");
  const filtered = publications.filter((p) => `${p.title} ${p.authors} ${p.venue || ""}`.toLowerCase().includes(query.toLowerCase()) && (topic === "all" || p.topics.includes(topic)));
  const copy = async (id: string, text: string) => { await navigator.clipboard?.writeText(text); setCopied(id); setTimeout(() => setCopied(""), 1200); };
  return <div>
    <div className="mb-8 grid gap-3 md:grid-cols-[1fr_auto]">
      <label className="input-wrap"><Search size={17}/><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={m.research.search} aria-label={m.research.search}/></label>
      <select className="input" value={topic} onChange={(e) => setTopic(e.target.value)} aria-label={m.research.allTopics}><option value="all">{m.research.allTopics}</option>{Object.entries(topicLabels).map(([id, label]) => <option key={id} value={id}>{label[locale]}</option>)}</select>
    </div>
    <Stagger className="grid gap-5">{filtered.map((p, i) => <MotionItem key={p.id}><article className="lux-card relative overflow-hidden"><span className="eyebrow">{String(i + 1).padStart(2, "0")}{p.year ? ` / ${p.year}` : ""}</span><h3 className="mt-3 font-display text-2xl leading-tight">{p.title}</h3><p className="mt-3 text-sm text-[var(--muted)]">{p.authors}</p>{(p.venue || p.year) && <p className="mt-2 text-sm text-[var(--muted)]">{[p.venue, p.year].filter(Boolean).join(" · ")}</p>}<div className="mt-5 flex flex-wrap items-center gap-3 text-sm"><button className="inline-flex items-center gap-2 text-[var(--accent)]" onClick={() => copy(p.id, citationText(p))}><Copy size={15}/>{copied === p.id ? m.common.copied : m.research.copyCite}</button>{p.url ? <a href={p.url} target="_blank" rel="noreferrer" className="text-[var(--muted)] underline decoration-[var(--accent)] underline-offset-4">{m.research.external}</a> : <span className="text-[var(--muted)]">{m.research.noLink}</span>}</div></article></MotionItem>)}{!filtered.length && <p className="text-[var(--muted)]">{m.research.empty}</p>}</Stagger>
  </div>;
}

export function CopyEmail({ email, label }: { email: string; label: string }) {
  const [done, setDone] = useState(false); return <button className="text-start text-[var(--accent)]" onClick={async () => { await navigator.clipboard?.writeText(email); setDone(true); setTimeout(() => setDone(false), 1200); }}>{done ? "Copied" : label}</button>;
}
