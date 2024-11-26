import { useSelectors, useTranslations } from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import FramerMotion from "../../containers/FramerMotion";
import SubCard from "../../containers/SubCard";
import Span from "../../fonts/Span";

const NotStarted = () => {
  const { t } = useTranslations();
  const { student, survey } = useSelectors();

  const user = survey?.freeUserNames
    ? student?.freeUserName
    : `User ${student?.userNumber}`;

  const slicedUser = user ? user.slice(1) : undefined;

  return (
    <FramerMotion>
      <Flex direction={"column"} gap={"20px"} align="center" justify="center">
        <SubCard
          style={{ marginTop: "1em", marginLeft: "20px", marginRight: "20px" }}>
          <Flex direction={"column"} gap={"20px"}>
            <Flex direction={"column"} gap={"15px"}>
              <SubTitle
                title={`${t("common.hello")} ${
                  user?.charAt(0).toUpperCase() + slicedUser!
                }, ${t("studentSurvey.welcome")}`}
              />
              <Flex direction={"column"} gap={"5px"}>
                <Span title={t("surveyControl.introText.first")} />
                <Span title={t("surveyControl.introText.second")} />
                <Span title={t("surveyControl.introText.third")} />
                <Span title={t("surveyControl.introText.fourth")} />
              </Flex>
            </Flex>
            <Flex direction={"row"} justify="center">
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
