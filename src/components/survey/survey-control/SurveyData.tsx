import moment from "moment";
import QrCode from "../../QRCode";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import { useBreakPoints, useSelectors, useTranslations } from "../../../hooks";
import SubHeader from "../../parents/SubHeader";

const SurveyData = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();

  return (
    <SubCard
      width={windowWidth < 768 ? "" : "40%"}
      style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <Flex direction={"column"} gap={"15px"}>
        <SubHeader title={t("common.surveyData")} />
        <Flex direction={"row"} gap={"10px"}>
          <Flex direction={"column"} gap={"0px"}>
            <QrCode value={survey?.link!} />
            <span style={{ fontWeight: 600 }}>ID: {survey?.surveyId}</span>
          </Flex>
          <Flex direction={"column"} gap={"20px"}>
            <span style={{ fontWeight: 600 }}>
              {`${t("studentAuth.validUntil")}:`}{" "}
              {moment(survey?.validUntil).format("DD.MM.YYYY")}
            </span>
            <span>
              <a style={{ fontWeight: 600 }} href={survey?.link}>
                {t("studentAuth.studentLink")}
              </a>
            </span>
          </Flex>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default SurveyData;
