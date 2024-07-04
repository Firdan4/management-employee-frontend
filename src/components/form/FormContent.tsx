import { zodResolver } from "@hookform/resolvers/zod";
import { EmployeeSchemas } from "../../schemas/employeeSchemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmployee, updateEmployee } from "../../api/employee";
import { SetStateAction } from "react";

interface FormContentProps {
  data: z.infer<typeof EmployeeSchemas>;
  isEdit: string | number;
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
}

const FormContent: React.FC<FormContentProps> = ({
  data,
  isEdit,
  setShowForm,
}) => {
  const QueryClient = useQueryClient();
  const form = useForm<z.infer<typeof EmployeeSchemas>>({
    resolver: zodResolver(EmployeeSchemas),
    defaultValues: data,
  });

  const { mutate: mutateEmployee } = useMutation({
    mutationKey: ["mutateEmployees"],
    mutationFn: (data: z.infer<typeof EmployeeSchemas>) => createEmployee(data),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["employeeList"] });
      setShowForm(false);
    },
  });

  const { mutate: mutateUpdateEmployee } = useMutation({
    mutationKey: ["mutateUpdateEmployees"],
    mutationFn: ({
      updateData,
      id,
    }: {
      updateData: z.infer<typeof EmployeeSchemas>;
      id: number;
    }) => updateEmployee({ updateData, id }),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["employeeList"] });
      setShowForm(false);
    },
  });

  const onSubmit = (value: z.infer<typeof EmployeeSchemas>) => {
    if (isEdit) {
      mutateUpdateEmployee({ id: isEdit as number, updateData: value });
    } else {
      mutateEmployee(value);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a position employee" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Employee">Employee</SelectItem>
                  <SelectItem value="Lead">Lead</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a position employee" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">InActive</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormContent;
