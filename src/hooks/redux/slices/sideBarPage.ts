import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
