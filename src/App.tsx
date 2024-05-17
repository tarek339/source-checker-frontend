import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { Authentication, StudenAuth, SurveysManager } from "./views";
import { SideMenu } from "./components";

function App() {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "20px",
      }}>
      <SideMenu />
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/surveys-manager" element={<SurveysManager />} />
        <Route path="/student-auth" element={<StudenAuth />} />
      </Routes>
    </div>
  );
}

export default App;
