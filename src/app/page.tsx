// app/page.tsx
import { ProductCard } from "@/components/product-card";
import { AboutCard } from "@/components/about-card";
import { prisma } from "@/lib/db";

export default async function Home() {
    const ebooks = await prisma.ebook.findMany({
        where: { published: true },
        orderBy: { createdAt: "asc" },
    });

    return (
        <div className="mx-auto grid max-w-5xl gap-6 py-4 md:grid-cols-[2fr_1fr]">
            {ebooks[0] && <ProductCard ebook={ebooks[0]} />}
            <AboutCard />
        </div>
    );
}