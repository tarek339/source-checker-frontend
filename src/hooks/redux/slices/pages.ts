import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandlePage } from "../../../types/interfaces/redux/slices";

const newPage = localStorage.getItem("page");

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    page: Number(newPage),
    stepDone: false,
  },
  reducers: {
    handlePages: (state, action: PayloadAction<HandlePage>) => {
      state.page = action.payload.page;
    },
    handleSteps: (state, _action) => {
      state.stepDone = true;
    },
  },
});

export const pagesReducer = pagesSlice.reducer;
export const { handlePages, handleSteps } = pagesSlice.actions;
