import { createSlice } from "@reduxjs/toolkit";
import { ISurvey } from "../../../types/interfaces/interfaces";

interface InitialState {
  survey: ISurvey | null;
  created: boolean;
}

const initialState: InitialState = {
  survey: null,
  created: false,
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurvey: (state, action) => {
      state.survey = action.payload;
    },
    removeSurvey: (state) => {
      state.survey = null;
    },
  },
});

export const surveyReducer = surveySlice.reducer;
export const { addSurvey, removeSurvey } = surveySlice.actions;
