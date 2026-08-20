//  esto corre por el server side only (node)
// es importado por la server action de los route handlers

// import node.js built in crypto module para  HMAC-SHA256 sign
// esto agrega seguridad pq todas las request tienen que estar firmadas con una secret key
import crypto from "node:crypto";

// función para configurar y llamar credenciales desde env
function config(){
    const url = process.env.FLOW_API_URL;
    const apiKey = process.env.FLOW_API_KEY;
    const secret = process.env.FLOW_SECRET_KEY;

    if (!url || !apiKey || !secret) {// error handling, si algo falta > error
        throw new Error("Faltan variables de entorno de FLOW");
    }
    return { url, apiKey, secret };
}

// custom error class coon HTTP statuus code y codigo de error de la respuesta de FLOW
export class FlowError extends Error {
    constructor (message: string, readonly code?: number, readonly httpStats?: number) {
        super(message);
        this.name= "FlowError";
    }
}

// definicion de type parameters  * 2CHECK
type Params = Record<string, string | number | undefined>;

// signature prepare function, retorna signed clean parameters preparados para usarse sin errores
function prepare(params: Params, secret: string): Record<string, string> {
    const clean: Record<string, string> = {};
    for (const [k, v] of Object.entries(params)) {
        if (v === undefined || v === null || v === "") continue;
        clean[k] = String(v); // convierte el valor a string y lo agrega al clean object
    }
    const toSign = Object.keys(clean).sort().map((k) => k + clean[k]).join("");
    clean.s = crypto.createHmac("sha256", secret).update(toSign).digest("hex");
    return clean;
}

async function post<T>(service: string, params: Params): Promise<T> {
    const { url, secret} = config();
    const body = new URLSearchParams(prepare(params, secret));
    const res = await fetch(`${url}${service}`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new FlowError(data?.message ?? "Error de Flow", data?.code, res.status);
    return data as T; // returns types response data
}

async function get<T>(service: string, params: Params): Promise<T> {
    const { url, secret } = config();
    const qs = new URLSearchParams(prepare(params, secret));
    const res = await fetch(`${url}${service}?${qs.toString()}`);
    const data = await res.json().catch(() => ({})); // si el parseo falla, para evitar que el request crashee, se devuelve un empty object {}
    if (!res.ok) throw new FlowError(data?.message ?? "Error de Flow", data?.code, res.status);
    return data as T;
}

export type FlowCreatePaymentResponse = {
    url: string; // base url checkout
    token: string;
    flowOrder: number;
}

export type FlowPaymentStatus = {
    flowOrder: number;
    commerceOrder: string; // id de orden dentro de ecommerce
    status: 1 | 2 | 3 | 4; // 1 PENDING, 2 PAID, 3 REJECTED, 4 VOIDED
    subject: string;
    amount: number;
    payer: string;
}

export async function createFlowPayment(input:{
    commerceOrder: string;
    subject: string;
    amount: number;
    email: string;
    urlConfirmation: string;
    urlReturn: string;
    optional?: string; // otra custom data
}): Promise<FlowCreatePaymentResponse> {
    const { apiKey } = config();
    return post<FlowCreatePaymentResponse>("/payment/create", {
        apiKey,
        currency: "CLP",
        ...input,
    });
}

export async function getFlowPaymentStatus(token: string): Promise<FlowPaymentStatus> {
    const { apiKey } = config();
    return get<FlowPaymentStatus>("/payment/getStatus", {
        apiKey, token
    });
}


