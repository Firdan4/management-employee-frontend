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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setUserData } from "../../redux/slice/userDataSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Login = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const form = useForm<z.infer<typeof LoginSchemas>>({
    resolver: zodResolver(LoginSchemas),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: LoginMutate, isPending } = useMutation({
    mutationFn: (data: z.infer<typeof LoginSchemas>) => signIn(data),
    onSuccess: (res) => {
      const { email, firstName, lastName } = res.data.user;
      dispatch(
        setUserData({
          email,
          firstName,
          lastName,
          token: res.data.accessToken,
        })
      );

      navigate("/");
    },
  });

  const onSubmit = (value: z.infer<typeof LoginSchemas>) => {
    LoginMutate(value);
  };

  return (
    <>
      {isPending && <Loading />}
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
    </>
  );
};

export default Login;
