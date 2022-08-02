import styled from "styled-components";

export const TaskSectionContainer = styled.div`
  width: 100%;
  height: min-content;
  ul {
    list-style: none;
    padding: 0px;
  }
  @media (min-width: 765px) {
    padding-top: 18px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;

    section {
      background: #ffffff;
      background: var(--bg-input);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      padding: 10px;
    }
  }
`;
export const Title = styled.h3`
  line-height: 2.5rem;
`;
