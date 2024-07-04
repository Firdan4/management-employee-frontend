import Container from "../components/Container";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteEmployee, getAllEmployee } from "../api/employee";
import Loading from "../components/Loading";
import FormEmployee from "../components/form/FormEmployee";
import { useState } from "react";
import { EmployeeSchemas } from "../schemas/employeeSchemas";
import { z } from "zod";
import { Button } from "../components/ui/button";

interface EmployeeTypeData {
  createdAt?: string;
  devisi_id: number;
  id: number;
  name: string;
  position: string;
  status: string;
  updatedAt?: string;
}

const Employee = () => {
  const QueryClient = useQueryClient();

  const [showForm, setShowForm] = useState<boolean>(false);
  const [data, setData] = useState<z.infer<typeof EmployeeSchemas>>({
    name: "",
    position: "",
    status: "",
  });
  const [isEdit, setIsEdit] = useState<string | number>("");

  const { data: dataEmployees, isLoading } = useQuery({
    queryKey: ["employeeList"],
    queryFn: () => getAllEmployee(),
  });

  const { mutate: mutateDeleteEmployee } = useMutation({
    mutationKey: ["mutateDeleteEmployees"],
    mutationFn: (id: number) => deleteEmployee(id),
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["employeeList"] });
      setShowForm(false);
    },
  });

  const handleShowForm = () => {
    setShowForm(true);
    setIsEdit("");
    setData({ name: "", position: "", status: "" });
  };

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        <div className="w-full flex justify-end">
          <FormEmployee
            isEdit={isEdit}
            handleShowForm={handleShowForm}
            data={data}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataEmployees?.data?.data.map(
              (employee: EmployeeTypeData, index: number) => (
                <TableRow key={employee.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.status}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      onClick={() => {
                        setData({
                          name: employee.name,
                          position: employee.position,
                          status: employee.status,
                        });
                        setShowForm(true);
                        setIsEdit(employee.id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        mutateDeleteEmployee(employee.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default Employee;
