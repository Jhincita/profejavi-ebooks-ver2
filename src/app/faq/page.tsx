import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Preguntas Frecuentes · La Biblioteca de la Profe Javi",
    description:
        "Respuestas a las preguntas más comunes sobre La Biblioteca de la Profe Javi: ebooks, guías, acceso, devoluciones y más.",
};

export default function FAQPage() {
    return (
        <article className="max-w-3xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:py-20">
            {/* Hero / Title section */}
            <header className="mb-12 text-center">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-grape mb-4 leading-tight">
                    Preguntas Frecuentes
                </h1>
                <p className="font-sans text-lg sm:text-xl text-grape-soft/80 max-w-2xl mx-auto">
                    Todo lo que necesitas saber antes de comenzar
                </p>
                <div className="mt-6 h-1 w-20 bg-lavender-deep/40 rounded-full mx-auto" />
            </header>

            {/* FAQ List */}
            <div className="space-y-8">
                {/* FAQ Item 1 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Qué encontraré en La Biblioteca de la Profe Javi?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Encontrarás ebooks, guías y recursos de Matemáticas creados para ayudarte a
                            comprender los contenidos paso a paso, practicar y reforzar lo aprendido.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 2 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Las guías sirven para aprender desde cero?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            ¡Sí! Muchos de los materiales están especialmente diseñados para comenzar desde las
                            bases. La idea es que puedas avanzar progresivamente, incluso si sientes que todavía no
                            manejas bien la materia.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 3 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Para qué cursos están pensados los ebooks?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Cada producto indica claramente el nivel, curso y contenidos que trabaja. Antes de
                            comprar, podrás revisar la descripción para saber si corresponde a lo que necesitas
                            estudiar.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 4 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Las guías incluyen ejercicios?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Sí. Además de la explicación de la materia, encontrarás ejemplos resueltos y ejercicios
                            para practicar. Dependiendo de la guía, estos pueden estar organizados desde niveles
                            más básicos hasta desafíos de mayor dificultad.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 5 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Las guías incluyen respuestas?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Sí. Los materiales indican si incluyen solucionario o sección de respuestas para que
                            puedas revisar tu trabajo después de intentar los ejercicios.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 6 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Necesito imprimir los ebooks?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            No necesariamente. Puedes utilizarlos de forma digital desde tu computador, tablet o
                            celular. Si prefieres estudiar escribiendo sobre papel, también puedes imprimirlos para
                            uso personal.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 7 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Cómo recibiré mi ebook después de comprar?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Al tratarse de un producto digital, recibirás acceso al material de acuerdo con el método
                            de entrega indicado al momento de realizar tu compra.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 8 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Los ebooks son productos físicos?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            No. Los productos de La Biblioteca de la Profe Javi son digitales, por lo que no recibirás
                            un libro físico ni se realizará un envío a domicilio, salvo que algún producto indique
                            expresamente lo contrario.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 9 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Puedo compartir el ebook con otras personas?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            No. La compra corresponde a una licencia de uso personal. El material no puede ser
                            revendido, distribuido, publicado ni compartido con terceros sin autorización.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 10 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Puedo utilizar las guías si soy profesor o profesora?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Puedes adquirirlas para tu uso personal. Si deseas utilizarlas con varios estudiantes,
                            distribuirlas o utilizarlas comercialmente, puedes contactarme para consultar por licencias
                            o condiciones especiales.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 11 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        Compré una guía y tengo problemas para acceder, ¿qué hago?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Puedes contactarme indicando el nombre utilizado en la compra y el correo asociado al
                            pedido para poder revisar tu caso.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 12 */}
                <section className="border-b border-lavender-deep/20 pb-8">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Puedo pedir una devolución?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p>
                            Debido a que se trata de productos digitales, las condiciones de cambios y devoluciones
                            se encuentran especificadas en las políticas de compra de la página. Te recomiendo
                            revisarlas antes de realizar tu pedido.
                        </p>
                    </div>
                </section>

                {/* FAQ Item 13 - Closing */}
                <section className="pt-4">
                    <h2 className="font-display text-2xl sm:text-3xl text-grape mb-3">
                        ¿Habrá nuevos ebooks?
                    </h2>
                    <div className="prose prose-lg prose-grape max-w-none">
                        <p className="text-xl font-display text-grape">
                            ¡Sí! La Biblioteca seguirá creciendo con nuevos contenidos y materiales para que puedas
                            continuar aprendiendo y reforzando Matemáticas.
                        </p>
                    </div>
                </section>
            </div>
        </article>
    );
}