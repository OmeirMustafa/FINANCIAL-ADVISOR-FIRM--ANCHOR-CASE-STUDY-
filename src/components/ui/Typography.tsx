import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function H1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1 className={cn("text-4xl sm:text-5xl md:text-6xl font-serif text-primary tracking-tight leading-[1.1]", className)} {...props}>
            {children}
        </h1>
    );
}

export function H2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2 className={cn("text-3xl sm:text-4xl font-serif text-primary tracking-tight mb-6", className)} {...props}>
            {children}
        </h2>
    );
}

export function H3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-xl sm:text-2xl font-serif text-primary mb-4", className)} {...props}>
            {children}
        </h3>
    );
}

export function P({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-base md:text-lg text-muted-foreground leading-relaxed", className)} {...props}>
            {children}
        </p>
    );
}
