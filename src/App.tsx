import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import {
  Authentication,
  SurveyEntryPoint,
  StudentSurveyAuth,
  SurveyControl,
  LogInSurvey,
  PagesOverview,
  StudentRatingWidget,
  StudentRegister,
  SurveySummary,
  PagesRanking,
  PrivacyPolicy,
  LicenseNotes,
  Imprint,
  SurveyProfile,
} from "./views";
import { AnimatePresence } from "framer-motion";
import { AppContent, Flex, Footer } from "./components";
import { useRequests } from "./hooks";
import { useEffect } from "react";

function App() {
  const { fetchSurvey, fetchSingleStudent } = useRequests();

  useEffect(() => {
    fetchSurvey();
    fetchSingleStudent();
  }, []);

  return (
    <AppContent>
      <Flex direction={"column"} height="90vh" justify="space-between">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Authentication />} />
            <Route
              path="/surveys-manager/authentication"
              element={<SurveyEntryPoint />}
            />
            <Route path="/surveys-manager/log-in" element={<LogInSurvey />} />
            <Route
              path="/surveys-manager/survey-profile/:id"
              element={<SurveyProfile />}
            />
            <Route
              path="/surveys-manager/pages-overview/:id"
              element={<PagesOverview />}
            />
            <Route path="/survey-control/:id" element={<SurveyControl />} />
            <Route path="/survey-summary/:id" element={<SurveySummary />} />
            <Route path="/survey-ranking/:id" element={<PagesRanking />} />
            <Route
              path="/student-survey-authentication"
              element={<StudentSurveyAuth />}
            />
            <Route path="/register-student/:id" element={<StudentRegister />} />
            <Route
              path="/student-survey/:id/student-id/:studentId"
              element={<StudentRatingWidget />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/licence-notes" element={<LicenseNotes />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Flex>
    </AppContent>
  );
}

export default App;
