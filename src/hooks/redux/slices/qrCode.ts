import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHandleQrCode } from "../../../types/interfaces/redux/slices";

const qrCodeSlice = createSlice({
  name: "qrCode",
  initialState: {
    visible: false,
  },
  reducers: {
    handleQrCode: (state, action: PayloadAction<IHandleQrCode>) => {
      state.visible = action.payload.visible;
    },
  },
});

export const qrCodeReducer = qrCodeSlice.reducer;
export const { handleQrCode } = qrCodeSlice.actions;
