import { createSlice } from "@reduxjs/toolkit";
import { IStudent } from "../../../types/interfaces/interfaces";

interface InitialState {
  student: IStudent | null;
}

const initialState: InitialState = {
  student: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.student = action.payload;
    },
    removeStudent: (state) => {
      state.student = null;
    },
  },
});

export const studenReducer = studentSlice.reducer;
export const { addStudent, removeStudent } = studentSlice.actions;
