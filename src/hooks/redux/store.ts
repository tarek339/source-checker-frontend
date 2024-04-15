import { configureStore } from "@reduxjs/toolkit";
import { translationsReducer } from "..";
import { pagesReducer } from "./slices/pages";
import { surveyReducer } from "./slices/survey";
import { modalReducer } from "./slices/modal";

export const store = configureStore({
  reducer: {
    translation: translationsReducer,
    pages: pagesReducer,
    surveys: surveyReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
