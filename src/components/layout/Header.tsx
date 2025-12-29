import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-muted">
            <Container className="flex h-20 items-center justify-between">
                <Link href="/" className="text-2xl font-serif font-bold text-primary tracking-tight">
                    Anchor Capital
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    {["Services", "Philosophy", "Process"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="hidden sm:inline-block text-sm font-medium text-muted-foreground hover:text-primary">
                        Client Login
                    </Link>
                    <Button size="sm" href="#contact">
                        Private Consultation
                    </Button>
                </div>
            </Container>
        </header>
    );
}
