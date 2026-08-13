import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: { default: "KIVO — Studio digital", template: "%s — KIVO" },
  description: "KIVO imagine et développe des expériences digitales fortes : sites web, identités et contenus social media.",
  openGraph: { title: "KIVO — Studio digital", description: "Web development, social media & branding.", images: ["/brand/kivo-banner.png"], locale: "fr_FR", type: "website" },
  twitter: { card: "summary_large_image", title: "KIVO — Studio digital", images: ["/brand/kivo-banner.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={`${manrope.variable} ${space.variable}`}><body><a href="#main" className="skip-link">Aller au contenu</a><Navbar /><main id="main">{children}</main><Footer /></body></html>;
}
