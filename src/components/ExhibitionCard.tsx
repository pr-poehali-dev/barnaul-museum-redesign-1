import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    <Card className={`overflow-hidden border-0 rounded-xl shadow-md ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        {featured && (
          <Badge className="absolute top-4 right-4 bg-primary text-white">
            Рекомендуем
          </Badge>
        )}
      </div>
      <CardContent className="pt-5">
        <div className="exhibit-date">{dates}</div>
        <h3 className="exhibit-title mt-2 mb-3">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 pb-5">
        <Button variant="link" className="p-0 h-auto text-primary group">
          Подробнее
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};