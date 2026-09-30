import type { Metadata, Viewport } from "next";
import { Fraunces, Martian_Mono, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import { site, paletteHex } from "@/content/site";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});
const body = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Martian_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = `${site.name}: ${site.line}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s · ${site.name}` },
  description: site.sub,
  alternates: { canonical: "/" },
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.sub,
  },
  twitter: { card: "summary_large_image", title, description: site.sub },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: paletteHex.ink, colorScheme: "dark" };

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  ...(site.email ? { email: site.email } : {}),
  jobTitle: "AI systems engineer",
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette={site.palette} className={`${fraunces.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}
