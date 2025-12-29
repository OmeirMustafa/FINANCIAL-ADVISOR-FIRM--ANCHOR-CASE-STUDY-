import { Container } from "../ui/Container";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-16">
            <Container className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <span className="text-2xl font-serif font-bold block mb-6">Anchor Capital</span>
                    <p className="text-primary-foreground/70 max-w-sm mb-8">
                        Fiduciary wealth management for high-net-worth individuals and families. Preserving capital, mitigating risk, and securing legacies for the next generation.
                    </p>
                    <div className="text-sm text-primary-foreground/50 space-y-1">
                        <p>100 West 57th Street, Floor 18</p>
                        <p>New York, NY 10019</p>
                        <p>+1 (212) 555-0123</p>
                    </div>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">Services</h4>
                    <ul className="space-y-4 text-primary-foreground/70">
                        <li>Weatlh Preservation</li>
                        <li>Tax & Estate Strategy</li>
                        <li>Philanthropic Planning</li>
                        <li>Next-Gen Education</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-serif text-lg mb-6">Legal</h4>
                    <ul className="space-y-4 text-primary-foreground/70">
                        <li>Form ADV</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Disclosures</li>
                    </ul>
                </div>
            </Container>

            <Container className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
                <p>&copy; {new Date().getFullYear()} Anchor Capital Management. All rights reserved.</p>
                <p className="mt-2 text-xs">Anchor Capital is a registered investment advisor. Information presented is for educational purposes only and does not intend to make an offer or solicitation for the sale or purchase of any specific securities, investments, or investment strategies.</p>
            </Container>
        </footer>
    );
}
