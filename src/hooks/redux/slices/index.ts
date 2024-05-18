import { handleTranslation } from "./translations";
import { pagesReducer } from "./pages";
import { surveyReducer } from "./survey";
import { surveyPagesReducer } from "./surveyPages";
import { modalReducer } from "./modal";
import { handlePages, handleSteps } from "./pages";
import { addSurvey, removeSurvey } from "./survey";
import { handleModal } from "./modal";
import { addSurveyPages } from "./surveyPages";
import { translationsReducer } from "./translations";
import { loadingReducer, handleLoading } from "./loading";
import { handleSubmit, submitReducer } from "./submit";
import { sideBarReducer, handleSideBar } from "./sideBar";
import {
  sideBarPageReducer,
  increaseFirstPage,
  increaseLastPage,
} from "./sideBarPage";

export {
  handleTranslation,
  handlePages,
  handleSteps,
  removeSurvey,
  addSurvey,
  handleModal,
  addSurveyPages,
  handleLoading,
  handleSubmit,
  handleSideBar,
  increaseLastPage,
  increaseFirstPage,
  sideBarReducer,
  submitReducer,
  pagesReducer,
  surveyReducer,
  surveyPagesReducer,
  modalReducer,
  translationsReducer,
  loadingReducer,
  sideBarPageReducer,
};
