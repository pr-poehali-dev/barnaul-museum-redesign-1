import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarHeart } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  type: string;
}

export const EventCard = ({
  title,
  date,
  image,
  type
}: EventCardProps) => {
  // Определяем цвет бейджа в зависимости от типа мероприятия
  const getBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "мастер-класс":
        return "bg-orange-500 hover:bg-orange-600";
      case "лекция":
        return "bg-blue-500 hover:bg-blue-600";
      case "экскурсия":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-primary hover:bg-primary/90";
    }
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge className={`absolute top-3 right-3 ${getBadgeColor(type)}`}>
          {type}
        </Badge>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <CalendarHeart className="h-4 w-4" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 line-clamp-2">{title}</h3>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex-1">Программа</Button>
          <Button size="sm" className="flex-1">Записаться</Button>
        </div>
      </CardContent>
    </Card>
  );
};
