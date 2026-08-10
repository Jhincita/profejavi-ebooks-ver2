// Signature element: the lumpy "cloud" ADD TO CART button.
// Non-functional for now (layout pass). Wire an onClick / cart handler later.
export function AddToCartButton({
                                    className = "",
                                    label = "Añadir al carrito",
                                }: {
    className?: string;
    label?: string;
}) {
    return (
        <button
            type="button"
            aria-label={label}
            className={`group relative inline-flex items-center justify-center rounded-full outline-none transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-magenta/40 ${className}`}
        >
            {/* cloud made of overlapping circles + a body bar (single magenta fill) */}
            <svg viewBox="0 0 240 96" className="h-[74px] w-[190px]" aria-hidden>
                <g fill="var(--color-magenta)">
                    <rect x="18" y="30" width="204" height="40" rx="20" />
                    <circle cx="40" cy="34" r="22" />
                    <circle cx="80" cy="30" r="24" />
                    <circle cx="122" cy="32" r="24" />
                    <circle cx="164" cy="30" r="24" />
                    <circle cx="202" cy="36" r="20" />
                    <circle cx="44" cy="64" r="20" />
                    <circle cx="86" cy="68" r="21" />
                    <circle cx="128" cy="66" r="22" />
                    <circle cx="170" cy="68" r="21" />
                    <circle cx="206" cy="62" r="18" />
                </g>
            </svg>

            {/* label sits on top of the cloud */}
            <span className="absolute inset-0 flex items-center justify-center gap-1.5 font-sans text-lg font-semibold tracking-wide text-white">
        LO QUIERO
      </span>

            {/* sparkle */}
            <svg
                viewBox="0 0 24 24"
                className="absolute -right-1 -top-1 h-7 w-7 transition-transform duration-200 group-hover:rotate-12"
                aria-hidden
            >
                <path
                    d="M12 0c1 6 5 10 12 12-7 2-11 6-12 12-1-6-5-10-12-12C7 10 11 6 12 0Z"
                    fill="var(--color-sun)"
                    stroke="#e9b400"
                    strokeWidth="0.6"
                />
            </svg>
        </button>
    );
}