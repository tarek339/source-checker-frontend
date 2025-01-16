import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  HandleFirstAction,
  IHandleIsSortAction,
  IHandleLastAction,
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
    handleFirst: (state, action: PayloadAction<HandleFirstAction>) => {
      state.first = action.payload.first;
    },
    handleLast: (state, action: PayloadAction<IHandleLastAction>) => {
      state.last = action.payload.last;
    },
    handleIsSort: (state, action: PayloadAction<IHandleIsSortAction>) => {
      state.isSort = action.payload.isSort;
    },
  },
});

export const sliceNumsReducer = sliceNumsSlice.reducer;
export const { handleFirst, handleLast, handleIsSort } = sliceNumsSlice.actions;
