import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: "full" | "contained";
    background?: "default" | "muted" | "primary" | "secondary";
}

export function Section({
    className,
    background = "default",
    children,
    ...props
}: SectionProps) {
    const backgrounds = {
        default: "bg-background",
        muted: "bg-muted/50",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
    };

    return (
        <section
            className={cn("py-20 md:py-28", backgrounds[background], className)}
            {...props}
        >
            {children}
        </section>
    );
}
