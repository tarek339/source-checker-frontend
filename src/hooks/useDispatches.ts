import { useDispatch } from "react-redux";
import {
  addSurvey,
  addSurveyPages,
  handleLoading,
  handleModal,
  handlePages,
  handleSideBar,
  handleSteps,
  handleSubmit,
  handleTranslation,
} from "./redux/slices";
import { Locale } from "../types/interfaces/redux/slices";
import { AxiosResponse } from "axios";
import { IPages } from "../types/interfaces/interfaces";

const useDispatches = () => {
  const dispatch = useDispatch();

  const enableEN = () => dispatch(handleTranslation({ locale: Locale.en }));
  const enableGE = () => dispatch(handleTranslation({ locale: Locale.de }));

  const handlePage = (addPage: number) =>
    dispatch(handlePages({ page: 0 + addPage }));
  const finishStep = (arg: boolean) => dispatch(handleSteps(arg));

  const dispatchSurvey = (res: AxiosResponse<any, any>) =>
    dispatch(addSurvey(res));
  const dispatchPages = (pages: IPages[]) =>
    dispatch(addSurveyPages({ pages: pages }));

  const openModal = () => dispatch(handleModal({ isVisible: true }));
  const closeModal = () => dispatch(handleModal({ isVisible: false }));

  const dispatchLoading = (loading: boolean) =>
    dispatch(handleLoading({ loading: loading }));

  const dispatchSubmit = (submit: boolean) =>
    dispatch(handleSubmit({ submit: submit }));

  const dispatchSideBar = (open: boolean) =>
    dispatch(handleSideBar({ open: open }));

  return {
    enableEN,
    enableGE,
    handlePage,
    finishStep,
    dispatchSurvey,
    openModal,
    closeModal,
    dispatchPages,
    dispatchLoading,
    dispatchSubmit,
    dispatchSideBar,
  };
};

export default useDispatches;
