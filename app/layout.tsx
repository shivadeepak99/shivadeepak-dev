import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { siteMeta } from "@/lib/data";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: `${siteMeta.name} — ${siteMeta.title}`,
    template: `%s — ${siteMeta.name}`,
  },
  description: siteMeta.description,
  keywords: [
    "Shiva Deepak",
    "AI Engineer",
    "Founder",
    "PromptForge AI",
    "Agentic AI",
    "LangGraph",
    "MCP",
    "RAG",
    "IIT Madras",
  ],
  authors: [{ name: siteMeta.name, url: siteMeta.url }],
  creator: siteMeta.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMeta.url,
    title: `${siteMeta.name} — ${siteMeta.title}`,
    description: siteMeta.description,
    siteName: siteMeta.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
