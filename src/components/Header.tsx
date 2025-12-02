import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import{
  Sheet,
  SheetContent,
  SheetTrigger,

} from "@/components/ui/sheet";
  
import { Menu } from "lucide-react";


export const Header = () => {
  return (
  <header className="w-full flex justify-center items-cente fixed top-0 z-50">
    <div className="w-full md:bg-white/90 md:backdrop-blur-md md:shadow-md p-2">
      <div  className="hidden md:flex  justify-between px-4 flex-1">
        <h2 className="font-bold text-lg"><a href="#inicio">Isaac</a></h2>
        <NavigationMenu>
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuLink href="#inicio" className="hover:text-gray-500">
                Inicio
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#sobreMi" className="hover:text-gray-500">Sobre Mi</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#proyectos" className="hover:text-gray-500">Proyectos</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuLink href="#servicios" className="hover:text-gray-500">Servicios</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="#contacto" className="hover:text-gray-500">Contacto</NavigationMenuLink>
          </NavigationMenuItem>
          
          </NavigationMenuList>
        </NavigationMenu>
      </div>


      {/* Menu hidden */}
      <div className="md:hidden">
        <Sheet> 
          <SheetTrigger className="p-2 rounded-md hover:text-gray-500 ">
            <Menu className="size-6"/>
          </SheetTrigger>
          <SheetContent side="right" className="p-6" >
            <nav className="flex flex-col space-y-4 text-lg pl-2">
              <a href="#" className="hover:text-gray-500" >Inicio</a>
              <a href="#" className="hover:text-gray-500" >Sobre Mi</a>
              <a href="#"  className="hover:text-gray-500" >Proyectos</a>
              <a href="#" className="hover:text-gray-500" >Servcios</a>
              <a href="#" className="hover:text-gray-500" >Contacto</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

    </div>
  </header>
  );
}