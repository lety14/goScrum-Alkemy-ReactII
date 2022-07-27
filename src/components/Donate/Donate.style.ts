import styled from "styled-components";

export const DonateContainer = styled.div`
  height: auto;
  width: auto;
  position: relative;
  z-index: 1;
`;

export const DonateLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-size: 0.9rem;
  background: var(--bg-button);
  padding: 5px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transition: 0.25s ease;

  &:hover {
    background: #000000;
  }

  // Tablet
  @media (min-width: 765px) {
    font-size: 1rem;
  }
`;

export const TextData = styled.div`
  position: absolute;
  visibility: hidden;
  top: 30px;

  ${DonateContainer}:hover & {
    visibility: visible;
  }
`;
