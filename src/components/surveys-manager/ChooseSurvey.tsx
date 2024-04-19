import { useState } from "react";
import {
  BackButton,
  DividerHorizontal,
  FormButton,
  Input,
  InputErrorContainer,
} from "..";
import { useTranslations, useDispatches } from "../../hooks";
import axios from "axios";

const ChooseSurvey = () => {
  const { t } = useTranslations();
  const { handlePage, dispatchSurvey } = useDispatches();

  const [surveyId, setSurveyId] = useState("");
  const [surveyPin, setSurveyPin] = useState("");
  const [IDErrorMessage, setIDErrorMessage] = useState<JSX.Element | null>(
    null
  );
  const [PINErrorMessage, setPINErrorMessage] = useState<JSX.Element | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      !surveyId ? setIDErrorMessage(<InputErrorContainer />) : null;
      !surveyPin ? setPINErrorMessage(<InputErrorContainer />) : null;
      if (IDErrorMessage || PINErrorMessage) return;

      const res = await axios.post("/survey/fetch", { surveyId, surveyPin });
      localStorage.setItem("surveyData", JSON.stringify(res.data.survey));
      const surveyDataString = localStorage.getItem("surveyData");
      const surveyData = JSON.parse(surveyDataString!);
      dispatchSurvey(surveyData);
      handlePage(+3);
    } catch (error) {
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
          error={IDErrorMessage}
          inputErrorStyle={IDErrorMessage}
          value={surveyId}
          onChange={(e) => setSurveyId(e.target.value)}
        />
        <Input
          label={t("common.surveyPIN")}
          name={surveyPin}
          htmlFor={"survey-pin"}
          error={PINErrorMessage}
          inputErrorStyle={PINErrorMessage}
          value={surveyPin}
          onChange={(e) => setSurveyPin(e.target.value)}
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
