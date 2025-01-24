import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleModalAction } from "../../../types/interfaces/redux/slices";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isVisible: false,
  },
  reducers: {
    handleModal: (state, action: PayloadAction<HandleModalAction>) => {
      state.isVisible = action.payload.isVisible;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { handleModal } = modalSlice.actions;
