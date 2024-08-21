import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "./ui/label";

type FormCheckboxProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormCheckbox = ({ name, label, defaultValue }: FormCheckboxProps) => {
  const defaultChecked = defaultValue === "on" ? true : false;

  return (
    <div className="mb-2 ml-4 flex gap-4 self-end">
      <Label htmlFor={name} className="capitalize">
        {label}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
};
export default FormCheckbox;
