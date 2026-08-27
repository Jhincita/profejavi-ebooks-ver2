// nav bar version 2, mejorada, simplificada.

"use client";

// next js built in client side navigation, spa
import Link from "next/link";

// hook from next js app router that returns current url pathname, reactive updates when route changes
import { usePathname} from "next/navigation";

import { HighlighterTape} from "@/components/highlighter-tape";

type NavItem = {
    label: string;
    href: string;
    color: string;
    seed: number; // used by highlighter tape thing
    rotation: string;
};

const NAV_ITEMS: NavItem[] = [
    { label: "Inicio", href: "/", color: "var(--color-blush)", seed: 4, rotation: "-2deg"},
    { label: "Sobre Javi", href: "/about", color: "var(--color-sun)", seed: 12, rotation: "-1deg"},
    { label: "FAQ", href: "/faq", color: "var(--color-mint)", seed: 8, rotation: "1.5deg"},
    //{ label: "Biblioteca", href: "/#product-card", color: "var(--color-lavender-deep)", seed: 16, rotation: "0.5deg"},

];

export function NavBar() {
    const pathname = usePathname();

    return (
        <nav aria-label="Navegación principal">

            <ul className="flex flex-row flex-wrap justify-center gap-4 md:flex-col md:items-end md:gap-3">
                {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                        <li
                            key={item.href}
                            style={{ transform: `rotate(${item.rotation})` }}
                        >
                            <Link
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className="group relative inline-block rounded-lg px-6 py-2 outline-none focus-visible:ring-2 focus-visible:ring-magenta focus-visible:ring-offset-2"
                            >
                                <span className="absolute inset-0 z-0 origin-center transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110">
                                    <HighlighterTape
                                        color={item.color}
                                        seed={item.seed}

                                        opacityBase={isActive ? 0.72 : 0.5}
                                        opacityCore={isActive ? 0.85 : 0.6}
                                    />
                                </span>

                                <span
                                    className={`relative z-10 inline-block origin-center font-display text-2xl transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110 md:text-3xl ${
                                        isActive
                                            ? "text-magenta"
                                            : "text-grape"
                                    }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
