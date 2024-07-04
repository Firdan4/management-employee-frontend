import React from "react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useForm } from "react-hook-form";
import { LoginSchemas } from "../../schemas/loginSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/ui/form";
import { z } from "zod";
import AuthForm from "../../components/auth/AuthForm";

const Login = () => {
  const form = useForm<z.infer<typeof LoginSchemas>>({
    resolver: zodResolver(LoginSchemas),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value: z.infer<typeof LoginSchemas>) => {
    console.log(value);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AuthForm control={form.control} />
            </CardContent>
            <CardFooter className="flex justify-between w-full">
              <Button type="submit" className="w-full">
                Deploy
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
