import {
  useBreakPoints,
  useDispatches,
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
        <ContButton onClick={startSurvey} title={t("common.start")} />
        <CancelButton onClick={finishSurvey} title={t("common.finish")} />
        <a
          href={`http://localhost:5173/survey-summary/${survey?._id}`}
          target="_blank">
          {t("common.summary")}
        </a>
      </Flex>
    </SubCard>
  );
};

export default Contorl;
