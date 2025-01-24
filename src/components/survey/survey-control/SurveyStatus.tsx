import { useEffect, useState } from "react";
import {
  useBreakPoints,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import { StudentProps } from "../../../types/interfaces/interfaces";
import Grid from "../../mui/Grid";
import { Card, SubTitle, Text } from "../..";
import { Status } from "../../icons";
import { colors } from "../../../assets/theme/colors";

const SurveyStatus = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { fetchStudents, students } = useRequests();

  const [currentStudents, setCurrentStudents] = useState<StudentProps[]>([]);
  const [participatedStudents, setParticipatedStudents] = useState<
    StudentProps[]
  >([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    setInterval(() => {
      fetchStudents();
    }, 10000);
  }, []);

  useEffect(() => {
    const filteredStudents = students.filter((student: StudentProps) => {
      return student.participated === false;
    });
    setCurrentStudents(filteredStudents);
  }, [students]);

  useEffect(() => {
    const filteredStudents = students.filter((student: StudentProps) => {
      return student.participated === true;
    });
    setParticipatedStudents(filteredStudents);
  }, [students]);

  return (
    <Card width={windowWidth < 890 ? "100%" : `${100 / 3}%`}>
      <Grid column width={"100%"}>
        <SubTitle title={t("common.surveyStatus")} />
        <Grid spacing={1} width={"100%"}>
          <Text text={`Status:`} bold />
          <Status
            backgroundColor={
              survey?.isStarted ? colors.primary.main : colors.desctructed.main
            }
            color={
              survey?.isStarted
                ? colors.secondary.main
                : colors.typography.white
            }>
            <>{survey?.isStarted ? t("common.active") : "inaktiv"}</>
          </Status>
        </Grid>
        <Text
          text={`${t("common.studentQuantity")}: ${currentStudents.length}`}
          bold
        />
        <Text
          text={`${t("common.studentsParticipated")}: ${
            participatedStudents.length
          }`}
          bold
        />
      </Grid>
    </Card>
  );
};

export default SurveyStatus;
