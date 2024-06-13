import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import {
  Authentication,
  ChooseAction,
  StudenAuth,
  SurveyControl,
  NewSurvey,
  SaveSurvey,
  ChooseSurvey,
  AddPages,
  StudentSurvey,
} from "./views";
import { AnimatePresence } from "framer-motion";
import { AppContent, Header } from "./components";
import { useSelectors, useTranslations } from "./hooks";

function App() {
  const { t } = useTranslations();
  const { mainPage } = useSelectors();
  return (
    <AppContent>
      <>{mainPage ? null : <Header title={t("common.sourceChecker")} />}</>
      <AnimatePresence mode="wait">
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
          <Route path="/survey-summary/:id" element={<SurveyControl />} />
          <Route path="/student-auth" element={<StudenAuth />} />
          <Route path="/student-survey" element={<StudentSurvey />} />
        </Routes>
      </AnimatePresence>
    </AppContent>
  );
}

export default App;
