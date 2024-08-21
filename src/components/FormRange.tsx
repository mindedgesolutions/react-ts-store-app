import { currencyFormat } from "@/utils/formatAsInr";
import { useState } from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

type FormRangeProps = {
  name: string;
  label?: string;
  defaultValue?: string;
};

const FormRange = ({ name, label, defaultValue }: FormRangeProps) => {
  const step = 1000;
  const maxPrice = 100000;
  const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
  const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize flex justify-between">
        {label || name} <span>{currencyFormat(selectedPrice)}</span>
      </Label>
      <Slider
        name={name}
        id={name}
        step={step}
        max={maxPrice}
        value={[selectedPrice]}
        onValueChange={(value) => setSelectedPrice(value[0])}
        className="mt-4"
      />
    </div>
  );
};
export default FormRange;
