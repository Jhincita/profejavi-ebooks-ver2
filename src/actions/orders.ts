// app/actions/orders.ts
"use server";

import { z } from "zod";
import { prisma } from "@/lib/db";

const checkoutSchema = z.object({
    email: z.string().email(),
    ebookIds: z.array(z.number().int().positive()).min(1),
});

export async function createOrder(input: unknown) {
    const parsed = checkoutSchema.safeParse(input);
    if (!parsed.success) return { ok: false as const, error: "Datos inválidos." };
    const { email, ebookIds } = parsed.data;

    // Server-authoritative pricing: real prices come from the DB, never the client.
    const ebooks = await prisma.ebook.findMany({
        where: { id: { in: ebookIds }, published: true },
        select: { id: true, title: true, priceClp: true },
    });
    if (ebooks.length !== ebookIds.length) {
        return { ok: false as const, error: "Uno o más libros no están disponibles." };
    }

    const totalClp = ebooks.reduce((sum, e) => sum + e.priceClp, 0);

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

    return { ok: true as const, order };
}