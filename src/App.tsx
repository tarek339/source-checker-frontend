import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import {
  Authentication,
  ChooseAction,
  StudenSurveyAuthentication,
  SurveyControl,
  NewSurvey,
  SaveSurvey,
  ChooseSurvey,
  AddPages,
  StudentSurvey,
  RegisterStudent,
  SurveySummary,
  SurveyRanking,
  PrivacyPolicy,
  LicenseNotes,
  Imprint,
} from "./views";
import { AnimatePresence } from "framer-motion";
import { AppContent, Flex, Footer, Header, ScrollToTop } from "./components";
import { useSelectors, useTranslations } from "./hooks";

function App() {
  const { t } = useTranslations();
  const { mainPage } = useSelectors();

  return (
    <AppContent>
      <>{mainPage ? null : <Header title={t("common.sourceChecker")} />}</>
      <ScrollToTop />
      <Flex direction={"column"} height="90vh" justify="space-between">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/licence-notes" element={<LicenseNotes />} />
            <Route path="/imprint" element={<Imprint />} />
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
            <Route
              path="/surveys-manager/add-pages/:id"
              element={<AddPages />}
            />
            <Route path="/survey-control/:id" element={<SurveyControl />} />
            <Route
              path="/student-survey-authentication"
              element={<StudenSurveyAuthentication />}
            />
            <Route path="/register-student/:id" element={<RegisterStudent />} />
            <Route
              path="/student-survey/:id/student-id/:studentId"
              element={<StudentSurvey />}
            />
            <Route path="/survey-summary/:id" element={<SurveySummary />} />
            <Route path="/survey-ranking/:id" element={<SurveyRanking />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Flex>
    </AppContent>
  );
}

export default App;
