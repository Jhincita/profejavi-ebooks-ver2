import { S3Client, GetObjectCommand} from "@aws-sdk/client-s3";

const { R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET } = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) {
    throw new Error("R2: faltan variables r2");
}


//  The ! (non-null assertion) tells TypeScript "trust me, these are defined" (they were validated earlier).
export const r2 = new S3Client({
    region: "auto",
    endpoint:`https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: R2_ACCESS_KEY_ID!, //
        secretAccessKey: R2_SECRET_ACCESS_KEY!,
    },
});

export async function getObjectBytes(key: string) {
    const res = await r2.send(new GetObjectCommand({ Bucket: R2_BUCKET, Key: key }));
    if (!res.Body) throw new Error(`R2: ${key} not found`);
    const bytes = await res.Body.transformToByteArray();
    return { bytes, contentType: res.ContentType ?? "application/octet-stream" };
}