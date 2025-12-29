import Link from "next/link";
import { MoveRight } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    href?: string;
    withArrow?: boolean;
}

export function Button({
    className,
    variant = "primary",
    size = "md",
    href,
    withArrow,
    children,
    ...props
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary:
            "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm",
        outline:
            "border border-input bg-transparent hover:bg-muted hover:text-foreground",
        ghost: "hover:bg-muted hover:text-foreground",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs tracking-wide uppercase",
        md: "h-11 px-8 text-sm tracking-wide",
        lg: "h-14 px-10 text-base",
    };

    const classes = cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
    );

    const content = (
        <>
            {children}
            {withArrow && <MoveRight className="ml-2 h-4 w-4" />}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {content}
        </button>
    );
}
