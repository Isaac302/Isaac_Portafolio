import { Badge } from "@/components/ui/badge"

export const AboutMe = () => {
  return (
    <section id="sobreMi" className="min-h-dvh flex flex-col justify-center gap-6 px-4 py-8 max-w-3xl mx-auto ">
        <h2>Sobre Mi</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis optio maiores temporibus omnis officia asperiores autem placeat voluptatibus obcaecati doloremque ipsa pariatur hic, unde quisquam et reprehenderit quod ipsum.</p>
        <article className="">
            <h3>Estudios</h3>
            <div>
                <h3>
                    - Desarrollo de Software en Instituto Tecnológico de México
                </h3>
                <h3>
                    - Curso de React en Platzi  
                </h3>
            </div>
        </article>
        <article>
            <h3>Habilidades</h3>
            <div className="flex gap-1">
                <Badge>HTML</Badge>
                <Badge>CSS</Badge>
                <Badge>JavaScript</Badge>
            </div>
        </article>
    </section>
  )
}