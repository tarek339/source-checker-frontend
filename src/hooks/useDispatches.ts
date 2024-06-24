import { useDispatch } from "react-redux";
import {
  addStudent,
  addSurvey,
  addSurveyPages,
  getSinglePage,
  handleCountDown,
  handleCurrentPage,
  handleFirst,
  handleIsSort,
  handleLast,
  handleLoading,
  handleModal,
  handlePage,
  handleSideBar,
  handleStars,
  handleSubmit,
  handleSurveyStatus,
  handleTranslation,
  handleVoted,
  handleVotedStars,
  increaseFirstPage,
  increaseLastPage,
  setPageId,
} from "./redux/slices";
import { Locale } from "../types/interfaces/redux/slices";
import { IPages, IStudent, ISurvey } from "../types/interfaces/interfaces";
import useSelectors from "./useSelectors";

const useDispatches = () => {
  const dispatch = useDispatch();
  const { firstSideBarPages, lastSideBarPages } = useSelectors();

  const enableEN = () => dispatch(handleTranslation({ locale: Locale.en }));
  const enableGE = () => dispatch(handleTranslation({ locale: Locale.de }));

  const dispatchSurvey = (survey: ISurvey) => dispatch(addSurvey({ survey }));
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

  const fetchPageId = (pageId: string) => dispatch(setPageId({ pageId }));
  const fetchSinglePage = (page: IPages) =>
    dispatch(
      getSinglePage({
        _id: page._id,
        title: page.title,
        url: page.url,
        note: page.note,
        mobileScreenshot: page.mobileScreenshot,
        desktopScreenshot: page.desktopScreenshot,
        isMobileView: page.isMobileView,
        openGraph: page.openGraph,
        isOpenGraphView: page.isOpenGraphView,
        starsArray: [
          {
            studentId: "",
            userName: "",
            stars: "",
          },
        ],
      })
    );
  const setMainPage = (arg: boolean) => dispatch(handlePage({ mainPage: arg }));

  const setSurveyStatus = (isStarted: boolean) =>
    dispatch(handleSurveyStatus({ isStarted: isStarted }));

  const setCoundDownStatus = (countDownDone: boolean) =>
    dispatch(handleCountDown({ countDownDone: countDownDone }));

  const dispatchStudent = (student: IStudent) =>
    dispatch(addStudent({ student }));

  const setCurrentPage = (currentPage: number) =>
    dispatch(handleCurrentPage({ currentPage }));
  const setVoted = (voted: boolean) => dispatch(handleVoted({ voted }));
  const setVotedStars = (votedStars: number) =>
    dispatch(handleVotedStars({ votedStars }));
  const setStars = (stars: number) => dispatch(handleStars({ stars }));
  const setFirst = (first: number) => dispatch(handleFirst({ first }));
  const setLast = (last: number) => dispatch(handleLast({ last }));
  const setIsSort = (isSort: boolean) => dispatch(handleIsSort({ isSort }));

  return {
    enableEN,
    enableGE,
    dispatchSurvey,
    openModal,
    closeModal,
    dispatchPages,
    dispatchLoading,
    dispatchSubmit,
    dispatchSideBar,
    incFirstSBPage,
    incLastSBPage,
    fetchPageId,
    fetchSinglePage,
    setMainPage,
    setSurveyStatus,
    setCoundDownStatus,
    dispatchStudent,
    setCurrentPage,
    setVoted,
    setVotedStars,
    setStars,
    setFirst,
    setLast,
    setIsSort,
  };
};

export default useDispatches;
