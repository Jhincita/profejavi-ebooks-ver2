"use client";

import { useState } from "react";
import { createOrder } from "@/actions/orders";

export function AddToCartButton({ ebookId, className = "" }: { ebookId: number; className?: string }) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleBuy() {
        setStatus("loading");
        const result = await createOrder({ email, ebookIds: [ebookId] });
        if (result.ok) {
            setStatus("done");
            setMessage(`¡Orden #${result.order.id} creada! Total: $${result.order.totalClp.toLocaleString("es-CL")}`);
        } else {
            setStatus("error");
            setMessage(result.error);
        }
    }

    if (status === "done") return <p className={`font-sans text-grape ${className}`}>{message}</p>;

    if (open) {
        return (
            <div className={`flex flex-col gap-2 ${className}`}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.cl"
                    className="rounded-lg border border-grape/30 px-3 py-2 font-sans"
                />
                <button
                    type="button"
                    onClick={handleBuy}
                    disabled={status === "loading"}
                    className="rounded-full bg-magenta px-5 py-2 font-sans font-semibold text-white disabled:opacity-50"
                >
                    {status === "loading" ? "Creando..." : "Confirmar compra"}
                </button>
                {status === "error" && <p className="font-sans text-sm text-magenta">{message}</p>}
            </div>
        );
    }

    return (
        <button
            type="button"
            aria-label="LO QUIERO"
            onClick={() => setOpen(true)}
            className={`rounded-full bg-magenta px-6 py-3 font-sans text-lg font-semibold text-white outline-none transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-magenta/40 ${className}`}
        >
            LO QUIERO
        </button>
    );
}