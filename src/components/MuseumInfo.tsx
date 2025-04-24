import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const MuseumInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="relative">
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/placeholder.svg" 
            alt="Здание музея" 
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 z-10 hidden md:block">
          <div className="bg-white rounded-xl shadow-lg p-4 w-40 h-40 flex flex-col items-center justify-center text-center">
            <div className="text-4xl font-bold text-primary">10K+</div>
            <div className="text-sm text-muted-foreground mt-2">экспонатов в коллекции</div>
          </div>
        </div>
      </div>
      
      <div>
        <h2 className="section-title">О музее</h2>
        
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="w-full mb-6 bg-muted/50">
            <TabsTrigger value="history" className="flex-1">История</TabsTrigger>
            <TabsTrigger value="collection" className="flex-1">Коллекция</TabsTrigger>
            <TabsTrigger value="mission" className="flex-1">Миссия</TabsTrigger>
          </TabsList>
          
          <TabsContent value="history" className="animate-fade-in">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Государственный художественный музей Алтайского края был основан в 1958 году. 
                За время своего существования музей стал одним из ведущих культурных центров Сибири, 
                собрав уникальную коллекцию произведений искусства.
              </p>
              <p className="text-muted-foreground">
                Сегодня музей располагается в историческом здании в центре Барнаула и ежегодно 
                принимает тысячи посетителей, желающих прикоснуться к искусству разных эпох.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary group">
                Подробнее об истории
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="collection" className="animate-fade-in">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Коллекция музея насчитывает более 10 000 экспонатов и включает произведения 
                русского искусства XVIII-XX веков, западноевропейскую живопись, графику, скульптуру, 
                а также народное и декоративно-прикладное искусство.
              </p>
              <p className="text-muted-foreground">
                Особая гордость музея — собрание работ алтайских художников, отражающих 
                уникальную культуру и природу региона через разные художественные стили и техники.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary group">
                Исследовать коллекцию
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="mission" className="animate-fade-in">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Миссия Государственного художественного музея Алтайского края — сохранение, 
                изучение и популяризация художественного наследия России и Алтая, эстетическое 
                воспитание и просвещение широких слоев населения.
              </p>
              <p className="text-muted-foreground">
                Музей стремится создать открытое пространство для диалога между прошлым и 
                настоящим, традициями и инновациями, художниками и зрителями.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary group">
                О наших ценностях
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <Button>Экскурсии</Button>
          <Button variant="outline">Виртуальный тур</Button>
        </div>
      </div>
    </div>
  );
};