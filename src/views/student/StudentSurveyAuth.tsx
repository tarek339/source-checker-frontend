import { useState } from "react";
import {
  Card,
  Flex,
  FramerMotion,
  Input,
  SubTitle,
  ContentContainer,
  FormContainer,
  Button,
} from "../../components";
import {
  useBreakPoints,
  useDispatches,
  useInputErrors,
  useTranslations,
} from "../../hooks";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentSurveyAuth = () => {
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const [surveyId, setSurveyId] = useState("");
  const { dispatchSurvey } = useDispatches();
  const { emptyInput, incorrectType, fetchIDError } = useInputErrors();
  const navigate = useNavigate();

  const [IdErrMsg, setIdErrMsg] = useState<JSX.Element | null>(null);
  const [IdTypeErrMsg, setIdTypeErrMsg] = useState<JSX.Element | null>(null);
  const [fetchErrMsg, setFetchErrMsg] = useState<JSX.Element | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      !surveyId ? setIdErrMsg(emptyInput) : null;
      surveyId.match(/[A-Z|a-z|ü|é]/i) ? setIdTypeErrMsg(incorrectType) : null;
      if (!surveyId) return;

      const res = await axios.post("/student/student-join-survey", {
        surveyId,
      });
      dispatchSurvey(res.data.survey);
      if (res.data.survey) {
        navigate(`/register-student/${res.data.survey._id}`);
      }
    } catch (error) {
      setFetchErrMsg(fetchIDError);
    }
  };

  return (
    <ContentContainer maxWidth={900}>
      <Card>
        <FramerMotion>
          <SubTitle title={t("studentSurvey.joinSurvey")} />
          <FormContainer
            onSubmit={handleSubmit}
            margin="0 auto"
            maxWidth={400}
            paddingTop="2em"
            gap={"20px"}>
            <Input
              label={`${t("common.surveyID")}*`}
              name={"surveyID"}
              htmlFor={"surveyID"}
              placeHolder="z. Bsp. 1234..."
              error={
                IdErrMsg ? IdErrMsg : IdTypeErrMsg ? IdTypeErrMsg : fetchErrMsg
              }
              hasError={
                IdErrMsg ? IdErrMsg : IdTypeErrMsg ? IdTypeErrMsg : fetchErrMsg
              }
              value={surveyId}
              onChange={(e) => {
                setSurveyId(e.target.value);
                setIdErrMsg(null);
                setIdTypeErrMsg(null);
                setFetchErrMsg(null);
              }}
              onClear={() => {
                setSurveyId("");
                setIdErrMsg(null);
                setIdTypeErrMsg(null);
                setFetchErrMsg(null);
              }}
            />
            {windowWidth > 425 ? (
              <Flex direction={"row"} width="100%" justify="flex-end">
                <Button type="submit" title={t("button.register")} />
              </Flex>
            ) : (
              <Button type="submit" title={t("button.register")} />
            )}
          </FormContainer>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default StudentSurveyAuth;
