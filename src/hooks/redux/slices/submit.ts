import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IHandleSubmit } from "../../../types/interfaces/redux/slices";

const submitSlice = createSlice({
  name: "submit",
  initialState: {
    submit: false,
  },
  reducers: {
    handleSubmit: (state, action: PayloadAction<IHandleSubmit>) => {
      state.submit = action.payload.submit;
    },
  },
});

export const submitReducer = submitSlice.reducer;
export const { handleSubmit } = submitSlice.actions;
