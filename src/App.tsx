import { Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";
import { Authentication, SurveysManager } from "./views";
import { useEffect } from "react";
import useDispatches from "./hooks/useDispatches";

function App() {
  const { dispatchSurvey } = useDispatches();

  useEffect(() => {
    const surveyDataString = localStorage.getItem("surveyData");
    const surveyData = JSON.parse(surveyDataString!);
    dispatchSurvey(surveyData);
  }, []);

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
