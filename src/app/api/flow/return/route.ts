// src/app/api/flow/return/route.ts
// Where Flow sends the buyer's BROWSER back after paying (urlReturn). Flow
// POSTs the token here; we reconcile (idempotent) and 303-redirect to a
// friendly status page. Real fulfillment also happens in /api/flow/confirm.

import { NextRequest, NextResponse } from "next/server";
import { getFlowPaymentStatus } from "@/lib/flow";
import { fulfillOrder } from "@/lib/fulfillment";

export const runtime = "nodejs";

async function handle(token: string | null, req: NextRequest) {
    const base = process.env.APP_BASE_URL ?? req.nextUrl.origin;
    if (!token) return NextResponse.redirect(`${base}/checkout/estado`, 303);

    try {
        const status = await getFlowPaymentStatus(token);
        const orderId = Number(status.commerceOrder);
        if (status.status === 2) await fulfillOrder(orderId, status.flowOrder);

        const estado =
            status.status === 2 ? "pagado" : status.status === 1 ? "pendiente" : "fallido";
        return NextResponse.redirect(`${base}/checkout/estado?order=${orderId}&estado=${estado}`, 303);
    } catch (e) {
        console.error("[flow] return error:", e);
        return NextResponse.redirect(`${base}/checkout/estado?estado=error`, 303);
    }
}

export async function POST(req: NextRequest) {
    const form = await req.formData();
    const token = form.get("token");
    return handle(typeof token === "string" ? token : null, req);
}

export async function GET(req: NextRequest) {
    return handle(req.nextUrl.searchParams.get("token"), req);
}