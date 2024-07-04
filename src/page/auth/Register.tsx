import React from "react";
import AuthCard from "../../components/auth/AuthCard";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthContent from "../../components/auth/AuthContent";
import AuthForm from "../../components/auth/AuthForm";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchemas } from "../../schemas/registerSchemas";
import { RegisterFormFields } from "../../lib/utils";
import { Form } from "../../components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Register = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof RegisterSchemas>>({
    resolver: zodResolver(RegisterSchemas),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  });

  const { mutate: RegisterMutate, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof RegisterSchemas>) => signUp(data),
    onSuccess: () => {
      navigate("/login");
    },
  });

  const onSubmit = (value: z.infer<typeof RegisterSchemas>) => {
    RegisterMutate(value);
  };

  return (
    <>
      {isPending && <Loading />}
      <AuthCard>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <AuthHeader desc="Enter your data to register" title="Sign Up" />

            <AuthContent
              href="/login"
              labelHref="Already have account?"
              labelSubmit="Sign Up"
            >
              <AuthForm
                controlRegister={form.control}
                FormFields={RegisterFormFields}
              />
            </AuthContent>
          </form>
        </Form>
      </AuthCard>
    </>
  );
};

export default Register;
