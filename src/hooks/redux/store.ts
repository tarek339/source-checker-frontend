import { configureStore } from "@reduxjs/toolkit";
import {
  loadingReducer,
  mainPageReducer,
  modalReducer,
  qrCodeReducer,
  sideBarPageReducer,
  sideBarReducer,
  sliceNumsReducer,
  studenReducer,
  submitReducer,
  surveyControllerReducer,
  surveyPagesReducer,
  surveyReducer,
  translationsReducer,
  viewsModalReducer,
} from "./slices";

export const store = configureStore({
  reducer: {
    translation: translationsReducer,
    survey: surveyReducer,
    surveyPages: surveyPagesReducer,
    modal: modalReducer,
    loading: loadingReducer,
    submit: submitReducer,
    sideBar: sideBarReducer,
    sideBarPage: sideBarPageReducer,
    mainPage: mainPageReducer,
    surveyController: surveyControllerReducer,
    student: studenReducer,
    sliceNums: sliceNumsReducer,
    qrCode: qrCodeReducer,
    viewsModal: viewsModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
