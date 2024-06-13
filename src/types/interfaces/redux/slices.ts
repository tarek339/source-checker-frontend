import { IPages } from "../interfaces";

export enum Locale {
  de = "de",
  en = "en",
}

export interface HandleTranslation {
  locale: Locale;
}

export interface HandleLoading {
  loading: boolean;
}

export interface HandleSubmit {
  submit: boolean;
}

export interface HandleModal {
  isVisible: boolean;
}

export interface InitialStateSurvey {
  pages: IPages[];
  sideBarFirstPage: number;
  sideBarLastPage: number;
  pageId: string;
  singlePage: null | IPages;
}

export interface InitialStateSideBar {
  open: boolean;
}

export interface HandleMainPage {
  mainPage: boolean;
}

export interface InitialStateSurveyController {
  isStarted: boolean;
}

export interface InitialStateCountDownDone {
  countDownDone: boolean;
}
