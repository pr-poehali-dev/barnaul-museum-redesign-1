import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"}`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo-b.svg" alt="ГХМАК" className="h-8 w-auto" />
            <span className="text-lg font-serif font-semibold hidden md:inline-block">ГХМАК</span>
          </a>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium">О музее</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink href="/about" className="block p-2 hover:bg-accent rounded-md">
                        <div className="font-medium">История музея</div>
                        <div className="text-sm text-muted-foreground mt-1">Узнайте об истории создания и развития музея</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/collections" className="block p-2 hover:bg-accent rounded-md">
                        <div className="font-medium">Коллекции</div>
                        <div className="text-sm text-muted-foreground mt-1">Познакомьтесь с уникальными экспонатами нашей коллекции</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/team" className="block p-2 hover:bg-accent rounded-md">
                        <div className="font-medium">Сотрудники</div>
                        <div className="text-sm text-muted-foreground mt-1">Наша команда экспертов и профессионалов</div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium">Выставки</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink href="/exhibitions/current" className="block p-2 hover:bg-accent rounded-md">
                        <div className="font-medium">Текущие выставки</div>
                        <div className="text-sm text-muted-foreground mt-1">Выставки, проходящие в настоящее время</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/exhibitions/upcoming" className="block p-2 hover:bg-accent rounded-md">
                        <div className="font-medium">Будущие выставки</div>
                        <div className="text-sm text-muted-foreground mt-1">Анонсы предстоящих выставочных проектов</div>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/exhibitions/archive" className="block p-2 hover:bg-accent rounded-md">
                        <div className="font-medium">Архив выставок</div>
                        <div className="text-sm text-muted-foreground mt-1">Выставки, прошедшие в нашем музее ранее</div>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/events" className="font-medium block p-2 hover:bg-accent rounded-md">
                  Мероприятия
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/education" className="font-medium block p-2 hover:bg-accent rounded-md">
                  Образование
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink href="/contacts" className="font-medium block p-2 hover:bg-accent rounded-md">
                  Контакты
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <div className="flex items-center gap-2">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Поиск по сайту..." 
                  className="border-0 text-lg px-0 focus-visible:ring-0"
                  autoFocus
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Популярные запросы:</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm" onClick={() => setIsSearchOpen(false)}>Выставки</Button>
                  <Button variant="outline" size="sm" onClick={() => setIsSearchOpen(false)}>Экскурсии</Button>
                  <Button variant="outline" size="sm" onClick={() => setIsSearchOpen(false)}>Мастер-классы</Button>
                  <Button variant="outline" size="sm" onClick={() => setIsSearchOpen(false)}>Билеты</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button variant="outline" size="sm" className="hidden md:flex">
            Виртуальный тур
          </Button>
          <Button size="sm" className="hidden md:flex">Купить билет</Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-l-primary/10">
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium text-sm">О музее</h3>
                  <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">История музея</a>
                  <a href="/collections" className="text-muted-foreground hover:text-foreground transition-colors">Коллекции</a>
                  <a href="/team" className="text-muted-foreground hover:text-foreground transition-colors">Сотрудники</a>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="font-medium text-sm">Выставки</h3>
                  <a href="/exhibitions/current" className="text-muted-foreground hover:text-foreground transition-colors">Текущие выставки</a>
                  <a href="/exhibitions/upcoming" className="text-muted-foreground hover:text-foreground transition-colors">Будущие выставки</a>
                  <a href="/exhibitions/archive" className="text-muted-foreground hover:text-foreground transition-colors">Архив выставок</a>
                </div>
                
                <div className="flex flex-col gap-3">
                  <a href="/events" className="font-medium hover:text-foreground transition-colors">Мероприятия</a>
                  <a href="/education" className="font-medium hover:text-foreground transition-colors">Образование</a>
                  <a href="/contacts" className="font-medium hover:text-foreground transition-colors">Контакты</a>
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
