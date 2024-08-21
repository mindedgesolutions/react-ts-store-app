import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
};

const FormInput = ({ name, type, label, defaultValue }: FormInputProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input type={type} name={name} id={name} defaultValue={defaultValue} />
    </div>
  );
};
export default FormInput;
