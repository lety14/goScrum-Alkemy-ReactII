import { ChangeEvent, FC, FocusEvent, useState } from "react";
import {
  InputContainer,
  InputComponent,
  Label,
  MessageError,
  ShowPassword,
  InputContent,
} from "./Input.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";

type InputProps = {
  name: string;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur?: (e: FocusEvent) => void;
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  touched?: boolean;
  error?: string;
};

export const Input: FC<InputProps> = ({
  name,
  onChange,
  onBlur,
  type = "text",
  label,
  placeholder,
  value,
  touched,
  error,
}) => {
  const [typeInput, setTypeInput] = useState<string>(type);
  const handleShowPassword = () => {
    typeInput === "password" ? setTypeInput("text") : setTypeInput("password");
  };
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputContent>
        <InputComponent
          type={typeInput}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          data-testid={`input-${name}`}
          className={error && touched ? "error" : ""}
        />
        {type === "password" && (
          <ShowPassword type="button" onClick={handleShowPassword}>
            <FontAwesomeIcon
              className="showPasswordToggle"
              icon={typeInput === "password" ? faEyeSlash : faEye}
            />
          </ShowPassword>
        )}
      </InputContent>
      {error && touched && <MessageError>{error}</MessageError>}
    </InputContainer>
  );
};
