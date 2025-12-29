import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anchor Capital | Fiduciary Wealth Management & Financial Planning",
  description: "Independent fiduciary advisors preserving wealth for high-net-worth families. Fee-only financial planning, investment management, and legacy strategy.",
  openGraph: {
    title: "Anchor Capital | Fiduciary Wealth Management",
    description: "Preserving your legacy for the next generation. Independent, fee-only advice.",
    type: "website",
    locale: "en_US",
    siteName: "Anchor Capital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable, playfair.variable)}>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
