import { useState } from "react";
import { Button } from "./ui/button";
import { Ticket } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export const BookTicketButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ticketType, setTicketType] = useState("adult");
  const [ticketCount, setTicketCount] = useState("1");
  
  const getPrice = () => {
    const priceMap: Record<string, number> = {
      adult: 300,
      reduced: 150,
      child: 0
    };
    
    return priceMap[ticketType] * parseInt(ticketCount);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-primary hover:bg-primary/90 scale-up-hover">
          <Ticket className="mr-2 h-4 w-4" />
          Купить билет
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">Билеты в музей</DialogTitle>
          <DialogDescription>
            Выберите тип и количество билетов для посещения музея.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="ticket-type">Тип билета</Label>
            <RadioGroup 
              value={ticketType} 
              onValueChange={setTicketType} 
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="adult" id="adult" />
                  <Label htmlFor="adult" className="cursor-pointer">Взрослый</Label>
                </div>
                <div className="font-medium">300 ₽</div>
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reduced" id="reduced" />
                  <Label htmlFor="reduced" className="cursor-pointer">Льготный</Label>
                </div>
                <div className="font-medium">150 ₽</div>
              </div>
              <div className="flex items-center justify-between space-x-2 rounded-md border p-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="child" id="child" />
                  <Label htmlFor="child" className="cursor-pointer">Детский (до 7 лет)</Label>
                </div>
                <div className="font-medium">Бесплатно</div>
              </div>
            </RadioGroup>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ticket-quantity">Количество</Label>
              <Select value={ticketCount} onValueChange={setTicketCount}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10)].map((_, index) => (
                    <SelectItem key={index + 1} value={(index + 1).toString()}>
                      {index + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="visit-date">Дата посещения</Label>
              <Input id="visit-date" type="date" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-muted/30 p-3 rounded-lg mb-4">
          <span className="text-sm font-medium">Итого к оплате:</span>
          <span className="text-lg font-bold">{getPrice()} ₽</span>
        </div>
        
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Отмена
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            Перейти к оплате
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};