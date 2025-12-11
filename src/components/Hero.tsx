import { Button } from "./ui/button"

import { Linkedin, Github, Instagram } from "lucide-react"

export const Hero = () => {
    return (
        <section id="inicio" className=" bg-background min-h-screen flex justify-center m-auto items-center pt-16 md:pt-32">
            <div className="flex flex-col max-w-3xl mx-auto p-4 gap-3">
                <h1 className="font-bold leading-tight">
                    <span className="block text-3xl md:text-4xl">Hola, soy</span>
                    <span className="block text-primary text-5xl md:text-6xl">
                        Isaac de la Rosa
                    </span>
                </h1>

                <div className="space-y-3">
                    <h2 className="bg-gray-100 shadow-sm text-2xl font-semibold rounded px-3 py-1 w-fit">Desarrollador | Analista</h2>
                    <p className="text-muted-foreground text-xl leading-relaxed">Apasionado por crear aplicaciones web completas, dashboards y automatizaciones.</p>
                </div>
                <div className="flex flex-col gap-4 mt-4 border-b pb-4 mb-4">
                    <div className="space-x-4">
                        <Button size="lg" >Ver Proyectos</Button>
                        <Button variant="outline" size="lg">Descargar CV</Button>
                    </div>
                </div>

                <div className="flex gap-3">
                    <a href="#"><Instagram className="size-6" /></a>
                    <a href="#"><Linkedin className="size-6" /></a>
                    <a href="#"><Github className="size-6" /></a>
                </div>
            </div>
        </section>
    )
}