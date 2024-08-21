import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

type FormSelectProps = {
  name: string;
  label?: string;
  defaultValue?: string;
  options: string[];
};

const FormSelect = ({
  name,
  label,
  defaultValue,
  options,
}: FormSelectProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue placeholder={`Select a ${name}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => {
              return (
                <SelectItem key={option} value={option}>
                  <span className="">{option}</span>
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
export default FormSelect;
