// src/lib/fulfillment.ts
// Runs AFTER Flow confirms payment. Marks paid, creates download grants, and
// emails the links. Idempotent: safe to call multiple times (Flow may retry).
import crypto from "node:crypto";
import { prisma } from "@/lib/db";
import { sendDownloadEmail } from "@/lib/email";

const DOWNLOAD_TTL_DAYS = 2; // EDITAR 2CHECK

export async function fulfillOrder(orderId: number, flowOrder: number) {
    const order = await prisma.order.findUnique({
        where: { id: orderId },
        include: { items: true, downloads: true },
    });
    if (!order) return;
    if (order.status === "DELIVERED") return; // ya entregado, nada que hacer

    // 1) Marcar pagada + crear grants (solo si aún no estaba pagada).
    if (order.status !== "PAID") {
        const expiresAt = new Date(Date.now() + DOWNLOAD_TTL_DAYS * 24 * 60 * 60 * 1000);
        await prisma.$transaction(async (tx) => {
            await tx.order.update({
                where: { id: orderId },
                data: {
                    status: "PAID",
                    paidAt: new Date(),
                    provider: "flow",
                    providerPaymentId: String(flowOrder),
                },
            });
            if (order.downloads.length === 0) {
                await tx.downloadGrant.createMany({
                    data: order.items.map((item) => ({
                        orderId: order.id,
                        ebookId: item.ebookId,
                        token: crypto.randomBytes(24).toString("hex"),
                        expiresAt,
                    })),
                });
            }
        });
    }

    // 2) Enviar el email con los enlaces. Si llegamos aquí, la orden NO está DELIVERED,
    //    así que reintentar es seguro (si un intento previo falló al enviar el correo).
    const base = process.env.APP_BASE_URL;
    if (!base) {
        console.error("[fulfillment] APP_BASE_URL no configurado; no se puede enviar el email.");
        return;
    }

    const grants = await prisma.downloadGrant.findMany({
        where: { orderId },
        include: { ebook: { select: { title: true } } },
    });
    const books = grants.map((g) => ({
        title: g.ebook.title,
        url: `${base}/api/download/${g.token}`,
    }));

    try {
        await sendDownloadEmail({ to: order.email, orderId, books });
        await prisma.order.update({ where: { id: orderId }, data: { status: "DELIVERED" } });
        console.log(`[fulfillment] Orden ${orderId} entregada por email a ${order.email}.`);
    } catch (e) {
        // La orden queda en PAID (el pago es válido). Un reintento del webhook o un
        // reenvío manual puede volver a intentar el correo sin duplicar grants.
        console.error(`[fulfillment] Orden ${orderId} pagada pero el email falló:`, e);
    }
}