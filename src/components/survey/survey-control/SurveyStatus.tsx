import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import Span from "../../fonts/Span";
import { IStudent } from "../../../types/interfaces/interfaces";
import { socket } from "../../../socket";

const SurveyStatus = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { fetchStudents, students } = useRequests();
  const [currentStudents, setCurrentStudents] = useState<IStudent[]>([]);
  const [participatedStudents, setParticipatedStudents] = useState<IStudent[]>(
    []
  );

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    socket.on("fetchStudents", (students) => {
      if (students) {
        fetchStudents();
      }
    });
  }, []);

  useEffect(() => {
    setCurrentStudents(
      students.filter((student: IStudent) => {
        return student.participated === false;
      })
    );
  }, [currentStudents]);

  useEffect(() => {
    setParticipatedStudents(
      students.filter((student: IStudent) => {
        return student.participated === true;
      })
    );
  }, [participatedStudents]);

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
      {survey?.isStarted ? t("common.active") : t("common.unActive")}
    </div>
  );

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"15px"}>
        <>
          <SubTitle title={t("common.surveyStatus")} />
          <Flex direction={"row"} gap={"5px"}>
            <Span title={`Status:`} fontWeight={600} />
            {status}
          </Flex>
          <Span
            title={`${t("common.studentQuantity")}: ${currentStudents.length}`}
            fontWeight={600}
          />
          <Span
            title={`${t("common.studentsParticipated")}: ${
              participatedStudents.length
            }`}
            fontWeight={600}
          />
        </>
      </Flex>
    </SubCard>
  );
};

export default SurveyStatus;
