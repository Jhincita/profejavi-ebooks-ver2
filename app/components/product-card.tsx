import { WashiTape } from "./washi-tape";
import { HighlighterTape} from "@/app/components/highlighter-tape";
import { AddToCartButton } from "./add-to-cart-button";

export function ProductCard() {
    return (
        <article className="relative rounded-[28px] bg-mint p-6 pt-10 sm:p-8 sm:pt-10">
            <WashiTape className="-top-4 left-8 rotate-[-8deg]" color="var(--color-mint-deep)" />

            <div className="flex flex-col items-center gap-6 sm:flex-row">
                {/* Cover image — swap this placeholder for the real portada.
            e.g. <Image src="/universo-numeros.png" alt="..." width={176} height={235} /> */}
                <div className="flex aspect-[3/4] w-40 shrink-0 items-center justify-center rounded-lg bg-white/85 p-3 text-center shadow-md ring-1 ring-black/5 sm:w-44">
          <span className="font-display text-sm leading-tight text-grape/70">
            Portada:
            <br />
            “El universo
            <br />
            de los números”
          </span>
                </div>

                {/* Product info */}
                <div className="text-center sm:text-left">
                    <h2 className="font-display text-2xl leading-tight text-grape sm:text-3xl">
                        “El universo de los números”
                    </h2>
                    <p className="mt-1 font-sans text-lg text-grape-soft">guía de estudio digital</p>
                    <p className="mt-3 font-display text-3xl text-grape">$5000</p>
                    <AddToCartButton className="mt-5" />
                </div>
            </div>
        </article>
    );
}