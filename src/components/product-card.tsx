import Image from "next/image";
import { WashiTape } from "./washi-tape";
import { BuyNowButton } from "./buy-now-button";
import type { Ebook } from "../../generated/prisma/client";
import MundoDeLosNumerosCover from "public/portadaimg.png";

export function ProductCard({ ebook }: { ebook: Ebook }) {
    const isOnSale = ebook.launchPriceClp < ebook.priceClp;
    const launchPrice = ebook.launchPriceClp.toLocaleString("es-CL");
    const regularPrice = ebook.priceClp.toLocaleString("es-CL");

    return (
        <article className="relative rounded-[28px] bg-mint p-6 pt-10 sm:p-8 sm:pt-10">
            <WashiTape className="-top-4 left-8 rotate-[-8deg]" color="var(--color-mint-deep)" />
            <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative flex aspect-[3/4] w-48 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/85 p-3 text-center shadow-md ring-1 ring-black/5 sm:w-56">
                    <Image
                        src={MundoDeLosNumerosCover}
                        alt={`Portada: ${ebook.title}`}
                        fill
                        priority // ✅ Fix LCP warning
                        className="object-cover"
                        sizes="(max-width: 640px) 192px, 224px"
                    />
                </div>
                <div className="text-center sm:text-left">
                    <h2 className="font-display text-2xl leading-tight text-grape sm:text-3xl max-w-prose">
                        “{ebook.title}”
                    </h2>
                    <h3 className="font-sans text-sm text-grape-soft max-w-prose">
                        Guía de estudio | Matemáticas desde 0 — Tomo 1
                    </h3>
                    <p className="mt-1 font-sans text-lg text-grape-soft max-w-prose">
                        Descubre las familias que forman el universo numérico y aprende a reconocerlas desde 0.
                    </p>

                    {/* ✅ Fixed: removed nested <p> */}
                    <div className="font-sans text-sm text-grape-soft max-w-prose">
                        <span className="font-semibold">Ideal para:</span>
                        <span> Estudiantes, adultos que quieran retomar Matemáticas y familias que necesiten refrescar contenidos para ayudar a sus hijos.</span>
                    </div>

                    {/* Price area */}
                    <div className="mt-3">
                        {isOnSale && (
                            <>
                                <p className="font-sans text-sm font-bold uppercase tracking-wide text-magenta">
                                    🎉 ¡LLÉVATELO CON LA OFERTA DE LANZAMIENTO!
                                </p>
                                <div className="flex items-center gap-3">
                                    <span className="font-display text-3xl text-grape">${launchPrice}</span>
                                    <span className="font-sans text-lg text-grape-soft line-through">
                                        ${regularPrice}
                                    </span>
                                </div>
                            </>
                        )}
                        {!isOnSale && (
                            <span className="font-display text-3xl text-grape">${regularPrice}</span>
                        )}
                    </div>

                    <BuyNowButton ebookId={ebook.id} className="mt-5" />
                </div>
            </div>
        </article>
    );
}