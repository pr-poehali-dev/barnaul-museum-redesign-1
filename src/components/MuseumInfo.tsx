import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { History, PaintBucket, Users, Building } from "lucide-react";

export const MuseumInfo = () => {
  return (
    <div>
      <h2 className="section-title">О музее</h2>
      
      <Tabs defaultValue="history" className="w-full">
        <TabsList className="w-full mb-8 grid grid-cols-1 md:grid-cols-4 h-auto gap-2">
          <TabsTrigger value="history" className="flex items-center justify-center py-3 data-[state=active]:bg-accent">
            <History className="mr-2 h-4 w-4" />
            <span>История</span>
          </TabsTrigger>
          <TabsTrigger value="collection" className="flex items-center justify-center py-3 data-[state=active]:bg-accent">
            <PaintBucket className="mr-2 h-4 w-4" />
            <span>Коллекция</span>
          </TabsTrigger>
          <TabsTrigger value="team" className="flex items-center justify-center py-3 data-[state=active]:bg-accent">
            <Users className="mr-2 h-4 w-4" />
            <span>Сотрудники</span>
          </TabsTrigger>
          <TabsTrigger value="building" className="flex items-center justify-center py-3 data-[state=active]:bg-accent">
            <Building className="mr-2 h-4 w-4" />
            <span>Здание</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="history" className="rounded-lg mt-0">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">История музея</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Государственный художественный музей Алтайского края был основан в 1958 году. 
                    Первоначально музей располагался в небольшом помещении, но к началу XXI века 
                    коллекция значительно расширилась.
                  </p>
                  <p>
                    В 2012 году было принято решение о строительстве нового современного здания музея, 
                    которое было торжественно открыто в 2020 году и представляет собой уникальный 
                    образец современной архитектуры.
                  </p>
                  <p>
                    Сегодня музей является одним из важнейших культурных центров Алтайского края и 
                    всей Сибири, привлекающим тысячи посетителей ежегодно.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-80 overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="История музея" 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="collection" className="rounded-lg mt-0">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Наша коллекция</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Коллекция музея насчитывает более 15 000 экспонатов, включая произведения живописи, 
                    графики, скульптуры, декоративно-прикладного искусства.
                  </p>
                  <p>
                    Особую ценность представляет собрание русского искусства XVIII-XX веков, в котором 
                    представлены работы И.К. Айвазовского, И.И. Шишкина, В.И. Сурикова, И.Е. Репина и 
                    других выдающихся мастеров.
                  </p>
                  <p>
                    Уникальной частью коллекции является собрание произведений искусства Алтая, отражающее 
                    культурное наследие региона.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-80 overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Коллекция музея" 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team" className="rounded-lg mt-0">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Наши сотрудники</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    В музее работает команда высококвалифицированных специалистов: искусствоведов, 
                    реставраторов, экскурсоводов, научных сотрудников.
                  </p>
                  <p>
                    Наши эксперты постоянно повышают свою квалификацию, участвуют в международных 
                    конференциях и обмениваются опытом с коллегами из ведущих музеев России и мира.
                  </p>
                  <p>
                    Сотрудники музея не только заботятся о сохранности экспонатов, но и ведут активную 
                    научно-исследовательскую и просветительскую деятельность.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-80 overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Сотрудники музея" 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="building" className="rounded-lg mt-0">
          <Card className="border-0 shadow-md">
            <CardContent className="pt-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">Здание музея</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Современное здание музея, построенное в 2020 году, представляет собой уникальный 
                    архитектурный комплекс, гармонично вписанный в исторический центр Барнаула.
                  </p>
                  <p>
                    Общая площадь музея составляет более 10 000 квадратных метров, что позволяет не только 
                    разместить обширную экспозицию, но и проводить временные выставки, конференции, 
                    мастер-классы и другие мероприятия.
                  </p>
                  <p>
                    Здание оснащено современными системами климат-контроля, безопасности и мультимедиа, 
                    что обеспечивает оптимальные условия для хранения и демонстрации произведений искусства.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 h-80 overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Здание музея" 
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
