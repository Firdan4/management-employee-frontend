import { z } from "zod";
import { API } from ".";
import { LoginSchemas } from "../schemas/loginSchemas";

export const signIn = async (data: z.infer<typeof LoginSchemas>) => {
  return API.post("/auth/login", data);
};

export const signUp = async (data: z.infer<typeof LoginSchemas>) => {
  return API.post("/auth/register", data);
};

export const refreshToken = async () => {
  return API.get("/auth/refreshToken");
};

export const signOut = async () => {
  return API.delete("/auth/logout");
};
