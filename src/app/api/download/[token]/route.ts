import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getObjectBytes } from "@/lib/r2";

//  aws sdk uses node apis
export const runtime = "nodejs";
// so that the download doesnt cache
export const dynamic = "force-dynamic";

function fail(estado: string) {
    const url = new URL("/descarga/estado", process.env.APP_BASE_URL);
    url.searchParams.set("estado", estado);
    return NextResponse.redirect(url, 303);
}

export async function GET(_req: Request, { params }: { params: Promise<{ token: string}>}) {
    const { token } = await params;

    const grant = await prisma.downloadGrant.findUnique({
        where: {token},
        include: {
            ebook: {select: {title: true, fileKey: true}},
            order: { select: {status: true}},
        },
    });

    if (!grant) return fail("no-valido");
    if (grant.order.status !== "PAID" && grant.order.status !== "DELIVERED") return fail("no-pagado");
    if (grant.expiresAt.getTime() < new Date().getTime()) return fail("expirado");
    if (!grant.ebook.fileKey) {
        console.error(`[download] Ebook ${grant.ebookId} sin fileKey.`);
        return fail("no-disponible")
    }

    const claimed = await prisma.downloadGrant.updateMany({
        where: { token, downloadCount: { lt: grant.maxDownloads } },
        data: { downloadCount: { increment: 1 } },
    });
    if (claimed.count === 0) return fail("limite");

    let file;
    try {
        file = await getObjectBytes(grant.ebook.fileKey);
    } catch (e) {
        await prisma.downloadGrant.update({ where: { token }, data: { downloadCount: { decrement: 1} } });
        console.error(`[download] Falló la lectura de R2 para ${grant.ebook.fileKey}:`, e);
        return fail("error");
    }

    const name = buildFileName(grant.ebook.title);
    return new Response(new Uint8Array(file.bytes), {
        status: 200,
        headers: {
            "content-type": "application/pdf",
            "content-disposition": `attachment; filename="${name.ascii}"; filename*=UTF-8''${name.utf8}`,
            "content-length": String(file.bytes.byteLength),
            "cache-control": "no-store",
        },
    });
}

function buildFileName(title: string) {
    const base = title.trim() || "libro";
    const utf8 = encodeURIComponent(`${base}.pdf`);
    const ascii = `${base.normalize("NFKD").replace(/[^\x20-\x7E]/g, "").replace(/[\\/:*?"<>|]/g, "").trim() || "libro"}.pdf`;
    return { ascii, utf8 };
}