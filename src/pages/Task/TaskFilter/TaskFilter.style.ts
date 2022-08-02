import styled from "styled-components";

export const FirstContainer = styled.div`
  display: flex;
  gap: 18px;
`;

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 765px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Form = styled.form`
  @media (min-width: 765px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
`;
