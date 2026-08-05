import type { Metadata } from "next";
import { Inter, Bebas_Neue, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE, LOCAL_BUSINESS_SCHEMA } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600","700","800","900"] });
const bebas = Bebas_Neue({ variable: "--font-bebas", subsets: ["latin"], weight: ["400"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "SCCS NWI | Water, Fire & Mold Restoration in NW Indiana", template: "%s | SCCS NWI" },
  description: "Family-owned restoration company serving NW Indiana since 2012. 24/7 emergency water, fire, and mold remediation. IICRC certified. Call (219) 779-8198.",
  openGraph: {
    title: "SCCS NWI | Water, Fire & Mold Restoration in NW Indiana",
    description: "Family-owned restoration company serving NW Indiana since 2012. 24/7 emergency response.",
    url: SITE.url,
    siteName: "SCCS NWI",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-bg-950 text-text-primary font-sans">
        <main className="flex-1 overflow-x-hidden w-full max-w-full">{children}</main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }} />
      </body>
    </html>
  );
}
