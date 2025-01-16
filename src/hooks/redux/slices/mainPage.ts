import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleMainPageAction } from "../../../types/interfaces/redux/slices";

const mainPageSlice = createSlice({
  name: "mainPage",
  initialState: {
    mainPage: false,
  },
  reducers: {
    handlePage: (state, action: PayloadAction<HandleMainPageAction>) => {
      state.mainPage = action.payload.mainPage;
    },
  },
});

export const mainPageReducer = mainPageSlice.reducer;
export const { handlePage } = mainPageSlice.actions;
