import styled from "styled-components";

export const TextareaContainer = styled.div`
  height: auto;
  width: auto;
`;

export const TextareaComponent = styled.textarea`
  height: 100px;
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
  margin: 0px;
  border: 1px solid
    ${(props) => (props.className === "error" ? "#ff452b" : "#e5e5e5")};
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  resize: none;
  &:focus {
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const MessageError = styled.p`
  font-size: 14px;
  color: var(--color-error-message);
  margin: 0px;
  padding: 5px 0px 5px 0px;
`;
