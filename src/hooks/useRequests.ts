import axios from "axios";
import useDispatches from "./useDispatches";
import { useParams } from "react-router-dom";
import { useState } from "react";

const useRequests = () => {
  const { dispatchSurvey, dispatchPages, dispatchStudent } = useDispatches();
  const { id, studentId } = useParams();
  const [students, setStudents] = useState([]);

  const fetchSurvey = async () => {
    try {
      const res = await axios.get(`/survey/get-profile/${id}`);
      dispatchSurvey(res.data.survey);
      dispatchPages(res.data.survey.pages);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`/student/fetch-students/${id}`);
      setStudents(res.data.students);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSingleStudent = async () => {
    try {
      const res = await axios.get(`/student/fetch-single-student/${studentId}`);
      dispatchStudent(res.data.student);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchSurvey,
    fetchStudents,
    fetchSingleStudent,
    students,
  };
};

export default useRequests;
