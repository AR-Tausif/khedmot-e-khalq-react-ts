import IconInput from "@/components/shared/IconInput";
import { Button } from "@/components/ui/button";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import RegisterUserZodSchema from "@/zod/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterUserForm = () => {
  const form = useForm({
    resolver: zodResolver(RegisterUserZodSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      role: "",
      address: {
        majlish: "",
      },
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: Record<string, unknown>) => {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="lg:flex gap-4 lg:items-center">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="text-gray-900">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Type first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="text-gray-900">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Type last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="text-gray-900">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Type username" {...field} />
                {/* <IconInput field={field} /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="text-gray-900">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Type your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="text-gray-900">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="lg:flex justify-around lg:items-center space-y-3">
          <FormField
            control={form.control}
            name="address.majlish"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-900">Majlish</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your majlish name"
                    {...field}
                    className="text-gray-900"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="text-gray-900">
                <FormLabel>Role</FormLabel>
                <Select onValueChange={field.onChange} {...field}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="sadar">Sadar</SelectItem>
                    <SelectItem value="k-khalq">Khedmot E Khalq</SelectItem>
                    <SelectItem value="qayed">Local Qayed</SelectItem>
                    {/* <SelectItem value="B-"></SelectItem> */}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
  );
};

export default RegisterUserForm;
