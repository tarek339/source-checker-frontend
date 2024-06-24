import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IHandleFirst,
  IHandleIsSort,
  IHandleLast,
  InitialStateSliceNumsSlice,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialStateSliceNumsSlice = {
  first: 0,
  last: 1,
  isSort: true,
};

const sliceNumsSlice = createSlice({
  name: "sliceNums",
  initialState,
  reducers: {
    handleFirst: (state, action: PayloadAction<IHandleFirst>) => {
      state.first = action.payload.first;
    },
    handleLast: (state, action: PayloadAction<IHandleLast>) => {
      state.last = action.payload.last;
    },
    handleIsSort: (state, action: PayloadAction<IHandleIsSort>) => {
      state.isSort = action.payload.isSort;
    },
  },
});

export const sliceNumsReducer = sliceNumsSlice.reducer;
export const { handleFirst, handleLast, handleIsSort } = sliceNumsSlice.actions;
