import styled from "styled-components";

export const TextareaContainer = styled.div`
  height: auto;
  width: auto;
`;

export const TextareaComponent = styled.textarea`
  height: 100px;
  width: 100%;
  padding: 6px;
  color: var(--color-text);
  background: var(--bg-input);
  border: 1px solid
    ${(props) =>
      props.className === "error" ? "#ff452b" : "var(--border-input)"};
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &::placeholder {
    color: var(--text-color);
  }
`;

export const MessageError = styled.p`
  font-size: 14px;
  color: var(--color-error-message);
  padding: 5px 0px 5px 0px;
`;
