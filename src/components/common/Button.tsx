import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export function Button({
    children,
    href,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center rounded-sm transition-colors duration-200 font-medium cursor-pointer";

    const variants = {
        primary: "bg-foreground text-background hover:opacity-90", // Charcoal bg, Off-white text
        secondary: "bg-accent text-white hover:opacity-90", // Gray bg
        outline: "border border-foreground text-foreground hover:bg-foreground hover:text-background",
        text: "text-foreground hover:text-accent underline-offset-4 hover:underline",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const widthClass = fullWidth ? "w-full" : "";

    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
