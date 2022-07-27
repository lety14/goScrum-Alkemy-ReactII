import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type tasksFilters = {
  byUser: string;
  byTitle: string;
  byImportance: string;
};

const initialState: tasksFilters = {
  byUser: "",
  byTitle: "",
  byImportance: "",
};

const tasksFilterSlice = createSlice({
  name: "tasksFilters",
  initialState,
  reducers: {
    cleanAllFilters: () => initialState,
    filterByUser: (state, action: PayloadAction<string>) => {
      state.byUser = action.payload;
    },
    filterByTitle: (state, action: PayloadAction<string>) => {
      state.byTitle = action.payload;
    },
    filterByImportance: (state, action: PayloadAction<string>) => {
      state.byImportance = action.payload;
    },
  },
});
export const {
  cleanAllFilters,
  filterByImportance,
  filterByTitle,
  filterByUser,
} = tasksFilterSlice.actions;

export default tasksFilterSlice.reducer;
