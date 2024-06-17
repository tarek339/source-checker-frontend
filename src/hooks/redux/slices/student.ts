import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddStudent,
  InitialStudentState,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialStudentState = {
  student: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<IAddStudent>) => {
      state.student = action.payload.student;
    },
    removeStudent: (state) => {
      state.student = null;
    },
  },
});

export const studenReducer = studentSlice.reducer;
export const { addStudent, removeStudent } = studentSlice.actions;
