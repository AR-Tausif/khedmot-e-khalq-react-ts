import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import CreateDonorFormZodSchema from "@/zod/CreateDonorFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function CreateDonorForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(CreateDonorFormZodSchema),
    defaultValues: {
      name: "",
      fatherName: "",
      motherName: "",
      age: "", // or any default number value
      majlish: {
        name: "",
        halka: "",
      },
      address: "",
      bloodType: "",
      contactInformation: {
        mobile: "",
        email: "",
      },
      lastDonation: {
        date: "",
        bloodTypeDonated: "",
        notes: "",
      },
    },
  });

  function onSubmit(data) {
    setIsLoading(true);
    console.log(data);
  }

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <div className="lg:flex justify-around lg:items-center space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type name"
                      {...field}
                      className="lg:w-[25vw] md:w-[25vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Father's Name"}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type father's name"
                      {...field}
                      className="lg:w-[25vw] md:w-[25vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{"Mother's Name"}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Type mother's name"
                      {...field}
                      className="lg:w-[25vw] md:w-[25vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="lg:flex justify-around lg:items-center space-y-3">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      {...field}
                      className="lg:w-[25vw] md:w-[25vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bloodType"
              className="w-[30rem]"
              render={({ field }) => (
                <FormItem className="lg:w-[25vw] md:w-[25vw]">
                  <FormLabel>Blood Group</FormLabel>
                  <Select onValueChange={field.onChange} {...field}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a Blood Group" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="A_POSITIVE">
                        {"positive (A+)"}
                      </SelectItem>
                      <SelectItem value="A_NEGATIVE">
                        {"negative (A-)"}
                      </SelectItem>
                      <SelectItem value="B_POSITIVE">
                        {"positive (B+)"}
                      </SelectItem>
                      <SelectItem value="B_NEGATIVE">
                        {"negative (B-)"}
                      </SelectItem>
                      <SelectItem value="AB_POSITIVE">
                        {"positive (AB+)"}
                      </SelectItem>
                      <SelectItem value="AB_NEGATIVE">
                        {"negative (AB-)"}
                      </SelectItem>
                      <SelectItem value="O_POSITIVE">
                        {"positive (O+)"}
                      </SelectItem>
                      <SelectItem value="O_NEGATIVE">
                        {"negative (O-)"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastDonation.date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Last Donation Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] lg:w-[25vw] md:w-[25vw] pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="lg:flex justify-around lg:items-center space-y-3">
            <FormField
              control={form.control}
              name="majlish.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Majlish</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your majlish name"
                      {...field}
                      className="lg:w-[25vw] md:w-[25vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="majlish.halka"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Halka</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your halka name"
                      {...field}
                      className="lg:w-[25vw] md:w-[25vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactInformation.mobile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your mobile number..."
                      {...field}
                      className="lg:w-[25vw] md:w-[25vw]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your address here." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isLoading ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit">Submit</Button>
          )}
        </form>
      </Form>
    </div>
  );
}
