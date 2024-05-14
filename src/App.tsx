import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { Authentication, SurveysManager } from "./views";
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
      </Routes>
    </div>
  );
}

export default App;
