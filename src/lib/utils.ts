import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FormFieldLogin {
  name: "email" | "password";
  label: string;
  type: string;
}

export const LoginFormFields: FormFieldLogin[] = [
  // { name: "firstName", label: "First Name", type: "text" },
  // { name: "lastName", label: "Last Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "password", label: "Password", type: "password" },
  //   { name: "gender", label: "Jenis Kelamin",  },
];
