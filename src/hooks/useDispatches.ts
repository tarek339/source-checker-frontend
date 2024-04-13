import { useDispatch } from "react-redux";
import {
  handleIndexes,
  handlePages,
  handleSteps,
  handleTranslation,
} from "./redux/slices";
import { Locale } from "../types/interfaces/redux/slices";

const useDispatches = () => {
  const dispatch = useDispatch();

  const enableEN = () => dispatch(handleTranslation({ locale: Locale.en }));
  const enableGE = () => dispatch(handleTranslation({ locale: Locale.de }));

  const handlePage = (addPage: number) =>
    dispatch(handlePages({ page: 0 + addPage }));
  const handleIndex = (addIndex: number) =>
    dispatch(handleIndexes({ index: 0 + addIndex }));
  const finishStep = () => dispatch(handleSteps(true));
  const resetStep = () => dispatch(handleSteps(false));

  return {
    enableEN,
    enableGE,
    handlePage,
    handleIndex,
    finishStep,
    resetStep,
  };
};

export default useDispatches;
