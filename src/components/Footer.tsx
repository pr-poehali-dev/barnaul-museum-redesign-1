import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo-b.svg" alt="ГХМАК" className="h-8 w-auto" />
              <span className="text-xl font-semibold">ГХМАК</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Государственный художественный музей Алтайского края — культурное пространство, где история 
              встречается с современностью.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground">О музее</a></li>
              <li><a href="/exhibitions" className="text-muted-foreground hover:text-foreground">Выставки</a></li>
              <li><a href="/events" className="text-muted-foreground hover:text-foreground">Мероприятия</a></li>
              <li><a href="/education" className="text-muted-foreground hover:text-foreground">Образование</a></li>
              <li><a href="/collections" className="text-muted-foreground hover:text-foreground">Коллекции</a></li>
              <li><a href="/contacts" className="text-muted-foreground hover:text-foreground">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  г. Барнаул, ул. Ленина, 88
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">+7 (3852) 50-22-29</p>
                  <p className="text-sm text-muted-foreground">+7 (3852) 50-22-24</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  ghmak@mail.ru
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Рассылка</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Подпишитесь на нашу рассылку, чтобы быть в курсе новых выставок и мероприятий
            </p>
            <div className="flex gap-2">
              <Input placeholder="Email" type="email" />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Государственный художественный музей Алтайского края. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="/policy" className="hover:text-foreground">Политика конфиденциальности</a>
            <a href="/terms" className="hover:text-foreground">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
