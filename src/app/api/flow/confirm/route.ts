// src/app/api/flow/confirm/route.ts
// Flow's server-to-server webhook (urlConfirmation). THIS is the source of
// truth for "was it paid" - never the browser return page. Flow POSTs a token;
// we ask Flow for the real status with our credentials, then fulfill.

import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { getFlowPaymentStatus } from "@/lib/flow";
import { fulfillOrder } from "@/lib/fulfillment";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
    try {
        const form = await req.formData();
        const token = form.get("token");
        if (typeof token !== "string") {
            return new Response("missing token", { status: 400 });
        }

        const status = await getFlowPaymentStatus(token);
        const orderId = Number(status.commerceOrder);
        const order = await prisma.order.findUnique({ where: { id: orderId } });

        // Nothing we can do about these - return 200 so Flow stops retrying.
        if (!order) return new Response("order not found", { status: 200 });
        if (order.totalClp !== Math.round(status.amount)) {
            console.error(
                `[flow] monto no coincide orden ${orderId}: db=${order.totalClp} flow=${status.amount}`
            );
            return new Response("amount mismatch", { status: 200 });
        }

        if (status.status === 2) {
            await fulfillOrder(orderId, status.flowOrder); // paid
        } else if ((status.status === 3 || status.status === 4) && order.status === "PENDING") {
            await prisma.order.update({ where: { id: orderId }, data: { status: "CANCELLED" } });
        }

        return new Response("OK", { status: 200 });
    } catch (e) {
        console.error("[flow] confirm error:", e);
        // 500 -> Flow will retry the notification later.
        return new Response("error", { status: 500 });
    }
}