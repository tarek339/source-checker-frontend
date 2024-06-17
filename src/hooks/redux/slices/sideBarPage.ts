import { createSlice } from "@reduxjs/toolkit";
import { InitalStateSideBarPage } from "../../../types/interfaces/redux/slices";

const initialState: InitalStateSideBarPage = {
  sideBarFirstPage: 0,
  sideBarLastPage: 1,
};

const sideBarPageSlice = createSlice({
  name: "sideBarPage",
  initialState,
  reducers: {
    increaseFirstPage: (state, action) => {
      state.sideBarFirstPage = action.payload;
    },
    increaseLastPage: (state, action) => {
      state.sideBarLastPage = action.payload;
    },
  },
});

export const sideBarPageReducer = sideBarPageSlice.reducer;
export const { increaseFirstPage, increaseLastPage } = sideBarPageSlice.actions;
