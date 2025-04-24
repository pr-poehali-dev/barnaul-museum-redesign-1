import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarClock } from "lucide-react";

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
  type,
}: EventCardProps) => {
  // Определяем цвет бейджа в зависимости от типа события
  const getBadgeColor = (eventType: string) => {
    switch (eventType.toLowerCase()) {
      case "лекция":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "мастер-класс":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "экскурсия":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-primary/10 text-primary hover:bg-primary/20";
    }
  };

  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      <div className="h-48 relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className={`absolute top-3 right-3 ${getBadgeColor(type)}`}>
          {type}
        </Badge>
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-muted-foreground mb-3">
          <CalendarClock className="h-4 w-4" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-medium leading-tight line-clamp-2 mb-2">{title}</h3>
        <div className="mt-3">
          <a 
            href="#" 
            className="text-primary text-sm font-medium inline-flex items-center hover:underline"
          >
            Забронировать место
          </a>
        </div>
      </CardContent>
    </Card>
  );
};