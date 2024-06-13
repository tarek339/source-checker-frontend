import { useEffect } from "react";
import {
  useBreakPoints,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import SpanBold from "../../parents/SpanBold";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";

const SurveyStatus = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { fetchStudents, students } = useRequests();

  useEffect(() => {
    fetchStudents();
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
        width: "125px",
        transition: "background-color 0.3s, color 0.5s",
      }}>
      {survey?.isStarted ? "gestarted" : "beendet"}
    </div>
  );

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"15px"}>
        <>
          <SubHeader title={t("common.surveyStatus")} />
          <Flex direction={"row"} gap={"5px"}>
            <SpanBold title={`Stauts:`} />
            {status}
          </Flex>
          <SpanBold
            title={`${t("common.studentQuantity")}: ${students.length}`}
          />
        </>
      </Flex>
    </SubCard>
  );
};

export default SurveyStatus;
