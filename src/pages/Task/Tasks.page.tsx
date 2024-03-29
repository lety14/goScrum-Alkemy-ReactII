import Header from "../../components/Header";
import withAuth from "../../HOC/withAuth.hoc";
import { TaskForm } from "./TaskForm/TaskForm.component";
import {
  Container,
  SectionTasks,
  TaskContainer,
  ThemeToggleContainer,
  TitleSecond,
} from "./Task.style";
import { TaskSection } from "./TaskSection/TaskSection.component";
import { TasksFilter } from "./TaskFilter/TasksFilter.component";
import ThemeToggle from "../../components/ThemeToggle";
import withTransition from "../../HOC/withTransition";

const Tasks = () => {
  return (
    <TaskContainer>
      <Header />
      <Container>
        <ThemeToggleContainer>
          <ThemeToggle />
        </ThemeToggleContainer>
        <TaskForm />
        <SectionTasks>
          <TitleSecond>Mis tareas</TitleSecond>
          <TasksFilter />
          <TaskSection />
        </SectionTasks>
      </Container>
    </TaskContainer>
  );
};

const firstHOC = withAuth(Tasks);
export default withTransition(firstHOC);
