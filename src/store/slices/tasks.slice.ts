import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ITask } from "../../types/tasks.type";
import TaskService from "../services/tasks.endpoints";
import { AppDispatch, RootState } from "../store";

interface IInitialState {
  state: "LOADING" | "INACTIVE" | "FAIL";
  tasks: ITask[];
}

const initialState: IInitialState = {
  state: "INACTIVE",
  tasks: [],
};

export const getTasksAsync = createAsyncThunk(
  "tasks/getTasks",
  (byUser: string) => {
    const result = TaskService.getTasks(byUser);
    return result;
  }
);
export const postNewTask = createAsyncThunk(
  "tasks/postNewTask",
  (task: ITask) => {
    const result = TaskService.postNewTask(task);
    return result;
  }
);
export const updateTask = createAsyncThunk("tasks/update", (task: ITask) => {
  const result = TaskService.updateTask(task);
  return result;
});
export const deleteTask = createAsyncThunk("tasks/delete", (id: number) => {
  const result = TaskService.deleteTask(id);
  return result;
});

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    cleanAllTasks: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTasksAsync.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(getTasksAsync.fulfilled, (state, action) => {
        state.state = "INACTIVE";
        state.tasks = action.payload;
      })
      .addCase(getTasksAsync.rejected, (state) => {
        state.state = "FAIL";
      })
      /* ADD NEW TASK */
      .addCase(postNewTask.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(postNewTask.fulfilled, (state, action) => {
        state.state = "INACTIVE";
        state.tasks = [...state.tasks, action.payload];
      })
      .addCase(postNewTask.rejected, (state) => {
        state.state = "FAIL";
      })
      /* UPDATE TASK */

      .addCase(updateTask.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const taskUpdated = action.payload;
        const tasksState = state.tasks;
        const newTasksState = tasksState.map((task) =>
          task._id === taskUpdated._id ? taskUpdated : task
        );
        state.state = "INACTIVE";
        state.tasks = newTasksState;
      })
      .addCase(updateTask.rejected, (state) => {
        state.state = "FAIL";
      })

      /* UPDATE TASK */
      .addCase(deleteTask.pending, (state) => {
        state.state = "LOADING";
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        const taskDeletedId = action.payload;
        const tasksState = state.tasks;
        const newTasksState = tasksState.filter(
          (task) => task._id !== taskDeletedId
        );
        state.state = "INACTIVE";
        state.tasks = newTasksState;
      })
      .addCase(deleteTask.rejected, (state) => {
        state.state = "FAIL";
      });
  },
});

export const { cleanAllTasks } = tasksSlice.actions;

export const getTasksFromApi = (byUser: string) => (dispatch: AppDispatch) => {
  dispatch(cleanAllTasks());
  dispatch(getTasksAsync(byUser));
};

export const getTasksState = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
