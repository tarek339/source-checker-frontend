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
  currentPage: number;
  voted: boolean;
  votedStars: number;
  stars: number;
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

export interface IHandleCurrentPage {
  currentPage: number;
}

export interface IHandleVoted {
  voted: boolean;
}

export interface IHandleVotedStars {
  votedStars: number;
}

export interface IHandleStars {
  stars: number;
}
