import { NavCard } from "./nav-card";
import { NavBar } from "./nav-bar";

export function SiteHeader() {
    return (
        <header className="w-full px-4 pb-4 pt-6 sm:px-8">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Title block on a torn-paper cream blob */}
                <div
                    className="relative grow bg-paper px-8 py-6 md:py-8 md:pr-24"
                    style={{ borderRadius: "38% 62% 58% 42% / 66% 40% 60% 34%" }}
                >
                    <h1 className="font-display text-4xl leading-none text-grape sm:text-5xl md:text-6xl">
                        La Biblioteca
                    </h1>

                    <h2 className="font-display text-[25px] leading-none text-grape sm:text-[34px] md:text-[42px]">
                        de la profe Javi
                    </h2>

                    <p className="mt-2 font-sans text-lg font-medium text-grape-soft sm:text-xl">
                        Matemáticas a tu ritmo y sin tanto sufrimiento
                    </p>
                </div>

                <div className="self-start pt-2 md:pt-4">
                    <NavBar />
                </div>
            </div>
        </header>
    );
}