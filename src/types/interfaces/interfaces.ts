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
  id: string;
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
  pages: IPages[];
}

export interface ISurveyProp {
  header: string;
  child: string | number | boolean | JSX.Element | undefined;
}
