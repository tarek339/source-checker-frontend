import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import SpanBold from "../../parents/SpanBold";
import SubTitle from "../../parents/SubTitle";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";

const SurveyStatus = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey, surveyPages } = useSelectors();
  const { fetchStudents, students } = useRequests();

  const [starsAmount, setStarsAmount] = useState(0);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    setInterval(() => {
      fetchStudents();
    }, 30000);
  }, []);

  const status = (
    <div
      style={{
        backgroundColor: survey?.isStarted ? "#2834c2" : "#ff0000",
        color: survey?.isStarted ? "#31e981" : "#fff",
        borderRadius: "4px",
        fontSize: "18px",
        fontWeight: "bold",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100px",
        transition: "background-color 0.3s, color 0.5s",
      }}>
      {survey?.isStarted ? t("surveyControl.start") : t("surveyControl.end")}
    </div>
  );

  useEffect(() => {
    surveyPages.map((page) => {
      return page.starsArray.map((star) => {
        return setStarsAmount(star.stars);
      });
    });
  }, [survey, starsAmount]);

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"15px"}>
        <>
          <SubTitle title={t("common.surveyStatus")} />
          <Flex direction={"row"} gap={"5px"}>
            <SpanBold title={`Stauts:`} />
            {status}
          </Flex>
          <SpanBold
            title={`${t("common.studentQuantity")}: ${students.length}`}
          />
          {!survey?.isStarted && starsAmount > 0 ? (
            <SpanBold
              title={
                <a
                  style={{ fontWeight: 600, textDecoration: "underline" }}
                  href={`http://localhost:5173/survey-summary/${survey?._id}`}
                  target="_blank">
                  {t("common.summary")}
                </a>
              }
            />
          ) : null}
        </>
      </Flex>
    </SubCard>
  );
};

export default SurveyStatus;
