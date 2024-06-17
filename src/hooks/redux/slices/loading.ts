import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHandleLoading } from "../../../types/interfaces/redux/slices";

const laodingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    handleLoading: (state, action: PayloadAction<IHandleLoading>) => {
      state.loading = action.payload.loading;
    },
  },
});

export const loadingReducer = laodingSlice.reducer;
export const { handleLoading } = laodingSlice.actions;
