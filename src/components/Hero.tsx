import { Button } from "./ui/button"

import {Linkedin, Github, Instagram} from "lucide-react"

export const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex justify-center items-center">
        <article>
            <h1 className="font-bold text-xl">Hola, soy <span>Isaac</span></h1>
            <div>
                <h2 className="bg-gray-100 shadow-lg">Desarrollador | Analista</h2>
                <p>Apasionado por crear experiencias web atractivas y funcionales.</p>
            </div>
            <div className="flex flex-col gap-4 mt-4 border-b pb-4 mb-4">
                <p>Desarrollador Frontend</p>
                <div className="space-x-4">
                    <Button size="lg">Ver Proyectos</Button>
                    <Button variant="outline" size="lg">Contacto</Button>
                </div>
            </div>

            <div className="flex gap-2">
                <a href=""><Instagram className="size-4" /></a>
                <a href=""><Linkedin className="size-4" /></a>
                <a href=""><Github className="size-4" /></a>
            </div>
        </article>
    </section>
  )
}