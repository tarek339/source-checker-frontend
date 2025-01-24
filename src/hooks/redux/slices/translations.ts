import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleTranslationAction } from "../../../types/interfaces/redux/slices";

const translationsSlice = createSlice({
  name: "translation",
  initialState: {
    locale: "de",
  },
  reducers: {
    handleTranslation: (
      state,
      action: PayloadAction<HandleTranslationAction>
    ) => {
      state.locale = action.payload.locale;
    },
  },
});

export const translationsReducer = translationsSlice.reducer;
export const { handleTranslation } = translationsSlice.actions;
