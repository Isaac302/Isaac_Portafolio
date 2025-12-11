import { Badge } from "@/components/ui/badge"

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="bg bg-background-alt min-h-dvh flex flex-col justify-center items-center gap-6 px-4 py-8 pt-16 md:pt32">
        <div className="max-w-xl space-y-6">
            <h2 className="text-5xl md:text-4xl">Sobre Mi</h2>
            <article>
                <h3>Isaac de la Rosa</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium corporis optio maiores temporibus omnis officia asperiores autem placeat voluptatibus obcaecati doloremque ipsa pariatur hic, unde quisquam et reprehenderit quod ipsum.</p>
            </article>

            <article className="space-y-1">
                <h3 className="border-l-2 border-muted-foreground pl-2">Estudios</h3>
                <div>
                    <h3>
                        Ingenieria en sistemas y Computacion 
                    </h3>
                    <p className="text-muted-foreground text-xs">Universidad O&M</p>
                </div>
            </article>
            <article className="space-y-3">
                <h3 className="border-l-2 border-muted-foreground pl-2">Habilidades</h3>
                <div className="flex gap-1">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                </div>
            </article>
        </div>
    </section>
  )
}