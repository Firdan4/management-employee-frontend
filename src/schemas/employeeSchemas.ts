import { z } from "zod";

export const EmployeeSchemas = z.object({
  name: z.string().min(1, "Name min 1 character(s)"),
  status: z.string().min(1, "Select Status employee!"),
  position: z.string().min(1, "Select Position employee!"),
});
