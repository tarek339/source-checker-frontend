import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  HandleEditModal,
  HandleModal,
} from "../../../types/interfaces/redux/slices";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isVisible: false,
    visible: false,
  },
  reducers: {
    handleModal: (state, action: PayloadAction<HandleModal>) => {
      state.isVisible = action.payload.isVisible;
    },
    handleEditModal: (state, action: PayloadAction<HandleEditModal>) => {
      state.visible = action.payload.visible;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { handleModal, handleEditModal } = modalSlice.actions;
