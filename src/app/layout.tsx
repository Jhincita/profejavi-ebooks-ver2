import type { Metadata } from "next";
import { Fredoka, Patrick_Hand } from "next/font/google";
import "./globals.css";

import { Container } from "@/components/container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";


// body.
const fredoka = Fredoka({
    subsets: ["latin"],
    variable: "--font-fredoka",
});

// Titles.
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
        <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">
            <Container size="2xl">
                {children}
            </Container>
        </main>
        <SiteFooter />
        </body>
        </html>

    );
}