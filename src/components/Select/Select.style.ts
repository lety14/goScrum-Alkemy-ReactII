import styled from "styled-components";

export const InputContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const SelectComponent = styled.select`
  height: 35px;
  width: 100%;
  border: 1px solid
    ${(props) =>
      props.className === "error" ? "#ff452b" : "var(--border-input)"};
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  background-color: var(--bg-input);

  &:focus {
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  // Tablet
  @media (min-width: 765px) {
    height: 40px;
  }
`;

export const Label = styled.label`
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const MessageError = styled.p`
  font-size: 0.9rem;
  color: var(--color-error-message);
  padding: 5px 0px 5px 0px;
`;
