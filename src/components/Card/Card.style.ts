import styled from "styled-components";

export const CardContainer = styled.div`
  border: var(--global-border);
  border-radius: 12px;
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  position: relative;
  transition: transform 0.2s ease-out;
  background: var(--bg-card);
  color: var(--text-color);
  border: 1px solid var(--border-card);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &:hover {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 10px;
  font-size: 18px;
  transition: 0.25 ease;
  .closeIcon {
    color: #bababa;
    &:hover {
      color: #000000;
    }
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 700;
`;

export const DateTime = styled.h6`
  color: var(--text-color);
  font-size: 0.6rem;
`;
export const UserName = styled.h5`
  font-size: 0.6rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 3px;
`;

export const Button = styled.button`
  border-radius: 4px;
  border-width: 1px;
  font-size: 0.6rem;
  font-weight: 700;

  padding: 0.075rem 0.3rem;
  background-color: var(--bg-button);
  border-color: var(--bg-button);
  color: white;

  &:hover {
    background-color: white;
    color: var(--bg-button);
    border-color: var(--bg-button);
  }

  &.finished {
    background-color: #1ec876;
    border-color: #1ec876;

    &:hover {
      background-color: white;
      color: #1ec876;
    }
  }

  &.low {
    background-color: #007bff;
    border-color: #007bff;

    &:hover {
      background-color: white;
      color: #007bff;
    }
  }
  &.medium,
  &.progress {
    background-color: #fbde3f;
    border-color: #fbde3f;
    color: black;
  }

  &.medium:hover,
  &.progress:hover {
    background-color: black;
    color: #fbde3f;
  }
`;

export const ShowMore = styled.button`
  color: var(--text-color);
  font-size: 0.7rem;
  font-weight: 100;
  background: transparent;
  width: max-content;
  padding: 0px;
  border: none;
  text-decoration: underline;
  cursor: pointer;
`;
