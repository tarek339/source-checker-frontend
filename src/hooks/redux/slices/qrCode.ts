import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHandleQrCode } from "../../../types/interfaces/redux/slices";

const qrCodeSlice = createSlice({
  name: "qrCode",
  initialState: {
    isVisible: false,
  },
  reducers: {
    handleQrCode: (state, action: PayloadAction<IHandleQrCode>) => {
      state.isVisible = action.payload.isVisible;
    },
  },
});

export const qrCodeReducer = qrCodeSlice.reducer;
export const { handleQrCode } = qrCodeSlice.actions;
