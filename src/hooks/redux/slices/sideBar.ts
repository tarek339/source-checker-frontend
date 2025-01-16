import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleStateSideBarAction } from "../../../types/interfaces/redux/slices";

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    open: false,
  },
  reducers: {
    handleSideBar: (state, action: PayloadAction<HandleStateSideBarAction>) => {
      state.open = action.payload.open;
    },
  },
});

export const sideBarReducer = sideBarSlice.reducer;
export const { handleSideBar } = sideBarSlice.actions;
