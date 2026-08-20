// src/app/checkout/estado/page.tsx
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function EstadoPage({
                                             searchParams,
                                         }: {
    searchParams: Promise<{ order?: string; estado?: string }>;
}) {
    const { order, estado } = await searchParams;

    const record = order
        ? await prisma.order.findUnique({
            where: { id: Number(order) },
            select: { status: true, email: true, totalClp: true },
        })
        : null;

    const paid =
        record?.status === "PAID" || record?.status === "DELIVERED" || estado === "pagado";
    const pending = !paid && (record?.status === "PENDING" || estado === "pendiente");

    const { title, message } = paid
        ? {
            title: "¡Pago recibido! 🎉",
            message: record
                ? `Gracias por tu compra. Te enviaremos tu material a ${record.email}.`
                : "Gracias por tu compra. Te enviaremos tu material por correo.",
        }
        : pending
            ? {
                title: "Pago en proceso…",
                message: "Estamos confirmando tu pago. Esto puede tardar unos instantes.",
            }
            : {
                title: "El pago no se completó",
                message: "No se concretó el pago. Puedes intentarlo nuevamente cuando quieras.",
            };

    return (
        <main
            style={{
                minHeight: "70vh",
                display: "grid",
                placeItems: "center",
                padding: "2rem",
                color: "#4A3B6B",
            }}
        >
            <div
                style={{
                    maxWidth: 440,
                    width: "100%",
                    background: "#FBF7EF",
                    border: "2px solid #E7DCC8",
                    borderRadius: "18px 22px 16px 24px",
                    boxShadow: "4px 5px 0 rgba(74,59,107,0.15)",
                    padding: "2rem",
                    transform: "rotate(-0.6deg)",
                    textAlign: "center",
                }}
            >
                <h1 style={{ fontSize: "1.6rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    {title}
                </h1>
                <p style={{ lineHeight: 1.5, marginBottom: "1.5rem" }}>{message}</p>
                <a
                    href="/"
                    style={{
                        display: "inline-block",
                        padding: "0.7rem 1.4rem",
                        borderRadius: "999px",
                        background: "#DD70AA",
                        color: "white",
                        fontWeight: 600,
                        textDecoration: "none",
                    }}
                >
                    Volver al inicio
                </a>
            </div>
        </main>
    );
}