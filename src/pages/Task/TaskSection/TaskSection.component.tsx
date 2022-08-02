import { useEffect, useMemo, useState } from "react";
import Card from "../../../components/Card";
import { useResize } from "../../../hooks/useResize";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  getTasksFromApi,
  getTasksState,
} from "../../../store/slices/tasks.slice";
import { ITask } from "../../../types/tasks.type";
import { TaskSectionContainer, Title } from "./TaskSection.style";

type status = "NEW" | "IN PROGRESS" | "FINISHED";

export const TaskSection = () => {
  const dispatch = useAppDispatch();
  const isPhone = useResize();
  const [renderTaskList, setRenderTaskList] = useState<ITask[]>([]);

  const { byUser, byImportance, byTitle } = useAppSelector(
    (state) => state.tasksFilters
  );
  useMemo(() => {
    dispatch(getTasksFromApi(byUser));
  }, [byUser]);

  const { state, tasks } = useAppSelector(getTasksState);

  /**
   * Function that filter tasks by title and/or importance
   */
  useEffect(() => {
    setRenderTaskList(
      tasks.filter((task) => {
        const title =
          byTitle.length > 0 ? task.title.startsWith(byTitle) : task.title;
        const importance =
          byImportance.length > 0
            ? task.importance === byImportance
            : task.importance;

        return title && importance;
      })
    );
  }, [byImportance, tasks, byTitle]);

  const renderCards = (status?: status) => {
    if (status !== undefined && tasks.length > 0) {
      return renderTaskList
        ?.filter((data) => data.status === status)
        .map((task, index) => <Card key={`${index}_${status}`} data={task} />);
    }
    return renderTaskList?.map((task, index) => (
      <li>
        <Card key={`${index}_phone`} data={task} />
      </li>
    ));
  };

  if (tasks.length < 0) {
    return <h4>No hay tareas para mostrar</h4>;
  }

  return (
    <TaskSectionContainer>
      {isPhone ? (
        <ul>{renderCards()}</ul>
      ) : (
        <>
          <section>
            <Title>Nuevas</Title>
            <ul>{renderCards("NEW")}</ul>
          </section>
          <section>
            <Title>En progreso</Title>
            <ul>{renderCards("IN PROGRESS")}</ul>
          </section>
          <section>
            <Title>Finalizadas</Title>
            <ul>{renderCards("FINISHED")}</ul>
          </section>
        </>
      )}
    </TaskSectionContainer>
  );
};
