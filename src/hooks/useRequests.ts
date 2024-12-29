import axios from "axios";
import useDispatches from "./useDispatches";
import { useParams } from "react-router-dom";
import { useState } from "react";

const useRequests = () => {
  const {
    dispatchSurvey,
    dispatchPages,
    dispatchStudent,
    discardSurvey,
    discardStudent,
  } = useDispatches();
  const { id } = useParams();
  const [students, setStudents] = useState([]);

  const fetchSurvey = async () => {
    try {
      const res = await axios.get(`/survey/get-survey-profile`);
      dispatchSurvey(res.data.survey);
      dispatchPages(res.data.survey.pages);
    } catch (error) {
      discardSurvey();
      console.error((error as Error).message);
    }
  };

  const fetchSurveyByToken = async () => {
    try {
      const res = await axios.get(`/student/fetch-students-survey`);
      dispatchSurvey(res.data.survey);
      dispatchPages(res.data.survey.pages);
    } catch (error) {
      discardSurvey();
      console.error((error as Error).message);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`/student/fetch-students/${id}`);
      setStudents(res.data.students);
    } catch (error) {
      setStudents([]);
      console.error((error as Error).message);
    }
  };

  const fetchSingleStudent = async () => {
    try {
      const res = await axios.get(`/student/fetch-single-student`);
      dispatchStudent(res.data.student);
    } catch (error) {
      discardStudent();
      console.error((error as Error).message);
    }
  };

  return {
    fetchSurvey,
    fetchStudents,
    fetchSingleStudent,
    students,
    setStudents,
    fetchSurveyByToken,
  };
};

export default useRequests;
