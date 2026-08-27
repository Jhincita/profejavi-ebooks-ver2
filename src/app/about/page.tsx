import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre mí · La Biblioteca de la Profe Javi",
    description:
        "Conoce a Javiera Flores, Ingeniera Civil Industrial y profe de Matemáticas, la persona detrás de La Biblioteca de la Profe Javi.",
};

export default function AboutPage() {
    return (
        <article className="max-w-3xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:py-20">
            {/* Hero / Title section */}
            <header className="mb-12 text-center">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-grape mb-4 leading-tight">
                    Sobre mí
                </h1>
                <p className="font-sans text-lg sm:text-xl text-grape-soft/80 max-w-2xl mx-auto">
                    Ingeniera, profe y creadora de La Biblioteca de la Profe Javi
                </p>
                <div className="mt-6 h-1 w-20 bg-lavender-deep/40 rounded-full mx-auto" />
            </header>

            {/* Introduction — larger, welcoming */}
            <div className="prose prose-lg prose-grape max-w-none">
                <p className="text-xl sm:text-2xl font-display text-grape leading-relaxed">
                    ¡Hola! Soy Javiera Flores, Ingeniera Civil Industrial de profesión y la
                    persona detrás de La Biblioteca de la Profe Javi.
                </p>
            </div>

            {/* Main content with proper hierarchy */}
            <div className="prose prose-lg prose-grape max-w-none mt-8 space-y-8">
                <p>
                    Mi historia haciendo clases de Matemáticas empezó casi por casualidad.
                    Cuando comencé a estudiar Ingeniería —que, de hecho, es la segunda carrera
                    que estudio— una compañera se dio cuenta de que se me daban bien las
                    matemáticas y me pidió que le hiciera clases. La ayudé, me gustó la
                    experiencia y apareció una pregunta bastante simple:
                </p>

                <blockquote className="font-display text-2xl text-grape not-italic border-l-4 border-lavender-deep pl-6 py-2 my-8">
                    ¿Y si hago clases?
                </blockquote>

                <p>Y pos… aquí estamos, cinco años después.</p>

                <p>
                    Desde entonces, una de las cosas que más disfruto de enseñar es ver cómo
                    mis alumnos y alumnas se superan. Ver ese momento en que alguien que estaba
                    convencido de que "no podía" se da cuenta de que sí puede, de que sí es
                    capaz y de que muchas de esas barreras estaban solamente en su cabeza —o,
                    peor todavía, fueron puestas ahí por alguien más—.
                </p>

                <p className="font-display text-xl text-grape bg-lavender/30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 rounded-2xl">
                    Esa es, probablemente, mi parte favorita de ser profe: verlos superar sus
                    propias expectativas.
                </p>
            </div>

            {/* Sections with visual separation */}
            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    No se trata solo de llegar al resultado
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p>
                        Hay algo que intento trabajar muchísimo en mis clases: aprender a
                        analizar.
                    </p>
                    <p>
                        Porque podemos hacer un procedimiento completo y llegar a que la
                        respuesta es -3, pero… si estamos calculando cuánto mide una pared,
                        ¿puede medir -3 metros? Claramente no.
                    </p>
                    <p>
                        Entonces, además de enseñar procedimientos, fórmulas y trucos, me gusta
                        enseñar a preguntarse:
                    </p>
                    <blockquote className="font-display text-2xl text-grape not-italic border-l-4 border-lavender-deep pl-6 py-2 my-6">
                        ¿Mi respuesta tiene sentido?
                    </blockquote>
                    <p>
                        Para mí, aprender Matemáticas también significa mirar un poquito más
                        allá del cálculo, interpretar lo que estamos haciendo y entender por qué
                        una respuesta puede estar bien o mal.
                    </p>
                </div>
            </section>

            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    Cada persona aprende diferente
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p>
                        Creo que una de las cosas que más caracteriza mis clases es la paciencia
                        y el cariño con el que intento enseñar.
                    </p>
                    <p>
                        Me importa que mis alumnos se sientan escuchados y comprendidos. No
                        quiero enseñarles como yo aprendería ni como otra persona cree que
                        deberían aprender. Quiero encontrar la forma en que ellos necesitan
                        aprender.
                    </p>
                    <p>
                        Porque a algunos les sirve una explicación, a otros un dibujo, a otros
                        un ejemplo absurdo, a otros repetir el procedimiento cinco veces y a
                        otros entender primero de dónde salió todo.
                    </p>
                    <p className="font-display text-xl text-grape">
                        Y todas esas formas son válidas.
                    </p>
                </div>
            </section>

            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    ¿Y por qué nacieron estas guías?
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p>
                        Con el tiempo ocurrió algo por lo que estoy profundamente agradecida: ya
                        no me quedaron más horas para tomar alumnos nuevos.
                    </p>
                    <p>Pero las personas siguieron preguntándome por clases.</p>
                    <p>
                        Entonces apareció nuevamente una de esas preguntas que terminan
                        convirtiéndose en proyectos:
                    </p>
                    <blockquote className="font-display text-2xl text-grape not-italic border-l-4 border-lavender-deep pl-6 py-2 my-6">
                        ¿Y si encuentro otra forma de ayudarlos?
                    </blockquote>
                    <p>Y así nació la idea de crear mis propias guías y ebooks.</p>
                    <p>
                        Quería encontrar una forma de llegar a más personas sin perder aquello
                        que intento entregar en mis clases: explicaciones desde las bases,
                        ejemplos, práctica, paciencia, humor y una manera cercana de ver las
                        Matemáticas.
                    </p>
                    <p className="font-display text-xl text-grape bg-lavender/30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 rounded-2xl">
                        De ahí nace La Biblioteca de la Profe Javi.
                    </p>
                </div>
            </section>

            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    ¿Para quién está hecho este material?
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p className="text-2xl font-display text-grape">Para todos.</p>
                    <p className="text-xl font-display text-grape/80">
                        Y cuando digo todos, realmente quiero decir todos.
                    </p>
                    <p>
                        Puede ser para un estudiante que necesita reforzar una materia, para
                        alguien que quiere prepararse para una prueba, para un adulto que quiere
                        volver a estudiar o incluso para una mamá o un papá que quiere ayudar a
                        su hijo con Matemáticas y descubre que ya no recuerda cómo se hacía algo
                        —o que ahora simplemente se enseña de una forma diferente—.
                    </p>
                    <p>No importa demasiado la edad.</p>
                    <p className="font-display text-xl text-grape">
                        Si quieres aprender, repasar o finalmente entender algo que nunca
                        terminaste de comprender, este material también puede ser para ti.
                    </p>
                </div>
            </section>

            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    Aprender desde 0
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p>
                        Para mí, aprender desde 0 significa volver realmente a las bases.
                    </p>
                    <p>
                        No asumir que sabes algo simplemente porque "deberías haberlo visto
                        antes".
                    </p>
                    <p>
                        Por eso, por ejemplo, el primer tomo de la colección Desde 0 comienza
                        con El Universo de los Números.
                    </p>
                    <blockquote className="font-display text-2xl text-grape not-italic border-l-4 border-lavender-deep pl-6 py-2 my-6">
                        Antes de correr, caminemos.
                    </blockquote>
                    <p>
                        Pero tampoco quiero que estudiar desde las bases signifique leer páginas
                        y páginas de teoría latera. Mi idea es hacerlo de una manera dinámica,
                        cercana, con ejemplos, ejercicios, desafíos, un poquito de juego y, sí,
                        también alguna tontera de vez en cuando.
                    </p>
                    <p className="font-display text-xl text-grape">
                        Pero aprendiendo al final del día.
                    </p>
                </div>
            </section>

            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    Matemáticas sin tanto sufrimiento
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p>
                        Siempre he pensado que quizás no existen tantas materias aburridas como
                        creemos.
                    </p>
                    <p>Muchas veces depende muchísimo de quién te las enseñe.</p>
                    <p>
                        Yo, por ejemplo, de bióloga… nada. De humanista… tampoco mucho jajaja.
                        Pero tuve profesoras increíbles en el colegio que consiguieron que
                        disfrutara materias que probablemente nunca habría elegido estudiar por
                        mi cuenta.
                    </p>
                    <p>Eso mismo me gustaría conseguir acá.</p>
                    <p>No necesito que después de una guía digas:</p>
                    <blockquote className="font-display text-2xl text-grape not-italic border-l-4 border-lavender-deep pl-6 py-2 my-6">
                        ¡AMO LAS MATEMÁTICAS!
                    </blockquote>
                    <p>Aunque sería maravilloso.</p>
                    <p className="font-display text-xl text-grape bg-lavender/30 -mx-4 sm:-mx-6 px-4 sm:px-6 py-4 rounded-2xl">
                        Si antes decías "odio esta cuestión" y después dices "ya… quizás no era
                        TAN terrible", para mí ya ganamos.
                    </p>
                </div>
            </section>

            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    Un pequeño secreto de la Profe Javi 🤭
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p>
                        Tengo que confesar algo que siempre me ha dado entre risa y vergüenza
                        contar porque el nombre suena un poquito… bueno, muy nerd.
                    </p>
                    <p>
                        Cuando era más chica participé en un programa de la Pontificia
                        Universidad Católica llamado:
                    </p>
                    <blockquote className="font-display text-2xl text-grape not-italic border-l-4 border-lavender-deep pl-6 py-2 my-6">
                        Curso para niños con habilidades excepcionales en Matemáticas.
                    </blockquote>
                    <p>Sí.</p>
                    <p>Ese era el nombre.</p>
                    <p className="text-3xl font-display text-grape">JAJAJA.</p>
                    <p>
                        Durante mucho tiempo fue uno de mis pequeños secretos porque decirlo en
                        voz alta me daba demasiada vergüenza, pero la verdad es que fue una
                        experiencia muy importante para mí.
                    </p>
                    <p>
                        Tuve la suerte de aprender con profesores increíbles y estar rodeada de
                        Matemáticas desde un enfoque mucho más entretenido, curioso y profundo.
                    </p>
                    <p>
                        Probablemente de ahí viene también parte de lo que hoy intento
                        transmitir: no solamente los "datos duros" de la Matemática, sino
                        también sus datos rosas, curiosidades, historias y todas esas cosas que
                        demuestran que no tiene por qué ser una materia seria, fría y
                        absolutamente aburrida.
                    </p>
                </div>
            </section>

            {/* Closing — warm, inviting */}
            <section className="mt-16 pt-8 border-t border-lavender-deep/20">
                <h2 className="font-display text-3xl sm:text-4xl text-grape mb-6">
                    Bienvenido a mi Biblioteca 📚
                </h2>
                <div className="prose prose-lg prose-grape max-w-none space-y-4">
                    <p>La Biblioteca de la Profe Javi recién comienza.</p>
                    <p>
                        Mi intención es que, poco a poco, encuentres aquí todo el material que
                        puedas necesitar para aprender Matemáticas desde las bases y avanzar a
                        contenidos cada vez más complejos.
                    </p>
                    <p>
                        Iremos agregando nuevos ebooks y recursos de manera constante, y muchos
                        de ellos también podrán ir naciendo de lo que ustedes mismos necesiten
                        aprender.
                    </p>
                    <p className="text-xl font-display text-grape/70 italic">
                        Así que puedes considerar este lugar como una biblioteca que todavía
                        tiene muchos estantes vacíos…
                    </p>
                    <p className="text-2xl font-display text-grape">
                        pero que vamos a ir llenando juntos. ♡
                    </p>
                </div>
            </section>
        </article>
    );
}