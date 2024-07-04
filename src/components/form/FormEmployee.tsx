import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import FormContent from "./FormContent";
import { SetStateAction } from "react";
import { z } from "zod";
import { EmployeeSchemas } from "../../schemas/employeeSchemas";

interface FormEmployeeProps {
  data: z.infer<typeof EmployeeSchemas>;
  showForm: boolean;
  isEdit: string | number;
  setShowForm: React.Dispatch<SetStateAction<boolean>>;
  handleShowForm: () => void;
}

const FormEmployee: React.FC<FormEmployeeProps> = ({
  setShowForm,
  showForm,
  data,
  isEdit,
  handleShowForm,
}) => {
  return (
    <Dialog open={showForm} onOpenChange={setShowForm}>
      <Button onClick={() => handleShowForm()}>Add Employee</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Employee</DialogTitle>

          <FormContent data={data} isEdit={isEdit} setShowForm={setShowForm} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FormEmployee;
