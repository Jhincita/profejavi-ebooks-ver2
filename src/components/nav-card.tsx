"use client";

import { useState } from "react";
import { HighlighterTape} from "@/components/highlighter-tape";

type Item = { label: string; href: string; color: string; seed: number; rotate: string };

const ITEMS: Item[] = [
    { label: "Inicio", href: "#inicio", color: "var(--color-blush)", seed: 4, rotate: "-2deg" },
    { label: "Contacto", href: "#contacto", color: "var(--color-mint)", seed: 8, rotate: "1.5deg" },
    { label: "Sobre Javi", href: "#sobre-javi", color: "var(--color-sun)", seed: 12, rotate: "-1deg" },
];


export function NavCard(props: {}) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <nav aria-label="Navegación principal">
            <ul className="flex flex-row flex-wrap justify-center gap-4 md:flex-col md:items-end md:gap-3">
                {ITEMS.map((item) => {
                    const isActive = active === item.href;
                    return (
                        <li key={item.href} style={{ transform: `rotate(${item.rotate})` }}>
                            <a
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                onClick={() => setActive(item.href)}
                                className="group relative inline-block rounded-lg px-6 py-2 outline-none"
                            >
                                {/* tape behind the label — grows with the label on hover/focus */}
                                <span className="absolute inset-0 z-0 origin-center transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110">
                  <HighlighterTape
                      color={item.color}
                      seed={item.seed}
                      opacityBase={isActive ? 0.72 : 0.5}
                      opacityCore={isActive ? 0.85 : 0.6}
                  />
                </span>

                                {/* label */}
                                <span
                                    className={`relative z-10 inline-block origin-center font-display text-2xl transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110 md:text-3xl ${
                                        isActive ? "text-magenta" : "text-grape"
                                    }`}
                                >
                  {item.label}
                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
