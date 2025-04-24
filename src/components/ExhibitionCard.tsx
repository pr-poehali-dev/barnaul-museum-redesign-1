import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

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
  featured = false,
}: ExhibitionCardProps) => {
  return (
    <Card className={`overflow-hidden border-0 shadow-md exhibit-card ${featured ? 'ring-2 ring-primary' : ''}`}>
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary/90">
            Особая выставка
          </Badge>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="exhibit-date">{dates}</div>
        <CardTitle className="exhibit-title">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group">
          <span>Подробнее</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};
