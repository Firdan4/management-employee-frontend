import React from "react";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";
import { LoginFormFields } from "../../lib/utils";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface AuthFormProps {
  control: Control<{
    email: string;
    password: string;
  }>;
}

const AuthForm: React.FC<AuthFormProps> = ({ control }) => {
  return (
    <div className="flex flex-col gap-2">
      {LoginFormFields.map(({ label, name, type }) => (
        <FormField
          key={name}
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
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
