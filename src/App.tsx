import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import {
  Authentication,
  StudenAuth,
  SurveySummary,
  SurveysManager,
} from "./views";
import { SideMenu } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "20px",
      }}>
      <SideMenu />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/surveys-manager" element={<SurveysManager />} />
          <Route path="/student-auth" element={<StudenAuth />} />
          <Route path="/survey-summary" element={<SurveySummary />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
