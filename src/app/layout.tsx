import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Tech Founder Wealth Advisor | Post-Exit Tax Optimization | Anchor Capital",
    description: "Save 30%+ on exit taxes. Fiduciary RIA for $1M+ tech founders. Specialized in QSBS, concentration risk, and estate planning.",
    openGraph: {
        title: "Anchor Capital | Post-Exit Wealth Preservation",
        description: "Fiduciary wealth management for tech founders. Stop the tax bleeding and secure your liquidity.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="antialiased min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}
