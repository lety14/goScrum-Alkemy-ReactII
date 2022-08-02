import { ChangeEvent, FC } from "react";
import {
  RadioButtonComponent,
  RadioButtonContainer,
  Label,
} from "./RadioButton.style";

type RadioButtonProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
  checked?: boolean;
};

export const RadioButton: FC<RadioButtonProps> = ({
  label,
  name,
  value,
  onChange,
  checked,
}) => {
  return (
    <RadioButtonContainer>
      <RadioButtonComponent
        type="radio"
        id={value}
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
      />
      <Label htmlFor={value}>{label}</Label>
    </RadioButtonContainer>
  );
};
