import { handleTranslation } from "./translations";
import { surveyReducer } from "./survey";
import { modalReducer, handleModal } from "./modal";
import { addSurvey, removeSurvey } from "./survey";
import {
  addSurveyPages,
  setPageId,
  getSinglePage,
  surveyPagesReducer,
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
  getSinglePage,
  handlePage,
  mainPageReducer,
  sideBarReducer,
  submitReducer,
  surveyReducer,
  surveyPagesReducer,
  modalReducer,
  translationsReducer,
  loadingReducer,
  sideBarPageReducer,
};
