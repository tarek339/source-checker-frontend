import { handleTranslation } from "./translations";
import { surveyReducer } from "./survey";
import { modalReducer, handleModal } from "./modal";
import { addSurvey, removeSurvey } from "./survey";
import {
  addSurveyPages,
  setPageId,
  surveyPagesReducer,
  handleCurrentPage,
  handleVoted,
  handleVotedStars,
  handleStars,
} from "./surveyPages";
import { translationsReducer } from "./translations";
import { loadingReducer, handleLoading } from "./loading";
import { handleSubmit, submitReducer } from "./submit";
import { sideBarReducer, handleSideBar } from "./sideBar";
import {
  sideBarPageReducer,
  increaseFirstPage,
  increaseLastPage,
} from "./sideBarPage";
import { mainPageReducer, handlePage } from "./mainPage";
import {
  surveyControllerReducer,
  handleSurveyStatus,
  handleCountDown,
} from "./surveyController";
import { addStudent, removeStudent, studenReducer } from "./student";
import {
  sliceNumsReducer,
  handleFirst,
  handleLast,
  handleIsSort,
} from "./sliceNums";
import { handleQrCode, qrCodeReducer } from "./qrCode";
import { viewsModalReducer, handleViewsModal } from "./viewsModal";

export {
  handleTranslation,
  removeSurvey,
  addSurvey,
  handleModal,
  addSurveyPages,
  handleLoading,
  handleSubmit,
  handleSideBar,
  increaseLastPage,
  increaseFirstPage,
  setPageId,
  handlePage,
  handleSurveyStatus,
  handleCountDown,
  addStudent,
  removeStudent,
  handleCurrentPage,
  handleVoted,
  handleVotedStars,
  handleStars,
  handleFirst,
  handleLast,
  handleIsSort,
  handleQrCode,
  handleViewsModal,
  viewsModalReducer,
  sliceNumsReducer,
  studenReducer,
  surveyControllerReducer,
  mainPageReducer,
  sideBarReducer,
  submitReducer,
  surveyReducer,
  surveyPagesReducer,
  modalReducer,
  translationsReducer,
  loadingReducer,
  sideBarPageReducer,
  qrCodeReducer,
};
