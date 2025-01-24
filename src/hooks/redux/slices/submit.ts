import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { HandleSubmitAction } from "../../../types/interfaces/redux/slices";

const submitSlice = createSlice({
  name: "submit",
  initialState: {
    submit: false,
  },
  reducers: {
    handleSubmit: (state, action: PayloadAction<HandleSubmitAction>) => {
      state.submit = action.payload.submit;
    },
  },
});

export const submitReducer = submitSlice.reducer;
export const { handleSubmit } = submitSlice.actions;
