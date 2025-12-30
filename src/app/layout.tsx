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
    title: "Financial UX Strategy Case Study | High-Trust Design",
    description: "A conceptual strategic redesign of a boutique RIA website, moving from 'generic capability listing' to a conversion-focused asset for UHNW tech founders.",
    openGraph: {
        title: "Financial UX Strategy Case Study",
        description: "Building Trust in High-Stakes Wealth Management. A strategic redesign analysis.",
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
