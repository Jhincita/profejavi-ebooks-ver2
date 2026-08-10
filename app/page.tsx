import { SiteHeader } from "./components/site-header";
import { ProductCard } from "./components/product-card";
import { AboutCard } from "./components/about-card";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
    return (
        <>
            <SiteHeader />

            <main id="inicio" className="w-full flex-1 px-4 sm:px-8">
                <div className="mx-auto grid max-w-6xl gap-6 py-4 md:grid-cols-2">
                    <ProductCard />
                    <AboutCard />
                </div>
            </main>

            <SiteFooter />
        </>
    );
}