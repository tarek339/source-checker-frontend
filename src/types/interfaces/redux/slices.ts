import { PagesProps, StudentProps, SurveyProps } from "../interfaces";

export interface InitialStateSurvey {
  survey: SurveyProps | null;
  loading: boolean;
}

export interface AddSurveyAction {
  survey: SurveyProps;
}

export interface InitalStateSideBarPage {
  sideBarFirstPage: number;
  sideBarLastPage: number;
}

export interface InitialStateStudent {
  student: StudentProps | null;
  loading: boolean;
}

export interface AddStudentAction {
  student: StudentProps;
}

export enum Locale {
  de = "de",
  en = "en",
}

export interface HandleTranslationAction {
  locale: Locale;
}

export interface HandleLoadingAction {
  loading: boolean;
}

export interface HandleSubmitAction {
  submit: boolean;
}

export interface HandleModalAction {
  isVisible: boolean;
}

export interface HandleViewsModalAction {
  isVisible: boolean;
}

export interface HandleQrCodeProps {
  isVisible: boolean;
}

export interface InitialStateSurveyPages {
  pages: PagesProps[];
  sideBarFirstPage: number;
  sideBarLastPage: number;
  pageId: string;
  singlePage: null | PagesProps;
  currentPage: number;
  voted: boolean;
  votedStars: number;
  stars: number;
}

export interface HandleStateSideBarAction {
  open: boolean;
}

export interface HandleChangeViewStateAction {
  open: boolean;
}

export interface HandleMainPageAction {
  mainPage: boolean;
}

export interface InitialStateSurveyController {
  isStarted: boolean;
}

export interface InitialStateCountDownDone {
  countDownDone: boolean;
}

export interface HandleCurrentPageAction {
  currentPage: number;
}

export interface HandleVotedAction {
  voted: boolean;
}

export interface HandleVotedStarsAction {
  votedStars: number;
}

export interface HandleStarsAction {
  stars: number;
}

export interface AddSurveyPagesAction {
  pages: PagesProps[];
}

export interface IncreaseFirstPageAction {
  sideBarFirstPage: number;
}

export interface IncreaseLastPageAction {
  sideBarLastPage: number;
}

export interface SetPageIdAction {
  pageId: string;
}

export interface GetPageIdAction {
  pageId: string;
}

export interface InitialStateSliceNumsSlice {
  first: number;
  last: number;
  isSort: boolean;
}

export interface HandleFirstAction {
  first: number;
}

export interface IHandleLastAction {
  last: number;
}

export interface IHandleIsSortAction {
  isSort: boolean;
}
