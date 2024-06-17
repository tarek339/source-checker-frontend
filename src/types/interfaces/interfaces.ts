import i18n from "i18n-js";

export interface IChildren {
  children: JSX.Element;
}

export interface IUseTranslation {
  t: (scope?: i18n.Scope, options?: i18n.TranslateOptions) => string;
  locale: string;
  setLocale: (text: string) => void;
}

export interface IPages {
  _id: string;
  title: string;
  url: string;
  note: string;
  mobileScreenshot: string;
  desktopScreenshot: string;
  isMobileView: boolean | null;
  openGraph: any;
  isOpenGraphView: boolean;
  starsArray: [
    {
      studentId: string;
      userName: string;
      stars: number;
    }
  ];
}

export interface ISurvey {
  _id: string;
  anonymousResults: boolean;
  freeUserNames: boolean;
  surveyId: string;
  surveyPin: string;
  selectedSurveysOption: string;
  selectedResultsOption: string;
  surveyNumber: number;
  pages: IPages[];
  link: string;
  validUntil: string;
  isStarted: boolean;
  pageNum: number;
}

export interface ISurveyProp {
  header: string;
  child: string | number | boolean | JSX.Element | undefined;
  secondChild?: JSX.Element | string;
}

export interface IStudent {
  _id: string;
  freeUserName: string;
  userNumber: string;
  isNameRegistered: boolean;
}
