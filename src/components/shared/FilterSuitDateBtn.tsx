import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

const FilterSuitDateBtn = ({ setDonors }) => {
  const [date, setDate] = React.useState<Date>();
  const donorsAPI = "https://khuddam-care.vercel.app/api/v1/donors";
  const handleDate = (event: Date) => {
    console.log(event);
    setDate(event);
    console.log("date", date);

    fetch(`${donorsAPI}?suitDate=${format(date!, "yyyy-MM-dd")}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDonors(data.data);
      });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] mt-5 justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export default FilterSuitDateBtn;
