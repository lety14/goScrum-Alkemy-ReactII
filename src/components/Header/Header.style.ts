import styled from "styled-components";

export const HeaderContainer = styled.header`
  box-shadow: 0 2px 5px #dbdbdb;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  background: var(--bg-header);
  img {
    width: 70px;
    object-fit: contain;
  }

  @media (min-width: 400px) {
    img {
      width: 90px;
      object-fit: contain;
    }
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 10px;
  .closeIcon {
    cursor: pointer;
    height: 14px;
    vertical-align: super;
    &:hover {
      color: #000000;
    }
  }
`;

export const TasksCounter = styled.p`
  font-size: 0.8rem;
  padding: 0px;
  // Tablet
  @media (min-width: 765px) {
    font-size: 1rem;
  }
`;

export const UserName = styled.p`
  font-size: 0.8rem;
  padding: 0px 5px;
  display: inline;
  // Tablet
  @media (min-width: 765px) {
    font-size: 1rem;
  }
`;
