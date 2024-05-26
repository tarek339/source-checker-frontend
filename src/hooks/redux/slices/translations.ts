import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleTranslation } from "../../../types/interfaces/redux/slices";

const translationsSlice = createSlice({
  name: "translation",
  initialState: {
    locale: "en",
  },
  reducers: {
    handleTranslation: (state, action: PayloadAction<HandleTranslation>) => {
      state.locale = action.payload.locale;
    },
  },
});

export const translationsReducer = translationsSlice.reducer;
export const { handleTranslation } = translationsSlice.actions;
