import { useDispatch } from "react-redux";
import {
  addStudent,
  addSurvey,
  addSurveyPages,
  getSinglePage,
  handleCountDown,
  handleCurrentPage,
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
import { AxiosResponse } from "axios";
import { IPages } from "../types/interfaces/interfaces";
import useSelectors from "./useSelectors";

const useDispatches = () => {
  const dispatch = useDispatch();
  const { firstSideBarPages, lastSideBarPages } = useSelectors();

  const enableEN = () => dispatch(handleTranslation({ locale: Locale.en }));
  const enableGE = () => dispatch(handleTranslation({ locale: Locale.de }));

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

  const fetchPageId = (id: string) => dispatch(setPageId(id));
  const fetchSinglePage = (page: IPages) =>
    dispatch(
      getSinglePage({
        _id: page._id,
        title: page.title,
        url: page.url,
        note: page.note,
        isMobileView: page.isMobileView,
        mobileScreenshot: page.mobileScreenshot,
        desktopScreenshot: page.desktopScreenshot,
      })
    );
  const setMainPage = (arg: boolean) => dispatch(handlePage({ mainPage: arg }));

  const setSurveyStatus = (isStarted: boolean) =>
    dispatch(handleSurveyStatus({ isStarted: isStarted }));

  const setCoundDownStatus = (countDownDone: boolean) =>
    dispatch(handleCountDown({ countDownDone: countDownDone }));

  const dispatchStudent = (res: AxiosResponse<any, any>) =>
    dispatch(addStudent(res));

  const setCurrentPage = (currentPage: number) =>
    dispatch(handleCurrentPage({ currentPage }));
  const setVoted = (voted: boolean) => dispatch(handleVoted({ voted }));
  const setVotedStars = (votedStars: number) =>
    dispatch(handleVotedStars({ votedStars }));
  const setStars = (stars: number) => dispatch(handleStars({ stars }));

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
  };
};

export default useDispatches;
