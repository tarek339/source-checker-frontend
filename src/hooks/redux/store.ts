import { configureStore } from "@reduxjs/toolkit";
import {
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
  },
});

export type RootState = ReturnType<typeof store.getState>;
