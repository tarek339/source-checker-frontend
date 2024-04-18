import { IPages } from "../interfaces";

export enum Locale {
  de = "de",
  en = "en",
}

export interface HandleTranslation {
  locale: Locale;
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
}
