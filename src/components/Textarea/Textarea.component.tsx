import { ChangeEvent, FC, FocusEvent } from "react";
import {
  MessageError,
  TextareaComponent,
  TextareaContainer,
} from "./Textarea.style";

type TextareaProps = {
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: FocusEvent) => void;
  value: string;
  placeholder: string;
  touched?: boolean;
  error?: string;
};

export const Textarea: FC<TextareaProps> = ({
  name,
  onChange,
  onBlur,
  value,
  placeholder,
  touched,
  error,
}) => {
  return (
    <TextareaContainer>
      <TextareaComponent
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        data-testid={`textarea-${name}`}
        className={error && touched ? "error" : ""}
      />
      {error && touched && <MessageError>{error}</MessageError>}
    </TextareaContainer>
  );
};
