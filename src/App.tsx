import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { Authentication, SurveysManager } from "./views";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/surveys-manager" element={<SurveysManager />} />
      </Routes>
    </>
  );
}

export default App;
