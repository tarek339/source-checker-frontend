import { useBreakPoints, useTranslations } from "../../../hooks";
import SubHeader from "../../parents/SubHeader";
import SubCard from "../../parents/containers/SubCard";

const SurveyStatus = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <SubHeader title={t("common.surveyStatus")} />
      <span>{t("common.studentQuantity")}: 0</span>
    </SubCard>
  );
};

export default SurveyStatus;
