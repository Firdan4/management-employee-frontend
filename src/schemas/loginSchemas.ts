import { z } from "zod";

// const datetimeLocalRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
export const UserSchema = z.object({
  firstName: z.string().min(1, "Firts Name is Required!"),
  lastName: z.string().min(1, "Last Nama is Required!"),
  email: z.string().email(),
  password: z.string().min(1),
});

export const LoginSchemas = z.object({
  email: z.string().email({
    message: "Email is Required",
  }),
  password: z.string().min(8, "Password min 8 character(s)"),
});
