import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { ExhibitionCard } from "@/components/ExhibitionCard";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { BookTicketButton } from "@/components/BookTicketButton";
import { MuseumInfo } from "@/components/MuseumInfo";
import { CalendarHeart, Ticket, MapPin, Clock, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/placeholder.svg" 
            alt="Государственный художественный музей Алтайского края" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="container relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Государственный художественный музей Алтайского края
          </h1>
          <p className="text-xl mb-8 max-w-2xl opacity-90">
            Место, где история искусства встречается с современностью. Откройте для себя богатство культурного наследия Алтая.
          </p>
          <div className="flex flex-wrap gap-4">
            <BookTicketButton />
            <Button variant="outline" className="border-white text-white hover:text-black">
              Виртуальный тур
            </Button>
          </div>
        </div>
      </section>

      {/* Current exhibitions */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Текущие выставки</h2>
            <Button variant="link" className="text-primary">Все выставки →</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExhibitionCard 
              title="Алтайские пейзажи"
              dates="12 мая — 30 июня 2023"
              image="/placeholder.svg"
              description="Выставка работ алтайских художников, посвященная природе Алтайского края"
            />
            <ExhibitionCard 
              title="Русское искусство XIX века"
              dates="1 июня — 31 августа 2023"
              image="/placeholder.svg"
              description="Экспозиция шедевров русской живописи из коллекции музея"
              featured
            />
            <ExhibitionCard 
              title="Современное искусство Сибири"
              dates="20 июня — 15 сентября 2023"
              image="/placeholder.svg"
              description="Работы современных сибирских художников и скульпторов"
            />
          </div>
        </div>
      </section>

      {/* Museum info */}
      <section className="py-16">
        <div className="container">
          <MuseumInfo />
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Афиша мероприятий</h2>
            <Button variant="link" className="text-primary">Все мероприятия →</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard 
              title="Мастер-класс по акварели"
              date="12 июня 2023, 15:00"
              image="/placeholder.svg"
              type="Мастер-класс"
            />
            <EventCard 
              title="Лекция 'История иконописи'"
              date="15 июня 2023, 18:00"
              image="/placeholder.svg"
              type="Лекция"
            />
            <EventCard 
              title="Экскурсия 'Алтайское наследие'"
              date="18 июня 2023, 12:00"
              image="/placeholder.svg"
              type="Экскурсия"
            />
          </div>
        </div>
      </section>

      {/* Visit info */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10">Информация для посетителей</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-primary-foreground text-primary p-6">
              <div className="flex gap-4 items-start">
                <Clock className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Время работы</h3>
                  <p>Вт-Вс: 10:00 — 18:00</p>
                  <p>Кассы до 17:30</p>
                  <p>Пн: выходной</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-primary-foreground text-primary p-6">
              <div className="flex gap-4 items-start">
                <Ticket className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Стоимость</h3>
                  <p>Взрослый: 300 ₽</p>
                  <p>Льготный: 150 ₽</p>
                  <p>Дети до 7 лет: бесплатно</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-primary-foreground text-primary p-6">
              <div className="flex gap-4 items-start">
                <MapPin className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                  <p>г. Барнаул, ул. Ленина, 88</p>
                  <p className="mt-2 text-sm">
                    <Button variant="link" className="p-0 h-auto text-primary">Показать на карте</Button>
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-primary-foreground text-primary p-6">
              <div className="flex gap-4 items-start">
                <Phone className="w-8 h-8" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Контакты</h3>
                  <p>+7 (3852) 50-22-29</p>
                  <p>ghmak@mail.ru</p>
                  <p className="mt-2 text-sm">
                    <Button variant="link" className="p-0 h-auto text-primary">Написать нам</Button>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
