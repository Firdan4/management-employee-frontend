import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface FormFieldLoginType {
  name: "email" | "password";
  label: string;
  type: string;
}

export interface FormFieldRegisterType
  extends Omit<FormFieldLoginType, "name"> {
  name: "firstName" | "lastName" | "email" | "password";
}

export type FormFieldsType = FormFieldLoginType | FormFieldRegisterType;

export interface FormFieldEmployeeType {
  name: "name" | "position" | "status";
  label: string;
  type: string;
}

export const LoginFormFields: FormFieldLoginType[] = [
  // { name: "firstName", label: "First Name", type: "text" },
  // { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
  //   { name: "gender", label: "Jenis Kelamin",  },
];
export const RegisterFormFields: FormFieldRegisterType[] = [
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
];
export const EmployeeFormFields: FormFieldEmployeeType[] = [
  { name: "name", label: "Name", type: "text" },
  { name: "position", label: "Position", type: "text" },
  { name: "status", label: "Status", type: "email" },
];
