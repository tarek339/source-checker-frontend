import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const useSelectors = () => {
  const locale = useSelector((state: RootState) => state.translation.locale);
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
  const loading = useSelector((state: RootState) => state.loading.loading);
  const onSubmit = useSelector((state: RootState) => state.submit.submit);
  const sideBar = useSelector((state: RootState) => state.sideBar.open);
  const pageId = useSelector((state: RootState) => state.surveyPages.pageId);
  const singlePage = useSelector(
    (state: RootState) => state.surveyPages.singlePage
  );
  const mainPage = useSelector((state: RootState) => state.mainPage.mainPage);
  const isStarted = useSelector(
    (state: RootState) => state.surveyController.isStarted
  );
  const isCountDownDone = useSelector(
    (state: RootState) => state.surveyController.countDownDone
  );
  const student = useSelector((state: RootState) => state.student.student);
  const currentPage = useSelector(
    (state: RootState) => state.surveyPages.currentPage
  );
  const voted = useSelector((state: RootState) => state.surveyPages.voted);
  const votedStars = useSelector(
    (state: RootState) => state.surveyPages.votedStars
  );
  const stars = useSelector((state: RootState) => state.surveyPages.stars);
  const first = useSelector((state: RootState) => state.sliceNums.first);
  const last = useSelector((state: RootState) => state.sliceNums.last);
  const isSort = useSelector((state: RootState) => state.sliceNums.isSort);

  return {
    locale,
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
    mainPage,
    isStarted,
    isCountDownDone,
    student,
    currentPage,
    voted,
    votedStars,
    stars,
    first,
    last,
    isSort,
  };
};

export default useSelectors;
