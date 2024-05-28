import { useEffect } from "react";
import { Flex, Header, SubCard, SubHeader, SurveyContent } from "../components";
import {
  useBreakPoints,
  useLocaleStorage,
  useSelectors,
  useTranslations,
} from "../hooks";
import QrCode from "../components/QRCode";
import moment from "moment";

const SurveySummary = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey } = useSelectors();
  const { getSurvey } = useLocaleStorage();

  useEffect(() => {
    getSurvey();
  }, []);

  return (
    <>
      <Header title={t("common.sourceChecker")} />
      <SurveyContent style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <SubHeader title={`${t("common.surveyID")}: ${survey?.surveyId}`} />
        <Flex
          direction={"column"}
          gap={"20px"}
          width="100%"
          style={{
            marginTop: "1em",
          }}>
          <Flex direction={windowWidth < 768 ? "column" : "row"} gap={"20px"}>
            <SubCard width={windowWidth < 768 ? "" : "60%"}>
              <h3>NDR (1/1)</h3>
            </SubCard>
            <SubCard
              width={windowWidth < 768 ? "" : "40%"}
              style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
              <div style={{ paddingTop: "6px" }}>
                <QrCode value={survey?.link!} />
              </div>
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
            </SubCard>
          </Flex>

          <Flex direction={windowWidth < 768 ? "column" : "row"} gap={"20px"}>
            <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
              <h3>Umfragestatus</h3>
            </SubCard>
            <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
              <h3>Bewertung</h3>
            </SubCard>
            <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
              <h3>Umfragesteuerung</h3>
            </SubCard>
          </Flex>
        </Flex>
      </SurveyContent>
    </>
  );
};

export default SurveySummary;
