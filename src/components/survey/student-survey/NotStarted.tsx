import { useSelectors, useTranslations } from "../../../hooks";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";

const NotStarted = () => {
  const { t } = useTranslations();
  const { student } = useSelectors();

  return (
    <Flex direction={"column"} gap={"20px"} align="center" justify="center">
      <SubCard
        style={{ marginTop: "1em", marginLeft: "20px", marginRight: "20px" }}>
        <Flex direction={"column"} gap={"20px"}>
          <Flex direction={"column"} gap={"15px"}>
            <SubHeader
              title={`${student?.freeUserName}, ${t(
                "surveyControl.introduction"
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
            <SubHeader
              style={{ color: "#ff0000" }}
              title={"Bitte warte bis der Lehrer die Umfrage gestartet hat."}
            />
          </Flex>
        </Flex>
      </SubCard>
    </Flex>
  );
};

export default NotStarted;
