import React from "react";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";
import { FormFieldsType } from "../../lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface AuthFormProps {
  controlLogin?: Control<{
    email: string;
    password: string;
  }>;
  controlRegister?: Control<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>;
  FormFields?: FormFieldsType[];
}

const AuthForm: React.FC<AuthFormProps> = ({
  controlLogin,
  controlRegister,
  FormFields,
}) => {
  return (
    <div className="flex flex-col gap-2">
      {controlLogin &&
        FormFields?.map(({ label, name, type }) => (
          <FormField
            key={name}
            control={controlLogin}
            name={name as keyof { email: string; password: string }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {label}
                  <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={label} {...field} type={type} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      {controlRegister &&
        FormFields?.map(({ label, name, type }) => (
          <FormField
            key={name}
            control={controlRegister}
            name={
              name as keyof {
                email: string;
                password: string;
                firstName: string;
                lastName: string;
              }
            }
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {label} <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder={label} {...field} type={type} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
    </div>
  );
};

export default AuthForm;
