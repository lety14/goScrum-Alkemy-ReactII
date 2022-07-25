import { ChangeEvent, FC, FocusEvent } from "react";
import { Label, MessageError, SelectComponent } from "./Select.style";

type SelectProps = {
  name: string;
  firstValue: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: FocusEvent) => void;
  label?: string;
  options?: string[];
  value?: string;
  touched?: boolean;
  error?: string;
};

export const Select: FC<SelectProps> = ({
  name,
  firstValue,
  onChange,
  onBlur,
  label,
  options,
  value,
  touched,
  error,
}) => {
  return (
    <div>
      <Label>{label}</Label>
      <SelectComponent
        name={name}
        onChange={onChange}
        value={value}
        className={error && touched ? "error" : ""}
        onBlur={onBlur}
      >
        <option value="" defaultChecked={true}>
          {firstValue}
        </option>
        {options?.map((option, index) => (
          <option value={option} key={`${index}_${option}`}>
            {option}
          </option>
        ))}
      </SelectComponent>
      {error && touched && <MessageError>{error}</MessageError>}
    </div>
  );
};
