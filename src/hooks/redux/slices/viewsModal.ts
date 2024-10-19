import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHandleViewsModal } from "../../../types/interfaces/redux/slices";

const viewsModalSlice = createSlice({
  name: "viewsModal",
  initialState: {
    isVisible: false,
  },
  reducers: {
    handleViewsModal: (state, action: PayloadAction<IHandleViewsModal>) => {
      state.isVisible = action.payload.isVisible;
    },
  },
});

export const viewsModalReducer = viewsModalSlice.reducer;
export const { handleViewsModal } = viewsModalSlice.actions;
