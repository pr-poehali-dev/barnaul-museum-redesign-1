import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  image: string;
  type: string;
}

export const EventCard = ({ title, date, image, type }: EventCardProps) => {
  // Разделяем дату и время
  const [dateStr, timeStr] = date.split(', ');

  return (
    <Card className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 font-medium bg-background/80 backdrop-blur-sm text-foreground"
        >
          {type}
        </Badge>
      </div>
      <CardHeader className="pb-0">
        <h3 className="text-xl font-bold tracking-tight">{title}</h3>
      </CardHeader>
      <CardContent className="pb-2 pt-1">
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{dateStr}</span>
          </div>
          {timeStr && (
            <div className="flex items-center text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              <span>{timeStr}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm" variant="outline" className="w-full">
          Забронировать место
        </Button>
      </CardFooter>
    </Card>
  );
};
