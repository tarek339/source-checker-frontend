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
  const firstSideBarPages = useSelector(
    (state: RootState) => state.sideBarPage.sideBarFirstPage
  );
  const lastSideBarPages = useSelector(
    (state: RootState) => state.sideBarPage.sideBarLastPage
  );
  const modal = useSelector((state: RootState) => state.modal.isVisible);
  const editModal = useSelector((state: RootState) => state.modal.visible);
  const loading = useSelector((state: RootState) => state.loading.loading);
  const onSubmit = useSelector((state: RootState) => state.submit.submit);
  const sideBar = useSelector((state: RootState) => state.sideBar.open);
  const pageId = useSelector((state: RootState) => state.surveyPages.pageId);
  const singlePage = useSelector(
    (state: RootState) => state.surveyPages.singlePage
  );

  return {
    locale,
    page,
    stepDone,
    survey,
    modal,
    surveyPages,
    loading,
    onSubmit,
    sideBar,
    firstSideBarPages,
    lastSideBarPages,
    pageId,
    singlePage,
    editModal,
  };
};

export default useSelectors;
