import { AxiosResponse } from "axios";
import useDispatches from "./useDispatches";

const useLocaleStorage = () => {
  const { handlePage, dispatchSurvey, dispatchPages, finishStep } =
    useDispatches();

  const createSurvey = (res: AxiosResponse<any, any>) => {
    localStorage.setItem("surveyData", JSON.stringify(res));
    const surveyDataString = localStorage.getItem("surveyData");
    const surveyData = JSON.parse(surveyDataString!);
    dispatchSurvey(surveyData);
  };

  const fetchSurvey = (res: AxiosResponse<any, any>) => {
    localStorage.setItem("surveyData", JSON.stringify(res));
    const surveyDataString = localStorage.getItem("surveyData");
    const surveyData = JSON.parse(surveyDataString!);
    dispatchSurvey(surveyData!);
    dispatchPages(surveyData?.pages);
  };

  const getSurvey = () => {
    const surveyDataString = localStorage?.getItem("surveyData");
    const surveyData = JSON.parse(surveyDataString!);
    dispatchSurvey(surveyData!);
    dispatchPages(surveyData?.pages);
  };

  const setPage = (page: number) => {
    localStorage.setItem("page", JSON.stringify(page));
    const dataNumber = localStorage.getItem("page");
    const pageData = JSON.parse(dataNumber!);
    handlePage(pageData);
  };

  const setDoneStep = () => {
    localStorage.setItem("stepDone", JSON.stringify(true));
    const dataString = localStorage.getItem("stepDone");
    const data = JSON.parse(dataString!);
    finishStep(Boolean(data));
  };

  const resetStates = () => {
    localStorage.removeItem("surveyData");
    localStorage.removeItem("page");
    localStorage.removeItem("stepDone");
    handlePage(0);
    finishStep(false);
  };

  return {
    setPage,
    fetchSurvey,
    createSurvey,
    getSurvey,
    setDoneStep,
    resetStates,
  };
};

export default useLocaleStorage;
