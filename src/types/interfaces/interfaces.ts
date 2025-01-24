export interface PagesProps {
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

export interface SurveyProps {
  _id: string;
  anonymousResults: boolean;
  freeUserNames: boolean;
  surveyId: string;
  surveyPin: string;
  selectedSurveysOption: string;
  selectedResultsOption: string;
  surveyNumber: number;
  pages: PagesProps[];
  link: string;
  validUntil: string;
  isStarted: boolean;
  pageNum: number;
}

export interface SurveyDataProp {
  header: string;
  child: string | number | boolean | JSX.Element | undefined;
  secondChild?: string;
  filter?: number;
}

export interface StudentProps {
  _id: string;
  freeUserName: string;
  userNumber: string;
  isNameRegistered: boolean;
  participated: boolean;
  stars: number;
}
