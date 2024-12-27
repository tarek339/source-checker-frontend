import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddAdmin,
  InitialAdminState,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialAdminState = {
  admin: null,
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<IAddAdmin>) => {
      state.admin = action.payload.admin;
    },
    removeAdmin: (state) => {
      state.admin = null;
    },
  },
});

export const adminReducer = adminSlice.reducer;
export const { addAdmin, removeAdmin } = adminSlice.actions;
