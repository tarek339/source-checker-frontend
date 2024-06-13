import moment from "moment";
import QrCode from "../../QRCode";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import { useBreakPoints, useSelectors, useTranslations } from "../../../hooks";
import SubHeader from "../../parents/SubHeader";
import SpanBold from "../../parents/SpanBold";

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
            <SpanBold title={`ID: ${survey?.surveyId}`} />
          </Flex>
          <Flex direction={"column"} gap={"20px"}>
            <SpanBold
              title={`${t("studentAuth.validUntil")}: ${moment(
                survey?.validUntil
              ).format("DD.MM.YYYY")}`}
            />
            <SpanBold
              title={
                <a
                  style={{ fontWeight: 600 }}
                  target="_blank"
                  href={survey?.link}>
                  {t("studentAuth.studentLink")}
                </a>
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default SurveyData;
