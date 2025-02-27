"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OTPModal } from "@/components/OTPModal";
import {getFormSchema} from "@/lib/schemas/auth";



const AuthForm = ({ type }: { type: AuthFormType }) => {

  const formSchema = getFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <>
      <h1 className="text-[46px] font-bold">
        {type === "sign-up" ? "Créez un compte" : "Se connecter"}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          method="post"
          className="space-y-2 w-[371px]"
        >
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom complet</FormLabel>
                  <FormControl>
                    <Input placeholder="Entrez votre nom complet" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Entrez votre email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">
            {type === "sign-up" ? "Créez un compte" : "Se connecter"}
          </Button>
        </form>
      </Form>

      {type === "sign-up" ? (
        <p>
          Vous avez déja un compte ?{" "}
          <Link href="/sign-in" className="text-red-500">
            Se connecter
          </Link>
        </p>
      ) : (
        <p>
          Vous n&apos;avez pas encore de compte ?{" "}
          <Link href="/sign-up" className="text-red-500">
            S&apos;inscrire
          </Link>
        </p>
      )}

      {false && <OTPModal open={true} email="saibouazim90@gmail.com" />}
    </>
  );
};

export default AuthForm;
