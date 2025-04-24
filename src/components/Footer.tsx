import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background pt-16 pb-8 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <img src="/logo-b.svg" alt="ГХМАК" className="h-10 w-auto" />
              <div>
                <span className="text-xl font-serif font-semibold">ГХМАК</span>
                <p className="text-xs text-muted-foreground">Государственный художественный музей Алтайского края</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Культурное пространство, где история искусства встречается с современностью. 
              Откройте для себя богатство культурного наследия Алтая.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" aria-label="Facebook" className="rounded-full h-10 w-10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Twitter" className="rounded-full h-10 w-10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Instagram" className="rounded-full h-10 w-10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Youtube" className="rounded-full h-10 w-10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-5 text-lg">Навигация</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                О музее
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
              <a href="/exhibitions" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                Выставки
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
              <a href="/events" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                Мероприятия
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
              <a href="/education" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                Образование
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
              <a href="/collections" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                Коллекции
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
              <a href="/contacts" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                Контакты
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
              <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                Блог
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
              <a href="/virtual-tour" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                Виртуальный тур
                <ArrowUpRight className="ml-1 h-3 w-3 opacity-70" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-5 text-lg">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="text-sm">
                  г. Барнаул, ул. Ленина, 88
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm">+7 (3852) 50-22-29</p>
                  <p className="text-sm text-muted-foreground">Ежедневно с 10:00 до 18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <p className="text-sm">
                  ghmak@mail.ru
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-5 text-lg">Рассылка</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Подпишитесь, чтобы быть в курсе новых выставок, событий и специальных предложений
            </p>
            <div className="flex flex-col gap-3">
              <Input placeholder="Email" type="email" className="bg-muted/50" />
              <Button className="w-full">Подписаться</Button>
              <p className="text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с нашей <a href="/policy" className="underline hover:text-foreground">политикой конфиденциальности</a>
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Государственный художественный музей Алтайского края
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="/policy" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Условия использования</a>
            <a href="/sitemap" className="hover:text-foreground transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
