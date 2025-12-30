import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tech Founder Wealth Advisor | Anchor Capital",
    description: "Save 30%+ on exit taxes. Fiduciary RIA for $1M+ tech founders. Specialized in QSBS, concentration risk, and estate planning.",
};

export default function DemoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
