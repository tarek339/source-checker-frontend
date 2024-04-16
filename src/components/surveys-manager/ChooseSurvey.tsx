import { useState } from "react";
import {
  BackButton,
  DividerHorizontal,
  FormButton,
  Input,
  InputErrorContainer,
} from "..";
import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";
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
    e.preventDefault();
    !surveyId ? setIDErrorMessage(<InputErrorContainer />) : null;
    !surveyPin ? setPINErrorMessage(<InputErrorContainer />) : null;

    const res = await axios.post("/survey/fetch", { surveyId, surveyPin });
    localStorage.setItem("surveyData", JSON.stringify(res.data.survey));
    const surveyDataString = localStorage.getItem("surveyData");
    const surveyData = JSON.parse(surveyDataString!);
    dispatchSurvey(surveyData);
    handlePage(+3);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        margin: "0 auto",
        maxWidth: "300px",
      }}>
      <h3>{t("chooseSurvey.surveyData")}</h3>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
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
        <FormButton />
        <DividerHorizontal />
        <BackButton onClick={() => handlePage(0)} />
      </form>
    </div>
  );
};

export default ChooseSurvey;
