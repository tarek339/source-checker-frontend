import { useSelectors, useTranslations } from "../../../hooks";
import SubTitle from "../../parents/SubTitle";
import Flex from "../../parents/containers/Flex";
import FramerMotion from "../../parents/containers/FramerMotion";
import SubCard from "../../parents/containers/SubCard";

const NotStarted = () => {
  const { t } = useTranslations();
  const { student, survey } = useSelectors();

  const user = survey?.freeUserNames
    ? student?.freeUserName
    : `User ${student?.userNumber}`;

  return (
    <FramerMotion>
      <Flex direction={"column"} gap={"20px"} align="center" justify="center">
        <SubCard
          style={{ marginTop: "1em", marginLeft: "20px", marginRight: "20px" }}>
          <Flex direction={"column"} gap={"20px"}>
            <Flex direction={"column"} gap={"15px"}>
              <SubTitle
                title={`${t("common.hello")} ${user?.toUpperCase()}, ${t(
                  "studentSurvey.welcome"
                )}`}
              />
              <Flex direction={"column"} gap={"5px"}>
                <span>{t("surveyControl.introText.first")}</span>
                <span>{t("surveyControl.introText.second")}</span>
                <span>{t("surveyControl.introText.third")}</span>
                <span>{t("surveyControl.introText.fourth")}</span>
              </Flex>
            </Flex>
            <Flex direction={"row"} gap={"0px"} justify="center">
              <SubTitle
                style={{ color: "#ff0000" }}
                title={t("studentSurvey.notStartedInfo")}
              />
            </Flex>
          </Flex>
        </SubCard>
      </Flex>
    </FramerMotion>
  );
};

export default NotStarted;
