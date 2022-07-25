import styled from "styled-components";

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const InputComponent = styled.input`
  height: 35px;
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  padding-left: 6px;
  border: 1px solid
    ${(props) => (props.className === "error" ? "#ff452b" : "#e5e5e5")};
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const MessageError = styled.p`
  font-size: 0.9rem;
  color: var(--color-error-message);
  margin: 0px;
  padding: 5px 0px 5px 0px;
`;

export const InputContent = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const ShowPassword = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  right: 4px;
  top: 8px;
  cursor: pointer;
  .showPasswordToggle {
    color: #bababa;
  }
`;
