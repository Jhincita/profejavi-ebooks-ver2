// src/lib/email.ts
// Sends the download email via Amazon SES (SESv2 SDK). Server-only.
// Same public signature as before, so fulfillment.ts doesn't change.
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

function client() {
    const region = process.env.SES_REGION;
    const accessKeyId = process.env.SES_ACCESS_KEY_ID;
    const secretAccessKey = process.env.SES_SECRET_ACCESS_KEY;
    if (!region || !accessKeyId || !secretAccessKey) {
        throw new Error("Faltan variables de entorno de SES (SES_REGION, SES_ACCESS_KEY_ID, SES_SECRET_ACCESS_KEY).");
    }
    return new SESv2Client({ region, credentials: { accessKeyId, secretAccessKey } });
}

// Debe ser una dirección en un dominio verificado en SES.
const FROM =
    process.env.EMAIL_FROM ?? "La Biblioteca de la Profe Javi <no-reply@bibliojavi.cl>";

function escapeHtml(s: string) {
    return s.replace(
        /[&<>"']/g,
        (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
    );
}

export async function sendDownloadEmail(params: {
    to: string;
    orderId: number;
    books: { title: string; url: string }[];
}) {
    const { to, orderId, books } = params;
    const ses = client();

    const rows = books
        .map(
            (b) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px dashed #E7DCC8">
          <div style="font-weight:700;color:#4A3B6B;margin-bottom:4px">${escapeHtml(b.title)}</div>
          <a href="${b.url}"
             style="display:inline-block;background:#DD70AA;color:#fff;text-decoration:none;
                    font-weight:600;padding:8px 16px;border-radius:999px">
            Descargar »
          </a>
        </td>
      </tr>`
        )
        .join("");

    const html = `
    <div style="background:#FBF7EF;padding:24px;font-family:Arial,Helvetica,sans-serif">
      <div style="max-width:480px;margin:0 auto;background:#fff;border:2px solid #E7DCC8;
                  border-radius:18px 22px 16px 24px;padding:24px">
        <h1 style="color:#4A3B6B;font-size:22px;margin:0 0 8px">¡Gracias por tu compra! 🎉</h1>
        <p style="color:#4A3B6B;line-height:1.5;margin:0 0 16px">
          Aquí está tu material (orden #${orderId}). Los enlaces son personales y expiran pronto,
          así que descárgalos cuando puedas.
        </p>
        <table style="width:100%;border-collapse:collapse">${rows}</table>
        <p style="color:#8a7fb0;font-size:12px;line-height:1.5;margin:20px 0 0">
          Si tienes problemas con la descarga, responde a este correo.
        </p>
      </div>
    </div>`;

    await ses.send(
        new SendEmailCommand({
            FromEmailAddress: FROM,
            Destination: { ToAddresses: [to] },
            Content: {
                Simple: {
                    Subject: {
                        Data: `Tu material · La Biblioteca de la Profe Javi (orden #${orderId})`,
                        Charset: "UTF-8",
                    },
                    Body: { Html: { Data: html, Charset: "UTF-8" } },
                },
            },
        })
    );
}