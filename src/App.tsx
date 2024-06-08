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
import { AppContent, Header, SideMenu, SubTitel } from "./components";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "./hooks";

function App() {
  const { t } = useTranslations();
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>

      <div
        style={{
          position: "relative",
          paddingBottom: "20px",
        }}>
        <Header title={t("common.sourceChecker")} />
        <AppContent>
          <SideMenu />
          <SubTitel title={t("survey.createManagement")} />
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/surveys-manager/choose-action"
                element={<ChooseAction />}
              />
              <Route
                path="/surveys-manager/choose-survey"
                element={<ChooseSurvey />}
              />
              <Route
                path="/surveys-manager/new-survey"
                element={<NewSurvey />}
              />
              <Route
                path="/surveys-manager/save-survey/:id"
                element={<SaveSurvey />}
              />
              <Route
                path="/surveys-manager/add-pages/:id"
                element={<AddPages />}
              />
              <Route path="/student-auth" element={<StudenAuth />} />
              <Route path="/survey-summary/:id" element={<SurveySummary />} />
            </Routes>
          </AnimatePresence>
        </AppContent>
      </div>
    </>
  );
}

export default App;
