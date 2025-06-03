"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const formSchema = z.object({
  email: z.string().email({ message: "Podaj poprawny adres email" }),
  teamname: z
    .string()
    .min(1, { message: "Nazwa drużyny nie może być pusta" })
    .max(20, { message: "Nazwa drużyny nie może mieć więcej niż 20 znaków" }),
  captain: z
    .string()
    .min(1, { message: "Nick kapitana nie może być puste" })
    .max(20, { message: "Nick kapitana nie może mieć więcej niż 20 znaków" }),
  map: z.string().nonempty({ message: "Musisz wybrać mapę" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "Musisz zaakceptować regulamin",
  }),
});

const defaultValues = {
  email: "",
  teamname: "",
  captain: "",
  map: "",
  terms: false,
};

export default function TeamForm() {
  async function getTeamsCount(): Promise<number> {
    const { data, error } = await supabase
      .from("teams")
      .select("id", { count: "exact" });

    if (error) {
      console.error("Błąd przy pobieraniu count:", error.message);
    }

    return data.length || 0;
  }
  async function createTeam(values: z.infer<typeof formSchema>) {
    const { data, error } = await supabase
      .from("teams")
      .insert([
        {
          email: values.email,
          name: values.teamname,
          captain: values.captain,
          map: values.map,
        },
      ])
      .single();

    if (error) {
      throw error;
    }
    return data;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const teamsCount = await getTeamsCount();
    if (teamsCount >= 12) {
      toast.error("Limit drużyn został osiągnięty. Spróbuj ponownie później");
      return;
    }
    try {
      await createTeam(values);
      console.log("Zapisano drużynę:", values);
      toast.success("Witamy w grze 😈!");
      form.reset(defaultValues);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Nie udało się wysłać formularza. Spróbuj ponownie później.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-2 space-y-6 max-w-3xl mx-auto py-10"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adres email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  value={field.value ?? ""}
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="teamname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nazwa drużyny</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nazwa"
                  type="text"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="captain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kapitan drużyny</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nick"
                  type="text"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="map"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mapa</FormLabel>
              <Select onValueChange={field.onChange} value={field.value ?? ""}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wybierz mapę" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="mirage">Mirage</SelectItem>
                  <SelectItem value="inferno">Inferno</SelectItem>
                  <SelectItem value="nuke">Nuke</SelectItem>
                  <SelectItem value="dust">Dust 2</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                Wybierz mapę, na której chcesz grać
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Akceptuję regulamin turnieju </FormLabel>
                <FormDescription>
                  Zaznaczając to oświadczasz, że zapoznałeś się z{" "}
                  <a className="text-main-accent-hover" href="#">
                    regulaminem
                  </a>{" "}
                  oraz{" "}
                  <a className="text-main-accent-hover" href="#">
                    warunkami uczestnictwa.
                  </a>
                </FormDescription>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button variant="accent" className="rounded-xs" type="submit">
          Zapisz
        </Button>
      </form>
    </Form>
  );
}
