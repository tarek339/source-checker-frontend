import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleChangeViewStateAction } from "../../../types/interfaces/redux/slices";

const changeViewSlice = createSlice({
  name: "changeView",
  initialState: {
    open: false,
  },
  reducers: {
    handleChangeView: (
      state,
      action: PayloadAction<HandleChangeViewStateAction>
    ) => {
      state.open = action.payload.open;
    },
  },
});

export const changeViewReducer = changeViewSlice.reducer;
export const { handleChangeView } = changeViewSlice.actions;
