// A hand-torn "highlighter / washi tape" swipe, drawn with SVG.
//
// How the organic edge works: two plain rounded rects are pushed through an
// feTurbulence + feDisplacementMap filter, which wobbles their outlines into
// irregular, hand-cut edges. Two layers (different seeds) overlap through a
// `multiply` blend, so the color pools unevenly like real marker ink.
//
// Pass a UNIQUE `seed` per instance so every swipe looks a little different
// (that's what makes a row of them feel messy/handmade rather than stamped).
export function HighlighterTape({
                                    color = "var(--color-blush)",
                                    seed = 1,
                                    roughness = 13,
                                    opacityBase = 0.5,
                                    opacityCore = 0.6,
                                    className = "",
                                }: {
    color?: string;
    seed?: number;
    roughness?: number;
    /** Outer swipe opacity. Raise both for a denser "pressed harder" look. */
    opacityBase?: number;
    /** Inner core opacity. */
    opacityCore?: number;
    className?: string;
}) {
    const idA = `hl-${seed}-a`;
    const idB = `hl-${seed}-b`;

    return (
        <svg
            viewBox="0 0 320 120"
            preserveAspectRatio="none"
            aria-hidden
            className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
            style={{ mixBlendMode: "multiply", overflow: "visible" }}
        >
            <defs>
                <filter id={idA} x="-25%" y="-45%" width="150%" height="190%">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.017 0.031"
                        numOctaves={2}
                        seed={seed}
                        result="n"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="n"
                        scale={roughness}
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
                <filter id={idB} x="-25%" y="-45%" width="150%" height="190%">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.023 0.027"
                        numOctaves={2}
                        seed={seed + 7}
                        result="n"
                    />
                    <feDisplacementMap
                        in="SourceGraphic"
                        in2="n"
                        scale={roughness + 5}
                        xChannelSelector="R"
                        yChannelSelector="G"
                    />
                </filter>
            </defs>

            {/* base swipe */}
            <rect
                x="16"
                y="30"
                width="288"
                height="60"
                rx="10"
                fill={color}
                opacity={opacityBase}
                filter={`url(#${idA})`}
            />
            {/* second pass — denser core, torn a little differently */}
            <rect
                x="24"
                y="36"
                width="274"
                height="50"
                rx="16"
                fill={color}
                opacity={opacityCore}
                filter={`url(#${idB})`}
            />
        </svg>
    );
}