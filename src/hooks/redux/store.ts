import { configureStore } from "@reduxjs/toolkit";
import {
  loadingReducer,
  modalReducer,
  pagesReducer,
  sideBarReducer,
  submitReducer,
  surveyPagesReducer,
  surveyReducer,
  translationsReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    translation: translationsReducer,
    pages: pagesReducer,
    survey: surveyReducer,
    surveyPages: surveyPagesReducer,
    modal: modalReducer,
    loading: loadingReducer,
    submit: submitReducer,
    sideBar: sideBarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
