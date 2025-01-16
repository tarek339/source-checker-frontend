import { Route, Routes } from "react-router-dom";
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
  NotFound,
  Footer,
} from "./views";
import { AnimatePresence } from "framer-motion";
import { AppContent, Grid } from "./components";
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
      <Grid column maxedWidth height={"90vh"} between nowrap>
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
            <Route path="/survey-ranking/:id" element={<PagesRanking />} />
            <Route
              path="/survey-summary/:id/:pageID"
              element={<SurveySummary />}
            />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Grid>
    </AppContent>
  );
}

export default App;
