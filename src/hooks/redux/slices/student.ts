import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddStudent,
  InitialStudentState,
} from "../../../types/interfaces/redux/slices";

const initialState: InitialStudentState = {
  student: null,
  loading: true,
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<IAddStudent>) => {
      state.student = action.payload.student;
      state.loading = false;
    },
    removeStudent: (state) => {
      state.student = null;
      state.loading = false;
    },
  },
});

export const studenReducer = studentSlice.reducer;
export const { addStudent, removeStudent } = studentSlice.actions;
