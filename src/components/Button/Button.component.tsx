import { FC } from "react";
import { ButtonContainer } from "./Button.style";

type ButtonProps = {
  buttonName: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = ({
  type = "button",
  buttonName,
  onClick,
}) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {buttonName}
    </ButtonContainer>
  );
};
