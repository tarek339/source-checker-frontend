import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialStateSideBar } from "../../../types/interfaces/redux/slices";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    open: false,
  },
  reducers: {
    handleSideBar: (state, action: PayloadAction<InitialStateSideBar>) => {
      state.open = action.payload.open;
    },
  },
});

export const sideBarReducer = sideBarSlice.reducer;
export const { handleSideBar } = sideBarSlice.actions;
