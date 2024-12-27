export interface IPages {
  _id: string;
  number: number;
  title: string;
  url: string;
  note: string;
  mobileScreenshot: string;
  desktopScreenshot: string;
  isMobileView: boolean | null;
  openGraph: {
    ogTitle: string;
    ogDescription: string;
    ogImage: URL[];
    url: string;
  };
  isOpenGraphView: boolean;
  isSelectedView: boolean;
  starsArray: [
    {
      studentId: string;
      userName: string;
      userNumber: string;
      stars: number;
    }
  ];
}

interface URL {
  url: string;
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
  filter?: number;
}

export interface IStudent {
  _id: string;
  freeUserName: string;
  userNumber: string;
  isNameRegistered: boolean;
  participated: boolean;
  stars: number;
}

export interface IAdmin {
  _id: string;
  surveyId: string;
}
