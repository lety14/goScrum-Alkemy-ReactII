import { FC } from "react";
import { Message } from "./MessageOnHover.style";

interface MessageOnHoverProps {
  text: string;
}

export const MessageOnHover: FC<MessageOnHoverProps> = ({ text }) => {
  return <Message>{text}</Message>;
};
