"use client";

import { useRouter } from "next/navigation";
import { WashiTape } from "@/components/washi-tape";
import { BubblyButton } from "@/components/reusable-react-components/bubblybutton/BubblyButton";

export function MoreAboutCard() {
    const router = useRouter();

    return (
        <article
            id="sobre-javi"
            className="relative rounded-[28px] bg-lavender p-6 pt-10 sm:p-8 sm:pt-10"
        >
            <WashiTape className="-top-4 right-8 rotate-[7deg]" color="var(--color-lavender-deep)" />

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                {/* Text */}
                <div className="order-2 text-center sm:order-1 sm:text-left">
                    <h2 className="font-display text-2xl text-grape sm:text-3xl">
                        Sobre mí · Profe Javi
                    </h2>

                    <div className="mt-2 font-sans leading-relaxed text-grape-soft space-y-4">
                        <p>
                            ¡Hola! Soy Javiera Flores, Ingeniera Civil Industrial de profesión y la persona
                            detrás de La Biblioteca de la Profe Javi.
                        </p>

                        <p>
                            Mi historia haciendo clases de Matemáticas empezó casi por casualidad. Cuando
                            comencé a estudiar Ingeniería —que, de hecho, es la segunda carrera que estudio— una
                            compañera se dio cuenta de que se me daban bien las matemáticas y me pidió que le
                            hiciera clases. La ayudé, me gustó la experiencia y apareció una pregunta bastante
                            simple:
                        </p>

                        <p className="italic text-grape">
                            "¿Y si hago clases?"
                        </p>

                        <p>
                            Y pos… aquí estamos, cinco años después.
                        </p>

                        <p>
                            Desde entonces, una de las cosas que más disfruto de enseñar es ver cómo mis
                            alumnos y alumnas se superan. Ver ese momento en que alguien que estaba convencido
                            de que "no podía" se da cuenta de que sí puede, de que sí es capaz y de que muchas de
                            esas barreras estaban solamente en su cabeza —o, peor todavía, fueron puestas ahí por
                            alguien más—.
                        </p>

                        <p className="font-semibold text-grape">
                            Esa es, probablemente, mi parte favorita de ser profe: verlos superar sus
                            propias expectativas.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            No se trata solo de llegar al resultado
                        </h3>

                        <p>
                            Hay algo que intento trabajar muchísimo en mis clases: aprender a analizar.
                            Porque podemos hacer un procedimiento completo y llegar a que la respuesta es -3,
                            pero… si estamos calculando cuánto mide una pared, ¿puede medir -3 metros?
                            Claramente no.
                        </p>

                        <p>
                            Entonces, además de enseñar procedimientos, fórmulas y trucos, me gusta
                            enseñar a preguntarse:
                        </p>

                        <p className="italic text-grape">
                            "¿Mi respuesta tiene sentido?"
                        </p>

                        <p>
                            Para mí, aprender Matemáticas también significa mirar un poquito más allá del
                            cálculo, interpretar lo que estamos haciendo y entender por qué una respuesta puede
                            estar bien o mal.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            Cada persona aprende diferente
                        </h3>

                        <p>
                            Creo que una de las cosas que más caracteriza mis clases es la paciencia y el
                            cariño con el que intento enseñar.
                        </p>

                        <p>
                            Me importa que mis alumnos se sientan escuchados y comprendidos. No quiero
                            enseñarles como yo aprendería ni como otra persona cree que deberían aprender.
                            Quiero encontrar la forma en que ellos necesitan aprender.
                        </p>

                        <p>
                            Porque a algunos les sirve una explicación, a otros un dibujo, a otros un ejemplo
                            absurdo, a otros repetir el procedimiento cinco veces y a otros entender primero de dónde
                            salió todo.
                        </p>

                        <p className="font-semibold text-grape">
                            Y todas esas formas son válidas.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            ¿Y por qué nacieron estas guías?
                        </h3>

                        <p>
                            Con el tiempo ocurrió algo por lo que estoy profundamente agradecida: ya no me
                            quedaron más horas para tomar alumnos nuevos.
                        </p>

                        <p>
                            Pero las personas siguieron preguntándome por clases.
                        </p>

                        <p>
                            Entonces apareció nuevamente una de esas preguntas que terminan
                            convirtiéndose en proyectos:
                        </p>

                        <p className="italic text-grape">
                            "¿Y si encuentro otra forma de ayudarlos?"
                        </p>

                        <p>
                            Y así nació la idea de crear mis propias guías y ebooks.
                        </p>

                        <p>
                            Quería encontrar una forma de llegar a más personas sin perder aquello que
                            intento entregar en mis clases: explicaciones desde las bases, ejemplos, práctica,
                            paciencia, humor y una manera cercana de ver las Matemáticas.
                        </p>

                        <p className="font-semibold text-grape">
                            De ahí nace La Biblioteca de la Profe Javi.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            ¿Para quién está hecho este material?
                        </h3>

                        <p>
                            Para todos.
                        </p>

                        <p>
                            Y cuando digo todos, realmente quiero decir todos.
                        </p>

                        <p>
                            Puede ser para un estudiante que necesita reforzar una materia, para alguien que
                            quiere prepararse para una prueba, para un adulto que quiere volver a estudiar o incluso
                            para una mamá o un papá que quiere ayudar a su hijo con Matemáticas y descubre que
                            ya no recuerda cómo se hacía algo —o que ahora simplemente se enseña de una forma
                            diferente—.
                        </p>

                        <p>
                            No importa demasiado la edad.
                        </p>

                        <p className="font-semibold text-grape">
                            Si quieres aprender, repasar o finalmente entender algo que nunca terminaste de
                            comprender, este material también puede ser para ti.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            Aprender desde 0
                        </h3>

                        <p>
                            Para mí, aprender desde 0 significa volver realmente a las bases.
                        </p>

                        <p>
                            No asumir que sabes algo simplemente porque "deberías haberlo visto antes".
                        </p>

                        <p>
                            Por eso, por ejemplo, el primer tomo de la colección Desde 0 comienza con El
                            Universo de los Números.
                        </p>

                        <p className="italic text-grape">
                            Antes de correr, caminemos.
                        </p>

                        <p>
                            Pero tampoco quiero que estudiar desde las bases signifique leer páginas y
                            páginas de teoría latera. Mi idea es hacerlo de una manera dinámica, cercana, con
                            ejemplos, ejercicios, desafíos, un poquito de juego y, sí, también alguna tontera de vez en
                            cuando.
                        </p>

                        <p className="font-semibold text-grape">
                            Pero aprendiendo al final del día.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            Matemáticas sin tanto sufrimiento
                        </h3>

                        <p>
                            Siempre he pensado que quizás no existen tantas materias aburridas como
                            creemos.
                        </p>

                        <p>
                            Muchas veces depende muchísimo de quién te las enseñe.
                        </p>

                        <p>
                            Yo, por ejemplo, de bióloga… nada. De humanista… tampoco mucho jajaja. Pero
                            tuve profesoras increíbles en el colegio que consiguieron que disfrutara materias que
                            probablemente nunca habría elegido estudiar por mi cuenta.
                        </p>

                        <p>
                            Eso mismo me gustaría conseguir acá.
                        </p>

                        <p>
                            No necesito que después de una guía digas:
                        </p>

                        <p className="italic text-grape">
                            "¡AMO LAS MATEMÁTICAS!"
                        </p>

                        <p>
                            Aunque sería maravilloso.
                        </p>

                        <p className="font-semibold text-grape">
                            Si antes decías "odio esta cuestión" y después dices "ya… quizás no era TAN
                            terrible", para mí ya ganamos.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            Un pequeño secreto de la Profe Javi 🤭
                        </h3>

                        <p>
                            Tengo que confesar algo que siempre me ha dado entre risa y vergüenza contar
                            porque el nombre suena un poquito… bueno, muy nerd.
                        </p>

                        <p>
                            Cuando era más chica participé en un programa de la Pontificia Universidad
                            Católica llamado:
                        </p>

                        <p className="italic font-semibold text-grape">
                            "Curso para niños con habilidades excepcionales en Matemáticas".
                        </p>

                        <p className="text-lg">
                            JAJAJA.
                        </p>

                        <p>
                            Durante mucho tiempo fue uno de mis pequeños secretos porque decirlo en voz
                            alta me daba demasiada vergüenza, pero la verdad es que fue una experiencia muy
                            importante para mí.
                        </p>

                        <p>
                            Tuve la suerte de aprender con profesores increíbles y estar rodeada de
                            Matemáticas desde un enfoque mucho más entretenido, curioso y profundo.
                        </p>

                        <p>
                            Probablemente de ahí viene también parte de lo que hoy intento transmitir: no
                            solamente los "datos duros" de la Matemática, sino también sus datos rosas,
                            curiosidades, historias y todas esas cosas que demuestran que no tiene por qué ser una
                            materia seria, fría y absolutamente aburrida.
                        </p>

                        <h3 className="font-display text-xl text-grape mt-6">
                            Bienvenido a mi Biblioteca 📚
                        </h3>

                        <p>
                            La Biblioteca de la Profe Javi recién comienza.
                        </p>

                        <p>
                            Mi intención es que, poco a poco, encuentres aquí todo el material que puedas
                            necesitar para aprender Matemáticas desde las bases y avanzar a contenidos cada vez
                            más complejos.
                        </p>

                        <p>
                            Iremos agregando nuevos ebooks y recursos de manera constante, y muchos de
                            ellos también podrán ir naciendo de lo que ustedes mismos necesiten aprender.
                        </p>

                        <p className="italic text-grape">
                            Así que puedes considerar este lugar como una biblioteca que todavía tiene
                            muchos estantes vacíos…
                        </p>

                        <p className="font-semibold text-grape text-lg">
                            pero que vamos a ir llenando juntos. ♡
                        </p>
                    </div>

                    <BubblyButton
                        onClick={() => router.push("/about")}
                        color="hsl(189 77.9% 60%)"
                    >
                        SOBRE MÍ
                    </BubblyButton>
                </div>

                {/* Avatar — swap for the real photo of Javi */}
                <div className="order-1 flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-white/85 shadow-md ring-1 ring-black/5 sm:order-2">
                    <span className="px-2 text-center font-display text-sm text-grape/60">
                        Foto de Javi
                    </span>
                </div>
            </div>
        </article>
    );
}