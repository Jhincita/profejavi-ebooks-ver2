// src/app/descarga/estado/page.tsx


import Link from "next/link";

const MENSAJES: Record<string, { titulo: string; cuerpo: string }> = {
    "no-valido":     { titulo: "Enlace no válido",   cuerpo: "Este enlace de descarga no existe." },
    "no-pagado":     { titulo: "Pago no confirmado", cuerpo: "Aún no podemos confirmar el pago de esta orden." },
    "expirado":      { titulo: "Enlace expirado",    cuerpo: "Este enlace ya venció. Escríbenos y te reenviamos uno nuevo." },
    "no-disponible": { titulo: "No disponible",      cuerpo: "Este libro aún no está disponible para descarga." },
    "limite":        { titulo: "Límite alcanzado",   cuerpo: "Se alcanzó el número máximo de descargas de este enlace." },
    "error":         { titulo: "Error temporal",     cuerpo: "No pudimos preparar tu descarga. Intenta de nuevo en un momento." },
};

export default async function EstadoDescargaPage({
                                                     searchParams,
                                                 }: {
    searchParams: Promise<{ estado?: string }>;
}) {
    // Next 16: searchParams is a Promise too — await it, just like route params.
    const { estado } = await searchParams;
    const m = MENSAJES[estado ?? ""] ?? MENSAJES["error"];

    return (
        <main className="estado">
            <div className="estado-card">
                <h1>{m.titulo}</h1>
                <p>{m.cuerpo}</p>
                <Link href="/">Volver a la tienda</Link>
            </div>
        </main>
    );
}