import { useEffect } from "react";
import { useDispatches, useRequests, useSelectors } from "../hooks";
import { NotStarted, SurveyContent, SurveyStart } from "../components";
import { socket } from "../socket";
import { useParams } from "react-router-dom";

const StudentSurvey = () => {
  const { isStarted } = useSelectors();
  const { fetchSurvey, fetchSingleStudent } = useRequests();
  const { setSurveyStatus } = useDispatches();
  const { id } = useParams();

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    fetchSingleStudent();
  }, []);

  useEffect(() => {
    socket.on("surveyStatusChanged", (surveyInfo) => {
      if (id === surveyInfo.surveyId) {
        setSurveyStatus(surveyInfo.isStarted);
      }
    });
  }, []);

  return (
    <SurveyContent>
      {!isStarted ? <NotStarted /> : <SurveyStart />}
    </SurveyContent>
  );
};

export default StudentSurvey;
