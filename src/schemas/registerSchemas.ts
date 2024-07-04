import { z } from "zod";

export const RegisterSchemas = z.object({
  email: z.string().email({
    message: "Email is Required",
  }),
  password: z.string().min(8, "Password min 8 character(s)"),
  firstName: z.string().min(1, "Password min 1 character(s)"),
  lastName: z.string().min(1, "Password min 1 character(s)"),
});
