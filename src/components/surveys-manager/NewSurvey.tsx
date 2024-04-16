import { useState } from "react";
import {
  BackButton,
  DividerHorizontal,
  FormButton,
  InputErrorContainer,
  Select,
  ToggleButton,
  useCompArray,
} from "..";
import { useTranslations } from "../../hooks";
import useDispatches from "../../hooks/useDispatches";
import axios from "axios";

const NewSurvey = () => {
  const { t } = useTranslations();
  const { handlePage, dispatchSurvey } = useDispatches();
  const { surveysOptions, resultsOptions } = useCompArray();

  const [anonymousResults, setAnonymousResults] = useState(false);
  const [freeUserNames, setFreeUserNames] = useState(false);
  const [selectedSurveysOption, setselectedSurveysOption] = useState("");
  const [selectedResultsOption, setselectedResultsOption] = useState("");
  const [surveyOptError, setSurveyOptError] = useState<JSX.Element | null>(
    null
  );
  const [resultOptError, setResultOptError] = useState<JSX.Element | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !selectedSurveysOption ? setSurveyOptError(<InputErrorContainer />) : null;
    !selectedResultsOption ? setResultOptError(<InputErrorContainer />) : null;
    if (!selectedSurveysOption || !selectedResultsOption) return;

    const res = await axios.post("/survey/create", {
      anonymousResults,
      freeUserNames,
      selectedSurveysOption,
      selectedResultsOption,
    });
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
      <h3>{t("newSurvey.header")} </h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}>
        <Select
          label={t("newSurvey.surveyType")}
          error={surveyOptError}
          inputErrorStyle={surveyOptError}
          selectedItem={
            !selectedSurveysOption ? t("input.select") : selectedSurveysOption
          }
          option={surveysOptions
            .filter((opt) => opt.option !== selectedSurveysOption)
            .map((opt, i) => {
              return (
                <div
                  key={i}
                  className="options-style"
                  onClick={() => setselectedSurveysOption(opt.option)}>
                  <span className="opt-span">{opt.option}</span>
                </div>
              );
            })}
        />
        <Select
          label={t("newSurvey.resultsType")}
          error={resultOptError}
          inputErrorStyle={resultOptError}
          selectedItem={
            !selectedResultsOption ? t("input.select") : selectedResultsOption
          }
          option={resultsOptions
            .filter((opt) => opt.option !== selectedResultsOption)
            .map((opt, i) => {
              return (
                <div
                  key={i}
                  className="options-style"
                  onClick={() => setselectedResultsOption(opt.option)}>
                  <span className="opt-span">{opt.option}</span>
                </div>
              );
            })}
        />
        <ToggleButton
          label={t("newSurvey.anonymous")}
          isOn={anonymousResults}
          handleToggle={() => setAnonymousResults(!anonymousResults)}
          ifOnText={t("newSurvey.yes")}
          ifOffText={t("newSurvey.no")}
          htmlFor={"anonymous"}
        />
        <ToggleButton
          label={t("newSurvey.freeNames")}
          isOn={freeUserNames}
          handleToggle={() => setFreeUserNames(!freeUserNames)}
          ifOnText={t("newSurvey.yes")}
          ifOffText={t("newSurvey.no")}
          htmlFor={"user-names"}
        />

        <FormButton />
        <DividerHorizontal />
        <BackButton onClick={() => handlePage(0)} />
      </form>
    </div>
  );
};

export default NewSurvey;
