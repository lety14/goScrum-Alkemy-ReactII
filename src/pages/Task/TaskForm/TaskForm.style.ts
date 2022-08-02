import styled from "styled-components";

export const FormContainer = styled.section`
  @media (min-width: 765px) {
    padding: 8px;
  }
`;
export const Title = styled.h2`
  line-height: 1.8rem;
`;
export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-text);
  gap: 16px;
  @media (min-width: 765px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ButtonContainer = styled.div`
  width: 100px;
`;
