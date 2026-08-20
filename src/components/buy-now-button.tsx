"use client";
import { useState } from "react";
import { startCheckout } from "@/actions/orders";
import { BubblyButton } from "@/components/reusable-react-components/bubblybutton/BubblyButton"
import {GlowyInput} from "@/components/reusable-react-components/glowyinput/GlowyInput";

export function BuyNowButton({ ebookId, className = "" }: { ebookId: number; className?: string }) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleBuy() {
        if (loading) return;
        setLoading(true);
        const result = await startCheckout({ email, ebookIds : [ebookId]});
        if (result.ok) {
            window.location.href = result.url;
        } else {
            alert (result.error)
            setLoading(false);
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
                    disabled={loading}
                    className="w-full mt-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-200 bg-[#DD70AA] hover:bg-[#E880B8] hover:translate-y-[-2px] hover:shadow-lg active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    { loading? "Redirigiendo..." : "Comprar"}
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