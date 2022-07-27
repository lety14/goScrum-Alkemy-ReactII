import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./slices/tasks.slice";
import { userApi } from "./services/user.endpoints";
import tasksFiltersReducer from "./slices/tasksFilters.slice";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  tasks: tasksReducer,
  tasksFilters: tasksFiltersReducer,
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
