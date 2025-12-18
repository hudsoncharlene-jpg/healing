import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1A0089",
};

export const metadata: Metadata = {
  title: "Healing - Human Energy Field by Dr. Charlene Hudson",
  description: "Natürliche Heilung für Körper und Seele - Energitisiert durch den Tag. Ganzheitliche Gesundheit durch Schulmedizin, Naturheilkunde und Energiearbeit.",
  keywords: ["Heilung", "Naturheilkunde", "Osteopathie", "Energiearbeit", "Ganzheitliche Medizin", "Dr. Charlene Hudson"],
  authors: [{ name: "Dr. Charlene Hudson" }],
  openGraph: {
    title: "Healing - Human Energy Field by Dr. Charlene Hudson",
    description: "Natürliche Heilung für Körper und Seele - Energitisiert durch den Tag",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
