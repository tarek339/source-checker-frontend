import { useDispatch } from "react-redux";
import {
  addSurvey,
  handleModal,
  handlePages,
  handleSteps,
  handleTranslation,
} from "./redux/slices";
import { Locale } from "../types/interfaces/redux/slices";
import { AxiosResponse } from "axios";

const useDispatches = () => {
  const dispatch = useDispatch();

  const enableEN = () => dispatch(handleTranslation({ locale: Locale.en }));
  const enableGE = () => dispatch(handleTranslation({ locale: Locale.de }));

  const handlePage = (addPage: number) =>
    dispatch(handlePages({ page: 0 + addPage }));
  const finishStep = () => dispatch(handleSteps(true));
  const resetStep = () => dispatch(handleSteps(false));

  const dispatchSurvey = (res: AxiosResponse<any, any>) =>
    dispatch(addSurvey(res));

  const openModal = () => dispatch(handleModal({ isVisible: true }));
  const closeModal = () => dispatch(handleModal({ isVisible: false }));

  return {
    enableEN,
    enableGE,
    handlePage,
    finishStep,
    resetStep,
    dispatchSurvey,
    openModal,
    closeModal,
  };
};

export default useDispatches;
