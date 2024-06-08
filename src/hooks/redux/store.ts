import { configureStore } from "@reduxjs/toolkit";
import {
  loadingReducer,
  modalReducer,
  sideBarPageReducer,
  sideBarReducer,
  submitReducer,
  surveyPagesReducer,
  surveyReducer,
  translationsReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    translation: translationsReducer,
    survey: surveyReducer,
    surveyPages: surveyPagesReducer,
    modal: modalReducer,
    loading: loadingReducer,
    submit: submitReducer,
    sideBar: sideBarReducer,
    sideBarPage: sideBarPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
