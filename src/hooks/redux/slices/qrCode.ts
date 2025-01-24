import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleQrCodeProps } from "../../../types/interfaces/redux/slices";

const qrCodeSlice = createSlice({
  name: "qrCode",
  initialState: {
    isVisible: false,
  },
  reducers: {
    handleQrCode: (state, action: PayloadAction<HandleQrCodeProps>) => {
      state.isVisible = action.payload.isVisible;
    },
  },
});

export const qrCodeReducer = qrCodeSlice.reducer;
export const { handleQrCode } = qrCodeSlice.actions;
