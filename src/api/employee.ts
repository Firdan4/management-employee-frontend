import { z } from "zod";
import { API } from ".";
import { EmployeeSchemas } from "../schemas/employeeSchemas";

export const getAllEmployee = async () => {
  return API.get("/employee");
};
export const deleteEmployee = async (id: number) => {
  return API.delete(`/employee/${id}`);
};

export const createEmployee = async (data: z.infer<typeof EmployeeSchemas>) => {
  return API.post("/employee", data);
};

export const updateEmployee = async ({
  id,
  updateData,
}: {
  updateData: z.infer<typeof EmployeeSchemas>;
  id: number;
}) => {
  return API.patch(`/employee/${id}`, updateData);
};
