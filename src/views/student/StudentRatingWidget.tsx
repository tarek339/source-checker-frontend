import { useEffect } from "react";
import { useDispatches, useRequests, useSelectors } from "../../hooks";
import {
  StandbyStatus,
  ContentContainer,
  SurveyStart,
  Acknowledgement,
} from "../../components";
import { socket } from "../../socket";
import { useParams } from "react-router-dom";

const StudentRatingWidget = () => {
  const { isStarted, student } = useSelectors();
  const { fetchSurvey, fetchSingleStudent } = useRequests();
  const { setSurveyStatus, setCurrentPage } = useDispatches();
  const { id } = useParams();

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    fetchSingleStudent();
  }, []);

  useEffect(() => {
    socket.on("isStudentUpdated", ({ isStudentUpdated }) => {
      if (isStudentUpdated) {
        fetchSingleStudent();
      }
    });
  }, []);

  useEffect(() => {
    socket.on("surveyStatusChanged", (surveyInfo) => {
      if (id === surveyInfo.surveyId) {
        setSurveyStatus(surveyInfo.isStarted);
      }
    });
  }, [id]);

  useEffect(() => {
    socket.on("surveyPageNumber", (surveyInfo) => {
      if (id === surveyInfo.surveyId) {
        setCurrentPage(surveyInfo.pageNum);
      }
    });
  }, [id]);

  return (
    <ContentContainer>
      {!isStarted && student?.participated && student.stars > 0 ? (
        <Acknowledgement />
      ) : !isStarted && !student?.participated ? (
        <StandbyStatus />
      ) : (
        <SurveyStart />
      )}
    </ContentContainer>
  );
};

export default StudentRatingWidget;