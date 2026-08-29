// app/actions/orders.ts
"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";
import { createFlowPayment } from "@/lib/flow";

const checkoutSchema = z.object({
    email: z.string().email(),
    ebookIds: z.array(z.number().int().positive()).min(1),
});

// resolver para url
function resolverBaseUrl(): string | null {
    if (process.env.APP_BASE_URL) return process.env.APP_BASE_URL;
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return null;
}

async function createPendingOrder(email: string, ebooksIds: number[]) {
    const ebooks = await prisma.ebook.findMany({
        where: { id: { in: ebooksIds }, published: true },
        select: { id: true, title: true, launchPriceClp: true, priceClp: true },
    });
    if (ebooks.length !== ebooksIds.length) {
        return { ok: false as const, error: "Uno o más libros no están disponibles para descarga." };
    }

    // Precio REALMENTE cobrado por cada libro, calculado UNA sola vez.
    // Hoy es siempre el launch price; si mañana el descuento depende de una fecha,
    // ese "if" vive aquí y el total + el snapshot siguen cuadrando solos.
    const lineItems = ebooks.map((e) => ({
        ebookId: e.id,
        titleSnapshot: e.title,
        priceClp: e.launchPriceClp, // ← lo que se cobra, no el precio de lista
    }));

    const totalClp = lineItems.reduce((sum, item) => sum + item.priceClp, 0);

    const subject = (
        ebooks.length === 1 ? ebooks[0].title : `${ebooks.length} libros · La Biblioteca de la Profe Javi`
    ).slice(0, 255);

    const order = await prisma.order.create({
        data: {
            email,
            totalClp,
            status: "PENDING",
            items: { create: lineItems },
        },
        select: { id: true, totalClp: true },
    });
    return { ok: true as const, order, subject, email };
}
export async function startCheckout(input: unknown){
    const parsed = checkoutSchema.safeParse(input);
    if (!parsed.success) return { ok: false as const, error: "Datos inválidos."};


    // solve base url
    const base = resolverBaseUrl();
    if(!base) {
        console.error("No se pudo resolver la URL base (app_base_url");
        return { ok: false as const, error: "Configuracion de server incompleta"};
    }

    const result = await createPendingOrder(parsed.data.email, parsed.data.ebookIds);
    if (!result.ok) return result;
    const { order, subject, email } = result

    try {
        const payment = await createFlowPayment({
            commerceOrder: String(order.id),
            subject,
            amount: order.totalClp,
            email,
            urlConfirmation: `${base}/api/flow/confirm`,
            urlReturn: `${base}/api/flow/return`,
        });

        await prisma.order.update({
            where: { id: order.id },
            data: { provider: "flow" }
        });

        //redirigir a target = url + ?token + toekn
        return { ok: true as const, url: `${payment.url}?token=${payment.token}`
        };
    } catch (e) {
        console.error("Flow createPayment error: ", e);
        return { ok: false as const, error: "No se pudo iniciar el pago. Intenta nuevamente." };
    }
}