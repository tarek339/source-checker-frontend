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

export {
  handleTranslation,
  handlePages,
  handleSteps,
  removeSurvey,
  addSurvey,
  handleModal,
  addSurveyPages,
  handleLoading,
  pagesReducer,
  surveyReducer,
  surveyPagesReducer,
  modalReducer,
  translationsReducer,
  loadingReducer,
};
