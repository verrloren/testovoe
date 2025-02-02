"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { ExclamationMark } from "@/features/auth/ui/exclamation-mark";
import { LoginSchema } from "@/features/auth/schemas";
import { AuthService } from "../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { updateAuthStatus } = useAuth();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setIsLoading(true);
    try {
      const data = await AuthService.login(values);
      if ("error" in data) {
        toast.error(data.error);
        return;
      }
      if (data.token) {
        updateAuthStatus(true);
        toast.success("Login successful!");
        navigate("/");
      }
    } catch (error) {
      toast.error(`Login failed! ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="z-20 "
      >
        <h1 className="font-poppins text-7xl xl:text-8xl text-neutral-950 dark:text-white">
          Welcome
        </h1>
      </motion.div>

      <Form {...form}>
        <form className="z-20 mt-8" onSubmit={form.handleSubmit(onSubmit)}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeInOut" }}
            className="w-[20rem] md:w-[25rem] z-20 xl:w-[30rem]  flex justify-center flex-col gap-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full py-6 pl-4 text-lg text-black transition-colors duration-200 border-none rounded-2xl font-poppins dark:text-white placeholder:text-lg bg-neutral-200 dark:bg-black focus:outline-none placeholder:text-neutral-600 focus:bg-neural-200 dark:focus:bg-black"
                      disabled={isLoading}
                      type="email"
                      placeholder="email"
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.email && (
                    <div className="flex flex-row items-end mt-4 gap-x-2">
                      <ExclamationMark />
                      <FormMessage className="text-xs text-neutral-600" />
                    </div>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-full py-6 pl-4 text-lg text-black transition-colors duration-200 border-none rounded-2xl font-poppins dark:text-white placeholder:text-lg bg-neutral-200 dark:bg-black focus:outline-none placeholder:text-neutral-600 focus:bg-neural-200 dark:focus:bg-black"
                      disabled={isLoading}
                      type="password"
                      placeholder="password"
                      {...field}
                    />
                  </FormControl>
                  {form.formState.errors.password && (
                    <div className="flex flex-row items-end mt-4 gap-x-2">
                      <ExclamationMark />
                      <FormMessage className="text-xs text-neutral-600" />
                    </div>
                  )}
                </FormItem>
              )}
            />

            {/* <FormError message={error || urlError} />
						<FormSuccess message={success} /> */}

            <Button
              disabled={isLoading}
              className="w-full h-12 py-4 text-lg text-white transition-all duration-300 border-none shadow-xl dark:text-black bg-neutral-800 dark:bg-neutral-50 dark:hover:bg-white rounded-2xl font-poppins hover:brightness-125"
              type="submit"
            >
              Submit
            </Button>
          </motion.div>
        </form>
      </Form>

      <motion.div
        className="fixed flex items-center justify-center bottom-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
      >
        <Link
          className="transition-colors duration-300 text-neutral-950 dark:text-neutral-200 hover:text-blue-500 dark:hover:text-blue-500 "
          to="/register"
        >
          create account
        </Link>
      </motion.div>
    </>
  );
}
