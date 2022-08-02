import React, { ChangeEvent, FC, SelectHTMLAttributes } from "react";
import { Input } from "../../../components/Input";
import RadioButton from "../../../components/RadioButton";
import { Select } from "../../../components/Select";
import { useAppDispatch } from "../../../store/hooks";
import {
  filterByUser,
  filterByTitle,
  filterByImportance,
} from "../../../store/slices/tasksFilters.slice";
import debounce from "lodash.debounce";
import { importanceOptions } from "../constants";
import { FirstContainer, SecondContainer, Form } from "./TaskFilter.style";

export const TasksFilter = () => {
  const dispatch = useAppDispatch();

  const handleFilterByUser = (e: ChangeEvent<HTMLSelectElement>) => {
    const byUser = e.target.value;
    dispatch(filterByUser(byUser));
  };

  const handleFilterByTitle = debounce((e: ChangeEvent<HTMLInputElement>) => {
    const byTitle = e.target.value;
    dispatch(filterByTitle(byTitle));
  }, 500);

  const handleFilterByImportance = (e: ChangeEvent<HTMLSelectElement>) => {
    const byImportance = e.target.value;
    dispatch(filterByImportance(byImportance));
  };

  return (
    <section>
      <Form>
        <FirstContainer>
          <RadioButton
            label="Todas"
            name="byUser"
            value=""
            checked={true}
            onChange={handleFilterByUser}
          />
          <RadioButton
            label="Mis Tareas"
            name="byUser"
            value="ME"
            onChange={handleFilterByUser}
          />
        </FirstContainer>
        <SecondContainer>
          <Input
            placeholder="Buscar por título..."
            name="byTitle"
            onChange={handleFilterByTitle}
          />
          <Select
            name="byImportance"
            firstValue="Seleccionar una prioridad"
            options={importanceOptions}
            onChange={handleFilterByImportance}
          />
        </SecondContainer>
      </Form>
    </section>
  );
};
