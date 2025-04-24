import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Добавляем эффект тени при скролле
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="ГХМАК" className="h-8 w-auto" />
            <span className="text-lg font-semibold hidden md:inline-block">ГХМАК</span>
          </a>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>О музее</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink href="/about">История музея</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/collections">Коллекции</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/team">Сотрудники</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Выставки</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink href="/exhibitions/current">Текущие выставки</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/exhibitions/upcoming">Будущие выставки</NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/exhibitions/archive">Архив выставок</NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/events">Мероприятия</NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/education">Образование</NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/contacts">Контакты</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Виртуальный тур
          </Button>
          <Button className="hidden md:flex">Купить билет</Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium text-sm">О музее</h3>
                  <a href="/about" className="text-muted-foreground hover:text-foreground">История музея</a>
                  <a href="/collections" className="text-muted-foreground hover:text-foreground">Коллекции</a>
                  <a href="/team" className="text-muted-foreground hover:text-foreground">Сотрудники</a>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium text-sm">Выставки</h3>
                  <a href="/exhibitions/current" className="text-muted-foreground hover:text-foreground">Текущие выставки</a>
                  <a href="/exhibitions/upcoming" className="text-muted-foreground hover:text-foreground">Будущие выставки</a>
                  <a href="/exhibitions/archive" className="text-muted-foreground hover:text-foreground">Архив выставок</a>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="/events" className="font-medium hover:text-foreground">Мероприятия</a>
                  <a href="/education" className="font-medium hover:text-foreground">Образование</a>
                  <a href="/contacts" className="font-medium hover:text-foreground">Контакты</a>
                </div>
                
                <div className="flex flex-col gap-3 mt-4">
                  <Button variant="outline" className="w-full">Виртуальный тур</Button>
                  <Button className="w-full">Купить билет</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
