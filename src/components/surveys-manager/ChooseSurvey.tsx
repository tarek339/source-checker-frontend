import { useState } from "react";
import { BackButton, DividerHorizontal, FormButton, Input } from "..";
import { useTranslations, useLocaleStorage, useInputErrors } from "../../hooks";
import axios from "axios";

const ChooseSurvey = () => {
  const { t } = useTranslations();
  const { setPage, fetchSurvey } = useLocaleStorage();
  const { emptyInput, incorrectType, fetchError } = useInputErrors();

  const [surveyId, setSurveyId] = useState("");
  const [surveyPin, setSurveyPin] = useState("");
  const [IDErrMsg, setIDErrMsg] = useState<JSX.Element | null>(null);
  const [PINErrMsg, setPINErrMsg] = useState<JSX.Element | null>(null);
  const [fetchErrMsg, setFetchErrMsg] = useState<JSX.Element | null>(null);
  const [idTypeErrMsg, setIdTypeErrMsg] = useState<JSX.Element | null>(null);
  const [pinTypeErrMsg, setPinTypeErrMsg] = useState<JSX.Element | null>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      !surveyId ? setIDErrMsg(emptyInput) : null;
      !surveyPin ? setPINErrMsg(emptyInput) : null;
      surveyId.match(/[A-Z|a-z|ü|é]/i) ? setIdTypeErrMsg(incorrectType) : null;
      surveyPin.match(/[A-Z|a-z|ü|é]/i)
        ? setPinTypeErrMsg(incorrectType)
        : null;
      if (!surveyId || !surveyPin) return;

      const res = await axios.post("/survey/fetch", { surveyId, surveyPin });
      fetchSurvey(res.data.survey);
      setPage(+3);
    } catch (error) {
      setFetchErrMsg(fetchError);
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "0 auto",
        maxWidth: "300px",
      }}>
      <h3>{t("chooseSurvey.surveyData")}</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        onSubmit={handleSubmit}>
        <Input
          label={t("common.surveyID")}
          name={surveyId}
          htmlFor={"survey-id"}
          error={
            IDErrMsg ? IDErrMsg : idTypeErrMsg ? idTypeErrMsg : fetchErrMsg
          }
          inputErrorStyle={
            IDErrMsg ? IDErrMsg : idTypeErrMsg ? idTypeErrMsg : fetchErrMsg
          }
          value={surveyId}
          onChange={(e) => {
            setSurveyId(e.target.value);
            setIDErrMsg(null);
            setFetchErrMsg(null);
            setIdTypeErrMsg(null);
          }}
        />
        <Input
          label={t("common.surveyPIN")}
          name={surveyPin}
          htmlFor={"survey-pin"}
          error={
            PINErrMsg ? PINErrMsg : pinTypeErrMsg ? pinTypeErrMsg : fetchErrMsg
          }
          inputErrorStyle={
            PINErrMsg ? PINErrMsg : pinTypeErrMsg ? pinTypeErrMsg : fetchErrMsg
          }
          value={surveyPin}
          onChange={(e) => {
            setSurveyPin(e.target.value);
            setPINErrMsg(null);
            setFetchErrMsg(null);
            setPinTypeErrMsg(null);
          }}
        />
        <DividerHorizontal />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}>
          <FormButton />
          <BackButton page={0} />
        </div>
      </form>
    </div>
  );
};

export default ChooseSurvey;
