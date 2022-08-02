import styled from "styled-components";

export const Message = styled.p`
  position: relative;
  min-width: 120px;
  font-size: 14px;
  height: auto;
  width: auto;
  padding: 15px;
  border-radius: 18px;
  background-color: white;
  filter: drop-shadow(0px 0px 1px black);

  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: -10px;
    left: 20px;
    background-color: white;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  }
`;
