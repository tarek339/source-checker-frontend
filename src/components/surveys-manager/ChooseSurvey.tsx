import { useState } from "react";
import { BackButton, FormButton, Input, InputErrorContainer } from "..";
import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";

const ChooseSurvey = () => {
  const { t } = useTranslations();
  const { handlePage } = useDispatches();

  const [surveyId, setSurveyId] = useState("");
  const [surveyPin, setSurveyPin] = useState("");
  const [IDErrorMessage, setIDErrorMessage] = useState<JSX.Element | null>(
    null
  );
  const [PINErrorMessage, setPINErrorMessage] = useState<JSX.Element | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !surveyId ? setIDErrorMessage(<InputErrorContainer />) : null;
    !surveyPin ? setPINErrorMessage(<InputErrorContainer />) : null;
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
          label={t("chooseSurvey.surveyID")}
          name={surveyId}
          htmlFor={"survey-id"}
          error={IDErrorMessage}
          inputErrorStyle={IDErrorMessage}
        />
        <Input
          label={t("chooseSurvey.surveyPIN")}
          name={surveyPin}
          htmlFor={"survey-pin"}
          error={PINErrorMessage}
          inputErrorStyle={PINErrorMessage}
        />
        <FormButton />
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid lightgrey",
          }}></div>
        <BackButton onClick={() => handlePage(0)} />
      </form>
    </div>
  );
};

export default ChooseSurvey;
