import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  AddSurveyAction,
  InitialStateSurvey,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialStateSurvey = {
  survey: null,
  loading: true,
};

const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    addSurvey: (state, action: PayloadAction<AddSurveyAction>) => {
      state.survey = action.payload.survey;
      state.loading = false;
    },
    removeSurvey: (state) => {
      state.survey = null;
      state.loading = false;
    },
  },
});

export const surveyReducer = surveySlice.reducer;
export const { addSurvey, removeSurvey } = surveySlice.actions;
