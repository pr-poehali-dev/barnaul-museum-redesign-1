import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarClock } from "lucide-react";

interface ExhibitionCardProps {
  title: string;
  dates: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const ExhibitionCard = ({
  title,
  dates,
  image,
  description,
  featured = false
}: ExhibitionCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-3 right-3 bg-primary">
            Популярная
          </Badge>
        )}
      </div>
      <CardContent className="p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <CalendarClock className="h-4 w-4" />
          <span>{dates}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
        
        <p className="text-muted-foreground line-clamp-3 mb-4">{description}</p>
        
        <Button variant="outline" className="w-full">Подробнее</Button>
      </CardContent>
    </Card>
  );
};
