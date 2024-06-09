import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import {
  Authentication,
  ChooseAction,
  StudenAuth,
  SurveySummary,
  NewSurvey,
  SaveSurvey,
  ChooseSurvey,
  AddPages,
} from "./views";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components";
import { useSelectors, useTranslations } from "./hooks";

function App() {
  const { t } = useTranslations();
  const { mainPage } = useSelectors();
  return (
    <AnimatePresence mode="wait">
      {mainPage ? null : <Header title={t("common.sourceChecker")} />}
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route
          path="/surveys-manager/choose-action"
          element={<ChooseAction />}
        />
        <Route
          path="/surveys-manager/choose-survey"
          element={<ChooseSurvey />}
        />
        <Route path="/surveys-manager/new-survey" element={<NewSurvey />} />
        <Route
          path="/surveys-manager/save-survey/:id"
          element={<SaveSurvey />}
        />
        <Route path="/surveys-manager/add-pages/:id" element={<AddPages />} />
        <Route path="/survey-summary/:id" element={<SurveySummary />} />
        <Route path="/student-auth" element={<StudenAuth />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
