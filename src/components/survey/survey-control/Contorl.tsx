import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import CancelButton from "../../buttons/CancelButton";
import ContButton from "../../buttons/ContButton";
import SubTitle from "../../parents/SubTitle";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import axios from "axios";

const Contorl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { dispatchSurvey, setCurrentPage } = useDispatches();
  const { fetchSurvey } = useRequests();

  const startSurvey = async () => {
    try {
      const res = await axios.post(`/survey/set-survey-status/${survey?._id}`, {
        isStarted: true,
      });
      dispatchSurvey(res.data.survey);
    } catch (error) {
      console.log(error);
    }
  };

  const finishSurvey = async () => {
    try {
      const res = await axios.post(`/survey/set-survey-status/${survey?._id}`, {
        isStarted: false,
      });
      dispatchSurvey(res.data.survey);
      fetchSurvey();
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SubCard
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"20px"}>
        <SubTitle title={t("common.surveyControl")} />
        <ContButton onClick={startSurvey} title={t("button.start")} />
        <CancelButton onClick={finishSurvey} title={t("button.finish")} />
      </Flex>
    </SubCard>
  );
};

export default Contorl;
