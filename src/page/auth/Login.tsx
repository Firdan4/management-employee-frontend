import { useForm } from "react-hook-form";
import { LoginSchemas } from "../../schemas/loginSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/ui/form";
import { z } from "zod";
import AuthForm from "../../components/auth/AuthForm";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "../../api/auth";
import AuthCard from "../../components/auth/AuthCard";
import { LoginFormFields } from "../../lib/utils";
import AuthHeader from "../../components/auth/AuthHeader";
import AuthContent from "../../components/auth/AuthContent";

const Login = () => {
  const form = useForm<z.infer<typeof LoginSchemas>>({
    resolver: zodResolver(LoginSchemas),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: LoginMutate } = useMutation({
    mutationFn: (data: z.infer<typeof LoginSchemas>) => signIn(data),
    onSuccess: (res) => {
      console.log(res);
    },
  });

  const onSubmit = (value: z.infer<typeof LoginSchemas>) => {
    LoginMutate(value);
  };

  return (
    <AuthCard>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          <AuthHeader
            desc="Enter your email and password to login"
            title="Sign In"
          />

          <AuthContent
            href="/register"
            labelHref="Don't have account?"
            labelSubmit="SigIn"
          >
            <AuthForm
              controlLogin={form.control}
              FormFields={LoginFormFields}
            />
          </AuthContent>
        </form>
      </Form>
    </AuthCard>
  );
};

export default Login;
