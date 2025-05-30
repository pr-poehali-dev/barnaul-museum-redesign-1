import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/Header";
import { ExhibitionCard } from "@/components/ExhibitionCard";
import { EventCard } from "@/components/EventCard";
import { Footer } from "@/components/Footer";
import { BookTicketButton } from "@/components/BookTicketButton";
import { MuseumInfo } from "@/components/MuseumInfo";
import { CalendarHeart, Ticket, MapPin, Clock, Phone, ChevronRight, ArrowRight, Palette, BookOpen, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-museum-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="/placeholder.svg" 
            alt="Государственный художественный музей Алтайского края" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-museum-dark to-museum-dark/40"></div>
        </div>
        <div className="container relative z-10 text-white">
          <div className="max-w-3xl fade-up">
            <h1 className="hero-text mb-8">
              Искусство <span className="text-museum-purple">Алтая</span> через века
            </h1>
            <p className="text-xl mb-10 max-w-2xl opacity-90 leading-relaxed">
              Государственный художественный музей Алтайского края — место, где история искусства встречается с современностью. 
              Откройте для себя богатство культурного наследия Алтая.
            </p>
            <div className="flex flex-wrap gap-4">
              <BookTicketButton />
              <Button variant="outline" className="border-white text-white hover:text-black scale-up-hover">
                Виртуальный тур
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats panel */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm">
          <div className="container py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-3xl font-bold mb-1">10,000+</div>
                <div className="text-white/70 text-sm">Экспонатов в коллекции</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl font-bold mb-1">50+</div>
                <div className="text-white/70 text-sm">Выставок в год</div>
              </div>
              <div className="flex flex-col items-center md:items-end">
                <div className="text-3xl font-bold mb-1">1958</div>
                <div className="text-white/70 text-sm">Год основания музея</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick info panel */}
      <section className="bg-accent py-5 relative z-10 border-b">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Clock className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Время работы</p>
                <p className="text-sm text-muted-foreground">Вт-Вс: 10:00 — 18:00</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <MapPin className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Адрес</p>
                <p className="text-sm text-muted-foreground">г. Барнаул, ул. Ленина, 88</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <div className="bg-white p-3 rounded-full shadow-sm">
                <Phone className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">Телефон</p>
                <p className="text-sm text-muted-foreground">+7 (3852) 50-22-29</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-4">Добро пожаловать в ГХМАК</h2>
            <p className="text-muted-foreground">
              Исследуйте богатый мир искусства в одном из ведущих музеев Сибири.
              Мы предлагаем уникальный опыт знакомства с искусством для всех посетителей.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="museum-card text-center">
              <div className="mx-auto bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Уникальные экспозиции</h3>
              <p className="text-muted-foreground">
                Коллекция музея включает произведения русского и зарубежного искусства XVIII-XXI веков, 
                а также уникальное собрание работ алтайских художников.
              </p>
            </div>
            
            <div className="museum-card text-center">
              <div className="mx-auto bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Образовательные программы</h3>
              <p className="text-muted-foreground">
                Лекции, мастер-классы и интерактивные занятия для посетителей всех возрастов 
                от ведущих специалистов музея и приглашенных экспертов.
              </p>
            </div>
            
            <div className="museum-card text-center">
              <div className="mx-auto bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-3">Культурные события</h3>
              <p className="text-muted-foreground">
                Регулярные выставки, творческие встречи, концерты и другие мероприятия, 
                делающие музей центром культурной жизни региона.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current exhibitions */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-end mb-10">
            <h2 className="section-title">Актуальные выставки</h2>
            <Button variant="link" className="text-primary group">
              <span>Все выставки</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ExhibitionCard 
              title="Алтайские пейзажи: Взгляд художников XX века"
              dates="12 мая — 30 июня 2023"
              image="/placeholder.svg"
              description="Выставка работ алтайских художников, посвященная природе и ландшафтам Алтайского края через призму разных художественных стилей"
            />
            <ExhibitionCard 
              title="Сокровища русской живописи XIX века"
              dates="1 июня — 31 августа 2023"
              image="/placeholder.svg"
              description="Экспозиция шедевров русской живописи из коллекции музея, включая работы Айвазовского, Шишкина и Репина"
              featured
            />
            <ExhibitionCard 
              title="Современное искусство Сибири: Новые имена"
              dates="20 июня — 15 сентября 2023"
              image="/placeholder.svg"
              description="Инновационные работы современных сибирских художников и скульпторов, исследующих новые формы и материалы"
            />
          </div>
        </div>
      </section>

      {/* Museum info */}
      <section className="py-20">
        <div className="container">
          <MuseumInfo />
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 bg-museum-light">
        <div className="container">
          <div className="flex justify-between items-end mb-10">
            <h2 className="section-title">Афиша мероприятий</h2>
            <Button variant="link" className="text-primary group">
              <span>Все мероприятия</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-white">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="lectures">Лекции</TabsTrigger>
              <TabsTrigger value="workshops">Мастер-классы</TabsTrigger>
              <TabsTrigger value="tours">Экскурсии</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard 
                  title="Мастер-класс по акварельной живописи: Алтайский пейзаж"
                  date="12 июня 2023, 15:00"
                  image="/placeholder.svg"
                  type="Мастер-класс"
                />
                <EventCard 
                  title="Лекция «История русской иконописи: от истоков до современности»"
                  date="15 июня 2023, 18:00"
                  image="/placeholder.svg"
                  type="Лекция"
                />
                <EventCard 
                  title="Экскурсия «Алтайское художественное наследие»"
                  date="18 июня 2023, 12:00"
                  image="/placeholder.svg"
                  type="Экскурсия"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="lectures" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard 
                  title="Лекция «История русской иконописи: от истоков до современности»"
                  date="15 июня 2023, 18:00"
                  image="/placeholder.svg"
                  type="Лекция"
                />
                <EventCard 
                  title="Лекция «Импрессионизм в русской живописи»"
                  date="22 июня 2023, 18:00"
                  image="/placeholder.svg"
                  type="Лекция"
                />
                <EventCard 
                  title="Лекция «Художники Алтая: традиции и новаторство»"
                  date="29 июня 2023, 18:00"
                  image="/placeholder.svg"
                  type="Лекция"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="workshops" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard 
                  title="Мастер-класс по акварельной живописи: Алтайский пейзаж"
                  date="12 июня 2023, 15:00"
                  image="/placeholder.svg"
                  type="Мастер-класс"
                />
                <EventCard 
                  title="Мастер-класс по графике для начинающих"
                  date="19 июня 2023, 15:00"
                  image="/placeholder.svg"
                  type="Мастер-класс"
                />
                <EventCard 
                  title="Мастер-класс «Пастельная живопись»"
                  date="26 июня 2023, 15:00"
                  image="/placeholder.svg"
                  type="Мастер-класс"
                />
              </div>
            </TabsContent>
            
            <TabsContent value="tours" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <EventCard 
                  title="Экскурсия «Алтайское художественное наследие»"
                  date="18 июня 2023, 12:00"
                  image="/placeholder.svg"
                  type="Экскурсия"
                />
                <EventCard 
                  title="Экскурсия «Шедевры русской живописи»"
                  date="25 июня 2023, 12:00"
                  image="/placeholder.svg"
                  type="Экскурсия"
                />
                <EventCard 
                  title="Обзорная экскурсия по музею"
                  date="Каждую субботу, 14:00"
                  image="/placeholder.svg"
                  type="Экскурсия"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Visit info */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-foreground/10 -skew-x-12 transform-gpu"></div>
        <div className="container relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-10 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-white after:mt-3">
            Информация для посетителей
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm text-white border-0 shadow-lg hover:bg-white/15 transition-colors duration-300">
              <div className="p-6">
                <Clock className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Время работы</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Вторник - Воскресенье: 10:00 — 18:00</li>
                  <li>Кассы работают до 17:30</li>
                  <li>Понедельник: выходной</li>
                </ul>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm text-white border-0 shadow-lg hover:bg-white/15 transition-colors duration-300">
              <div className="p-6">
                <Ticket className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Стоимость</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Взрослый билет: 300 ₽</li>
                  <li>Льготный билет: 150 ₽</li>
                  <li>Дети до 7 лет: бесплатно</li>
                  <li>Фотосъемка: 100 ₽</li>
                </ul>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm text-white border-0 shadow-lg hover:bg-white/15 transition-colors duration-300">
              <div className="p-6">
                <MapPin className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Как добраться</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Адрес: г. Барнаул, ул. Ленина, 88</li>
                  <li>Автобусы: 1, 10, 55</li>
                  <li>Трамваи: 3, 6</li>
                </ul>
                <Button variant="link" className="px-0 h-auto text-white mt-3 hover:text-white/80">
                  Показать на карте
                </Button>
              </div>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm text-white border-0 shadow-lg hover:bg-white/15 transition-colors duration-300">
              <div className="p-6">
                <Phone className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Связаться с нами</h3>
                <ul className="space-y-2 text-white/80">
                  <li>Телефон: +7 (3852) 50-22-29</li>
                  <li>Email: ghmak@mail.ru</li>
                </ul>
                <Button variant="link" className="px-0 h-auto text-white mt-3 hover:text-white/80">
                  Написать нам
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg" variant="secondary" className="text-primary group">
              <span>Спланировать визит</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-accent">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Оставайтесь в курсе новостей музея</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подпишитесь на нашу рассылку, чтобы узнавать о новых выставках, 
            мероприятиях и специальных предложениях первыми
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Ваш email"
              className="px-4 py-3 rounded-md border border-input bg-background flex-1"
            />
            <Button>Подписаться</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;