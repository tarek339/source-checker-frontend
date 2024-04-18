import { createSlice } from "@reduxjs/toolkit";
import { InitialStateSurvey } from "../../../types/interfaces/redux/slices";

const initialState: InitialStateSurvey = {
  pages: [],
};

const surveyPagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    addSurveyPages: (state, action) => {
      state.pages = action.payload.pages;
    },
  },
});

export const surveyPagesReducer = surveyPagesSlice.reducer;
export const { addSurveyPages } = surveyPagesSlice.actions;
