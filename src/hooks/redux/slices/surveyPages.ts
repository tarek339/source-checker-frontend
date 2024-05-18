import { createSlice } from "@reduxjs/toolkit";
import { InitialStateSurvey } from "../../../types/interfaces/redux/slices";

const initialState: InitialStateSurvey = {
  pages: [],
  sideBarFirstPage: 0,
  sideBarLastPage: 1,
};

const surveyPagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addSurveyPages: (state, action) => {
      state.pages = action.payload.pages;
    },
    increaseFirstPage: (state, action) => {
      state.sideBarFirstPage = action.payload.sideBarFirstPage;
    },
    increaseLastPage: (state, action) => {
      state.sideBarLastPage = action.payload.sideBarLastPage;
    },
  },
});

export const surveyPagesReducer = surveyPagesSlice.reducer;
export const { addSurveyPages, increaseFirstPage, increaseLastPage } =
  surveyPagesSlice.actions;
