import type { ReactNode } from "react";

const widths = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
} as const;

interface ContainerProps {
    children: ReactNode;
    size?: keyof typeof widths;
    className?: string;
}

export function Container({
    children,
    size = "2xl",
    className= "",
                          }: ContainerProps) {
    return (
        <div
        className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${widths[size]} ${className}`}>
            {children}
        </div>
    );
}