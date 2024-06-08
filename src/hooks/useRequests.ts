import axios from "axios";
import useDispatches from "./useDispatches";
import { useParams } from "react-router-dom";

const useRequests = () => {
  const { dispatchSurvey, dispatchPages } = useDispatches();
  const { id } = useParams();

  const fetchSurvey = async () => {
    try {
      const res = await axios.get(`/survey/get-profile/${id}`);
      dispatchSurvey(res.data.survey);
      dispatchPages(res.data.survey.pages);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchSurvey,
  };
};

export default useRequests;
