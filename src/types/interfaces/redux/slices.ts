import { IPages, IStudent, ISurvey } from "../interfaces";

export interface InitialSurveyState {
  survey: ISurvey | null;
  created: boolean;
}

export interface IAddSurvey {
  survey: ISurvey;
}

export interface InitalStateSideBarPage {
  sideBarFirstPage: number;
  sideBarLastPage: number;
}

export interface InitialStudentState {
  student: IStudent | null;
}

export interface IAddStudent {
  student: IStudent;
}

export enum Locale {
  de = "de",
  en = "en",
}

export interface IHandleTranslation {
  locale: Locale;
}

export interface IHandleLoading {
  loading: boolean;
}

export interface IHandleSubmit {
  submit: boolean;
}

export interface IHandleModal {
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

export interface IHandleMainPage {
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

export interface IAddSurveyPages {
  pages: IPages[];
}

export interface IncreaseFirstPage {
  sideBarFirstPage: number;
}

export interface IncreaseLastPage {
  sideBarLastPage: number;
}

export interface ISetPageId {
  pageId: string;
}
