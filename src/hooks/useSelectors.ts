import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const useSelectors = () => {
  const locale = useSelector((state: RootState) => state.translation.locale);
  const page = useSelector((state: RootState) => state.pages.page);
  const stepDone = useSelector((state: RootState) => state.pages.stepDone);
  const survey = useSelector((state: RootState) => state.surveys.survey);
  const modal = useSelector((state: RootState) => state.modal.isVisible);

  return { locale, page, stepDone, survey, modal };
};

export default useSelectors;
