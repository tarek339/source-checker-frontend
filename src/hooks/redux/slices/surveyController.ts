import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  InitialStateCountDownDone,
  InitialStateSurveyController,
} from "../../../types/interfaces/redux/slices";

const surveyController = createSlice({
  name: "surveyController",
  initialState: {
    isStarted: false,
    countDownDone: false,
  },
  reducers: {
    handleSurveyStatus: (
      state,
      action: PayloadAction<InitialStateSurveyController>
    ) => {
      state.isStarted = action.payload.isStarted;
    },

    handleCountDown: (
      state,
      action: PayloadAction<InitialStateCountDownDone>
    ) => {
      state.countDownDone = action.payload.countDownDone;
    },
  },
});

export const surveyControllerReducer = surveyController.reducer;
export const { handleSurveyStatus, handleCountDown } = surveyController.actions;
