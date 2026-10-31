import type { MetadataRoute } from "next";
import { localizedPath, siteUrl } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/expertise", "/academic", "/research", "/international", "/training", "/cv", "/contact"];
  return paths.flatMap((path) => [
    { url: new URL(localizedPath("en", path), siteUrl).toString(), changeFrequency: "monthly" as const },
    { url: new URL(localizedPath("ar", path), siteUrl).toString(), changeFrequency: "monthly" as const },
  ]);
}
