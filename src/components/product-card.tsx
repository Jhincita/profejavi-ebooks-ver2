import { WashiTape } from "./washi-tape";
import { BuyNowButton } from "./buy-now-button";
import type { Ebook } from "../../generated/prisma/client";

export function ProductCard({ ebook }: { ebook: Ebook }) {
    const price = ebook.priceClp.toLocaleString("es-CL");

    return (
        <article className="relative rounded-[28px] bg-mint p-6 pt-10 sm:p-8 sm:pt-10">
            <WashiTape className="-top-4 left-8 rotate-[-8deg]" color="var(--color-mint-deep)" />
            <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="flex aspect-[3/4] w-40 shrink-0 items-center justify-center rounded-lg bg-white/85 p-3 text-center shadow-md ring-1 ring-black/5 sm:w-44">
          <span className="font-display text-sm leading-tight text-grape/70">
            Portada:<br />“{ebook.title}”
          </span>
                </div>
                <div className="text-center sm:text-left">
                    <h2 className="font-display text-2xl leading-tight text-grape sm:text-3xl">“{ebook.title}”</h2>
                    <p className="mt-1 font-sans text-lg text-grape-soft">guía de estudio digital</p>
                    <p className="mt-3 font-display text-3xl text-grape">${price}</p>
                    <BuyNowButton ebookId={ebook.id} className="mt-5" />
                </div>
            </div>
        </article>
    );
}