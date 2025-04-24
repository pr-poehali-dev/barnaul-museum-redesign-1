import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Ticket } from "lucide-react";

export const BookTicketButton = () => {
  const [date, setDate] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [quantity, setQuantity] = useState("1");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Ticket className="h-4 w-4" />
          Купить билет
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Онлайн бронирование билетов</DialogTitle>
          <DialogDescription>
            Выберите тип билета, дату посещения и количество билетов.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="date" className="text-right">
              Дата
            </Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ticket-type" className="text-right">
              Тип билета
            </Label>
            <Select value={ticketType} onValueChange={setTicketType}>
              <SelectTrigger className="col-span-3" id="ticket-type">
                <SelectValue placeholder="Выберите тип билета" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Стандартный (300 ₽)</SelectItem>
                <SelectItem value="discount">Льготный (150 ₽)</SelectItem>
                <SelectItem value="family">Семейный (600 ₽)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity" className="text-right">
              Количество
            </Label>
            <Select value={quantity} onValueChange={setQuantity}>
              <SelectTrigger className="col-span-3" id="quantity">
                <SelectValue placeholder="Выберите количество" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Забронировать</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
