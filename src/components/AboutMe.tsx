import { Badge } from "@/components/ui/badge"

export const AboutMe = () => {
  return (
    <section id="sobre-mi" className="bg bg-background-alt min-h-dvh flex flex-col justify-center items-center gap-6 px-4 py-8 pt-16 md:pt32">
        <div className="max-w-xl space-y-6 text-center">
            <h2 className="text-5xl md:text-4xl">Sobre Mi</h2>
                <h3>Isaac de la Rosa</h3>
                <p>Programador Full Stack y Analista de Datos con experiencia creando aplicaciones web completas, dashboards y automatizaciones. Trabajo con JavaScript, Python, React y SQL, combinando desarrollo y análisis para entregar soluciones claras y de impacto.</p>
        </div>
    </section>
  )
}