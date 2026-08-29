

export function SiteFooter() {
    return (
        <footer id="contacto" className="mt-auto w-full px-4 pb-8 pt-4 sm:px-8">
            <div
                className="mx-auto max-w-6xl bg-butter px-6 py-10 sm:px-12"
                style={{ borderRadius: "48% 52% 40% 60% / 14% 14% 10% 10%" }}
            >
                {/* Instagram de la Profe Javi */}
                <div className="flex justify-center">
                    <a
                        href="https://www.instagram.com/profe.javi__/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram de la Profe Javi"
                        className="inline-flex items-center gap-2 rounded-full bg-grape px-5 py-2.5 text-sm text-butter shadow-[3px_3px_0_0] shadow-magenta transition-transform hover:-translate-y-0.5"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                            <circle cx="17.5" cy="6.5" r="1.3" fill="currentColor" />
                        </svg>
                        @profejavi
                    </a>
                </div>

                {/* Separador */}
                <div className="mx-auto mt-6 max-w-md border-t-2 border-dashed border-grape/30" />

                {/* Diseño */}
                <div className="mt-6 text-center text-sm text-grape/70">
                    Diseñado por{" "}
                    <a
                        href="https://github.com/Jhincita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-grape hover:text-magenta transition-colors"
                    >
                        enidelmale / jhincita
                    </a>
                </div>
            </div>
        </footer>
    );
}