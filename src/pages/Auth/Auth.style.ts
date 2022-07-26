import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: left;
  // Tablet
  @media (min-width: 765px) {
    font-size: 1.7rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  height: 100%;
  min-width: 250px;
  max-width: 300px;
  width: 100%;
  color: var(--color-text);
  background: var(--bg-form);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  transition: 0.25s ease;
  // Tablet
  @media (min-width: 765px) {
    min-width: 250px;
    max-width: 500px;
    width: 100%;
    gap: 20px;
    padding: 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: auto;
  min-height: 100vh;
  height: auto;
  background: var(--bg-page);
  color: var(--color-text);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */
`;

export const ToggleContainer = styled.div`
  height: 100%;
  padding: 12px 0px;
`;

export const ToggleMessage = styled.span`
  font-size: 0.85rem;
  padding-left: 10px;
`;

export const ButtonContainer = styled.div`
  padding: 20px 0px;
`;

export const RedirectTo = styled.p`
  font-size: 0.9rem;
  .redirect {
    color: var(--color-text);
    padding-left: 5px;
  }
`;

export const ThemeToggleBox = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;
