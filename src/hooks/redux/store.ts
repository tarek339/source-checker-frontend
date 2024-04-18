import { configureStore } from "@reduxjs/toolkit";
import {
  loadingReducer,
  modalReducer,
  pagesReducer,
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
  },
});

export type RootState = ReturnType<typeof store.getState>;
