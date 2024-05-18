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

export interface HandlePage {
  page: number;
}
export interface HandleSteps {
  stepDone: boolean;
}

export interface HandleModal {
  isVisible: boolean;
}

export interface InitialStateSurvey {
  pages: IPages[];
  sideBarFirstPage: number;
  sideBarLastPage: number;
}

export interface InitialStateSideBar {
  open: boolean;
}
