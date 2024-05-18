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
  increaseFirstPage,
  increaseLastPage,
} from "./redux/slices";
import { Locale } from "../types/interfaces/redux/slices";
import { AxiosResponse } from "axios";
import { IPages } from "../types/interfaces/interfaces";
import useSelectors from "./useSelectors";

const useDispatches = () => {
  const dispatch = useDispatch();
  const { firstSideBarPages, lastSideBarPages } = useSelectors();

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

  const incFirstSBPage = () =>
    dispatch(increaseFirstPage(firstSideBarPages + 1));
  const incLastSBPage = () => dispatch(increaseLastPage(lastSideBarPages + 1));

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
    incFirstSBPage,
    incLastSBPage,
  };
};

export default useDispatches;
