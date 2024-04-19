import { useState } from "react";
import {
  BackButton,
  DividerHorizontal,
  FormButton,
  Input,
  InputErrorContainer,
} from "..";
import { useTranslations, useLocaleStorage } from "../../hooks";
import axios from "axios";

const ChooseSurvey = () => {
  const { t } = useTranslations();
  const { setPage, fetchSurvey } = useLocaleStorage();

  const [surveyId, setSurveyId] = useState("");
  const [surveyPin, setSurveyPin] = useState("");
  const [IDErrorMessage, setIDErrorMessage] = useState<JSX.Element | null>(
    null
  );
  const [PINErrorMessage, setPINErrorMessage] = useState<JSX.Element | null>(
    null
  );
  const [fetchErrorMessage, setFetchErrorMessage] = useState<string | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      !surveyId ? setIDErrorMessage(<InputErrorContainer />) : null;
      !surveyPin ? setPINErrorMessage(<InputErrorContainer />) : null;
      if (!surveyId || !surveyPin) return;

      const res = await axios.post("/survey/fetch", { surveyId, surveyPin });
      fetchSurvey(res.data.survey);
      setPage(+3);
    } catch (error) {
      setFetchErrorMessage("Falsche ID oder falscher PIN");
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
            IDErrorMessage ? (
              IDErrorMessage
            ) : (
              <span className="input-error">{fetchErrorMessage}</span>
            )
          }
          inputErrorStyle={IDErrorMessage ? IDErrorMessage : fetchErrorMessage}
          value={surveyId}
          onChange={(e) => {
            setSurveyId(e.target.value);
            setIDErrorMessage(null);
            setFetchErrorMessage(null);
          }}
        />
        <Input
          label={t("common.surveyPIN")}
          name={surveyPin}
          htmlFor={"survey-pin"}
          error={
            PINErrorMessage ? (
              PINErrorMessage
            ) : (
              <span className="input-error">{fetchErrorMessage}</span>
            )
          }
          inputErrorStyle={
            PINErrorMessage ? PINErrorMessage : fetchErrorMessage
          }
          value={surveyPin}
          onChange={(e) => {
            setSurveyPin(e.target.value);
            setPINErrorMessage(null);
            setFetchErrorMessage(null);
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
