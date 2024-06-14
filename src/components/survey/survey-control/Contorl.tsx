import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import CancelButton from "../../buttons/CancelButton";
import ContButton from "../../buttons/ContButton";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import axios from "axios";

const Contorl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { dispatchSurvey } = useDispatches();

  const startSurvey = async () => {
    try {
      const res = await axios.post(`/survey/set-survey-status/${survey?._id}`, {
        isStarted: true,
      });
      dispatchSurvey(res.data.survey);
      await changeQuan();
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
    } catch (error) {
      console.log(error);
    }
  };

  const changeQuan = async () => {
    try {
      const res = await axios.post(`/survey/change-quantity/${survey?._id}`);
      dispatchSurvey(res.data.survey);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SubCard
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"20px"}>
        <SubHeader title={t("common.surveyControl")} />
        <ContButton onClick={startSurvey} title={t("common.start")} />
        <CancelButton onClick={finishSurvey} title={t("common.finish")} />
      </Flex>
    </SubCard>
  );
};

export default Contorl;
