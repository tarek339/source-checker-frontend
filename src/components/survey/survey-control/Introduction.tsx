import { useBreakPoints, useTranslations } from "../../../hooks";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";

const Introduction = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  return (
    <SubCard width={windowWidth < 768 ? "" : "60%"}>
      <Flex direction={"column"} gap={"15px"}>
        <SubHeader title={t("surveyControl.introduction")} />
        <Flex direction={"column"} gap={"5px"}>
          <span>{t("surveyControl.introText.first")}</span>
          <span>{t("surveyControl.introText.second")}</span>
          <span>{t("surveyControl.introText.third")}</span>
          <span>{t("surveyControl.introText.fourth")}</span>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default Introduction;
