import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 40px;
  font-size: 16px;
  color: var(--color-button);
  background: var(--bg-button);
  border-radius: var(--border-radius);
  border: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: var(--color-button-hover);
    background: var(--bg-button-hover);
    border: 1px solid var(--color-button-hover);
  }
`;
