import { configureStore } from "@reduxjs/toolkit";
import { translationsReducer } from "..";
import { pagesReducer } from "./slices/pages";

export const store = configureStore({
  reducer: {
    translation: translationsReducer,
    pages: pagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
