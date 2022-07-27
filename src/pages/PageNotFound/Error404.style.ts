import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 700px;
    height: 100%;
    object-fit: cover;
  }
`;
