import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Menu } from "lucide-react"

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // Cambia al hacer scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="flex justify-between items-center max-w-5xl mx-auto p-4">
        <a href="#inicio" className="text-primary text-2xl font-bold hover:scale-105 transition-transform">Isaac</a>
        <nav className=" hidden md:flex gap-6 text-xl">
          <a href="#inicio" className="border-b-[1.5px] border-transparent hover:border-primary transition-colors">Inicio</a>
          <a href="#sobre-mi" className="border-b-[1.5px] border-transparent hover:border-primary transition-colors">Sobre mí</a>
          <a href="#proyectos" className="border-b-[1.5px] border-transparent hover:border-primary transition-colors">Proyectos</a>
          <a href="#contacto" className="border-b-[1.5px] border-transparent hover:border-primary transition-colors">Contacto</a>
        </nav>
      </div>

      <Sheet>
        <SheetTrigger className="p-2 fixed top-4 right-4 md:hidden z-50 bg-gray-200 rounded-md">
          <Menu />
        </SheetTrigger>
        <SheetContent side="right" className="md:hidden w-[70vw] p-6">
          <nav className="flex flex-col gap-6 mt-10">
            <a href="inicio">Inicio</a>
            <a href="sobre-mi">Sobre mí</a>
            <a href="proyectos">Proyectos</a>
            <a href="contacto">Contacto</a>
          </nav>
        </SheetContent>
      </Sheet>

    </header>
  )
}
