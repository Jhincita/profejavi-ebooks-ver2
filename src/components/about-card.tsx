"use client";

import {useRouter} from "next/navigation";
import {WashiTape} from "./washi-tape";
import {BubblyButton} from "@/components/reusable-react-components/bubblybutton/BubblyButton";


export function AboutCard() {

    const router = useRouter();

    return (
        <article
            id="sobre-javi"
            className="relative rounded-[28px] bg-lavender p-6 pt-10 sm:p-8 sm:pt-10"
        >
            <WashiTape className="-top-4 right-8 rotate-[7deg]" color="var(--color-lavender-deep)" />

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {/* Text */}
                <div className="order-2 text-center sm:order-1 sm:text-left">
                    <h2 className="font-display text-2xl text-grape sm:text-3xl">
                        Sobre mí · Profe Javi
                    </h2>
                    <p className="mt-2 font-sans leading-relaxed text-grape-soft">
                        ¡Hola! Soy Javiera Flores, Ingeniera Civil Industrial y la persona detrás de La
                        Biblioteca de la Profe Javi. Llevo más de 5 años haciendo clases de Matemáticas y mi
                        parte favorita de enseñar es ver ese momento en que un alumno se da cuenta de que sí
                        puede.
                    </p>
                    <BubblyButton
                        onClick={() => router.push("/about")}
                        color="hsl(189 77.9% 60%)"
                    >
                        SOBRE MÍ
                    </BubblyButton>
                </div>

                {/* Avatar — swap for the real photo of Javi */}
                <div className="order-1 flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-white/85 shadow-md ring-1 ring-black/5 sm:order-2">
          <span className="px-2 text-center font-display text-sm text-grape/60">
            Foto de Javi
          </span>
                </div>
            </div>
        </article>
    );
}