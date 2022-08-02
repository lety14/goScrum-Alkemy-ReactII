import styled from "styled-components";

export const Toggle = styled.div`
  position: relative;
  height: 30px;
  width: 50px;
  border-radius: 15px;
  background: #222222;
  padding: 5px;
  cursor: pointer;

  &.darkTheme {
    background: #ffffff;
  }
  &::before {
    display: block;
    content: "";
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background: #ffffff;
    transition: 0.5s ease;
    transform: translate(0);
  }
  &.darkTheme::before {
    transform: translateX(20px);
    background: #222222;
  }
  transform: scale(0.9);

  // Tablet
  @media (min-width: 765px) {
    transform: scale(1);
  }
`;

export const Icons = styled.div`
  display: flex;
  height: 30px;
  width: 50px;
  padding: 6px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 0px;
  color: #ffffff;
  transition: 0.5s ease;

  &.darkTheme {
    color: #222222;
  }
`;
