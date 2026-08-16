// Decorative strip of "washi tape" — purely visual.
// Position it with the className prop (e.g. "left-8 -top-4 rotate-[-8deg]").
export function WashiTape({
                              className = "",
                              color = "var(--color-mint-deep)",
                          }: {
    className?: string;
    color?: string;
}) {
    return (
        <span
            aria-hidden
            className={`pointer-events-none absolute h-8 w-24 opacity-80 ${className}`}
            style={{
                background: color,
                // torn top & bottom edges
                clipPath:
                    "polygon(3% 14%, 14% 0, 26% 10%, 40% 2%, 54% 12%, 68% 2%, 82% 12%, 96% 2%, 100% 16%, 97% 86%, 86% 100%, 72% 90%, 58% 100%, 44% 90%, 30% 100%, 16% 90%, 5% 100%, 0 84%)",
            }}
        />
    );
}