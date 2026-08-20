// app/actions/orders.ts
"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";
import { createFlowPayment } from "@/lib/flow";

const checkoutSchema = z.object({
    email: z.string().email(),
    ebookIds: z.array(z.number().int().positive()).min(1),
});

async function createPendingOrder(email: string, ebooksIds: number[]) {
    const ebooks = await prisma.ebook.findMany({
        where: { id: { in: ebooksIds }, published: true },
        select: { id: true, title: true, priceClp: true},
    });
    if (ebooks.length !== ebooksIds.length) {
        return { ok: false as const, error: "Uno o más libros no están disponibles para descarga."};
    }

    const totalClp = ebooks.reduce((sum, e) => sum + e.priceClp, 0);
    const subject = (
        ebooks.length === 1? ebooks[0].title: `${ebooks.length} libros · La Biblioteca de la Profe Javi`
    ).slice(0, 255);

    const order = await prisma.order.create({
        data: {
            email,
            totalClp,
            status: "PENDING",
            items: {
                create: ebooks.map((e) => ({
                    ebookId: e.id,
                    titleSnapshot: e.title,
                    priceClp: e.priceClp,
                })),
            },
        },
        select: { id: true, totalClp: true },

    });
    return { ok: true as const, order, subject, email};
}

export async function startCheckout(input: unknown){
    const parsed = checkoutSchema.safeParse(input);
    if (!parsed.success) return { ok: false as const, error: "Datos inválidos."};

    const result = await createPendingOrder(parsed.data.email, parsed.data.ebookIds);
    if (!result.ok) return result;
    const { order, subject, email } = result

    const base = process.env.APP_BASE_URL;
    if(!base) {
        console.error("APP_BASE_URL no configurado");
        return { ok: false as const, error: "Configuración de server incompleta." };
    }

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