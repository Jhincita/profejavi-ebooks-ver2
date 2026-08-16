"use client";
import { useState } from "react";
import { createOrder } from "@/actions/orders";
import { BubblyButton } from "@/components/reusable-react-components/bubblybutton/BubblyButton"
import {GlowyInput} from "@/components/reusable-react-components/glowyinput/GlowyInput";

export function BuyNowButton({ ebookId, className = "" }: { ebookId: number; className?: string }) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");

    async function handleBuy() {
        const result = await createOrder({ email, ebookIds: [ebookId] });

        if (result.ok) {
            alert(`¡Orden #${result.order.id} creada! Total: $${result.order.totalClp.toLocaleString("es-CL")}`);
        } else {
            alert(result.error);
        }
    }

    if (open) {
        return (
            <div className={className}>
                <GlowyInput
                    value={email}
                    onChange={setEmail}
                    placeholder="tu@correo.cl"
                />
                <button
                    onClick={handleBuy}
                    className="w-full mt-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 bg-[#DD70AA] hover:bg-[#E880B8] hover:translate-y-[-2px] hover:shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    Comprar
                </button>
            </div>
        );
    }

    return (
        <BubblyButton
            onClick={() => setOpen(true)}
            className={className}
            color="hsl(330, 80%, 70%)"// color
        >
            LO QUIERO
        </BubblyButton>
    );
}