import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddSurvey,
  InitialSurveyState,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialSurveyState = {
  survey: null,
  created: false,
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurvey: (state, action: PayloadAction<IAddSurvey>) => {
      state.survey = action.payload.survey;
    },
    removeSurvey: (state) => {
      state.survey = null;
    },
  },
});

export const surveyReducer = surveySlice.reducer;
export const { addSurvey, removeSurvey } = surveySlice.actions;
