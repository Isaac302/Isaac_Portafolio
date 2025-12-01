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
  <header className="w-full flex justify-center items-center mt-4">
    <div className="max-w-xl w-full md:bg-white/90 md:backdrop-blur-md rounded-full md:shadow-md px-4 py-2">
    <div  className="hidden md:flex justify-center flex-1">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="## inicio" className="hover:text-gray-500">Inicio</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="## sobreMi" className="hover:text-gray-500">Sobre Mi</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="## proyectos" className="hover:text-gray-500">Proyectos</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuLink href="## servicios" className="hover:text-gray-500">Servicios</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="## contacto" className="hover:text-gray-500">Contacto</NavigationMenuLink>
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
            <a href="#" className="hover:text-gray-500" >Proyectos</a>
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