import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MuseumInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <img 
          src="/placeholder.svg" 
          alt="Здание музея" 
          className="w-full h-auto rounded-lg shadow-lg" 
        />
      </div>
      
      <div>
        <h2 className="text-3xl font-bold mb-6">О музее</h2>
        
        <Tabs defaultValue="about">
          <TabsList className="w-full grid grid-cols-3 mb-6">
            <TabsTrigger value="about">О нас</TabsTrigger>
            <TabsTrigger value="collection">Коллекция</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-4">
            <p>
              Государственный художественный музей Алтайского края (ГХМАК) — один из крупнейших музеев региона, 
              хранящий более 15 000 произведений искусства различных эпох и направлений.
            </p>
            <p>
              Музей регулярно проводит выставки, лекции, мастер-классы и другие образовательные мероприятия, 
              привлекая посетителей всех возрастов и интересов.
            </p>
            <Button className="mt-2">Подробнее о музее</Button>
          </TabsContent>
          
          <TabsContent value="collection" className="space-y-4">
            <p>
              Коллекция музея включает произведения русского и западноевропейского искусства XVI-XXI веков, 
              а также богатое собрание работ художников Алтая.
            </p>
            <p>
              Особую ценность представляют коллекции икон, русской живописи XIX века, советского искусства 
              и современного творчества региональных авторов.
            </p>
            <Button className="mt-2">Изучить коллекцию</Button>
          </TabsContent>
          
          <TabsContent value="history" className="space-y-4">
            <p>
              Музей был основан в 1958 году и за время своего существования стал важным культурным центром Алтайского края.
            </p>
            <p>
              В 2023 году музей переехал в новое отреставрированное историческое здание, 
              что позволило расширить экспозиционные площади и улучшить условия хранения коллекций.
            </p>
            <Button className="mt-2">История музея</Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
