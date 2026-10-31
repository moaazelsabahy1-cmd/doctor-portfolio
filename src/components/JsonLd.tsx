import { personJsonLd } from "@/lib/seo";

export function JsonLd() {
  const data = personJsonLd();
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
