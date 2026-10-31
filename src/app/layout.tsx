import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://prof-dina-maria.example"),
  title: "Dr. Dina Abdelsalam",
  description: "Academic portfolio of Dr. Dina Abdelsalam.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html suppressHydrationWarning><body><Providers>{children}</Providers></body></html>;
}
