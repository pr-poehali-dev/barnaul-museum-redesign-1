import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Ticket, ChevronRight } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const BookTicketButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState("adult");
  const [quantity, setQuantity] = useState(1);
  
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setStep(1);
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Сбрасываем состояние формы
    setTimeout(() => {
      setStep(1);
      setSelectedTicket("adult");
      setQuantity(1);
    }, 300);
  };
  
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  
  const completeBooking = () => {
    // Здесь будет логика завершения бронирования
    handleCloseDialog();
    // В реальном приложении можно добавить вызов API или другие действия
  };
  
  return (
    <>
      <Button onClick={handleOpenDialog} className="text-primary-foreground group scale-up-hover">
        <Ticket className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
        Купить билет
      </Button>
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Покупка билета</DialogTitle>
            <DialogDescription>
              {step === 1 && "Выберите тип билета и количество посетителей."}
              {step === 2 && "Выберите дату и время посещения."}
              {step === 3 && "Укажите ваши контактные данные."}
            </DialogDescription>
          </DialogHeader>
          
          {step === 1 && (
            <div className="space-y-4 py-2">
              <RadioGroup value={selectedTicket} onValueChange={setSelectedTicket}>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="adult" id="adult" />
                  <Label htmlFor="adult" className="flex-1">Взрослый (300 ₽)</Label>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <RadioGroupItem value="reduced" id="reduced" />
                  <Label htmlFor="reduced" className="flex-1">Льготный (150 ₽)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="child" id="child" />
                  <Label htmlFor="child" className="flex-1">Детский до 14 лет (бесплатно)</Label>
                </div>
              </RadioGroup>
              
              <div>
                <Label htmlFor="quantity">Количество билетов</Label>
                <Select 
                  value={quantity.toString()} 
                  onValueChange={(value) => setQuantity(parseInt(value))}
                >
                  <SelectTrigger id="quantity">
                    <SelectValue placeholder="Выберите количество" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4 py-2">
              <div>
                <Label htmlFor="date">Дата посещения</Label>
                <Input type="date" id="date" min={new Date().toISOString().split('T')[0]} />
              </div>
              
              <div>
                <Label htmlFor="time">Время посещения</Label>
                <Select defaultValue="10:00">
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Выберите время" />
                  </SelectTrigger>
                  <SelectContent>
                    {['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'].map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4 py-2">
              <div>
                <Label htmlFor="name">ФИО</Label>
                <Input id="name" placeholder="Иванов Иван Иванович" />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="example@mail.ru" />
              </div>
              
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (___) ___-__-__" />
              </div>
            </div>
          )}
          
          <DialogFooter>
            {step < 3 ? (
              <Button onClick={nextStep} className="w-full">
                Далее <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={completeBooking} className="w-full">
                Оплатить {selectedTicket === "adult" ? 300 * quantity : selectedTicket === "reduced" ? 150 * quantity : 0} ₽
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
