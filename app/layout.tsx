import type { Metadata } from "next";
import { Fredoka, Patrick_Hand } from "next/font/google";
import "./globals.css";

// Rounded, friendly UI/body face.
const fredoka = Fredoka({
    subsets: ["latin"],
    variable: "--font-fredoka",
});

// Hand-marker display face for titles.
const gochiHand = Patrick_Hand({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-gochi",
});

export const metadata: Metadata = {
    title: "La Biblioteca de la Profe Javi",
    description:
        "Guías de estudio digitales para reforzar tus conocimientos. Aprende paso a paso con la Profe Javi.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="es"
            className={`${fredoka.variable} ${gochiHand.variable} h-full antialiased`}
        >
        <body className="min-h-full flex flex-col font-sans">{children}</body>
        </html>
    );
}