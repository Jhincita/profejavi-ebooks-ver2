// prisma/seed.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.ebook.upsert({
        where: { slug: "el-universo-de-los-numeros" },
        update: {},
        create: {
            slug: "el-universo-de-los-numeros",
            title: "El universo de los números",
            topic: "Matemáticas",
            description: "Guía de estudio digital.",
            priceClp: 5000,
            fileKey: "ebooks/el-universo-de-los-numeros.pdf",
            published: true,
        },
    });

    console.log("Seed listo ✅");
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());