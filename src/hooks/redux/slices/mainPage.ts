import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleMainPage } from "../../../types/interfaces/redux/slices";

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: {
    mainPage: false,
  },
  reducers: {
    handlePage: (state, action: PayloadAction<HandleMainPage>) => {
      state.mainPage = action.payload.mainPage;
    },
  },
});

export const mainPageReducer = mainPageSlice.reducer;
export const { handlePage } = mainPageSlice.actions;
