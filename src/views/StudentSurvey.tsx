import { useEffect } from "react";
import { useRequests, useSelectors } from "../hooks";
import { NotStarted, SurveyContent, SurveyStart } from "../components";

const StudentSurvey = () => {
  const { survey } = useSelectors();
  const { fetchSurvey, fetchSingleStudent } = useRequests();

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    fetchSingleStudent();
  }, []);

  return (
    <SurveyContent>
      {!survey?.isStarted ? <NotStarted /> : <SurveyStart />}
    </SurveyContent>
  );
};

export default StudentSurvey;
