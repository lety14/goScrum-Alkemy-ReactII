import styled from "styled-components";

export const TaskContainer = styled.main`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
  color: var(--color-text);
  background: var(--bg-page-alt);
`;

export const Container = styled.section`
  padding: 30px 15px;
  min-height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 40px;

  @media (min-width: 1250px) {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(80vh, 100%);
  }
`;

export const ThemeToggleContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  transform: scale(0.85);
`;

export const SectionTasks = styled.section`
  background: var(--bg-section-tasks);
  border-radius: 5px;
  padding: 12px;
  margin-top: 20px;
  height: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (min-width: 1250px) {
    section {
      border-radius: 20px;
    }
  }
`;

export const TitleSecond = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
`;
