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
}

export interface ISurvey {
  anonymousResults: boolean;
  freeUserNames: boolean;
  surveyId: string;
  surveyPin: string;
  selectedSurveysOption: string;
  selectedResultsOption: string;
  surveyNumber: number;
  pages: IPages[];
}

export interface ISurveyProp {
  header: string | JSX.Element;
  child: string | number | boolean | JSX.Element | undefined;
}
