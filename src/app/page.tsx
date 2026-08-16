// app/page.tsx
import { SiteHeader } from "@/components/site-header";
import { ProductCard } from "@/components/product-card";
import { AboutCard } from "@/components/about-card";
import { SiteFooter } from "@/components/site-footer";
import { prisma } from "@/lib/db";

export default async function Home() {
    const ebooks = await prisma.ebook.findMany({
        where: { published: true },
        orderBy: { createdAt: "asc" },
    });

    return (
        <>
            <SiteHeader />
            <main id="inicio" className="w-full flex-1 px-4 sm:px-8">
                <div className="mx-auto grid max-w-6xl gap-6 py-4 md:grid-cols-1">
                    {ebooks[0] && <ProductCard ebook={ebooks[0]} />}

                </div>
            </main>
            <SiteFooter />
        </>
    );
}