import styled from "styled-components";

export const RadioButtonContainer = styled.div`
  height: 100%;
`;

export const RadioButtonComponent = styled.input`
  height: 30px;
  width: 15px;
  vertical-align: middle;

  border: 1px solid
    ${(props) => (props.className === "error" ? "#ff452b" : "#e5e5e5")};

  transition: 0.3s ease-in-out;
`;

export const Label = styled.label`
  font-size: 14px;
  padding-left: 5px;
`;
