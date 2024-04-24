import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const useSelectors = () => {
  const locale = useSelector((state: RootState) => state.translation.locale);
  const page = useSelector((state: RootState) => state.pages.page);
  const stepDone = useSelector((state: RootState) => state.pages.stepDone);
  const survey = useSelector((state: RootState) => state.survey.survey);
  const surveyPages = useSelector(
    (state: RootState) => state.surveyPages?.pages
  );
  const modal = useSelector((state: RootState) => state.modal.isVisible);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const onSubmit = useSelector((state: RootState) => state.submit.submit);

  return {
    locale,
    page,
    stepDone,
    survey,
    modal,
    surveyPages,
    loading,
    onSubmit,
  };
};

export default useSelectors;
