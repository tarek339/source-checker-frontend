import { useEffect } from "react";
import { useDispatches, useRequests, useSelectors } from "../../hooks";
import {
  StandbyStatus,
  SurveyStart,
  Acknowledgement,
  Grid,
} from "../../components";
import { socket } from "../../socket";
import { useParams } from "react-router-dom";
import withStudentAuthPages from "../../hoc/withStudentAuthPages";

const StudentRatingWidget = () => {
  const { isStarted, student } = useSelectors();
  const { fetchSingleStudent, fetchSurveyByToken } = useRequests();
  const { setSurveyStatus, setCurrentPage } = useDispatches();
  const { id } = useParams();

  useEffect(() => {
    fetchSurveyByToken();
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
    <div>
      {!isStarted && student?.participated ? (
        <Acknowledgement />
      ) : !isStarted &&
        !student?.participated &&
        Number(student?.stars) === 0 ? (
        <Grid column gutters>
          <StandbyStatus />
        </Grid>
      ) : (
        <Grid column gutters>
          <SurveyStart />
        </Grid>
      )}
    </div>
  );
};

export default withStudentAuthPages(StudentRatingWidget);
